import { createSlice } from "@reduxjs/toolkit";

const initialUserState =
    {
        id:null,
        taskDate: null,
        dailyTasks:[],
        fitnessDetails: {},
        personalDetails: {},
        userBgDetails: {},
        history: [],
    };

const userSlice = createSlice({
    name: "user",
    initialState: initialUserState,
    reducers : {
        PushUserData(state, action){
            const data = action.payload;
            state.id = data.id;
            state.dailyTasks.push(...data.dailyTasks);
            state.fitnessDetails = data.fitnessDetails;
            state.personalDetails = data.personalDetails;
            state.userBgDetails = data.userBgDetails;
        },
        addDailyTask(state, action){
            state.dailyTasks.push(action.payload);
        },
        removeDailyTask(state, action){
            state.dailyTasks.splice(state.dailyTasks.findIndex((arrow)=>arrow.id === action.payload),1);
        },
        setIsComplete(state, action){
            const {id, status} = action.payload;
            for(let i = 0; i<state.dailyTasks.length; i++){
                if(state.dailyTasks[i].id===id){
                    state.dailyTasks[i] = {...state.dailyTasks[i], isComplete: status};
                    break;
                }
            }
        },
        PopuserData(state){
            state.id = null;
            state.taskDate =  null,
            state.dailyTasks = [];
            state.fitnessDetails = {};
            state.personalDetails = {};
            state.userBgDetails = {};
        }
    }
});

export const {PushUserData, PopuserData, addDailyTask, setIsComplete, removeDailyTask} = userSlice.actions;
export default userSlice.reducer;