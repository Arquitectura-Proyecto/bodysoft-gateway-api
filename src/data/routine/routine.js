import * as RoutineUris from "./server";
import axios from "axios";
const UNAUTHORIZED=401;
const BAD_REQUEST=400;
const CONFLICT=409;
const UNAUTHORIZED_MESSAGE="NO TE ENCUENTRAS AUTORIZADO PARA REALIZAR LA OPERACION";
const BAD_REQUEST_MESSAGE="DEBES LLENAR TODOS LOS CAMPOS";
const CONFLICT_MESSAGE="LA PETICION REALIZADA TIENE INCONSISTENCIAS, INTENTALO DE NUEVO";
const UNAUTHORIZED_ERROR=new Error(UNAUTHORIZED+" "+UNAUTHORIZED_MESSAGE);
const BAD_REQUEST_ERROR=new Error(BAD_REQUEST+" "+BAD_REQUEST_MESSAGE);
const CONFLICT_ERROR=new Error(CONFLICT+" "+CONFLICT_MESSAGE);
const errorManager=(statusCode)=>{
    switch (statusCode) {
        case UNAUTHORIZED:
            return UNAUTHORIZED_ERROR;
            break;
        case BAD_REQUEST:
            return BAD_REQUEST_ERROR;
            break;
        case CONFLICT:
            return CONFLICT_ERROR;
            break;
        default:
            return new Error(statusCode+ " ERROR NO IDENTIFICADO");
    }

}
export const createRoutine = async (newRoutine) => {
    try {
        const response = await axios.post(RoutineUris.uriRegisterRoutine,newRoutine);

        return response;
    } catch (error) {

        throw errorManager(error.response.status);

    }
};
export const getRoutineByIdOwner=async (idOwner)=>{
    try {
        const response = await axios.get(RoutineUris.uriGetRoutineByIdOwner+`${idOwner}`);

        return response;
    } catch (error) {

        throw errorManager(error.response.status);
    }
};
export const updateRoutine=async (idRoutine,routine)=>{
    try {
        const response = await axios.put(RoutineUris.uriUpdateRoutine+`${idRoutine}`,routine);

        return response;
    } catch (error) {

        throw errorManager(error.response.status);
    }


};
export const getAllRoutines=async ()=>{
    try {
        const response = await axios.get(RoutineUris.uriGetAllRoutines);

        return response;
    } catch (error) {

        throw errorManager(error.response.status);
    }
};
export const getRoutineByIdType=async(idType)=>{
    try {
        const response = await axios.get(RoutineUris.uriGetRoutineByType+`${idType}`);

        return response;
    } catch (error) {

        throw errorManager(error.response.status);
    }
};
export const rateRoutine=async(idRoutine, idUser,raiting)=>{
    try {
        const response = await axios.put(RoutineUris.uriRateRoutine+`${idRoutine}   `,{raiting:raiting,idUser:idUser});

        return response;
    } catch (error) {

        throw errorManager(error.response.status);
    }
};
export const createRequest=async(idRoutine,idUser)=>{
    try{
        const response = await axios.post(RoutineUris.uriRegisterRequest,{idRoutine:idRoutine,idUser:idUser});
        return response;

    }catch(error){
        throw errorManager(error.response.status);
    }
};
export const deleteRequest=async(idRequest)=>{
    try{
        const response = await axios.delete(RoutineUris.uriDeleteRequest+`${idRequest}`);
        return response;

    }catch (error) {
        throw errorManager(error.response.status);
    }

};

export const getRequestsByIdRoutine=async(idRoutine)=>{
    try{
        const response = await axios.get(RoutineUris.uriGetRequestByRoutine+`${idRoutine}`);
        return response;

    }catch (error) {
        throw errorManager(error.response.status);
    }

};
export const registerResource=async(idRoutine,resource)=>{
    try{
        const response = await axios.post(RoutineUris.uriRegisterResource+`${idRoutine}`,resource);
        return response;

    }catch (error) {
        throw errorManager(error.response.status);
    }

};

export const getResourcesByIdRoutine=async(idRoutine,idRequester)=>{
    try{
        const response = await axios.post(RoutineUris.uriGetResourcesByRoutine+`${idRoutine}`,{idRequester:idRequester});
        return response;

    }catch (error) {
        throw errorManager(error.response.status);
    }

};
export const updaterResource=async(idResource,resource)=>{
    try{
        const response = await axios.put(RoutineUris.uriUpdateResource+`${idResource}`,resource);
        return response;

    }catch (error) {
        throw errorManager(error.response.status);
    }

};
export const deleteResource=async(idResource,idOwner)=>{
    try{
        const response = await axios.delete(RoutineUris.uriDeleteResource+`${idResource}/${idOwner}`);

        return response;

    }catch (error) {
        throw errorManager(error.response.status);
    }

};
export const getUserRoutinesAvailableByUser=async(idUser)=>{
    try{
        const response = await axios.get(RoutineUris.uriGetUserRoutineAvailable+`${idUser}`);
        return response;

    }catch (error) {
        throw errorManager(error.response.status);
    }

};
export const registerUserRoutine=async(userRoutine)=>{
    try{
        const response = await axios.post(RoutineUris.uriRegisterUserRoutine,userRoutine);
        return response;

    }catch (error) {
        throw errorManager(error.response.status);
    }

};
export const changeStatusUserRoutine=async(idRoutine,idUser,idStatus)=>{
    try{
        const response = await axios.put(RoutineUris.uriChangeStatusUserRoutine+`${idRoutine}`,{idUser:idUser,idStatus:idStatus});
        return response;

    }catch (error) {
        throw errorManager(error.response.status);
    }

};
export const getUserRoutineByIdUser=async(idUser)=>{
    try{
        const response = await axios.get(RoutineUris.uriGetUserRoutineByUser+`${idUser}`);
        return response;

    }catch (error) {
        throw errorManager(error.response.status);
    }

};
export const getAllStatus=async ()=>{
    try{
        const response = await axios.get(RoutineUris.uriGetAllStatus);
        return response;

    }catch (error) {
        throw errorManager(error.response.status);
    }
};
export const getAllTypeRoutine=async ()=>{
    try{
        const response = await axios.get(RoutineUris.uriGetAllTypeRoutine);
        return response;

    }catch (error) {
        throw errorManager(error.response.status);
    }
};
export const getAllTypeResource=async()=>{
    try{
        const response = await axios.get(RoutineUris.uriGetAllTypeResource);
        return response;

    }catch (error) {
        throw errorManager(error.response.status);
    }
};