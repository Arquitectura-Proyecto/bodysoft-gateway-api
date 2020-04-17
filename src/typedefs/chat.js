export const queries = `
hello:String
chatsUsers(_id:ID!):[Chat]
`

export const mutations = `
taskHello:String
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
    content:String
}
`