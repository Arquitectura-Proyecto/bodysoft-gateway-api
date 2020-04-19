import { merge } from "lodash";

import resolversChat from "./chat";
import resolversAuthentication from "./authentication";
import resolversProfile from "./profile";
import resolversRoutine  from "./routine";
import resolversSession from "./session";
const { GraphQLJSON, GraphQLJSONObject } = require('graphql-type-json');
const resolvers = merge({JSON:GraphQLJSON},resolversChat,resolversAuthentication,resolversProfile,resolversRoutine,resolversSession)

export default resolvers;