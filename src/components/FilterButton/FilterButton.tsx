import React from 'react';
import cn from 'classnames';
import style from './style.module.scss';
import { DatabaseElement } from '../../views/Main/service';

interface FilterButton {
  tag: string
  click: (number:number) => void
  select: (category: string, action:React.SetStateAction<DatabaseElement[]>) => void;
  classname: string
}

function FilterButton({
  tag, click, action, classname,
}) {
  const handleClick = (): void => {
    click && click(tag, action);
  };

  return (
    <button onClick={handleClick} className={cn(style.main__filter_filterButton, style[classname])}>
      {tag}
    </button>
  );
}
export default FilterButton;
