
import { configureStore } from "@reduxjs/toolkit"
import { produtosReducer } from '../features/produtos/prodSlice';
import {prodApi} from '../features/api/apislice'; 
import { setupListeners } from '@reduxjs/toolkit/query/react'

export const store = configureStore({
    reducer: {
      produtos: produtosReducer,
      [prodApi.reducerPath]: prodApi.reducer 
    },
    middleware: (getDefaultMiddleware) => 
       getDefaultMiddleware().concat(prodApi.middleware),
        
      })

  setupListeners(store.dispatch)

  export{
useGetProdsQuery,
useGetProdsbyIdQuery
  } from '../features/api/apislice'