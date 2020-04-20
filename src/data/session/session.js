import { uriSession } from "./server";
import axios from "axios";


const METHOD_NOT_ALLOWED=405;
const BAD_REQUEST=400;
const CONFLICT=409;
const NOT_ACCEPTABLE=406;
const INTERNAL_ERROR = 500;
const errorManager=(statusCode)=>{
    switch (statusCode) {
        case METHOD_NOT_ALLOWED:
            return METHOD_NOT_ALLOWED + " No autorizado para hacer ejecutar esta petición";
            break;
        case BAD_REQUEST:
            return BAD_REQUEST + " Falta algun campo";
            break;
        case CONFLICT:
            return CONFLICT + " Se entró en conflico con la base de datos";
            break;
        case NOT_ACCEPTABLE:
            return NOT_ACCEPTABLE + " Se ha superadó el tiempo permitido para hacer esta peticion";
            break;
        case INTERNAL_ERROR:
            return INTERNAL_ERROR + " Error interno";
            break;
        default:
            return CONFLICT + " Se entró en conflico con la base de datos";
    }

}

const IsDateright=(date)=>{
    correct = true;
    year = date.substring(0,4);
    month = date.substring(5,7);
    day = date.substring(8);

    if(isNaN(date)|| isNaN(month) || isNaN(day)){
        correct = false;
    }
    if(date.charAt(4)!="-"  || date.charAt(7)!="-"){
        correct = false;
    }
    return correct;
}

const IsTimeright=(date)=>{
    correct = true;
    hour = date.substring(0,3);
    min = date.substring(4,6);
    sec = date.substring(7);

    if(isNaN(hour)|| isNaN(min) || isNaN(sec)){
        correct = false;
    }
    if(date.charAt(3)!=":"  || date.charAt(6)!=":"){
        correct = false;
    }
    return correct;
}


/*
CREATE
*/

export const registerSchedule = async (schedule, Type) => {
    try {

        if(Type===2){
            err = errorManager(METHOD_NOT_ALLOWED);
            throw new Error(err)
        }
        
        const response = await axios.post(uriSession + '/schedule/create',schedule);
        return response.status;
    } catch (error) {
        err = errorManager(error.response.status);
        throw new Error(err)
    }
}



/*
DELETE
*/

export const deleteSchedule = async (ChageState) => {
    try {
        if(Type===2){
            err = errorManager(METHOD_NOT_ALLOWED);
            throw new Error(err)
        }

        const response = await axios.delete(uriSession + '/schedule/delete',{ data: ChageState});
        return response.status;
    } catch (error) {
        err = errorManager(error.response.status);
        throw new Error(err)
    }
}

/*
PUT
*/
export const setAdate = async (ChageState) => {
    try {
        if(Type===1){
            err = errorManager(METHOD_NOT_ALLOWED);
            throw new Error(err)
        }

        const response = await axios.put(uriSession + '/set-a-date',ChageState);
        return response.status;
    } catch (error) {
        err = errorManager(error.response.status);
        throw new Error(err)
    }
}

export const calcelUser = async (ChageState) => {
    try {
        const response = await axios.put(uriSession + '/cancel/user',ChageState);
        return response.status;
    } catch (error) {
        err = errorManager(error.response.status)
        throw new Error(err)
    }
}

export const calcelCoach = async (ChageState) => {
    try {
        const response = await axios.put(uriSession + '/cancel/coach',ChageState);
        return response.status;
    } catch (error) {
        err = errorManager(error.response.status)
        throw new Error(err)
    }
}

/*
GET
*/
export const getAllbyIdCoach = async (idCoach) => {
    try {
        const response = await axios.get(uriSession + '/get-by-idCoach/' + idCoach);
        return response.data;
    } catch (error) {
        err = errorManager(error.response.status);
        throw new Error(err)
    }
}
export const getAllbyCoachCurrent = async (idCoach) => {
    try {
        const response = await axios.get(uriSession + '/get-by-idCoach/Current/' + idCoach);
        return response.data;
    } catch (error) {
        err = errorManager(error.response.status);
        throw new Error(err)
    }
}

export const getAllbyIdUser = async (idUser) => {
    try {
        const response = await axios.get(uriSession + '/get-by-idUser/' + idUser);
        return response.data;
    } catch (error) {
        err = errorManager(error.response.status);
        throw new Error(err)
    }
}
export const getAllbyUserCurrent = async (idUser) => {
    try {
        const response = await axios.get(uriSession + '/get-by-idUser/Current/' + idUser);
        return response.data;
    } catch (error) {
        err = errorManager(error.response.status);
        throw new Error(err)
    }
}
export const getbyIdSchedule = async (idUser) => {
    try {
        const response = await axios.get(uriSession + '/get-by-idSchedule/' + idUser);
        return response.data;
    } catch (error) {
        err = errorManager(error.response.status);
        throw new Error(err)
        
    }
}
