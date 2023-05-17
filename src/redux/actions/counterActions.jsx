import { types } from "../types/counterTypes";

export const counterSumar = () => ({
    type: types.SUMAR
})

export const counterRestar = () => ({
    type: types.RESTAR
})

export const counterReset = () => ({
    type: types.RESET
})

export const counterSumarNumero = (numero) => ({
    type: types.SUMAR_NUM,
    payload: numero
})

export const counterSetTemporal = (numero) => ({
    type: types.SET_TEMPORAL,
    payload: numero
})