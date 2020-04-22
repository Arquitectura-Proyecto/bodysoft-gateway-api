export const queries = `
getAllbyId(Token:String!):[Schedule_type]
getCurrentbyId(Token:String!):[Schedule_type]
getbyIdSchedules(User:String!, schedule: Int!):Schedule_type
getAllbyCoachAvaibles(User:String!, coach: Int!):[Schedule_type]
`

export const mutations = `
registerSchedules(schedule:Schedule!):Schedule_type
deleteSchedules(ChangeStatus: ChangeStatus!):String
setAdates(ChangeStatus: ChangeStatus!):String
CancelADate(ChangeStatus: ChangeStatus!):String
`

export const typeDefs =`
input ChangeStatus{
    token: String!
    schedule: Int!
}

input Schedule{
    token:String!
    daySession: String!
    iniTime: String!
    endTime: String!
}

type Session_Status{
    id_status:Int
    nameStatus:String
}
type Schedule_type{
    id_schedule:Int
    idCoach:Int
    daySession:String
    iniTime:String
    endTime:String
    status:Session_Status
    idUser:Int
}
`
