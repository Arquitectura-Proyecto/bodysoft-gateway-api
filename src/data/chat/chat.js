import { uriChatTrainer, uriChatUser } from "./server";
import axios from "axios";
const https = require('https');

const agent = new https.Agent({
    rejectUnauthorized: false
});
export const getChatsTrainer = async (idTrainer) => {
    try {
        const response = await axios.get(uriChatTrainer + idTrainer, {
            httpsAgent: agent
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response.status + " " + error.response.data);
    }
}

export const getTrainerUserChat = async (trainerId, userId ) => {
    try {
        const response = await axios.get(uriChatTrainer + trainerId + '/' + userId, {
            httpsAgent: agent
        });
        return response.data;
    }catch(error){
        throw new Error(error.response.status + " " + error.response.data);
    }
}

export const postTrainerUserChat = async (trainerId, userId) => {
    try {
        const response = await axios.post(uriChatTrainer + trainerId, {
            id_user : userId
        }, {
            httpsAgent: agent
        });
        return response.data;
    }catch(error){
        throw new Error(error.response.status + " " + error.response.data);
    }
}

export const postMessageUser = async (trainerId, chatId, message) => {
    try {
        const response = await axios.post(uriChatTrainer  + trainerId + '/' + chatId, {
            message : message
        },{
            httpsAgent: agent
        });
        return response.data;
    }catch(error){
        throw new Error(error.response.status + " " + error.response.data);
    }
}


export const getChatsUser = async (idUser) => {
    try {
        const response = await axios.get(uriChatUser  + idUser, {
            httpsAgent: agent
        });
        return response.data;
    }catch(error){
        throw new Error(error.response.status + " " + error.response.data);
    }
}

export const getUserTrainerChat = async (userId, trainerId) => {
    try {
        const response = await axios.get(uriChatUser  + userId + '/' + trainerId, {
            httpsAgent: agent
        });
        return response.data;
    }catch(error){
        throw error;
    }
}

export const postUserTrainerChat = async (userId, trainerId) => {
    try {
        const response = await axios.post(uriChatUser + '/' + userId, {

            id_trainer : trainerId
        }, {
            httpsAgent: agent
        });

        return response.data;
    }catch(error){
        throw new Error(error.response.status + " " + error.response.data);
    }
}
export const postMessageTrainer = async (userId, chatId, messageContent) => {
    try {
        const response = await axios.post(uriChatUser + userId + '/' + chatId, {
            message : messageContent
        },{
            httpsAgent: agent
        });
        return response.data;
    }catch(error){
        throw new Error(error.response.status + " " + error.response.data);
    }
}
