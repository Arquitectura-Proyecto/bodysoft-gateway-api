import typeDefs from "./typedefs/index";
import resolvers from "./resolvers/index";
import { makeExecutableSchema } from "graphql-tools";

export default makeExecutableSchema({
    typeDefs,
    resolvers
})