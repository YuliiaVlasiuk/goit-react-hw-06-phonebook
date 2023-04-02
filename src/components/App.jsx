import { Layout } from 'components/Layout/Layout';
import { ContactForm } from 'components/ContactForm/ContactForm';
//import { ContactList } from 'components/TaskList/TaskList';

export const App = () => {
  return (
    <Layout>
      <div>
        <h1>Phonebook</h1>
        <ContactForm/>
        <h2>Contacts</h2>
        {/* <Filter value={filter} onChange={handleInputChange} /> */}
        {/* <ContactList/> */}
        
      </div>
      
    </Layout>
  );
};
