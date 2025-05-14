import {candidato} from "./candidato"

export class CandidatosDetail extends candidato {

    constructor (
        id: number,
    nombre: string,
    pais_origen: string,
    edad: number,
    vertiente_religiosa: string,
    foto: string
    ) {
        super(id, nombre, pais_origen, edad, vertiente_religiosa, foto)
    }
}