$(()=>{
    $("#btn").click(()=>{
        console.log("Hola, estoy utilizando JQuery")
    })
})

const boton = document.querySelector("#btn")

boton.addEventListener("click", () =>{
    alert("click en el botón")
})