import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import PropTypes from 'prop-types';

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

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id:PropTypes.string,
    name:PropTypes.string,
    number:PropTypes.string}).isRequired,
  
};

  