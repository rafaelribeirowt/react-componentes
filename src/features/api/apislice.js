import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const prodApi = createApi({
    reducerPath: 'produtos',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8001'}),
    endpoints:(builder) => ({
        getProds: builder.query({
            query: () => '/produtos'
        }),
        getProdsbyId: builder.query({
            query: (id) => `/produtos/${id}`
        }),
    }),
});

export const{
    useGetProdsQuery,
    useGetProdsbyIdQuery
} = prodApi


