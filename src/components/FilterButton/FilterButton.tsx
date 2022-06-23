import style from './style.module.scss';

const FilterButton = ({tag, click, hook}) => {

    const handleClick = () => {
        click && click(tag, hook)
    }

    return (
        <button onClick={handleClick} className={style.main__filter_filterButton}>{tag}</button>
    )
}
export default FilterButton