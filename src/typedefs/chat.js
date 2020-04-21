export const queries = `
chatsUsers(token:String!):[Chat]
chatsTrainers(token:String!):[Chat]
chatTrainerUser(token:String! , userId:ID!): Chat
chatUserTrainer(token:String!, trainerId:ID!): Chat
`

export const mutations = `
createChatTrainerUser(token:String! , userId:ID!) : Chat
createChatUserTrainer(token:String! , trainerId:ID!) : Chat
createMessageTrainerUser(token:String!, chatId:ID!, message : InputMessage!) : Message
createMessageUserTrainer(token:String!, chatId:ID!, message : InputMessage!) : Message
`

export const typeDefs =`
type Chat{
    _id:ID
    date:String
    id_user:ID
    id_trainer:ID
    messages:[Message]
}
type Message{
    _id:ID
    date:String
    id_author:ID
    content:String!
}

input InputMessage{
    content:String!
}
`