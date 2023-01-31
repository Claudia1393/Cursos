let nombre = "Claudia";
let apellido = "Bernabé";

let estudiante = nombre.concat(" ",apellido);
console.log(estudiante);

let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

let estudianteNumero = estudiante.length;
console.log(estudianteNumero);

let primeraLetra = nombre.charAt(0);
console.log(primeraLetra);

let primeraLetraAp = apellido.charAt(0);
console.log(primeraLetraAp);

let noEspacios = estudiante.trim();
console.log(noEspacios)

let contiene = estudiante.includes("Claudia");
console.log(contiene);