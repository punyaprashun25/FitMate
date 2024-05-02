import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import globalReducer from "./globalSlice";
import { api } from "./apiSlice";
const store = configureStore({
    reducer:{
        user: userReducer,
        globalState: globalReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddelware) => [...getDefaultMiddelware(), api.middleware],
});

export default store;