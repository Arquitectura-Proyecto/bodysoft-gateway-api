import { uriChatTrainer, uriChatUser } from "./server";
import axios from "axios";

export const getChatsTrainer = async (idTrainer) => {
    try {
        const response = await axios.get(uriChatTrainer + '/' + idTrainer);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const getChatsUser = async (idUser) => {
    try {
        const response = await axios.get(uriChatUser + '/' + idUser);
        return response.data;
    }catch(error){
        console.log(error);
    }
    
}