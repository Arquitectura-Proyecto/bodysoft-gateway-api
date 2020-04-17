import { getChatsTrainer,getChatsUser } from "../data/index";

const resolvers = {
    Query:{
        hello(){
                return "hello crack"
        },
        async chatsUsers(_,{_id}){
            const response = await getChatsUser(_id);
            return response;
        },
        // async chatsTrainer(){
        //     const response = await getChatsTrainer
        // }
    },
    Mutation:{
        
    }
}

export default resolvers;