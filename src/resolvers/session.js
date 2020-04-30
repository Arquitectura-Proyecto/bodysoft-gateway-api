import { registerSchedule, deleteSchedule,setAdate,calcelUser,calcelCoach} from "../data/index";
import {getAllbyIdCoach,getAllbyIdUser,getAllbyCoachCurrent,getAllbyUserCurrent,getbyIdSchedule,getAllbyCoachAvaible}from "../data/index";
import {authValidateAuthToken} from "../data/index";
const resolvers = {
    Query:{
        async getAllbyId(_,{Token}){
            
                const validate = await authValidateAuthToken(Token);
                if(validate.TypeID==1){
                    const response = await getAllbyIdCoach(validate.ID);
                    return response.data;
                }
                else{
                    const response = await getAllbyIdUser(validate.ID);
                    return response.data;
                }
        },
        async getCurrentbyId(_,{Token}){
            
                const validate = await authValidateAuthToken(Token);
                if(validate.TypeID==1){
                    const response = await getAllbyCoachCurrent(validate.ID);
                    return response.data;
                }
                else{
                    const response = await getAllbyUserCurrent(validate.ID);
                    return response.data;
                }
            
        },
        async getbyIdSchedules(_,{User,schedule}){
            
                const validate = await authValidateAuthToken(User);
                const response = await getbyIdSchedule(schedule);
                
                return response.data;
            
        },
        async getAllbyCoachAvaibles(_,{User,coach}){
            
            const validate = await authValidateAuthToken(User);
            const response = await getAllbyCoachAvaible(coach);
            
            return response.data;
        
    }
    },
    Mutation:{
        async registerSchedules(_,{schedule}){
           
                const validate = await authValidateAuthToken(schedule.token);
                schedule ={
                    "idCoach": validate.ID,
                    "daySession": schedule.daySession,
                    "iniTime": schedule.iniTime,
                    "endTime": schedule.endTime,  
                }
                const response = await registerSchedule(schedule,validate.TypeID);
                
                return response.data;
             
            
        },

        async deleteSchedules(_,{ChangeStatus}){
            
                const validate = await authValidateAuthToken(ChangeStatus.token);
                ChangeStatus ={
                    "person": validate.ID,
                    "schedule": ChangeStatus.schedule
                    
                }
                const response = await deleteSchedule(ChangeStatus,validate.TypeID);
                
                return response.status;
            
            
        },
        async setAdates(_,{ChangeStatus}){
            
                const validate = await authValidateAuthToken(ChangeStatus.token);
                ChangeStatus ={
                    "person": validate.ID,
                    "schedule": ChangeStatus.schedule
                    
                }
                const response = await setAdate(ChangeStatus,validate.TypeID);
                
                return response.status;
            
            
        },
        async CancelADate(_,{ChangeStatus}){
            
                const validate = await authValidateAuthToken(ChangeStatus.token);
                ChangeStatus ={
                    "person": validate.ID,
                    "schedule": ChangeStatus.schedule
                    
                }
                if(validate.TypeID==1){
                    const response = await calcelCoach(ChangeStatus);
                    return response.status;
                }
                else{
                    const response = await calcelUser(ChangeStatus);   
                    return response.status;
                }      
            
        }
        
    }
    
    
}
    


export default resolvers;
