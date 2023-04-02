import { useSelector } from "react-redux";
import { getContacts } from "redux/selectors";

//import { Contact } from "components/Task/Task";
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
  console.log(contacts);
  // Отримуємо значення фільтра із стану Redux
  //const statusFilter = useSelector(state => state.filters.status);
  // Обчислюємо масив завдань, які необхідно відображати в інтерфейсі
 // const visibleTasks = getVisibleTasks(tasks, statusFilter);
  return (
    <ul>
    {contacts.map(contact => (
      <li key={contact.id} style={{ paddingBottom: '10px' }}>
        <span style={{ width: '220px' }}>
          {' '}
          {contact.name} : {contact.number}{' '}
        </span>
        <button> Delete </button>
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