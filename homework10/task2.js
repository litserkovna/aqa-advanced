import fetchTodo from './fetchToDo_task2.js';
import fetchUser from './fetchuser_task2.js';
Promise.all([fetchTodo(), fetchUser()])
    .then(results => {
        console.log("Results:");
        console.log('To do:', results[0]);
        console.log('User:', results[1]);
    })
    .catch(error => {
        console.error("Error happened:", error.message);
    });