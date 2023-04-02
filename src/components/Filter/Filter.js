 //import { Button } from "components/Button/Button";
// import css from "./StatusFilter.module.css";

// export const StatusFilter = () => {
//   return (
//     <div className={css.wrapper}>
//       <Button>All</Button>
//       <Button>Active</Button>
//       <Button>Completed</Button>
//     </div>
//   );
// };
import { useSelector } from "react-redux";
import { getFilter} from "redux/selectors";
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contactsSlice';


export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const changeFieldFilter = event => dispatch(changeFilter(event.currentTarget.value));

 console.log(filter);

  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" value={filter} onChange={changeFieldFilter}></input>
    </div>
  );
};

// // Імпортуємо хук
// import { useSelector } from "react-redux";
// // Імпортуємо об'єкт значень фільтра
// import { statusFilters } from "../../redux/constants";
// export const StatusFilter = () => {
//   // Отримуємо значення фільтра із стану Redux
//   const filter = useSelector(state => state.filters.status);
//   return (
//     <div>
//       <Button selected={filter === statusFilters.all}>All</Button>
//       <Button selected={filter === statusFilters.active}>Active</Button>
//       <Button selected={filter === statusFilters.completed}>Completed</Button>
//     </div>
//   );
// };

// export const StatusFilter = () => {
//   // Отримуємо посилання на функцію відправки екшенів
//   const dispatch = useDispatch();
//   const filter = useSelector(state => state.statusFilter);
//   // Викликаємо генератор екшену та передаємо значення фільтра
//   // Відправляємо результат - екшен зміни фільтра
//   const handleFilterChange = filter => dispatch(setStatusFilter(filter));
//   return (
//     <div>
//       <Button
//         selected={filter === statusFilters.all}
//         onClick={() => handleFilterChange(statusFilters.all)}
//       >
//         All
//       </Button>
//       <Button
//         selected={filter === statusFilters.active}
//         onClick={() => handleFilterChange(statusFilters.active)}
//       >
//         Active
//       </Button>
//       <Button
//         selected={filter === statusFilters.completed}
//         onClick={() => handleFilterChange(statusFilters.completed)}
//       >
//         Completed
//       </Button>
//     </div>
//   );
// };