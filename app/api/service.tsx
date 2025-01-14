import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from 'js-cookie'

export const apiSlice =  createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://hevy.onrender.com/',
        prepareHeaders: (headers: Headers) => {
            const token = Cookies.get('token');
           
            if(token){
              const tokenData = JSON.parse(token)
              headers.set('Authorization', `Bearer ${tokenData}`);
            }
            return headers;
          },
      
    } ),
    endpoints: (builder) => ({})
    // tagTypes: ['refreshUsers']
})


