import { FilterInput } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/contacts-filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const onFilterChange = e => {
    dispatch(setFilter(e.target.value));
    console.log(e.target.value);
  };
  return (
    <>
      <label>
        <FilterInput
          type="text"
          onChange={onFilterChange}
          placeholder="Name or phone to seach..."
        />
      </label>
    </>
  );
};

export default Filter;
