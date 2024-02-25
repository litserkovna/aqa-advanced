function fetchTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            if (!response.ok) {
                throw new Error("Error on fetching data");
            }
            return response.json();
        });
}
function fetchUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => {
            if (!response.ok) {
                throw new Error("Error on getting data about the user");
            }
            return response.json();
        });
}
Promise.all([fetchTodo(), fetchUser()])
    .then(results => {
        console.log("Results:");
        console.log('To do:', results[0]);
        console.log('User:', results[1]);
    })
    .catch(error => {
        console.error("Error happened:", error.message);
    });