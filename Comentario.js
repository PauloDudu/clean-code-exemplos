/*--------------------------------------------------------------------------------------------------------*/
// -> Fazer comentarios não exagerados e que tem explicar ao máximo o que está rolando no codigo

/*
    Leitura da lista de nomes:
    Ao inicio do programa é feita a criação de duas variáveis lista
    e em segunda são adicionados os seus respectivos valores  ao final 
    sao impressos os nomes e sobrenomes
*/

firstNames = [];
lastNames = [];

firstNames = ["Paulo Eduardo", "Jonas", "Marcela", "Gabriela"];
lastNames = ["Lucas Ferreira", "da Silva", "Pereira", "Araujo"];

for (var i = 0; i < firstNames.length; i++) {
  console.log(`Nome: ${firstNames[i]} Sobrenome: ${lastNames[i]}`);
}

/*--------------------------------------------------------------------------------------------------------*/
// Mal exemplo

// Aqui eu importo a biblioteca de conexão com o banco de dados
const sequelize = require("../core/Sequelize");
// Aqui eu importo a biblioteca de conexão com o banco de dados
const Sequelize = require("Sequelize");

// Aqui eu inicio um novo model com o nome user
const User = sequelize.define("user", {
  // aqui eu defino o primeiro atributo firstName que vai guardar o primeiro nome do usuário
  firstName: {
    // ele será do tipo string para armazenar um texto
    type: Sequelize.STRING,
  },
  // aqui eu defino o segundo atributo lastName que vai guardar o sobrenome nome do usuário
  lastName: {
    // ele será do tipo string para armazenar um texto
    type: Sequelize.STRING,
  },
  // aqui eu defino o terceiro atributo email que vai guardar o email do usuário
  email: {
    // ele será do tipo string para armazenar um texto
    type: Sequelize.STRING,
  },
  // aqui eu defino o quarto atributo password que vai guardar a senha do usuário
  password: {
    // ele será do tipo string para armazenar um texto
    type: Sequelize.STRING,
  },
});
// aqui eu exporto o model para utilizar em outros arquivos!
module.exports = User;
