export const queries = `
hello:String
chatsUsers(_id:ID!):[Chat]
chatsTrainers(_id:ID!):[Chat]
chatTrainerUser(_id:ID! , userId:ID!): Chat
chatUserTrainer(_id:ID!, trainerId:ID!): Chat
`

export const mutations = `
taskHello:String
createChatTrainerUser(_id:ID! , userId:ID!) : Chat
createChatUserTrainer(_id:ID! , trainerId:ID!) : Chat
createMessageTrainerUser(_id:ID!, chatId:ID!, message : InputMessage!) : Message
createMessageUserTrainer(_id:ID!, chatId:ID!, message : InputMessage!) : Message
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
    id_autor:ID
    content:String!
}

input InputMessage{
    _id:ID
    date:String
    id_autor:ID
    content:String!
}
`