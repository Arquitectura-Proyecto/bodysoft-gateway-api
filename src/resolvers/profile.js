import * as Profile from "../data/profile/profile";
import * as Auth from  "../data/authentication/authentication";


const UNAUTHORIZED=401;
const isNotUserMessage="NO PUEDES REALIZAR ESTA ACCION PORQUE NO ERES UN USUARIO";
const isNotTrainerMessage="NO PUEDES REALIZAR ESTA ACCION PORQUE NO ERES ENTRENADOR";
const isNotUserError=new Error(UNAUTHORIZED+" "+"isNotUserMessage");
const isNotTrainerError=new Error(UNAUTHORIZED+" "+isNotTrainerMessage);

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


        async profileUser(_,{token}){
            const validate = await Auth.authValidateAuthToken(token);
            if (validate.TypeID != 1)
                throw isNotUserError;

            const response = await Profile.getProfileUser(validate.ID);
            return response;
        },
        async profileTrainer(_,{token}){
            const validate = await Auth.authValidateAuthToken(token);
            if (validate.TypeID != 2)
                throw isNotTrainerError;

            const response = await Profile.getProfileTrainer(validate.ID);
            return response;
        }
    },
    Mutation:{
        async createProfile(_,{body,token}){
            const validate = await Auth.authValidateAuthToken(token);

            if (validate.TypeID == 2){
                body.trainer_name=body.name;
                body.trainer_id=validate.ID;
                const response = await Profile.postProfileTrainer(body);
                await Auth.authAssignProfile(token);
                return response.status;
            }else{
                body.user_name=body.name;
                body.user_id=validate.ID;
                const response = await Profile.postProfileUser(body);
                await Auth.authAssignProfile(token);
                return response.status;
            }
            
        },

        async createProfileSpeciality(_,{body}){
            const response = await Profile.postProfileSpeciality(body);
            return response;
        },
        async createProfileDegree(_,{body,token}){
            
            const validate = await Auth.authValidateAuthToken(token);
            if (validate.TypeID != 2)
                throw isNotTrainerError;
            
            body.trainer=validate.ID;
            const response = await Profile.postProfileDegree(body);
            return response;
        },
        async createProfileTrainerSpeciality(_,{body, token}){

            const validate = await Auth.authValidateAuthToken(token);
            if (validate.TypeID != 2)
                throw isNotTrainerError;

            body.trainer=validate.ID;
            const response = await Profile.postProfileTrainerSpeciality(body);
            return response;
        },



        async deleteProfileUser(_,{token}){
            const validate = await Auth.authValidateAuthToken(token);
            if (validate.TypeID != 1)
                throw isNotTrainerError;
            
            const response = await Profile.deleteProfileUser(validate.ID);
            return response.status;
        },
        async deleteProfileTrainer(_,{token}){
            const validate = await Auth.authValidateAuthToken(token);
            if (validate.TypeID != 2)
                throw isNotTrainerError;
            
            const response = await Profile.deleteProfileTrainer(validate.ID);
            return response.status;
        },
        async deleteProfileSpeciality(_,{idSpeciality}){
            const response = await Profile.deleteProfileSpeciality(idSpeciality);
            return response.status;
        },
        async deleteProfileDegree(_,{idDegree, token}){
            const validate = await Auth.authValidateAuthToken(token);
            if (validate.TypeID != 2)
                throw isNotTrainerError;

            const response = await Profile.deleteProfileDegree(idDegree);
            return response.status;
        },
        async deleteProfileTrainerSpeciality(_,{idSpeciality, token}){
            const validate = await Auth.authValidateAuthToken(token);
            if (validate.TypeID != 2)
                throw isNotTrainerError;

            const response = await Profile.deleteProfileTrainerSpeciality(validate.ID,idSpeciality);
            return response.status;
        },


        async updateProfileUser(_,{body, token}){
            const validate = await Auth.authValidateAuthToken(token);
            if (validate.TypeID != 1)
                throw isNotUserError;

            body.user_id=validate.ID;
            const response = await Profile.updateProfileUser(validate.ID,body);
            return response;
        },

        async updateProfileTrainer(_,{body, token}){
            const validate = await Auth.authValidateAuthToken(token);
            if (validate.TypeID != 2)
                throw isNotTrainerError;

            body.trainer_id=validate.ID;
            const response = await Profile.updateProfileTrainer(validate.ID,body);
            return response;
        },

        async updateProfileDegree(_,{body, token}){
            const validate = await Auth.authValidateAuthToken(token);
            if (validate.TypeID != 2)
                throw isNotTrainerError;

            body.trainer=validate.ID;
            const response = await Profile.updateProfileDegree(body.degree_id,body);
            return response;
        },

        async updateProfileSpeciality(_,{body}){
            const response = await Profile.updateProfileSpeciality(body.speciality_id,body);
            return response;
        },
    }
}

export default resolvers;