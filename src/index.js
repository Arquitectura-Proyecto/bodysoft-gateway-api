import express, { response } from "express";
import graphqlHTTP from "express-graphql";
import schema from "./schema";

import cors from "cors";

const app = express();

app.set('port',process.env.PORT || 3800)

app.use(cors());

app.use('/graphql',graphqlHTTP({
    graphiql:true,
    schema:schema
}));

app.listen(app.get('port'), ()=>console.log(`Server on port ${app.get('port')}`))
