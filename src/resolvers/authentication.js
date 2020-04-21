import {
    authCreateUser,
    authGetTypes,
    authRecoverPassword,
    authValidateAuthToken,
    authAuthentication,
    authChagePassword,
    authAssignProfile,
    authVerifyAcount,
} from "../data/index";

const resolvers = {
    Query: {
        async authGetTypes() {
            const response = await authGetTypes();
            return response;
        },
        async authRecoverPassword(_, { email }) {
            const response = await authRecoverPassword(email);
            return response;
        },
        async authValidateAuthToken(_, { token }) {
            const response = await authValidateAuthToken(token);
            return response;
        },
        async authAuthentication(_, { email, password }) {
            const response = await authAuthentication(email, password);
            return response;
        },
    },
    Mutation: {
        async authCreateUser(_, { authUserData }) {
            const response = await authCreateUser(authUserData);
            return response;
        },
        async authChagePassword(_, { authChangePass }) {
            const response = await authChagePassword(authChangePass);
            return response;
        },
        async authAssignProfile(_, { token }) {
            const response = await authAssignProfile(token);
            return response;
        },
        async authVerifyAcount(_, { email, vcode }) {
            const response = await authVerifyAcount(email, vcode);
            return response;
        }
    }
}

export default resolvers;