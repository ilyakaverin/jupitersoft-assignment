import style from './style.module.scss';
import {nanoid} from 'nanoid';

const FilterSelect = ({tags, select, action}) => {
  const handleFilter = (e): void => {
    select(e.target.value, action);
  };
  return (
    <select onChange={e => handleFilter(e)} className={style.main__filter_select} name="tags" id="">
      <option value="Show all">Show all</option>
      {tags.map(item => (
        <option key={nanoid()} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};
export default FilterSelect;
