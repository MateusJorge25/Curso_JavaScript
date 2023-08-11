let Mateus = {
      primerioNome: 'Mateus', 
      segundoNome: 'Jorge',           // criação de um objeto: coleção de pares de nomes e valores
    address: {
      street: '111 Rua J',
      city: 'Jaboticabal',
      estado: 'SP'
    }
};

function saudacao (pessoa) {
  console.log ('ola'+ pessoa.primerioNome);

}

saudacao(Mateus);

saudacao ({
  primeiroNome: 'Natalia',
  segundoNome: 'Esteves'
});



/* criando um objeto onde dentro do nome tem pares de nomes e valores
e dentro do outro nome tem mais pares de nomes e valores*/


