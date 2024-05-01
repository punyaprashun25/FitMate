import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers : {
        PushUserData(state, action){
            state.push(action.payload);
        },
        PopuserData(state, action){
            state.splice(0,1);
        }
    }
});

export const {PushUserData, PopuserData} = userSlice.actions;
export default userSlice.reducer;