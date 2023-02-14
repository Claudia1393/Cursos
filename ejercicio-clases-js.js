
class Estudiante {

    constructor(nombre){
        this._nombre = nombre
        this._asignaturas = []
    }

    agregarAsignatura(asignatura){
        this._asignaturas.push(asignatura)
    }

}

const nuevoEstudiante = new Estudiante("Claudia")

nuevoEstudiante.agregarAsignatura("JavaScript")
nuevoEstudiante.agregarAsignatura("HTML")
nuevoEstudiante.agregarAsignatura("CSS")


console.log(nuevoEstudiante)
