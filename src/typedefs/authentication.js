export const queries = `
    authGetTypes: [authType]
    authRecoverPassword(email: String!): String
    authValidateAuthToken(token: String!): authSessionData
    authAuthentication(email: String!, password: String!): authToken
`

export const mutations = `
    authCreateUser(authUserData: authUserData!): String
    authChagePassword(authChangePass: authChangePass!): String
    authAssignProfile(token: String!): authToken
    authVerifyAcount(email: String!, vcode: Int!): String
`

export const typeDefs =`
type authType {
    ID: Int
    CreatedAt: String
    UpdatedAt: String
    DeletedAt: String
    Name: String
}

type authSessionData {
    ID: Int
    TypeID: Int
    Profile: Boolean
}

type authToken {
    Token: String
}

input authUserData {
    Email: String!
    Password: String!
    TypeID: Int!
}

input authChangePass {
    Token: String!
    Password: String!
    NewPassword: String!
}
`