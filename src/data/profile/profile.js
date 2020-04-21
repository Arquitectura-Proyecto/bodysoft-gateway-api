import { uriProfileUser, uriProfileTrainer, uriProfileDegree, uriProfileSpeciaity, uriProfileTrainerSpeciality } from "./server";
import axios from "axios";



function myJsonToString (j){
    var mystring = ""
    for (var key in j) {
        mystring += key + ": " + j[key];
    }
    return mystring;
}


function createError(error){
    return err = error.response.status  + ' ' + myJsonToString(error.response.data);
    
}


/*----------------------- GET --------------------------*/


// Obtiene una lista con todos los usuarios registrados
export const getProfileUsers = async () => {
    try {
        const response = await axios.get(uriProfileUser + '/');
        return response.data;
    } catch (error) {
        const err = error.response.status  + ' ' + myJsonToString(error.response.data) 
        throw new Error(err);
    }
}

// Obtiene una lista con todos los entrenadores registrados
export const getProfileTrainers = async () => {
    try {
        const response = await axios.get(uriProfileTrainer + '/');
        return response.data;
    } catch (error) {
        const err = error.response.status  + ' ' + myJsonToString(error.response.data) 
        throw new Error(err);
    }
}

// Obtiene una lista con todos los titulos de un entrenador
export const getDegreesByTrainers = async (idTrainer) => {
    try {
        const response = await axios.get(uriProfileDegree + '/degrees_by_trainer?trainer=' + idTrainer);
        return response.data;
    } catch (error) {
        const err = error.response.status  + ' ' + myJsonToString(error.response.data) 
        throw new Error(err);
    }
}

// Obtiene una lista con todas las especialidades del sistema
export const getProfileSpecialities = async () => {
    try {
        const response = await axios.get(uriProfileSpeciaity + '/');
        return response.data;
    } catch (error) {
        const err = error.response.status  + ' ' + myJsonToString(error.response.data) 
        throw new Error(err);
    }
}

// Obtiene una lista con todos los entrenadores dada una especialidad, para filtros
export const getTrainersBySpeciality = async (idSpeciality) => {
    try {
        const response = await axios.get(uriProfileTrainer + '/trainers_by_speciality?specialities=' + idSpeciality);
        return response.data;
    } catch (error) {
        const err = error.response.status  + ' ' + myJsonToString(error.response.data) 
        throw new Error(err);
    }
}


// Obtiene un usuario por su Id
export const getProfileUser = async (idUser) => {
    try {
        const response = await axios.get(uriProfileUser + '/' + idUser);
        return response.data;
    }catch(error){
        const err = error.response.status  + ' ' + myJsonToString(error.response.data) 
        throw new Error(err);
    }
    
}

// Obtiene un entrenador por su Id
export const getProfileTrainer = async (idTrainer) => {
    try {
        const response = await axios.get(uriProfileTrainer + '/' + idTrainer);
        return response.data;
    }catch(error){
        const err = error.response.status  + ' ' + myJsonToString(error.response.data) 
        throw new Error(err);
    }
    
}


/*----------------------- POST --------------------------*/

// Crea un usuario
export const postProfileUser = async (body) => {
    try {
        const response = await axios.post(uriProfileUser + '/', body);
        return response.data;
    }catch(error){
        const err = error.response.status  + ' ' + myJsonToString(error.response.data) 
        throw new Error(err);
    }
    
}


// Crea un entrenador
export const postProfileTrainer = async (body) => {
    try {
        const response = await axios.post(uriProfileTrainer + '/', body);
        return response.data;
    }catch(error){
        const err = error.response.status  + ' ' + myJsonToString(error.response.data) 
        throw new Error(err);
    }
    
}

// Crea una especialidad del sistema
export const postProfileSpeciality = async (body) => {
    try {
        const response = await axios.post(uriProfileSpeciaity + '/', body);
        return response.data;
    }catch(error){
        const err = error.response.status  + ' ' + myJsonToString(error.response.data) 
        throw new Error(err);
    }
    
}

// Crea un titulo para un entrenador dado
export const postProfileDegree = async (body) => {
    try {
        const response = await axios.post(uriProfileDegree + '/', body);
        return response.data;
    }catch(error){
        const err = error.response.status  + ' ' + myJsonToString(error.response.data) 
        throw new Error(err);
    }
    
}

// Crea la relacion entre un entrenador y una especialidad (para asignarle especialidades a un entrenador)
export const postProfileTrainerSpeciality = async (body) => {
    try {
        const response = await axios.post(uriProfileTrainerSpeciality+ '/', body);
        return response.data;
    }catch(error){
        const err = error.response.status  + ' ' + myJsonToString(error.response.data) 
        throw new Error(err);
    }
    
}


/*----------------------- DELETE --------------------------*/

// Borra un usuario
export const deleteProfileUser = async (idUser) => {
    try {
        const response = await axios.delete(uriProfileUser + '/' + idUser + '/');
        return response.data;
    }catch(error){
        const err = error.response.status  + ' ' + myJsonToString(error.response.data) 
        throw new Error(err);
    }
    
}

// Borra un entrenador
export const deleteProfileTrainer = async (idTrainer) => {
    try {
        const response = await axios.delete(uriProfileTrainer + '/' + idTrainer + '/');
        return response.data;
    }catch(error){
        const err = error.response.status  + ' ' + myJsonToString(error.response.data) 
        throw new Error(err);
    }
    
}

// Borra una especialiadad del sistema
export const deleteProfileSpeciality = async (idSpeciality) => {
    try {
        const response = await axios.delete(uriProfileSpeciaity + '/' + idSpeciality + '/');
        return response.data;
    }catch(error){
        const err = error.response.status  + ' ' + myJsonToString(error.response.data) 
        throw new Error(err);
    }
    
}

// Borra un titulo de un entrenador
export const deleteProfileDegree = async (idDegree) => {
    try {
        const response = await axios.delete(uriProfileDegree + '/' + idDegree + '/');
        return response.data;
    }catch(error){
        const err = error.response.status  + ' ' + myJsonToString(error.response.data) 
        throw new Error(err);
    }
    
}

// Borra la relacion entre un entrenador y una especialidad (le quita especialidades a un entrenador)
export const deleteProfileTrainerSpeciality = async (idTrainer, idSpeciality) => {
    try {
        const response = await axios.delete(uriProfileTrainerSpeciality + '/delete_trainerspeciality/?trainer=' + idTrainer +  '&speciality=' + idSpeciality);
        return response.data;
    }catch(error){
        const err = error.response.status  + ' ' + myJsonToString(error.response.data) 
        throw new Error(err);
    }
    
}


/*----------------------- PUT --------------------------*/

// Actualiza la informacion de un usuario dado
export const updateProfileUser = async (idUser, body) => {
    try {
        const response = await axios.put(uriProfileUser + '/' + idUser +  '/', body);
        return response.data;
    }catch(error){
        const err = error.response.status  + ' ' + myJsonToString(error.response.data) 
        throw new Error(err);
    }
    
}

// Actualiza la informacion de un entrenador dado
export const updateProfileTrainer = async (idTrainer, body) => {
    try {
        const response = await axios.put(uriProfileTrainer + '/' + idTrainer +  '/', body);
        return response.data;
    }catch(error){
        const err = error.response.status  + ' ' + myJsonToString(error.response.data) 
        throw new Error(err);
    }
    
}

// Actualiza la informacion de un titulo de un entrenador
export const updateProfileDegree = async (idDegree, body) => {
    try {
        const response = await axios.put(uriProfileDegree + '/' + idDegree +  '/', body);
        return response.data;
    }catch(error){
        const err = error.response.status  + ' ' + myJsonToString(error.response.data) 
        throw new Error(err);
    }
    
}

// Actualiza la informacion (nombre) de una especialidad del sistema
export const updateProfileSpeciality = async (idSpeciality, body) => {
    try {
        const response = await axios.put(uriProfileSpeciaity + '/' + idSpeciality +  '/', body);
        return response.data;
    }catch(error){
        const err = error.response.status  + ' ' + myJsonToString(error.response.data) 
        throw new Error(err);
    }
    
}
