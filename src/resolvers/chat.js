import * as Chat from "../data/chat/chat";

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
        async createChatTrainerUser(_,{_id, userId}){
            const response = await Chat.startTrainerUserChat(_id, userId);
            return response;
        },
        async createChatUserTrainer(_,{_id, trainerId}){
            const response = await Chat.startUserTrainerChat(_id, trainerId);
            return response;
        },
        async createMessageTrainerUser(_,{_id, chatId, message}){
            const response = await Chat.sendMessageUser(_id, chatId, message);
            return response;
        },
        async createMessageUserTrainer(_,{_id, chatId, message}){
            const response = await Chat.sendMessageTrainer(_id, chatId, message);
            return response;
        }
    }
}

export default resolvers;