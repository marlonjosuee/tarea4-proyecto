class alumno {
  constructor(nombre) {
    this.nombre = nombre;
    this.notas = [];
  }
}

function calcularPromedio(notas, cantidadNotas) {
  let suma = 0;
  for (let i = 0; i < cantidadNotas; i++) {
    suma = suma + notas[i];
  }
  let promedio = suma / cantidadNotas;
  return promedio;
}

let nombre = prompt("Ingresa el nombre de tu alumno");
let cantidadNotas = Number(prompt("ingresa la cantidad de notas a promediar"));

let alumno1 = new alumno(nombre);

for (let i = 0; i < cantidadNotas; i++) {
  alumno1.notas.push(Number(prompt("ingrese la nota " + (i + 1) + " :")));
}

let notaPromedio = calcularPromedio(alumno1.notas, cantidadNotas);

if (notaPromedio > 5) {
  alert("Alumno aprobado con nota de " + notaPromedio);
} else {
  alert("Alumno desaprobado con nota de " + notaPromedio);
}
