import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:3000";

export const api = createApi({
    baseQuery : fetchBaseQuery({baseUrl : BASE_URL}),
    tagTypes: ['Users'],
    endpoints : (builder) =>({
        getUsers: builder.query({
            query: () => '/users',
            providesTags: ['Users'],
        }),
        registerUser : builder.mutation({
            query: (registerData) =>({
                url: "/users",
                method: "POST",
                body: registerData,
            }),
            invalidatesTags: ['Users'],
        }),
        // updateTask : builder.mutation({
        //     query: ({id, ...updatedTask}) =>({
        //         url: `/tasks/${id}`,
        //         method: "PATCH",
        //         body: updatedTask
        //     }),
        //     invalidatesTags: ['Tasks'],
        //     async onQueryStarted({id, ...updatedTask},{dispatch, queryFulfilled}){
        //         const patchResult = dispatch(
        //             api.util.updateQueryData("getTasks", undefined, (draft)=>{
        //                 const indx = draft.findIndex((el)=>el.id===id);
        //                 draft[indx] = {...draft[indx], ...updatedTask};
        //             })
        //         )
        //         try{
        //             await queryFulfilled
        //         }
        //         catch{
        //             patchResult.undo();
        //         }
        //     }
        // }),
        // deleteTask : builder.mutation({ 
        //     query: (id) =>({
        //         url: `/tasks/${id}`,
        //         method: "DELETE",
        //     }),
        //     invalidatesTags: ['Tasks'],
        //     async onQueryStarted(id, {dispatch, queryFulfilled}){
        //         const patchResult = dispatch(
        //             api.util.updateQueryData("getTasks", undefined, (draft)=>{
        //                 const index = draft.findIndex((el)=>el.id===id);
        //                 draft.splice(index, 1);
        //             })
        //         )
        //         try{
        //             await queryFulfilled
        //         }
        //         catch{
        //             patchResult.undo();
        //         }
        //     }
        // }),

    })
})

export const {useGetUsersQuery, useRegisterUserMutation} = api
