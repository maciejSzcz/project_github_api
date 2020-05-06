const person = {
    firstName: 'Jan',
    lastName: "Kowalski",
    city: 'Gdańsk'
};

const newPerson = {...person, firstName: "Marek"}

console.log(newPerson)