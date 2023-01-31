let i = 1;
let r = 1
let factorial= 10;

while(i < factorial){
    if(i===9){
        break;
    }
    r *= i;
    i++;
}
console.log(r);