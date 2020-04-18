import * as RoutineUris from "./server";
import axios from "axios";
const UNAUTHORIZED=401;
const BAD_REQUEST=400;
const CONFLICT=409;
const UNAUTHORIZED_MESSAGE="NO TE ENCUENTRAS AUTORIZADO PARA REALIZAR LA OPERACION";
const BAD_REQUEST_MESSAGE="DEBES LLENAR TODOS LOS CAMPOS";
const CONFLICT_MESSAGE="HUBO UN PROBLEMA INTENTALO DE NUEVO";
const UNAUTHORIZED_RESPONSE={message:UNAUTHORIZED_MESSAGE,status:UNAUTHORIZED};
const BAD_REQUEST_RESPONSE={message:BAD_REQUEST_MESSAGE,status:BAD_REQUEST};
const CONFLICT_RESPONSE={message:CONFLICT_MESSAGE,status:CONFLICT};
const errorManager=(statusCode)=>{
    switch (statusCode) {
        case UNAUTHORIZED:
            return UNAUTHORIZED_RESPONSE;
            break;
        case BAD_REQUEST:
            return BAD_REQUEST_RESPONSE;
            break;
        case CONFLICT:
            return CONFLICT_RESPONSE;
        default:
            return CONFLICT_RESPONSE;
    }

}
export const createRoutine = async (newRoutine) => {
    try {
        const response = await axios.post(RoutineUris.uriRegisterRoutine,newRoutine);

        return response;
    } catch (error) {

        return errorManager(error.response.statusCode);

    }
};
export const getRoutineByIdOwner=async (idOwner)=>{
    try {
        const response = await axios.get(RoutineUris.uriGetRoutineByIdOwner+`${idOwner}`);

        return response;
    } catch (error) {

        return errorManager(error.response.statusCode);
    }
};
export const updateRoutine=async (idRoutine,routine)=>{
    try {
        const response = await axios.put(RoutineUris.uriGetRoutineByIdOwner+`${idRoutine}`,routine);

        return response;
    } catch (error) {

        return errorManager(error.response.statusCode);
    }


};
export const getAllRoutines=async ()=>{
    try {
        const response = await axios.get(RoutineUris.uriGetAllRoutines);

        return response;
    } catch (error) {

        return errorManager(error.response.statusCode);
    }
};
export const getRoutineByIdType=async(idType)=>{
    try {
        const response = await axios.get(RoutineUris.uriGetRoutineByIdOwner+`${idType}`);

        return response;
    } catch (error) {

        return errorManager(error.response.statusCode);
    }
};
export const rateRoutine=async(idRoutine, idUser,raiting)=>{
    try {
        const response = await axios.put(RoutineUris.uriRateRoutine+`${idRoutine}   `,{raiting:raiting,idUser:idUser});

        return response;
    } catch (error) {

        return errorManager(error.response.statusCode);
    }
};
export const createRequest=async(idRoutine,idUser)=>{
    try{
        const response = await axios.post(RoutineUris.uriRegisterRequest,{idRoutine:idRoutine,idUser:idUser});
        return response;

    }catch(error){
        return errorManager(error.response.statusCode);
    }
};
export const deleteRequest=async(idRequest)=>{
    try{
        const response = await axios.delete(RoutineUris.uriDeleteRequest+`${idRequest}`);
        return response;

    }catch (error) {
        return errorManager(error.response.statusCode);
    }

};

export const getRequestsByIdRoutine=async(idRoutine)=>{
    try{
        const response = await axios.get(RoutineUris.uriGetRequestByRoutine+`${idRoutine}`);
        return response;

    }catch (error) {
        return errorManager(error.response.statusCode);
    }

};
export const registerResource=async(idRoutine,resource)=>{
    try{
        const response = await axios.post(RoutineUris.uriRegisterResource+`${idRoutine}`,resource);
        return response;

    }catch (error) {
        return errorManager(error.response.statusCode);
    }

};

export const getResourcesByIdRoutine=async(idRoutine,idRequester)=>{
    try{
        const response = await axios.post(RoutineUris.uriGetResourcesByRoutine+`${idRoutine}`,{idRequester:idRequester});
        return response;

    }catch (error) {
        return errorManager(error.response.statusCode);
    }

};
export const updaterResource=async(idResource,resource)=>{
    try{
        const response = await axios.put(RoutineUris.uriUpdateResource+`${idResource}`,resource);
        return response;

    }catch (error) {
        return errorManager(error.response.statusCode);
    }

};
export const deleteResource=async(idResource)=>{
    try{
        const response = await axios.delete(RoutineUris.uriDeleteResource+`${idResource}`);
        return response;

    }catch (error) {
        return errorManager(error.response.statusCode);
    }

};
export const getRoutinesAvailableByUser=async(idUser)=>{
    try{
        const response = await axios.get(RoutineUris.uriGetUserRoutineAvailable+`${idUser}`);
        return response;

    }catch (error) {
        return errorManager(error.response.statusCode);
    }

};
export const registerUserRoutine=async(userRoutine)=>{
    try{
        const response = await axios.post(RoutineUris.uriRegisterUserRoutine,userRoutine);
        return response;

    }catch (error) {
        return errorManager(error.response.statusCode);
    }

};
export const changeStatusUserRoutinee=async(idRoutine,idUser,idStatus)=>{
    try{
        const response = await axios.put(RoutineUris.uriChangeStatusUserRoutine+`${idRoutine}`,{idUser:idUser,idStatus:idStatus});
        return response;

    }catch (error) {
        return errorManager(error.response.statusCode);
    }

};
export const getUserRoutineByIdUser=async(idUser)=>{
    try{
        const response = await axios.get(RoutineUris.uriGetUserRoutineByUser+`${idUser}`);
        return response;

    }catch (error) {
        return errorManager(error.response.statusCode);
    }

};