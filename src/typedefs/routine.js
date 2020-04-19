
export const queries = `
getAllRoutines:[Routine]!
getRoutineByIdOwner(token:String!):[Routine]!
getRoutinesByType(idType:Int!):[Routine]!
getRequestByIdRoutine(idRoutine:Int!):[Request]!
getUserRoutineAvailable(token:String!):[UserRoutine]!
getUserRoutineByIdUser(token:String!):[UserRoutine]!
`
    //
export const mutations = `
createRoutine(newRoutine:RegisterRoutinePOJO!,token:String!):JSON
updateRoutine(idRoutine:Int!,routine:RegisterRoutinePOJO!,token:String!):JSON
rateRoutine(idRoutine:Int!,raitingRoutinePOJO:RaitingRoutinePOJO!,token:String!):JSON
registerRequest(registerRequestPOJO:RegisterRequestPOJO!,token:String!):JSON
deleteRequest(idRequest:Int!):JSON
registerResource(idRoutine:Int!,registerResourcePOJO:RegisterResourcePOJO!,token:String!):JSON
getResourceByIdRoutine(idRoutine:Int!,token:String!):[Resource]!
updateResource(idResource:Int!,registerResourcePOJO:RegisterResourcePOJO!,token:String!):JSON
deleteResource(idResource:Int!,token:String!):JSON
registerUserRoutine(registerUserRoutinePOJO:RegisterUserRoutinePOJO!,token:String!):JSON
changeStatusUserRoutine(changeStatusPOJO:ChangeStatusPOJO!,idRoutine:Int!,token:String!):JSON
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