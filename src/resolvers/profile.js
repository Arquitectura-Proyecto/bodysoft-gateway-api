import * as Profile from "../data/profile/profile";

const resolvers = {
    Query:{
        async profileUsers(_){
            const response = await Profile.getProfileUsers();
            return response;
        },
        async profileTrainers(_){
            const response = await Profile.getProfileTrainers();
            return response;
        },
        async profileDegreesByTrainers(_, {idTrainer}){
            const response = await Profile.getDegreesByTrainers(idTrainer);
            return response;
        },
        async profileSpecialities(_){
            const response = await Profile.getProfileSpecialities();
            return response;
        },
        async profileTrainersBySpeciality(_,{idSpeciality}){
            const response = await Profile.getTrainersBySpeciality(idSpeciality);
            return response;
        },
        async profileUser(_,{idUser}){
            const response = await Profile.getProfileUser(idUser);
            return response;
        },
        async profileTrainer(_,{idTrainer}){
            const response = await Profile.getProfileTrainer(idTrainer);
            return response;
        }
    },
    Mutation:{
        async createProfileUser(_,{body}){
            const response = await Profile.postProfileUser(body);
            return response;
        },
        async createProfileTrainer(_,{body}){
            const response = await Profile.postProfileTrainer(body);
            return response;
        },
        async createProfileSpeciality(_,{body}){
            const response = await Profile.postProfileSpeciality(body);
            return response;
        },
        async createProfileDegree(_,{body}){
            const response = await Profile.postProfileDegree(body);
            return response;
        },
        async createProfileTrainerSpeciality(_,{body}){
            const response = await Profile.postProfileTrainerSpeciality(body);
            return response;
        },

        async deleteProfileUser(_,{idUser}){
            const response = await Profile.deleteProfileUser(idUser);
            return response.status;
        }
    }
}

export default resolvers;