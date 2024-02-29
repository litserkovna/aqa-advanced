const car1 = {
  brand: 'Audi',
  model: 'A3',
  year: 2018
};
//console.log("First car:",car1);
const car2 = {
  brand: 'BMW',
  model: 'i5',
  owner: 'James McGill'
};
//console.log("Second car:",car2);
const car3 = {...car1, ...car2};
console.log('Third car:', car3);
