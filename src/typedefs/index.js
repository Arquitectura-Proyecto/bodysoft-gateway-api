import { queries as queriesAuthentication, mutations as mutationsAuthentication, typeDefs as typeDefsAuthentication } from "./authentication";
import { queries as queriesProfile, mutations as mutationsProfile, typeDefs as typeDefsProfile } from "./profile";
import { queries as queriesSession, mutations as mutationsSession, typeDefs as typeDefsSession } from "./session";

const typeQuery = `
type Query{
    ${queriesAuthentication}
    ${queriesProfile}
    ${queriesSession}
}
`

const typeMutation = `
type Mutation{
    ${mutationsAuthentication}
    ${mutationsProfile}
    ${mutationsSession}
}
`

const typeDefs = [typeQuery, typeMutation, typeDefsAuthentication, typeDefsProfile, typeDefsSession]

export default typeDefs;