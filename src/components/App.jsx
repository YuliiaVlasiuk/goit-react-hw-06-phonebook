import { Layout } from 'components/Layout/Layout';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { Filter } from './Filter/Filter';

export const App = () => {
  const contacts = useSelector(getContacts);
  return (
    <Layout>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {contacts.length > 0 ? <ContactList /> : <p> Phonebook is empty</p>}
      </div>
    </Layout>
  );
};
