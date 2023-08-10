let person = new Object();

person["firstname"] = "Natalia";   // propriedade firstname funciona como referencia na memória para o objeto pessoa
person["firstname"] = "Mateus"; 

let firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty]);

