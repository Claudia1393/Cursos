//Ejercicio lista de la compra
let listaCompra = ["Pimientos","Cebolla", "Arroz", "Carne", "Lentejas"]

//Se añade aceite de girasol
listaCompra.push("Aceite de Girasol");
console.log(listaCompra)

//Se elimina aceite de girasol
listaCompra.pop();
console.log(listaCompra);

//Ejercicio peliculas
let pelicula1 = {
    titulo: "El grinch",
    director: "Ron Howard",
    fecha: 2000
}

let pelicula2 = {
    titulo: "La mascara",
    director: "Chuck Russell",
    fecha: 1993
}

let pelicula3 = {
    titulo: "Klaus",
    director: "Sergio Pablos",
    fecha: 2019
}
//lista de peliculas originales
let peliculasFavoritas = [pelicula1, pelicula2, pelicula3]

//peliculas posteriores al 2010
const pelicula2010 = peliculasFavoritas.filter(peli => peli.fecha > 2010)
console.log(pelicula2010);

//lista con directores
const directores = peliculasFavoritas.map(valor => valor.director)
console.log(directores);

//lista de titulos
const titulos = peliculasFavoritas.map(valor => valor.titulo)
console.log(titulos);

//lista de directores y titulos concatenada
const listaConcatenada = directores.concat(titulos)
console.log(listaConcatenada);

//lista concatenada con propagación
const listaPropagacion = [...directores, ...titulos]
console.log(listaPropagacion);