import * as chat from "./chat/chat";
import * as authentication from "./authentication/authentication";
import * as profile from "./profile/profile";
import * as routine from "./routine/routine";
import * as session from "./session/session";

export * from "./chat/chat";
export * from "./authentication/authentication";
export * from "./profile/profile";
export * from "./routine/routine";
export * from "./session/session";

const apis = {...chat,...authentication,...profile,...routine,...session}

export default apis;