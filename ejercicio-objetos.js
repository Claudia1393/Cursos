const claudia = {
    nombre: "Claudia",
    apellido: "Bernabé",
    edad: 29,
    altura:1.65,
    isDeveloper: false
}

const miEdad = "edad";
console.log(claudia[miEdad])

const amiga1 = {
    nombre: "Juani",
    apellido: "Perez",
    edad: 30
}

const amiga2 = {
    nombre: "Galimedes",
    apellido: "Manso",
    edad: 55
}

const lista = [claudia, amiga1, amiga2]
lista.sort((a,b) => b.edad - a.edad )
console.log(lista)