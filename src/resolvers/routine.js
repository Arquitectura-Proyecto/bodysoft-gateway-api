
import * as Routine from "../data/routine/routine";
import {getAllRoutines} from "../data/routine/routine";
import {createRoutine} from "../data/routine/routine";


const resolvers = {
    Query:{
        async getAllRoutines(){
            const response=await getAllRoutines();
            return response.data;
        },

    },
    Mutation:{
        async createRoutine(_,{newRoutine}){
            const response =await createRoutine(newRoutine);
            var r={status:response.status,
            data:response.data}
            return r ;
        }
    }
}

export default resolvers;