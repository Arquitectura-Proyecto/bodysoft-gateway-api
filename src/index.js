import express, { response } from "express";
import graphqlHTTP from "express-graphql";
import schema from "./schema";
import {postTrainerUserChat,postUserTrainerChat, postMessageTrainer, postMessageUser} from "./data/index"

const app = express();

app.set('port',process.env.PORT || 3000)

app.use('/graphql',graphqlHTTP({
    graphiql:true,
    schema:schema
}));
//
// startUserTrainerChat(1,3).then(e => {
//     console.log(e)
// })
//
// startTrainerUserChat(1,1).then(e => {
//     console.log(e)
// })
//
// sendMessageTrainer(1, "5e9b25dd6f269427b6075c3c", {content : "Helllo123!!!"} )
//     .then(e =>{
//     console.log(e)
// })
//
// sendMessageUser(1, "5e9b27c86f269427b6075c3d", {content : "Test123!!!"} )
//     .then(e =>{
//         console.log(e)
//     })
app.listen(app.get('port'), ()=>console.log(`Server on port ${app.get('port')}`))