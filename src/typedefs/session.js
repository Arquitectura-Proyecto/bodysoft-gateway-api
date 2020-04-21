export const queries = `
getAllbyId(Token:String!):[Schudele]
getCurrentbyId(Token:String!):[Schudele]
getbyIdSchedules(User:String!, schedule: Int!):Schudele
getAllbyCoachAvaibles(User:String!, coach: Int!):[Schudele]
`

export const mutations = `
registerSchedules(schedule:Schedule!):Schudele
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
type Schudele{
    id_schedule:Int
    idCoach:Int
    daySession:String
    iniTime:String
    endTime:String
    status:Session_Status
    idUser:Int
}
`
