export const queries = `
profileUsers:[profileUser]
profileTrainers:[profileTrainer]
profileDegreesByTrainers(idTrainer:ID!):[profileDegree]
profileSpecialities:[profileSpeciality]
profileTrainersBySpeciality(idSpeciality:ID!):[profileTrainer]
profileUser(idUser:ID!):profileUser
profileTrainer(idTrainer:ID!):profileTrainer
`

export const mutations = `
createProfileUser(body:inputProfileUser!):profileUser
createProfileTrainer(body:inputProfileTrainer!):profileTrainer
createProfileSpeciality(body:inputProfileSpeciality!):profileSpeciality
createProfileDegree(body:inputProfileDegree!):profileDegree
createProfileTrainerSpeciality(body:inputProfileTrainerSpeciality):profileTrainerSpeciality

deleteProfileUser(idUser:ID!):String

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
    trainer:Int!
}

input inputProfileTrainerSpeciality{
    trainer:ID!
    speciality:ID!
}

`
