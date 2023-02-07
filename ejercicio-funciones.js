function siempreTrue(){
    if(true){
        console.log(true)
    }else{
        return
    }
}

siempreTrue(false)

const promesa = new Promise ((resolve, reject) =>{
    if (true){
        resolve()
    }else{
        reject ()
    }
})

promesa
    .then (() => setTimeout((promesa) => {
        console.log("Hola soy una promesa")
    }, 3000))


function*generaPares(){
    let id = 0;
    while(true){
        id += 2
        if (id === 20){
            return id
        }
        yield id
    }
}

const pares = generaPares();

console.log(pares.next())
console.log(pares.next())
console.log(pares.next())
console.log(pares.next())
console.log(pares.next())
console.log(pares.next())
console.log(pares.next())
console.log(pares.next())
console.log(pares.next())
console.log(pares.next())


