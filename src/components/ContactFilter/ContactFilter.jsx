import { useSelector, useDispatch } from 'react-redux';
import { setFilterContacts } from 'redux/filterSlice';
import { Label, Input } from './ContactFilter.module';
import { selectFilteredContacts } from 'redux/selectors';


export const ContactFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilteredContacts);

  const label = 'Find contacts by name';

  const handleFilterChange = e => {
    const searchValue = e.target.value;

    dispatch(setFilterContacts(searchValue));
  };


  return (
    <Label>
     {label.toUpperCase()}
      <Input
        type="text"
        name="filter"
        placeholder="Enter contact name..."
        value={filter}
        onChange={handleFilterChange}
      />
    </Label>
  );
};

