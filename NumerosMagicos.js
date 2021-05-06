// Evite números mágicos

var Pack = {
  id: 10,
  nome: "Pack",
};

var Bimer = {
    id: 8,
    nome: "Bimer",
  };

const IdDepartamentoSupervisores = 10;

function compararDepartamentos(departamento) {
  if (departamento.id == IdDepartamentoSupervisores) {
    console.log("Esse departamento é de supervisores!");
  } else {
    console.log("Esse departamento não é de supervisores!");
  }
}

/*----------------------------------------------------------------------------------------------------------*/

function compararDepartamentos2(departamento) {
  if (departamento.id == 10) {
    console.log("Esse departamento é de supervisores!");
  } else {
    console.log("Esse departamento não é de supervisores!");
  }
}

compararDepartamentos(Pack);
compararDepartamentos2(Pack);
compararDepartamentos(Bimer);
compararDepartamentos2(Bimer);
