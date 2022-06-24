import style from './style.module.scss';
import cn from 'classnames';

const FilterButton = ({tag, click, action, classname}) => {
  const handleClick = (): void => {
    click && click(tag, action);
  };

  return (
    <button onClick={handleClick} className={cn(style.main__filter_filterButton, style[classname])}>
      {tag}
    </button>
  );
};
export default FilterButton;
