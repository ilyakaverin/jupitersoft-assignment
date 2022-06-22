import style from './style.module.scss';
// @ts-ignore
import Filter from '../../components/Filter/Filter.tsx';


const Main = ({database}) => {
    const tags = database.map(item => item.tag );
    const set = Array.from(new Set(tags))
    return (
        <main className={style.main}>
            <Filter tags={set} />
        </main>
    )
}
export default Main