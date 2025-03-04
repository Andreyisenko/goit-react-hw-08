import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { useId } from 'react';
import { selectNameFilter } from '../../redux/filters/selectors';
import { changeFilter } from '../../redux/filters/slice';
// import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
const SearchBox = () => {
  const value = useSelector(selectNameFilter);
  const labId = useId();
  const dispatch = useDispatch();
  return (
    <div className={css.wrap}>
      <label htmlFor={labId}>Find contacts by name</label>
      <input
        type="text"
        value={value}
        onChange={e => dispatch(changeFilter(e.target.value))}
        id={labId}
        className={css.inp}
        name="search"
        placeholder="Search..."
      ></input>
    </div>
  );
};

export default SearchBox;
