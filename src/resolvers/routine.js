
import * as Routine from "../data/routine/routine";
import {getAllRoutines} from "../data/routine/routine";
import {createRoutine} from "../data/routine/routine";
import {getRoutineByIdOwner} from "../data/routine/routine";
import {} from '../data/authentication/authentication'
import {authValidateAuthToken} from "../data/authentication/authentication";
import {updateRoutine} from "../data/routine/routine";
import {getRoutineByIdType} from "../data/routine/routine";
import {rateRoutine} from "../data/routine/routine";
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
        }
    }
};
const ResponseFactory=(response)=>{
    let r={status:response.status,
        data:response.data}
        return r;
}

export default resolvers;