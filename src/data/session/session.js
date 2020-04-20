import { uriSession } from "./server";
import axios from "axios";


const FORBIDDEN=403;
const BAD_REQUEST=400;
const CONFLICT=409;
const INTERNAL_ERROR = 500;
const errorManager=(statusCode)=>{
    switch (statusCode) {
        case FORBIDDEN:
            return FORBIDDEN + " No autorizado para hacer ejecutar esta petición";
            break;
        case BAD_REQUEST:
            return BAD_REQUEST + " Falta algun campo o los campos no son validos";
            break;
        case CONFLICT:
            return CONFLICT + " Se entró en conflico con la base de datos";
            break;
        case INTERNAL_ERROR:
            return INTERNAL_ERROR + " Error interno";
            break;
        default:
            return CONFLICT + " Error no identificado";
    }

}

const IsDateright=(date)=>{
    let correct = /^(20[0-9][0-9])-(0[0-9]|1[0-2])-([0-2][0-9]|3[0-1])?$/.test(date); 
    if(correct){
        const month = date.substring(5,7)
        if(/^(04|06|09|11)?$/.test(month)){
            correct = /^(20[0-9][0-9])-(0[0-9]|1[0-2])-([0-2][0-9]|30)?$/.test(date); 
        }
        if (month==="02"){
            correct = /^(20[0-9][0-9])-(0[0-9]|1[0-2])-([0-2][0-8])?$/.test(date); 
        }
    }
    return correct;
}


const IsTimeright=(time)=>{
    const correct = /^([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])?$/.test(time); 
    return correct;
}


/*
CREATE
*/

export const registerSchedule = async (schedule, Type) => {
    try {

        if(Type===2){
            const err = errorManager(FORBIDDEN);
            throw new Error(err);
        }
        if(!IsDateright(schedule.daySession)|| 
            !IsTimeright(schedule.iniTime)|| !IsTimeright(schedule.endTime)){
                
            const err = errorManager(BAD_REQUEST);
            throw new Error(err);
        }
        const response = await axios.post(uriSession + '/schedule/create',schedule);
        return response.status;
    } catch (error) {
        if(error.response!=null){
            const err = errorManager(error.response.status);
            throw new Error(err);
        } else{
            throw error;
        }
    }
}



/*
DELETE
*/

export const deleteSchedule = async (ChageState, Type) => {
    try {
        
        if(Type===2){
            const err = errorManager(FORBIDDEN);
            throw new Error(err);
        }

        const response = await axios.delete(uriSession + '/schedule/delete',{ data: ChageState});
        return response.status;
    } catch (error) {
        if(error.response!=null){
            const err = errorManager(error.response.status);
            throw new Error(err);
        } else{
            throw error;
        }
    }
}

/*
PUT
*/
export const setAdate = async (ChageState, Type) => {
    try {
        if(Type===1){
            const err = errorManager(FORBIDDEN);
            throw new Error(err);
        }

        const response = await axios.put(uriSession + '/set-a-date',ChageState);
        return response.status;
    } catch (error) {
        if(error.response!=null){
            const err = errorManager(error.response.status);
            throw new Error(err);
        } else{
            throw error;
        }
    }
}

export const calcelUser = async (ChageState) => {
    try {
        const response = await axios.put(uriSession + '/cancel/user',ChageState);
        return response.status;
    } catch (error) {
        const err = errorManager(error.response.status)
        throw new Error(err);
    }
}

export const calcelCoach = async (ChageState) => {
    try {
        const response = await axios.put(uriSession + '/cancel/coach',ChageState);
        return response.status;
    } catch (error) {
        const err = errorManager(error.response.status)
        throw new Error(err);
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
        const err = errorManager(error.response.status);
        throw new Error(err);
    }
}
export const getAllbyCoachCurrent = async (idCoach) => {
    try {
        const response = await axios.get(uriSession + '/get-by-idCoach/Current/' + idCoach);
        return response.data;
    } catch (error) {
        const err = errorManager(error.response.status);
        throw new Error(err);
    }
}
export const getAllbyCoachAvaible = async (idCoach) => {
    try {
        const response = await axios.get(uriSession + '/get-by-idCoach/Avaible/' + idCoach);
        return response.data;
    } catch (error) {
        const err = errorManager(error.response.status);
        throw new Error(err);
    }
}

export const getAllbyIdUser = async (idUser) => {
    try {
        const response = await axios.get(uriSession + '/get-by-idUser/' + idUser);
        return response.data;
    } catch (error) {
        const err = errorManager(error.response.status);
        throw new Error(err);
    }
}
export const getAllbyUserCurrent = async (idUser) => {
    try {
        const response = await axios.get(uriSession + '/get-by-idUser/Current/' + idUser);
        return response.data;
    } catch (error) {
        const err = errorManager(error.response.status);
        throw new Error(err);
    }
}
export const getbyIdSchedule = async (idUser) => {
    try {
        const response = await axios.get(uriSession + '/get-by-idSchedule/' + idUser);
        return response.data;
    } catch (error) {
        const err = errorManager(error.response.status);
        throw new Error(err);
        
    }
}

