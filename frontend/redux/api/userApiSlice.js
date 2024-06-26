import { USERS_URL } from "../constants.js";
import { apiSlice } from "./apiSlice.js";

export const userApiSlice=apiSlice.injectEndpoints({
  endpoints:(builder)=>({
    register:builder.mutation({
      query:(data)=>({
        url:`${USERS_URL}`,
        method:"POST",
        body:data

      })
    }),



  })
})
export const {useRegisterMutation}=userApiSlice;