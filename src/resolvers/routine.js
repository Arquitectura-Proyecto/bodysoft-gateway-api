
import * as Routine from "../data/routine/routine";
import {getAllRoutines} from "../data/routine/routine";
import {createRoutine} from "../data/routine/routine";
import {getRoutineByIdOwner} from "../data/routine/routine";
import {} from '../data/authentication/authentication'
import {authValidateAuthToken} from "../data/authentication/authentication";
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
        }
    }
};
const ResponseFactory=(response)=>{
    let r={status:response.status,
        data:response.data}
        return r;
}

export default resolvers;