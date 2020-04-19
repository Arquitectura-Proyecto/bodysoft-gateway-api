import { registerSchedule, deleteSchedule,setAdate,calcelUser,calcelCoach} from "../data/index";
import {getAllbyIdCoach}from "../data/index";
import {authValidateAuthToken} from "../data/index";
const resolvers = {
    Query:{
        async getAllbyIdCoachs(_,{Coach}){
            try {
                const validate = await authValidateAuthToken(Coach);
                const response = await getAllbyIdCoach(validate.ID);
                
                return response;
            } catch (error) {
                console.error(error)
            }
        }
    },
    Mutation:{
        async registerSchedules(_,{schedule}){
            try {
                const validate = await authValidateAuthToken(schedule.token);
                schedule ={
                    "idCoach": validate.ID,
                    "daySession": schedule.daySession,
                    "iniTime": schedule.iniTime,
                    "endTime": schedule.endTime,  
                }
                const response = await registerSchedule(schedule);
                
                return response;
            } catch (error) {
                console.error(error)
            }
            
        },

        async deleteSchedules(_,{ChangeStatus}){
            try {
                const validate = await authValidateAuthToken(ChangeStatus.token);
                ChangeStatus ={
                    "person": validate.ID,
                    "schedule": ChangeStatus.schedule
                    
                }
                const response = await deleteSchedule(ChangeStatus);
                
                return response;
            } catch (error) {
                console.error(error)
            }
            
        },
        async setAdates(_,{ChangeStatus}){
            try {
                const validate = await authValidateAuthToken(ChangeStatus.token);
                ChangeStatus ={
                    "person": validate.ID,
                    "schedule": ChangeStatus.schedule
                    
                }
                const response = await setAdate(ChangeStatus);
                
                return response;
            } catch (error) {
                console.error(error)
            }
            
        },
        async CancelADate(_,{ChangeStatus}){
            try {
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
                
            } catch (error) {
                console.error(error)
            }
            
        }
        
    }
    
    
}
    


export default resolvers;