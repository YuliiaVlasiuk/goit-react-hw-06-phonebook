import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const search = useSelector(getFilter);
 // console.log(contacts);

  const filtredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );
  //console.log(filtredContacts);
  return (
    <ul>
      {filtredContacts.map(contact => (
        <li key={contact.id} style={{ paddingBottom: '10px' }}>
          <ContactItem contact={contact} />
        </li>
      ))}
    </ul>
  );
};
