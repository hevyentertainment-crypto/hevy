import { apiSlice } from './service'

const adminSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (formDetails) => ({
                url: '/auth',
                method: 'POST',
                body: {...formDetails}
            })
        }),
        
        generateLink: builder.mutation({
            query: (formDetails) => ({
                url: '/song',
                method: 'POST',
                body: formDetails
            })
        }),

        getUploadedSongs: builder.query({
            query: () => ({
                url: '/song',
                method: 'GET'
            })
        }),

        getBrand: builder.query({
            query: (id) => ({
                url: `/song/${id}`,
                method: 'GET'
            })
        }),

        forgotPassword: builder.mutation({
            query: (formDetails) => ({
                url: '/auth/forgot',
                method: 'POST',
                body: {...formDetails}
            })
        }),

        
    })
})

export const { useLoginMutation, useGenerateLinkMutation, useGetUploadedSongsQuery, useGetBrandQuery, useForgotPasswordMutation } = adminSlice