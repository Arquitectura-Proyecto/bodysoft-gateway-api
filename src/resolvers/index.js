import { merge } from "lodash";

import resolversChat from "./chat";
import resolversAuthentication from "./authentication";
import resolversProfile from "./profile";
import resolversRoutine  from "./routine";
import resolversSession from "./session";

const resolvers = merge(resolversChat,resolversAuthentication,resolversProfile,resolversRoutine,resolversSession)

export default resolvers;