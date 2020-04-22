import { uriChatTrainer, uriChatUser } from "./server";
import axios from "axios";

export const getChatsTrainer = async (idTrainer) => {
    try {
        const response = await axios.get(uriChatTrainer + idTrainer);
        return response.data;
    } catch (error) {
        throw new Error(error.response.status + " " + error.response.data);
    }
}

export const getTrainerUserChat = async (trainerId, userId ) => {
    try {
        const response = await axios.get(uriChatTrainer + trainerId + '/' + userId);
        return response.data;
    }catch(error){
        throw new Error(error.response.status + " " + error.response.data);
    }
}

export const postTrainerUserChat = async (trainerId, userId) => {
    try {
        const response = await axios.post(uriChatTrainer + trainerId, {
            id_user : userId
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
        });
        return response.data;
    }catch(error){
        throw new Error(error.response.status + " " + error.response.data);
    }
}


export const getChatsUser = async (idUser) => {
    try {
        const response = await axios.get(uriChatUser  + idUser);
        return response.data;
    }catch(error){
        throw new Error(error.response.status + " " + error.response.data);
    }
}

export const getUserTrainerChat = async (userId, trainerId) => {
    try {
        const response = await axios.get(uriChatUser  + userId + '/' + trainerId);
        return response.data;
    }catch(error){
        throw error;
    }
}

export const postUserTrainerChat = async (userId, trainerId) => {
    try {
        const response = await axios.post(uriChatUser + '/' + userId, {
            id_trainer : trainerId
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
        });
        return response.data;
    }catch(error){
        throw new Error(error.response.status + " " + error.response.data);
    }
}
