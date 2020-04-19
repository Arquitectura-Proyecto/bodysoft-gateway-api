
import * as Routine from "../data/routine/routine";
import {getAllRoutines} from "../data/routine/routine";
import {createRoutine} from "../data/routine/routine";
import {getRoutineByIdOwner} from "../data/routine/routine";


const resolvers = {
    Query:{
        async getAllRoutines(){
            const response=await getAllRoutines();
            return response.data;
        },
        async getRoutineByIdOwner(_,{idOwner}){
            const response=await getRoutineByIdOwner(idOwner);
            return response.data;
        }

    },
    Mutation:{
        async createRoutine(_,{newRoutine}){

            const response =await createRoutine(newRoutine);

            return ResponseFactory(response);///this is used only for response where the server dont return body
        }
    }
}
const ResponseFactory=(response)=>{
    let r={status:response.status,
        data:response.data}
        return r;
}
export default resolvers;