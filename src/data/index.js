import * as authentication from "./authentication/authentication";
import * as profile from "./profile/profile";
import * as session from "./session/session";

export * from "./authentication/authentication";
export * from "./profile/profile";
export * from "./session/session";

const apis = {...authentication,...profile,...session}

export default apis;