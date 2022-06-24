import React from 'react';
import { nanoid } from 'nanoid';
import style from './style.module.scss';
import { DatabaseElement } from '../../views/Main/service';

interface SelectProps {
  tags: string[]
  select: (category: string, action:React.SetStateAction<DatabaseElement>) => void;
  action: React.SetStateAction<DatabaseElement>
}

function FilterSelect({ tags, select, action }:SelectProps) {
  const handleFilter = (e): void => {
    select(e.target.value, action);
  };
  return (
    <select onChange={(e) => handleFilter(e)} className={style.main__filter_select} name="tags" id="">
      <option value="Show all">Show all</option>
      {tags.map((item) => (
        <option key={nanoid()} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}
export default FilterSelect;
