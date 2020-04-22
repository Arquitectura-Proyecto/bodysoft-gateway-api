import * as Chat from "../data/index";
import * as Authentication from "../data/index";
const resolvers = {
    Query: {
        async chatsUsers(_, { token }) {
            const responseToken = await Authentication.authValidateAuthToken(token);
            if (responseToken.TypeID != 2){
                throw new Error('409 wrong user type')
            }
            const response = await Chat.getChatsUser(responseToken.ID);
            return response;
        },
        async chatsTrainers(_, { token }) {
            const responseToken = await Authentication.authValidateAuthToken(token);
            if (responseToken.TypeID != 1){
                throw new Error('409 wrong user type')
            }
            const response = await Chat.getChatsTrainer(responseToken.ID);
            return response;
        },
        async chatTrainerUser(_, { token, userId }) {
            const responseToken = await Authentication.authValidateAuthToken(token);
            if (responseToken.TypeID != 1){
                throw new Error('409 wrong user type')
            }
            const response = await Chat.getTrainerUserChat(responseToken.ID, userId);
            return response;
        },
        async chatUserTrainer(_, { token, trainerId }) {
            const responseToken = await Authentication.authValidateAuthToken(token);
            if (responseToken.TypeID != 2){
                throw new Error('409 wrong user type')
            }
            const response = await Chat.getUserTrainerChat(responseToken.ID, trainerId);
            return response;
        }
    },
    Mutation: {
        async createChatTrainerUser(_, { token, userId }) {
            const responseToken = await Authentication.authValidateAuthToken(token);
            if (responseToken.TypeID == 1) {
                const response = await Chat.postTrainerUserChat(responseToken.ID, userId);
                return response;
            } else {
                throw new Error("409 wrong user type");
            }

        },
        async createChatUserTrainer(_, { token, trainerId }) {
            const responseToken = await Authentication.authValidateAuthToken(token);
            if (responseToken.TypeID == 2) {
                const response = await Chat.postUserTrainerChat(responseToken.ID, trainerId);
                return response;
            } else {
                throw new Error("409 wrong user type");
            }


        },
        async createMessageTrainerUser(_, { token, chatId, message }) {
            const responseToken = await Authentication.authValidateAuthToken(token);
            if (responseToken.TypeID == 1) {
                const response = await Chat.postMessageUser(responseToken.ID, chatId, message);
                return response;
            } else {
                throw new Error("409 wrong user type");
            }

        },
        async createMessageUserTrainer(_, { token, chatId, message }) {
            const responseToken = await Authentication.authValidateAuthToken(token);
            if (responseToken.TypeID == 2) {
                const response = await Chat.postMessageTrainer(responseToken.ID, chatId, message);
                return response;
            }
            else {
                throw new Error("409 wrong user type");
            }
        }
    }
}

export default resolvers;