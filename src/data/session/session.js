import { uriSession } from "./server";
import axios from "axios";


/*
CREATE
*/

export const registerSchedule = async (schedule) => {
    try {
        const response = await axios.post(uriSession + '/schedule/create',schedule);
        return response.status;
    } catch (error) {
        console.error(error);
    }
}



/*
DELETE
*/

export const deleteSchedule = async (ChageState) => {
    try {
        const response = await axios.delete(uriSession + '/schedule/delete',{ data: ChageState});
        return response.status;
    } catch (error) {
        console.error(error);
    }
}

/*
PUT
*/
export const setAdate = async (ChageState) => {
    try {
        const response = await axios.put(uriSession + '/set-a-date',ChageState);
        return response.status;
    } catch (error) {
        console.error(error);
    }
}

export const calcelUser = async (ChageState) => {
    try {
        const response = await axios.put(uriSession + '/cancel/user',ChageState);
        return response.status;
    } catch (error) {
        console.error(error);
        console.error( error.response.status+" "+ error.response.statusCode );
    }
}

export const calcelCoach = async (ChageState) => {
    try {
        const response = await axios.put(uriSession + '/cancel/coach',ChageState);
        return response.status;
    } catch (error) {
        console.error(error);
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
        console.error(error);
    }
}
export const getAllbyCoachCurrent = async (idCoach) => {
    try {
        const response = await axios.get(uriSession + '/get-by-idCoach/Current/' + idCoach);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const getAllbyIdUser = async (idUser) => {
    try {
        const response = await axios.get(uriSession + '/get-by-idUser/' + idUser);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
export const getAllbyUserCurrent = async (idUser) => {
    try {
        const response = await axios.get(uriSession + '/get-by-idUser/Current/' + idUser);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}