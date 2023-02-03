const fechaHoy = new Date()
console.log(fechaHoy)

const fechaNacimiento = new Date (1993, 8, 13)
console.log(fechaNacimiento)

const compara = fechaHoy > fechaNacimiento
console.log(compara)

const diaNacimiento = fechaNacimiento.getDate()
console.log(diaNacimiento)

const mesNacimiento = fechaNacimiento.getMonth() + 1;
console.log(mesNacimiento);

const anyoNacimiento = fechaNacimiento.getFullYear()
console.log(anyoNacimiento)