// @ts-nocheck
import style from './style.module.scss';
import {useState, SetStateAction} from 'react';
import {nanoid} from 'nanoid';
import {getTags, getProjectItems, DatabaseElement} from './service.ts';
import FilterButton from '../../components/FilterButton/FilterButton.tsx';
import ProjectItem from '../../components/ProjectItem/ProjectItem.tsx';
import LoadButton from '../../components/LoadButton/LoadButton.tsx';
import FilterSelect from '../../components/FilterSelect/FilterSelect.tsx';

const Main = ({db}) => {
  const initRender: DatabaseElement[] = getProjectItems(db, 9);

  const [database, setDatabase] = useState<DatabaseElement[]>(db);
  const [initItems, setInitItems] = useState<DatabaseElement[]>(initRender);
  const [selected, setSelected] = useState<number | null>(null);
  const uniqueTags: string[] = getTags(database);

  const handleDeleteProject = (): void => {
    setDatabase(prevState => prevState.filter(item => item.id !== selected));
    setInitItems(prevState => prevState.filter(item => item.id !== selected));
    setSelected(null);
  };

  const loadMore = (itemCount: number): void => {
    const result: DatabaseElement[] = database
      .filter(elem => !initItems.find(({id}) => elem.id === id))
      .filter((_, index) => index < itemCount);
    setInitItems(prevState => [...prevState, ...result]);
  };
  const tagFilter = (tag: string, action: SetStateAction<DatabaseElement>): void => {
    if (tag === 'Show all') {
      action(database);
    } else {
      action(() => database.filter(item => item.tag === tag));
    }
  };

  return (
    <main className={style.main}>
      <FilterSelect tags={uniqueTags} select={tagFilter} action={setInitItems} />
      <div className={style.main__filter}>
        <FilterButton tag="Show all" click={tagFilter} action={setInitItems} />
        {uniqueTags.map(tag => (
          <FilterButton key={nanoid()} tag={tag} click={tagFilter} action={setInitItems} />
        ))}
      </div>
      <div className={style.main__projectItems}>
        {initItems.map(project => (
          <ProjectItem
            key={project.id}
            project={project}
            click={setSelected}
            isSelected={selected}
            pressKey={handleDeleteProject}
            filterClick={tagFilter}
            action={setInitItems}
          />
        ))}
      </div>

      <LoadButton
        isDisabled={initItems.length === database.length}
        click={loadMore}
        loadCount={9}
        name="LOAD MORE"
      />
    </main>
  );
};
export default Main;
