export const queries = `
getAllbyIdCoachs(Coach:String!):[Schudele]
getAllbyIdUsers(User:String!):[Schudele]
getCurrentbyIdCoachs(Coach:Int!, User:String!):[Schudele]
getCurrentbyIdUsers(User:String!):[Schudele]
getbyIdSchedules(User:String!, schedule: Int!):Schudele
`

export const mutations = `
registerSchedules(schedule:Schedule!):String
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

type Status{
    id:Int
    nameStatus:String
}
type Schudele{
    id_schedule:Int
    idCoach:Int
    daySession:String
    iniTime:String
    endTime:String
    status:Status
    idUser:Int
}
`
