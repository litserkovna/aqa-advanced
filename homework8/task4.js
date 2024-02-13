const person = {
firstName: "Yelyzaveta",
lastName: "Tserkovna",
age: 24,
}
person.mail = "test@gmail.com";
console.log("Added email:",person.mail)
delete person.age
console.log("Updated details:", person)