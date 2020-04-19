
import * as Routine from "../data/routine/routine";
import {getAllRoutines} from "../data/routine/routine";
const resolvers = {
    Query:{
        async getAllRoutines(){
            const response=await getAllRoutines();
            return response.data;
        }
    },
    Mutation:{
        
    }
}

export default resolvers;