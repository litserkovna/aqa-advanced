async function fetchUserById(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const ToDoUser = await response.json();
    if (!response.ok) {
      throw new Error(`Error on fetching user with ID ${id}`);
    }
    return ToDoUser;
  } catch (error) {
    throw new Error('Failed to fetch');
  }
}
