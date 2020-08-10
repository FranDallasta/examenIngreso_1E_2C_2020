/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar() {
	let nombre;
	let peso;
	let sexo;
	let edad;
	let i;
	// A Cantidad de mujeres 
	let contadorMujeres = 0;
	// B Edad promedio total
	let acumuladorEdad = 0;
	let edadPromedio = 0;
	// C Hombre mas pesado 
	let hombrePesado;
	let pesoMayor = 0;


	for (i = 0; i < 5; i++) {
		nombre = prompt("Ingrese el nombre de la persona");
		do {
			peso = parseInt(prompt("Ingrese el peso de la persona"));
		} while (isNaN(peso))

		do {
			sexo = prompt("Ingrese el sexo de la persona");
		} while (!(sexo == "f" || sexo == "m"));

		do {
			edad = parseInt(prompt("Ingrese la edad de la persona"));
		} while (isNaN(edad));

		if (sexo == "f") {
			contadorMujeres++;
		}

		acumuladorEdad = acumuladorEdad + edad;

		if (sexo == "m" && pesoMayor < peso) {
			pesoMayor = peso;
			hombrePesado = nombre;
		}
	}
	edadPromedio = acumuladorEdad / i;
	
	document.write(`La cantidad de mujeres es de ${contadorMujeres}` + "<br>");
	document.write(`La edad promedio es de: ${edadPromedio}` + "<br>");
	document.write(`El hombre mas pesado es ${hombrePesado} con un peso de ${pesoMayor}` + "<br>");
}
