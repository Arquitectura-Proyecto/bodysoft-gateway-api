
import * as Routine from "../data/routine/routine";
import {getAllRoutines} from "../data/routine/routine";
import {createRoutine} from "../data/routine/routine";
import {getRoutineByIdOwner} from "../data/routine/routine";
import {} from '../data/authentication/authentication'
import {authValidateAuthToken} from "../data/authentication/authentication";
import {updateRoutine} from "../data/routine/routine";
import {getRoutineByIdType} from "../data/routine/routine";
import {rateRoutine} from "../data/routine/routine";
import {deleteRequest} from "../data/routine/routine";
import {getRequestsByIdRoutine} from "../data/routine/routine";
import {registerResource} from "../data/routine/routine";
import {getResourcesByIdRoutine} from "../data/routine/routine";
import {updaterResource} from "../data/routine/routine";
import {deleteResource} from "../data/routine/routine";
import {getRoutinesAvailableByUser} from "../data/routine/routine";
import {getUserRoutinesAvailableByUser} from "../data/routine/routine";
import {registerUserRoutine} from "../data/routine/routine";
import {changeStatusUserRoutinee} from "../data/routine/routine";
import {getUserRoutineByIdUser} from "../data/routine/routine";
const ID_USER=2;
const ID_TRAINER=1;

const resolvers = {
    Query:{
        async getAllRoutines(){
            const response=await getAllRoutines();
            return response.data;
        },
        async getRoutineByIdOwner(_,{token}){
            const userCredentials=await authValidateAuthToken(token);
            if (userCredentials.TypeID!=ID_TRAINER) {
                return new Error("No eres entrenador");
            }
            let idOwner=userCredentials.ID;
            const response=await getRoutineByIdOwner(idOwner);
            return response.data;
        },
        async getRoutinesByType(_,{idType}){
            const response =await getRoutineByIdType(idType);
            return response.data;
        },
        async getRequestByIdRoutine(_,{idRoutine}){
            const response =await getRequestsByIdRoutine(idRoutine);
            return response.data;
        },
        async getUserRoutineAvailable(_,{token}){
            const userCredentials=await authValidateAuthToken(token);
            if (userCredentials.TypeID!=ID_USER) {
                return new Error("No eres usuario");
            }
            const response=await getUserRoutinesAvailableByUser(userCredentials.ID);
            return response.data;
        },
        async getUserRoutineByIdUser(_,{token}){
            const userCredentials=await authValidateAuthToken(token);
            if (userCredentials.TypeID!=ID_USER) {
                return new Error("No eres usuario");
            }
            const response =await getUserRoutineByIdUser(userCredentials.ID);
            return response.data;
        }

    },
    Mutation:{
        async createRoutine(_,{newRoutine,token}){
            const userCredentials=await authValidateAuthToken(token);
            if (userCredentials.TypeID!=ID_TRAINER) {
                return new Error("No eres entrenador");
            }
            newRoutine.idOwner=userCredentials.ID;
            const response =await createRoutine(newRoutine);

            return ResponseFactory(response);///this is used only for response where the server dont return body
        },
        async updateRoutine(_,{idRoutine,routine,token}){
            const userCredentials=await authValidateAuthToken(token);
            if (userCredentials.TypeID!=ID_TRAINER) {
                return new Error("No eres entrenador");
            }
            routine.idOwner=userCredentials.ID;
            const response =await updateRoutine(idRoutine,routine);
            return ResponseFactory(response);
        },
        async rateRoutine(_,{idRoutine,raitingRoutinePOJO,token}){
            const userCredentials=await authValidateAuthToken(token);
            if (userCredentials.TypeID!=ID_USER) {
                return new Error("No eres usuario");
            }
            raitingRoutinePOJO.idUser=userCredentials.ID;
            const response =await rateRoutine(idRoutine);
            return ResponseFactory(response);
        },
        async registerRequest(_,{registerRequestPOJO,token}){
            const userCredentials=await authValidateAuthToken(token);
            if (userCredentials.TypeID!=ID_USER) {
                return new Error("No eres usuario");
            }
            registerRequestPOJO.idUser=userCredentials.ID;
            const response=await createRequest(registerRequestPOJO.idRoutine,registerRequestPOJO.idUser)
            return ResponseFactory(response);
        },
        async deleteRequest(_,{idRequest}){
            const response =await deleteRequest(idRequest);
            return ResponseFactory(response);
        },
        async registerResource(_,{idRoutine,registerResourcePOJO,token}){
            const userCredentials=await authValidateAuthToken(token);
            if (userCredentials.TypeID!=ID_TRAINER) {
                return new Error("No eres entrenador");
            }
            registerResourcePOJO.idOwner=userCredentials.ID;
            const response=await registerResource(idRoutine,registerResourcePOJO);
            return ResponseFactory(response);

        },
        async getResourceByIdRoutine(_,{idRoutine,token}){
            const userCredentials=await authValidateAuthToken(token);

            const response=await getResourcesByIdRoutine(idRoutine,userCredentials.ID)
            return response.data;
        },
        async updateResource(_,{idResource,registerResourcePOJO,token}){
            const userCredentials=await authValidateAuthToken(token);
            if (userCredentials.TypeID!=ID_TRAINER) {
                return new Error("No eres entrenador");
            }
            registerResourcePOJO.idOwner=userCredentials.ID;
            const response =await updaterResource(idResource,registerResourcePOJO);
            return ResponseFactory(response);

        },
        async deleteResource(_,{idResource,token}){
            const userCredentials=await authValidateAuthToken(token);
            if (userCredentials.TypeID!=ID_TRAINER) {
                return new Error("No eres entrenador");
            }
            const response =await deleteResource(idResource,userCredentials.ID);
            return ResponseFactory(response);
        },
        async registerUserRoutine(_,{registerUserRoutinePOJO,token}){
            const userCredentials=await authValidateAuthToken(token);
            if (userCredentials.TypeID!=ID_TRAINER) {
                return new Error("No eres entrenador");
            }
            registerUserRoutinePOJO.idOwner=userCredentials.ID;
            const response=await registerUserRoutine(registerUserRoutinePOJO);
            ResponseFactory(response);
        },
        async changeStatusUserRoutine(_,{changeStatusPOJO,idRoutine,token}){
            const userCredentials=await authValidateAuthToken(token);
            if (userCredentials.TypeID!=ID_USER) {
                return new Error("No eres usuario")
            }

            const response =await changeStatusUserRoutine(idRoutine,userCredentials.ID,changeStatusPOJO.idStatus);
            ResponseFactory(response);
        }

    }
};
const ResponseFactory=(response)=>{
    let r={status:response.status,
        data:response.data}
        return r;
}

export default resolvers;