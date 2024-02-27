async function fetchUserById(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`); 
        if (!response.ok) {
            throw new Error(`Error on fetching user with ID ${id}`);
        }
        const todoUser = await response.json();
        return todoUser;
    } catch (error) {
        console.error("Failed to fetch user", error);
        return error;
    }
}
export default fetchUserById;