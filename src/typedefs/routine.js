export const queries = `
getAllRoutines:[Routine]!
`

export const mutations = `
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

`