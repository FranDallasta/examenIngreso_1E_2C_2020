/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar() {
  let marca;
  let precio;
  let peso;
  let tipo;
  let respuesta = "s";
  //A) Peso total de la compra
  let pesoTotal = 0;
  //B) Marca mas caro liquido
  let marcaCara; // marca guardada
  let precioCaro = 0;
  //C) Marca mas barato de los solidos
  let marcaBarataSol;
  let precioBaratoSol = 0;
  let flagSol = 0;


  do {
    marca = prompt("Ingrese la marca del producto");
    do {
      precio = parseInt(prompt("Ingrese el precio del prodcuto ($)"));
    } while (isNaN(precio));

    do {
      peso = parseInt(prompt("Ingrese el peso del producto (en kilogramos)"));
    } while (isNaN(peso));

    do {
      tipo = prompt("Ingrese el tipo del producto (liquido/solido)");
    } while (!(tipo == "solido" || tipo == "liquido"));

    respuesta = prompt("Quiere ingresar otro producto ?");

    pesoTotal = pesoTotal + peso;

    if (tipo == "liquido" && precioCaro < precio) {
      precioCaro = precio;
      marcaCara = marca;
    }

    if ((tipo == "solido" && precioBaratoSol > precio) || (tipo == "solido" && flagSol == 0)) {
      precioBaratoSol = precio;
      marcaBarataSol = marca;
      flagSol = 1;
    }

  } while (respuesta == "s");

  document.write(`El peso total de la compra es de ${pesoTotal}` + "<br>");
  document.write(`La marca mas cara de los liquido es ${marcaCara} con un precio de ${precioCaro} ` + "<br>");
  document.write(`La marca mas barata de los solidos es ${marcaBarataSol} con un precio de ${precioBaratoSol} ` + "<br>");

}

