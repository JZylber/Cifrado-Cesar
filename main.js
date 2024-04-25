const letras = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "ñ",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function cifrar(palabra, clave) {
  let palabraCifrada = "";
  for (let i = 0; i < palabra.length; i++) {
    let letra = palabra[i];
    let posicion = letras.indexOf(letra);
    let nuevaPosicion = (posicion + clave) % letras.length;
    if (nuevaPosicion < 0) {
      nuevaPosicion = letras.length + nuevaPosicion;
    }
    palabraCifrada += letras[nuevaPosicion];
  }
  return palabraCifrada;
}

function descifrar(palabra, clave) {
  let palabraDescifrada = "";
  for (let i = 0; i < palabra.length; i++) {
    let letra = palabra[i];
    let posicion = letras.indexOf(letra);
    let nuevaPosicion = (posicion - clave) % letras.length;
    if (nuevaPosicion < 0) {
      nuevaPosicion = letras.length + nuevaPosicion;
    }
    palabraDescifrada += letras[nuevaPosicion];
  }
  return palabraDescifrada;
}
