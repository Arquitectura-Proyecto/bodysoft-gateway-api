import { 
    authUriCreateUser, 
    authUriGetTypes,
    authUriRecoverPassword, 
    authUriValidateAuthToken, 
    authUriAuthentication, 
    authUriChagePassword,
    authUriAssignProfile,
    authUriVerifyAcount
} from "./server";

import axios from "axios";

export const authCreateUser = async (userData) => {
    try {
        const response = await axios.post(authUriCreateUser, userData);
        return response.status;
    } catch (error) {
        const err = error.response.status + " " + error.response.data
        throw new Error(err)
    }
}

export const authGetTypes = async () => {
    try {
        const response = await axios.get(authUriGetTypes);
        return response.data;
    } catch (error) {
        const err = error.response.status + " " + error.response.data
        throw new Error(err)
    }
}

export const authRecoverPassword = async (email) => {
    try {
        const response = await axios.get(authUriRecoverPassword + "/" + email);
        return response.status;
    } catch (error) {
        const err = error.response.status + " " + error.response.data
        throw new Error(err)
    }
}

export const authValidateAuthToken = async (token) => {
    try {
        const response = await axios.get(authUriValidateAuthToken + '/' + token);
        return response.data;
    } catch (error) {
        const err = error.response.status + " " + error.response.data
        throw new Error(err)
    }
}

export const authAuthentication = async (email, password) => {
    try {
        const response = await axios.get(authUriAuthentication + '/' + email + '/' + password);
        return response.data;
    } catch (error) {
        const err = error.response.status + " " + error.response.data
        throw new Error(err)
    }
}

export const authChagePassword = async (passwordModel) => {
    try {
        const response = await axios.put(authUriChagePassword, passwordModel);
        return response.status;
    } catch (error) {
        const err = error.response.status + " " + error.response.data
        throw new Error(err)
    }
}

export const authAssignProfile = async (token) => {
    try {
        const response = await axios.put(authUriAssignProfile + "/" + token);
        return response.data;
    } catch (error) {
        const err = error.response.status + " " + error.response.data
        throw new Error(err)
    }
}

export const authVerifyAcount = async (email, vcode) => {
    try {
        const response = await axios.put(authUriVerifyAcount + "/" + email + "/" + vcode);
        return response.status;
    } catch (error) {
        const err = error.response.status + " " + error.response.data
        throw new Error(err)
    }
}