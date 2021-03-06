
export const host= process.env.ROUTINE_HOST||'http://localhost:8080/routine-ms'
export const uriRegisterRoutine =host+"/register/routine"
export const uriGetRoutineByIdOwner = host+"/routine/byIdOwner/"
export const uriUpdateRoutine= host+"/routine/update/"
export const uriGetAllRoutines=host + "/routine/getAll"
export const uriGetRoutineByType=host+ "/routine/getByType/"
export const uriRateRoutine=host+"/routine/raiting/"
export const uriRegisterRequest=host+"/request"
export const  uriDeleteRequest=host+"/request/"
export const uriGetRequestByRoutine=host +"/request/getByRoutine/"
export const uriRegisterResource=host+"/resources/register/"
export const uriGetResourcesByRoutine=host+"/resources/getByRoutine/"
export const uriUpdateResource=host+"/resources/update/"
export const uriDeleteResource=host  +"/resources/delete/"
export const uriGetUserRoutineAvailable=host +"/user-routine/getAvailable/"
export const uriRegisterUserRoutine=host+"/user-routine/register"
export const uriChangeStatusUserRoutine=host+"/user-routine/changeStatus/"
export const uriGetUserRoutineByUser=host+"/user-routine/get/"
export const uriGetAllStatus=host+"/status/getAll"
export const uriGetAllTypeRoutine=host+ "/typeRoutine/getAll"
export const uriGetAllTypeResource=host+"/typeResource/getAll"