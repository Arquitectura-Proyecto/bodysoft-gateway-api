import { uriProfileUser, uriProfileTrainer, uriProfileDegree, uriProfileSpeciaity, uriProfileTrainerSpeciality } from "./server";
import axios from "axios";



// GET

export const getProfileUsers = async () => {
    try {
        const response = await axios.get(uriProfileUser + '/');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


export const getProfileTrainers = async () => {
    try {
        const response = await axios.get(uriProfileTrainer + '/');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const getDegreesByTrainers = async (idTrainer) => {
    try {
        const response = await axios.get(uriProfileDegree + '/degrees_by_trainer?trainer=' + idTrainer);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const getProfileSpecialities = async () => {
    try {
        const response = await axios.get(uriProfileSpeciaity + '/');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const getTrainersBySpeciality = async (idSpeciality) => {
    try {
        const response = await axios.get(uriProfileTrainer + '/trainers_by_speciality?specialities=' + idSpeciality);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const getTrainersSpeciality = async () => {
    try {
        const response = await axios.get(uriProfileTrainerSpeciality + '/');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


export const getProfileUser = async (idUser) => {
    try {
        const response = await axios.get(uriProfileUser + '/' + idUser);
        return response.data;
    }catch(error){
        console.log(error);
    }
    
}


// POST

export const postProfileUser = async (body) => {
    try {
        const response = await axios.post(uriProfileUser + '/', body);
        return response.data;
    }catch(error){
        console.log(error);
    }
    
}



export const postProfileTrainer = async (body) => {
    try {
        const response = await axios.post(uriProfileTrainer + '/', body);
        return response.data;
    }catch(error){
        console.log(error);
    }
    
}


export const postProfileSpeciality = async (body) => {
    try {
        const response = await axios.post(uriProfileSpeciaity + '/', body);
        return response.data;
    }catch(error){
        console.log(error);
    }
    
}


export const postProfileDegree = async (body) => {
    try {
        const response = await axios.post(uriProfileDegree + '/', body);
        return response.data;
    }catch(error){
        console.log(error);
    }
    
}


export const postProfileTrainerSpeciality = async (body) => {
    try {
        const response = await axios.post(uriProfileTrainerSpeciality+ '/', body);
        return response.data;
    }catch(error){
        console.log(error);
    }
    
}



// DELETE

export const deleteProfileUser = async (idUser) => {
    try {
        const response = await axios.delete(uriProfileUser + '/' + idUser + '/');
        return response.data;
    }catch(error){
        console.log(error);
    }
    
}



export const deleteProfileSpeciality = async (idSpeciality) => {
    try {
        const response = await axios.delete(uriProfileSpeciaity + '/' + idSpeciality + '/');
        return response.data;
    }catch(error){
        console.log(error);
    }
    
}


export const deleteProfileDegree = async (idDegree) => {
    try {
        const response = await axios.delete(uriProfileDegree + '/' + idDegree + '/');
        return response.data;
    }catch(error){
        console.log(error);
    }
    
}


export const deleteProfileTrainerSpeciality = async (idTrainer, idSpeciality) => {
    try {
        const response = await axios.delete(uriProfileTrainerSpeciality + '/delete_trainerspeciality/?trainer=' + idTrainer +  '&speciality=' + idSpeciality);
        return response.data;
    }catch(error){
        console.log(error);
    }
    
}