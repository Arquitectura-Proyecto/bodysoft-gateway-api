import { queries as queriesChat, mutations as mutationsChat, typeDefs as typeDefsChat } from "./chat";
import { queries as queriesAuthentication, mutations as mutationsAuthentication, typeDefs as typeDefsAuthentication } from "./authentication";
import { queries as queriesProfile, mutations as mutationsProfile, typeDefs as typeDefsProfile } from "./profile";
import { queries as queriesRoutine, mutations as mutationsRoutine, typeDefs as typeDefsRoutine } from "./routine";
import { queries as queriesSession, mutations as mutationsSession, typeDefs as typeDefsSession } from "./session";

const typeQuery = `
type Query{
    ${queriesChat}
    ${queriesAuthentication}
    ${queriesProfile}
    ${queriesRoutine}
    ${queriesSession}
}
`

const typeMutation = `
type Mutation{
    ${mutationsChat}
    ${mutationsAuthentication}
    ${mutationsProfile}
    ${mutationsRoutine}
    ${mutationsSession}
}
`

const typeDefs = [typeQuery, typeMutation, typeDefsChat, typeDefsAuthentication, typeDefsProfile, typeDefsRoutine, typeDefsSession,'scalar JSON']

export default typeDefs;