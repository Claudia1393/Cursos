import chalk from 'chalk';
import {suma, multiplica } from './formulas/controller.js'

const sum = suma(5,4);
console.log(sum)

const multi = multiplica(6,9)
console.log(multi)

console.log(chalk.green("Hola soy la libreria chalk en verde"))

console.log(chalk.green(multi))


