import * as Chat from "../data/chat/chat";
import * as Authentication from "../data/authentication/authentication";
const resolvers = {
    Query:{
        hello(){
                return "hello crack"
        },
        async chatsUsers(_,{_id}){
            const response = await Chat.getChatsUser(_id);
            return response;
        },
        async chatsTrainers(_,{_id}){
            const response = await Chat.getChatsTrainer(_id);
            return response;
        },
        async chatTrainerUser(_,{_id, userId}){
            const response = await Chat.getTrainerUserChat(_id, userId);
            return response;
        },
        async chatUserTrainer(_,{_id, trainerId}){
            const response = await Chat.getUserTrainerChat(_id, trainerId);
            return response;
        }
    },
    Mutation:{
        async createChatTrainerUser(_,{token, userId }){
            const responseToken = await Authentication.authValidateAuthToken(token);
            if(responseToken.TypeID == 1){
                const response = await Chat.postTrainerUserChat( responseToken.ID, userId);
                return response;
            }else{
                throw new Error("409 not correct type of user");
            }

        },
        async createChatUserTrainer(_,{token, trainerId}){
            const responseToken = await Authentication.authValidateAuthToken(token);
            if(responseToken.TypeID == 2){
                const response = await Chat.postUserTrainerChat( responseToken.ID, trainerId);
                return response;
            }else{
                throw new Error("409 not correct type of user");
            }


        },
        async createMessageTrainerUser(_,{token, chatId, message}){
            const responseToken = await Authentication.authValidateAuthToken(token);
            if(responseToken.TypeID == 1){
                const response = await Chat.postMessageUser(responseToken.ID, chatId, message);
                return response;
            }else{
                throw new Error("409 not correct type of user");
            }

        },
        async createMessageUserTrainer(_,{token, chatId, message}){
            const responseToken = await Authentication.authValidateAuthToken(token);
            if(responseToken.TypeID == 2){
                const response = await Chat.postMessageTrainer(responseToken.ID, chatId, message);
                return response;
            }
            else{
                throw new Error("409 not correct type of user");
            }
        }
    }
}

export default resolvers;