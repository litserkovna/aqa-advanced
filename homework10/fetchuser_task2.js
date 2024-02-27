function fetchUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => {
            if (!response.ok) {
                throw new Error("Error on getting data about the user");
            }
            return response.json();
        })
        .catch(error => {
            console.error("Failed to fetch user data", error);
            throw error;
        });
}
export default fetchUser;