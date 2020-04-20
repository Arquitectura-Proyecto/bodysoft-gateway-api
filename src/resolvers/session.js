import { registerSchedule, deleteSchedule,setAdate,calcelUser,calcelCoach} from "../data/index";
import {getAllbyIdCoach,getAllbyIdUser,getAllbyCoachCurrent,getAllbyUserCurrent,getbyIdSchedule}from "../data/index";
import {authValidateAuthToken} from "../data/index";
const resolvers = {
    Query:{
        async getAllbyIdCoachs(_,{Coach}){
            
                const validate = await authValidateAuthToken(Coach);
                const response = await getAllbyIdCoach(validate.ID);
                
                return response;
        },
        async getAllbyIdUsers(_,{User}){
            
                const validate = await authValidateAuthToken(User);
                const response = await getAllbyIdUser(validate.ID);
                
                return response;
            
        },
        async getCurrentbyIdCoachs(_,{Coach,User}){
            
                const validate = await authValidateAuthToken(User);
                const response = await getAllbyCoachCurrent(Coach);
                
                return response;
            
        },
        async getCurrentbyIdUsers(_,{User}){
            
                const validate = await authValidateAuthToken(User);
                const response = await getAllbyUserCurrent(validate.ID);
                
                return response;
            
        },
        async getbyIdSchedules(_,{User,schedule}){
            
                const validate = await authValidateAuthToken(User);
                const response = await getbyIdSchedule(schedule);
                
                return response;
            
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
                const response = await registerSchedule(schedule);
                
                return response;
             
            
        },

        async deleteSchedules(_,{ChangeStatus}){
            
                const validate = await authValidateAuthToken(ChangeStatus.token);
                ChangeStatus ={
                    "person": validate.ID,
                    "schedule": ChangeStatus.schedule
                    
                }
                const response = await deleteSchedule(ChangeStatus);
                
                return response;
            
            
        },
        async setAdates(_,{ChangeStatus}){
            
                const validate = await authValidateAuthToken(ChangeStatus.token);
                ChangeStatus ={
                    "person": validate.ID,
                    "schedule": ChangeStatus.schedule
                    
                }
                const response = await setAdate(ChangeStatus);
                
                return response;
            
            
        },
        async CancelADate(_,{ChangeStatus}){
            
                const validate = await authValidateAuthToken(ChangeStatus.token);
                ChangeStatus ={
                    "person": validate.ID,
                    "schedule": ChangeStatus.schedule
                    
                }
                if(validate.TypeID===1){
                    const response = await calcelCoach(ChangeStatus);
                    return response;
                }
                else{
                    const response = await calcelUser(ChangeStatus);   
                    return response;
                }
                
        
            
        }
        
    }
    
    
}
    


export default resolvers;