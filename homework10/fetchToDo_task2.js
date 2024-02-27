function fetchTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            if (!response.ok) {
                throw new Error("Error on fetching data");
            }
            return response.json();
        })
        .catch(error => {
            console.error("Failed to fetch todo", error);
            throw error;
        });
}
export default fetchTodo;