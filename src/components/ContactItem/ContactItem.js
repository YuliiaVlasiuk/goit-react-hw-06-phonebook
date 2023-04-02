import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
  //  console.log(contact.id);
    dispatch(deleteContact(contact.id));
  };

  return (
    <div>
      <span style={{ width: '220px' }}>
        {' '}
        {contact.name} : {contact.number}{' '}
      </span>
      <button onClick={handleDelete}> Delete </button>
    </div>
    
  );
};
