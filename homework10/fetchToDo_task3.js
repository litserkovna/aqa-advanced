async function fetchTodoById(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        const ToDoBody = await response.json();
        if (!response.ok) {
            throw new Error(`Error on fetching todo with ID ${id}`);
        }
        return ToDoBody;
    } catch (error) {
        throw new Error("Failed to fetch");
    }
}

export default fetchTodoById;