import React from 'react';
import cn from 'classnames';
import style from './style.module.scss';
import { DatabaseElement } from '../../views/Main/service';

interface FilterButton {
  tag: string
  click: (tag:string, action:React.Dispatch<DatabaseElement[]>) => void
  classname: string;
  action: React.Dispatch<DatabaseElement[]>
}

function FilterButton({
  tag, click, action, classname,
}:FilterButton) {
  const handleClick = (): void => click && click(tag, action);

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(style.main__filter_filterButton, style[classname])}
    >
      {tag}
    </button>
  );
}
export default FilterButton;
