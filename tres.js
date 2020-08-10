/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar() {
	let sexo;
	let lugar;
	let temporada;
	let personas;
	let respuesta = "s";
	// A) lugar más elegido
	let contadorBarilo = 0;
	let contadorCatas = 0;
	let contadorSalta = 0;
	// B) titular mas pasajeros
	let sexoMasPasajeros;
	let mayorCantPasajeros = 0;
	// C) Promedio de viajeros en inviero
	let acumuladorPersonas = 0;
	let promedioInvierno = 0;
	let viajesINV = 0;

	do {
		do {
			sexo = prompt("Ingrese el sexo del titular");
		} while (!(sexo == "f" || sexo == "m"));

		do {
			lugar = prompt("Ingrese el nombre del lugar de destino");
		} while (!(lugar == "bariloche" || lugar == "cataratas" || lugar == "salta"));

		do {
			temporada = prompt("Ingrese la temporada en que viajara");
		} while (!(temporada == "otoño" || temporada == "invierno" || temporada == "verano" || temporada == "primavera"));

		do {
			personas = parseInt(prompt("Ingrese la cantidad de personas"));
		} while (isNaN(personas));

		respuesta = prompt("Quiere ingresar otra estadía de vacaciones?");

		switch (lugar) {
			case "bariloche":
				contadorBarilo++;
				break;
			case "cataratas":
				contadorCatas++;
				break;
			case "salta":
				contadorSalta++;
				break;
		}

		if (mayorCantPasajeros < personas) {
			mayorCantPasajeros = personas;
			sexoMasPasajeros = sexo;
		}

		if (temporada == "invierno") {
			acumuladorPersonas = acumuladorPersonas + personas;
			viajesINV++;
		}

	} while (respuesta == "s");

	promedioInvierno = acumuladorPersonas / viajesINV;

	if (contadorBarilo > contadorCatas && contadorBarilo > contadorSalta) {
		document.write(`El destino mas visitado es BARILOCHE` + "<br>");
	}
	else if (contadorCatas > contadorBarilo && contadorCatas > contadorSalta) {
		document.write(`El destino mas visitado es CATARATAS` + "<br>");
	}
	else {
		document.write(`El destino mas visitado es SALTA ` + "<br>");
	}

	document.write(`El sexo del titular con mas pasajeros (${mayorCantPasajeros}) es ${sexoMasPasajeros}` + "<br>");
	document.write(`El promedio de personas que viajan en invierno es de ${promedioInvierno}` + "<br>");
}
