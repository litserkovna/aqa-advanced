import fetchTodoById from './fetchToDo_task3.js';
import fetchUserById from './fetchuser_task3.js';
Promise.all([fetchTodoById(1), fetchUserById(1)])
  .then((values) => {
    console.log('Promise all results:', values);
  })
  .catch((error) => {
    console.error('Error happened:', error.message);
  });
Promise.race([fetchTodoById(1), fetchUserById(1)])
  .then((result) => {
    console.log('Promise race results:', result);
  })
  .catch((error) => {
    console.error('Error happened:', error.message);
  });
