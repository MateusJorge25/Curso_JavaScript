let person = new Object();


person["firstname"] = "Natalia";   // propriedade firstname funciona como referencia na memória para o objeto pessoa
person["lastname"] = "Mateus"; 

let firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty]);

console.log(person.firstname);
console.log(person.lastname);

person.address = new object();
person.adreess.street = "111 Main St.";
person.address.city = "New York";
person.adress.state = "NY";

console.log(person.address.street);
console.log(person.address.city);
console.log(person["address"]["state"]);