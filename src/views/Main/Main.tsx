import style from './style.module.scss';
// @ts-ignore
import FilterButton from '../../components/FilterButton/FilterButton.tsx';
// @ts-ignore
import ProjectItem from '../../components/ProjectItem/ProjectItem.tsx';
import { useState } from 'react';
// @ts-ignore
import { getTags, getProjectItems, Database } from './service.ts';
// @ts-ignore
import Button from '../../components/Button/Button.tsx';



const Main = ({database}) => {

    const initRender:Database[] = getProjectItems(database, 9)
    const [db, setDb] = useState(initRender);
    const [selected, setSelected] = useState(null);
    const uniqueTags: string[] = getTags(db);

    

    const handleDeleteProject = () => {
        setDb(prevState =>  prevState.filter(item => item.id !== selected));
        setSelected(null);
    }


    const loadMore = (itemCount) => {
        const result = database
        .filter((elem) => !db.find(({ id }) => elem.id === id))
        .filter((_, index) => index < itemCount)
        setDb(prevState => [...prevState, ...result])
    }
    const tagFilter = (tag, hook) => tag === 'Show all' 
    ? hook(initRender) 
    : hook(prevState => prevState.filter(item => item.tag === tag))
     
    

   

    return (
        <main className={style.main}>
                   <div className={style.main__filter}>
            <FilterButton tag="Show all" click={tagFilter} hook={setDb} />
                {
                    uniqueTags.map((tag, idx) => <FilterButton key={idx} tag={tag} click={tagFilter} hook={setDb} />)
                }
        </div>
            <div className={style.main__projectItems}>

            {
                db.map(project => <ProjectItem 
                    key={project.id} 
                    project={project}
                    click={setSelected}
                    isSelected={selected}
                    pressKey={handleDeleteProject}
                    
                     />)
            }
           

            </div>

            <Button isDisabled={db.length === database.length} click={loadMore} loadCount={9} name="LOAD MORE" />

        </main>
    ) 
}
export default Main