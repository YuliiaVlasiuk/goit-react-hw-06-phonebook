import { useSelector } from "react-redux";
import { getContacts, getFilter } from "redux/selectors";
import {ContactItem}  from "components/ContactItem/ContactItem";

// Імпортуємо об'єкт значень фільтра
//import { statusFilters } from "../../redux/constants";
// const getVisibleTasks = (tasks, statusFilter) => {
//   switch (statusFilter) {
//     case statusFilters.active:
//       return tasks.filter(task => !task.completed);
//     case statusFilters.completed:
//       return tasks.filter(task => task.completed);
//     default:
//       return tasks;
//   }
// };
export const ContactList = () => {
  // Отримуємо масив завдань із стану Redux
  // const contacts = useSelector(state => state.contacts);

  const contacts = useSelector(getContacts);
  const search= useSelector(getFilter)
  console.log(contacts);


  // const contactsFilter = () => {
  //   const filterNormalize = filterValue.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filterNormalize)
  //   );
  // };

  const filtredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(search.toLowerCase()))
  
  
console.log( filtredContacts);

  // Отримуємо значення фільтра із стану Redux
  //const statusFilter = useSelector(state => state.filters.status);
  // Обчислюємо масив завдань, які необхідно відображати в інтерфейсі
 // const visibleTasks = getVisibleTasks(tasks, statusFilter);
  return (
    <ul>
    { filtredContacts.map(contact => (
      <li key={contact.id} style={{ paddingBottom: '10px' }}>
       <ContactItem contact={contact} />
      </li>
    ))}
  </ul>
);
    
    
    
    
    
    // <ul>
    //   {visibleTasks.map(task => (
    //     <li key={task.id}>
    //       <Task task={task} />
    //     </li>
    //   ))}
    // </ul>
  // );
};