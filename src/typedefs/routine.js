
export const queries = `
getAllRoutines:[Routine]!
getRoutineByIdOwner(token:String!):[Routine]!
getRoutinesByType(idType:Int!):[Routine]!
getRequestByIdRoutine(idRoutine:Int!):[Request]!
getUserRoutineAvailable(token:String!):[UserRoutine]!
getUserRoutineByIdUser(token:String!):[UserRoutine]!
getAllStatus:[Status]!
getAllTypeRoutine:[TypeRoutine]!
getAllTypeResource:[TypeResource]!
`
    //
export const mutations = `
createRoutine(newRoutine:RegisterRoutinePOJO!,token:String!):String
updateRoutine(idRoutine:Int!,routine:RegisterRoutinePOJO!,token:String!):String
rateRoutine(idRoutine:Int!,raitingRoutinePOJO:RaitingRoutinePOJO!,token:String!):String
registerRequest(registerRequestPOJO:RegisterRequestPOJO!,token:String!):String
deleteRequest(idRequest:Int!):String
registerResource(idRoutine:Int!,registerResourcePOJO:RegisterResourcePOJO!,token:String!):String
getResourceByIdRoutine(idRoutine:Int!,token:String!):[Resource]!
updateResource(idResource:Int!,registerResourcePOJO:RegisterResourcePOJO!,token:String!):String
deleteResource(idResource:Int!,token:String!):String
registerUserRoutine(registerUserRoutinePOJO:RegisterUserRoutinePOJO!,token:String!):String
changeStatusUserRoutine(changeStatusPOJO:ChangeStatusPOJO!,idRoutine:Int!,token:String!):String
`

export const typeDefs =`

type Request{
id:ID!,
routine:Routine!,
idUser:Int!
}
type Resource{
id:ID!,
routine:Routine!,
link:String!,
title:String!,
description:String!,
position:Int!,
type:TypeResource!
}
type Routine{
id:ID!,
idOwner:Int!,
rating:Float!,
numRaitings:Int!,
price:Float!,
name:String!,
description:String!,
linkPreview:String!,
type:TypeRoutine!
}

type Status{
id:ID!,
name:String!
}
type TypeResource{
id:ID!,
name:String!
}
type TypeRoutine{
id:ID!,
name:String!
}
type UserRoutine{
id:ID!,
idUser:Int!,
routine:Routine!,
status:Status!,
qualified:Boolean!
}
input RegisterRoutinePOJO{

  
  price: Float!,
  name: String!,
  description: String!,
  link_preview: String!,
  idType: Int!

}
input RaitingRoutinePOJO{
raiting:Float!
}
input RegisterRequestPOJO{
idRoutine:Int!
}
input RegisterResourcePOJO{
link:String!,
title:String!,
description:String!,
position:Int!,
idType:Int!
}
input RegisterUserRoutinePOJO{
idUser:Int!,
idRoutine:Int!,
idStatus:Int!
}
input ChangeStatusPOJO
{
idStatus:Int!

}

`