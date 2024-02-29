const users = [
  {name: 'James', email: 'james@gmail.com', age: 35, nationality: 'American'},
  {name: 'Julia', email: 'julia@gmail.com', age: 23, nationality: 'Ukrainian'},
  {name: 'Kim', email: 'kim@gmail.com', age: 35, nationality: 'Korean'},
  {name: 'Amit', email: 'amit@gmail.com', age: 30, nationality: 'Indian'}
];
//First
for (const person of users) {
  console.log(
    `${person.name} is ${person.age} years old. ${person.name} is ${person.nationality}. The email address is: ${person.email}`
  );
}
//Second
for (const {name, email, age, nationality} of users) {
  console.log(`Name: ${name}, Email: ${email}, Age: ${age}, ${nationality}`);
}
