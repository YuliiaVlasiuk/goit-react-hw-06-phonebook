import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { useDispatch } from 'react-redux';
import { checkFilter } from '../../redux/contactsSlice';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const changeFieldFilter = event =>
    dispatch(checkFilter(event.currentTarget.value));

 // console.log(filter);

  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" value={filter} onChange={changeFieldFilter}></input>
    </div>
  );
};
