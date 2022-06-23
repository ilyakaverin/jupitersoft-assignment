import style from "./style.module.scss";
// @ts-ignore
import FilterButton from "../../components/FilterButton/FilterButton.tsx";
// @ts-ignore
import ProjectItem from "../../components/ProjectItem/ProjectItem.tsx";
import { useState, SetStateAction } from "react";
// @ts-ignore
import { getTags, getProjectItems, Database } from "./service.ts";
// @ts-ignore
import LoadButton from "../../components/LoadButton/LoadButton.tsx";
// @ts-ignore
import FilterSelect from "../../components/FilterSelect/FilterSelect.tsx";
import { nanoid } from "nanoid";

const Main = ({ db }) => {
  const initRender: Database[] = getProjectItems(db, 9);

  const [database, setDatabase] = useState<Database[]>(db);
  const [initItems, setInitItems] = useState<Database[]>(initRender);
  const [selected, setSelected] = useState<number | null>(null);
  const uniqueTags: string[] = getTags(database);

  const handleDeleteProject = (): void => {
    setDatabase((prevState) =>
      prevState.filter((item) => item.id !== selected)
    );
    setInitItems((prevState) =>
      prevState.filter((item) => item.id !== selected)
    );
    setSelected(null);
  };

  const loadMore = (itemCount: number): void => {
    const result: Database[] = database
      .filter((elem) => !initItems.find(({ id }) => elem.id === id))
      .filter((_, index) => index < itemCount);
    setInitItems((prevState) => [...prevState, ...result]);
  };
  const tagFilter = (tag: string, hook: SetStateAction<Database>): void => {
    if (tag === "Show all") {
      hook(database);
    } else {
      hook(() => database.filter((item) => item.tag === tag));
    }
  };

  return (
    <main className={style.main}>
      <FilterSelect tags={uniqueTags} select={tagFilter} hook={setInitItems} />
      <div className={style.main__filter}>
        <FilterButton tag="Show all" click={tagFilter} hook={setInitItems} />
        {uniqueTags.map((tag) => (
          <FilterButton
            key={nanoid()}
            tag={tag}
            click={tagFilter}
            hook={setInitItems}
          />
        ))}
      </div>
      <div className={style.main__projectItems}>
        {initItems.map((project) => (
          <ProjectItem
            key={project.id}
            project={project}
            click={setSelected}
            isSelected={selected}
            pressKey={handleDeleteProject}
            filterClick={tagFilter}
            hook={setInitItems}
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
