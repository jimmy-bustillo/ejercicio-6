// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
const listaCompras = ["Manzanas", "Leche", "Huevos", "Cereal", "Café"];
console.log(listaCompras);

// - Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompras.push("Aceite de Girasol");
console.log(listaCompras);

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompras.pop();
console.log(listaCompras);

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculasFavoritas = [
  { titulo: "Batman Dark Knight", director: "Cristopher Nolan", fecha: 2007 },
  { titulo: "Kimi No Nawa", director: "Makoto Shinkai", fecha: 2015 },
  { titulo: "The End of Evangelion", director: "Hideaki Anno", fecha: 1998 },
];

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const peliculasPosteriores = peliculasFavoritas.filter(
  (obj) => obj.fecha > 2010
);
console.log(peliculasPosteriores);

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const peliculasDirectores = peliculasFavoritas.map(
  (director, indice) => `${indice + 1} - ${director.director}`
);
console.log(peliculasDirectores);

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const peliculasTitulos = peliculasFavoritas.map(
  (titulo, indice) => `${indice + 1} - ${titulo.titulo}`
);
console.log(peliculasTitulos);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const peliculasConcatenadas = peliculasDirectores.concat(peliculasTitulos);
console.log(peliculasConcatenadas);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const peliculasPropagacion = [...peliculasDirectores, ...peliculasTitulos];
console.log(peliculasPropagacion);
