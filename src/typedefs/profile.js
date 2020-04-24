export const queries = `
profileUsers:[profileUser]
profileTrainers:[profileTrainer]
profileDegreesByTrainers(idTrainer:ID!):[profileDegree]
profileSpecialities:[profileSpeciality]
profileTrainersBySpeciality(idSpeciality:ID!):[profileTrainer]
profileUser(token:String!):profileUser
profileTrainer(token:String!):profileTrainer


profileLoad(token:String!):profileLoad
`

export const mutations = `
createProfile(body:inputProfile,token:String):String
createProfileSpeciality(body:inputProfileSpeciality!):profileSpeciality
createProfileDegree(body:inputProfileDegree!, token:String!):profileDegree
createProfileTrainerSpeciality(body:inputProfileTrainerSpeciality!, token:String):profileTrainerSpeciality

deleteProfileUser(token:String!):String
deleteProfileTrainer(token:String!):String
deleteProfileSpeciality(idSpeciality:ID!):String
deleteProfileDegree(idDegree:ID!, token:String!):String
deleteProfileTrainerSpeciality(idSpeciality:ID!, token:String!): String

updateProfileUser(body:updProfileUser!, token:String!):profileUser
updateProfileTrainer(body:updProfileTrainer!, token:String!):profileTrainer
updateProfileDegree(body:updProfileDegree!, token:String!):profileDegree
updateProfileSpeciality(body:updProfileSpeciality!):profileSpeciality


`

export const typeDefs =`
type profileUser{
    user_id:ID
    user_name:String
    age:Int
    photo:String
    telephone:String
    city:String
}

type profileTrainer{
    trainer_id:ID
    trainer_name:String
    age:Int
    photo:String
    telephone:String
    city:String
    sum_ratings:Int
    num_ratings:Int
    description:String
    work_experience:String
    resources:String
    specialities:[String]
}

type profileDegree{
    degree_id:ID
    degree_name:String
    year:Int
    institution:String
    trainer:Int
}

type profileSpeciality{
    speciality_id:ID
    speciality_name:String
}

type profileTrainerSpeciality{
    trainer:ID
    speciality:ID
}


type profileLoad{
    trainer_id:ID
    user_id:ID
    trainer_name:String
    user_name:String
    age:Int
    photo:String
    telephone:String
    city:String
    sum_ratings:Int
    num_ratings:Int
    description:String
    work_experience:String
    resources:String
    specialities:[String]
}

input inputProfile{
    name:String!
    age:Int!
    photo:String!
    telephone:String!
    city:String!
    sum_ratings:Int
    num_ratings:Int
    description:String
    work_experience:String
    resources:String
}

input inputProfileUser{
    user_id:ID!
    user_name:String!
    age:Int!
    photo:String!
    telephone:String!
    city:String!
}

input inputProfileTrainer{
    trainer_id:ID!
    trainer_name:String!
    age:Int!
    photo:String!
    telephone:String!
    city:String!
    sum_ratings:Int!
    num_ratings:Int!
    description:String!
    work_experience:String!
    resources:String!
}

input inputProfileSpeciality{
    speciality_name:String!
}

input inputProfileDegree{
    degree_name:String!
    year:Int!
    institution:String!
}

input inputProfileTrainerSpeciality{
    speciality:ID!
}


input updProfileUser  {
    user_name:String!
    age:Int!
    photo:String!
    telephone:String!
    city:String!
}

input updProfileTrainer {
    trainer_name:String!
    age:Int!
    photo:String!
    telephone:String!
    city:String!
    sum_ratings:Int!
    num_ratings:Int!
    description:String!
    work_experience:String!
    resources:String!
}

input updProfileDegree {
    degree_id:ID!
    degree_name:String!
    year:Int!
    institution:String!
}

input updProfileSpeciality {
    speciality_id:ID!
    speciality_name:String!
}

`

