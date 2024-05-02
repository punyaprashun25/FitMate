import { createSlice } from "@reduxjs/toolkit";
import { useGetUsersQuery } from "./apiSlice";

const globalSlice = createSlice({
    name: "user",
    initialState: {
        IsLoggedIn: false,
    },
    reducers : {
        setUserLoggedIn(state, action){
            state.IsLoggedIn = action.payload;
        },
    }
});

export const {setUserLoggedIn} = globalSlice.actions;
export default globalSlice.reducer;