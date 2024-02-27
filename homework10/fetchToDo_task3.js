async function fetchTodoById(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        if (!response.ok) {
            throw new Error(`Error on fetching todo with ID ${id}`);
        }
        const todoBody = await response.json();
        return todoBody;
    } catch (error) {
        console.error("Failed to fetch", error);
        return error;
    }
}
export default fetchTodoById;