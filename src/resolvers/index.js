import { merge } from "lodash";

import resolversAuthentication from "./authentication";
import resolversProfile from "./profile";
import resolversSession from "./session";

const resolvers = merge(resolversAuthentication,resolversProfile,resolversSession)

export default resolvers;