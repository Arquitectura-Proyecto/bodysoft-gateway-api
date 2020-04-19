import { calcelUser} from "../data/index";
const resolvers = {
    Query:{
        
    },
    Mutation:{
        async deleteSchedules(_,{ChageState}){
            const response = await calcelUser(ChageState);
            return response;
        }
        
    }
}

export default resolvers;