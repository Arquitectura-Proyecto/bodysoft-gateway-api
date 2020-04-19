import { authUriCreateUser, authUriGetTypes, authUriRecoverPassword, authUriVerifyAcount, authUriValidateAuthToken , authUriAuthentication, authUriChagePassword} from "./server";
import axios from "axios";

export const authCreateUser = async (userData) => {
    try {
        const response = await axios.post(authUriCreateUser, userData);
        console.log(response.status)
        return response.status;
    } catch (error) {
        var err = error.response.status + " " + error.response.data
        throw new Error(err)
    }
}

export const authGetTypes = async () => {
    try {
        const response = await axios.get(authUriGetTypes);
        console.log(response.data)
        return response.data;
    } catch (error) {
        var err = error.response.status + " " + error.response.data
        throw new Error(err)
    }
}

export const authRecoverPassword = async (email) => {
    try {
        const response = await axios.get(authUriRecoverPassword + "/" + email);
        console.log(response.status)
        return response.status;
    } catch (error) {
        var err = error.response.status + " " + error.response.data
        throw new Error(err)
    }
}

export const authVerifyAcount = async (email, vcode) => {
    try {
        const response = await axios.get(authUriVerifyAcount + "/" + email + "/" + vcode);
        console.log(response.status)
        return response.status;
    } catch (error) {
        var err = error.response.status + " " + error.response.data
        throw new Error(err)
    }
}

export const authValidateAuthToken = async (token) => {
    try {
        const response = await axios.get(authUriValidateAuthToken + '/' + token);
        console.log(response.data)
        return response.data;
    } catch (error) {
        var err = error.response.status + " " + error.response.data
        throw new Error(err)
    }
}

export const authAuthentication = async (email, password) => {
    try {
        const response = await axios.get(authUriAuthentication + '/' + email + '/' + password);
        console.log(response.data)
        return response.data;
    } catch (error) {
        var err = error.response.status + " " + error.response.data
        throw new Error(err)
    }
}

export const authChagePassword = async (passwordModel) => {
    try {
        const response = await axios.put(authUriChagePassword, passwordModel);
        console.log(response.status)
        return response.status;
    } catch (error) {
        var err = error.response.status + " " + error.response.data
        throw new Error(err)
    }
}