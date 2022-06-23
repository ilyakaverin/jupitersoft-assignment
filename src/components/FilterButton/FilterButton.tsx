import style from "./style.module.scss";
import cn from "classnames";

const FilterButton = ({ tag, click, hook, classname }) => {
  const handleClick = (): void => {
    click && click(tag, hook);
  };

  return (
    <button
      onClick={handleClick}
      className={cn(style.main__filter_filterButton, style[classname])}
    >
      {tag}
    </button>
  );
};
export default FilterButton;
