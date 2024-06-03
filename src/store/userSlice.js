import { createSlice } from "@reduxjs/toolkit";

const initialUserState =
{
    id: null,
    taskDate: null,
    dailyTasks: [],
    history: [],
    personalDetails: {},
    fitnessDetails: {},
    dietDetails: {},
    activityDetails: {},
    healthDetails: {}
    
};

const userSlice = createSlice({
    name: "user",
    initialState: initialUserState,
    reducers: {
        PushUserData(state, action) {
            const data = action.payload;
            state.id = data.id;
            state.dailyTasks = data.dailyTasks;
            state.history = data.history;
            state.personalDetails = data.personalDetails;
            state.fitnessDetails = data.fitnessDetails;
            state.dietDetails = data.dietDetails;
            state.activityDetails = data.activityDetails;
            state.healthDetails = data.healthDetails;
        },
        addDailyTask(state, action) {
            state.dailyTasks.push(action.payload);
        },
        removeDailyTask(state, action) {
            state.dailyTasks.splice(state.dailyTasks.findIndex((arrow) => arrow.id === action.payload), 1);
        },
        setIsComplete(state, action) {
            const { id, status } = action.payload;
            for (let i = 0; i < state.dailyTasks.length; i++) {
                if (state.dailyTasks[i].id === id) {
                    state.dailyTasks[i] = { ...state.dailyTasks[i], isComplete: status };
                    break;
                }
            }
            
        },
        PopuserData(state) {
            state.id = null;
            state.taskDate = null,
                state.dailyTasks = [];
            state.fitnessDetails = {};
            state.personalDetails = {};
            state.userBgDetails = {};
        },
        updateUserDetails(state, action) {
            const data = action.payload;
            state.personalDetails.name = data.name;
            state.fitnessDetails.height = data.height;
            state.fitnessDetails.weight = data.weight;
            state.fitnessDetails.BmiValue = data.bmiValue;
        },
        addHistory(state, action){
            state.history.push(action.payload);
        },
        removeHistory(state, action){
            state.history.splice(state.history.findIndex((arrow) => arrow.id === action.payload), 1);
        }
    }
});

export const { PushUserData, PopuserData, addDailyTask, setIsComplete, removeDailyTask, updateUserDetails, addHistory, removeHistory } = userSlice.actions;
export default userSlice.reducer;