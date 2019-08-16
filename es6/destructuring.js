const user = {
  name: 'thiago',
  age: 30,
  address: {
    city: 'Denver',
    state: 'Colorado'
  }
};

const { name, age, address: { city} } = user;

console.log(name);
console.log(age);
console.log(city);


// using it on functions

function displayName({ name, age }) {
  console.log(name);
}

displayName(user);
displayName(age);