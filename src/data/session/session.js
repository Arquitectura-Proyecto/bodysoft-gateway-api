import { uriSession } from "./server";
import axios from "axios";


const FORBIDDEN=403;
const BAD_REQUEST=400;
const errorManager=(error)=>{

    return error.status + " "+error.data;
    

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
            const error = {
                status: FORBIDDEN,
                data: "Solo disponible para entrenadores"
            }
            const err = errorManager(error);
            throw new Error(err);
        }
        else if(!IsDateright(schedule.daySession)|| 
        !IsTimeright(schedule.iniTime)|| !IsTimeright(schedule.endTime)){
            const error = {
                status: BAD_REQUEST,
                data: "Formato de Fecha u hora incorrectos"
            }
            const err = errorManager(error);
            throw new Error(err);
            }
            else{
        const response = await axios.post(uriSession + '/schedule/create',schedule);
        return response.data;
            }
    } catch (error) {
        if(error.response!=null){
            const err = errorManager(error.response);
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
            const error = {
                status: FORBIDDEN,
                data: "Solo disponible para entrenadores"
            }
            const err = errorManager(error);
            throw new Error(err);
        }
        else{

        const response = await axios.delete(uriSession + '/schedule/delete',{ data: ChageState});
        return response.status;
        }
    } catch (error) {
        if(error.response!=null){
            const err = errorManager(error.response);
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
            const error = {
                status: FORBIDDEN,
                data: "Solo disponible para usuarios"
            }
            const err = errorManager(error);
            throw new Error(err);
        }
        else{

        const response = await axios.put(uriSession + '/set-a-date',ChageState);
        return response.status;
        }
    } catch (error) {
        if(error.response!=null){
            const err = errorManager(error.response);
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
        const err = errorManager(error.response)
        throw new Error(err);
    }
}

export const calcelCoach = async (ChageState) => {
    try {
        const response = await axios.put(uriSession + '/cancel/coach',ChageState);
        return response.status;
    } catch (error) {
        const err = errorManager(error.response)
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
        const err = errorManager(error.response);
        throw new Error(err);
    }
}
export const getAllbyCoachCurrent = async (idCoach) => {
    try {
        const response = await axios.get(uriSession + '/get-by-idCoach/Current/' + idCoach);
        return response.data;
    } catch (error) {
        const err = errorManager(error.response);
        throw new Error(err);
    }
}
export const getAllbyCoachAvaible = async (idCoach) => {
    try {
        const response = await axios.get(uriSession + '/get-by-idCoach/Avaible/' + idCoach);
        return response.data;
    } catch (error) {
        const err = errorManager(error.response);
        throw new Error(err);
    }
}

export const getAllbyIdUser = async (idUser) => {
    try {
        const response = await axios.get(uriSession + '/get-by-idUser/' + idUser);
        return response.data;
    } catch (error) {
        const err = errorManager(error.response);
        throw new Error(err);
    }
}
export const getAllbyUserCurrent = async (idUser) => {
    try {
        const response = await axios.get(uriSession + '/get-by-idUser/Current/' + idUser);
        return response.data;
    } catch (error) {
        const err = errorManager(error.response);
        throw new Error(err);
    }
}
export const getbyIdSchedule = async (idUser) => {
    try {
        const response = await axios.get(uriSession + '/get-by-idSchedule/' + idUser);
        return response.data;
    } catch (error) {
        const err = errorManager(error.response);
        throw new Error(err);
        
    }
}

