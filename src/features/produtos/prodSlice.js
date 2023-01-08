import { createSlice } from '@reduxjs/toolkit'


const prodSlice= createSlice({
    name: 'produtos',
    initialState:{
        data:[],
        isLoading: false,
        erro:null,
    },
    reducers: {
        addData: (state, action) =>{
            state.data.push(action.payload)
        },
    },
    
})



export const {addData} = prodSlice.actions
export const produtosReducer = prodSlice.reducer