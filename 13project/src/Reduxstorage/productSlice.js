import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const productSlice = createAsyncThunk('products', async ()=>{
    const items = await fetch('https://dummyjson.com/products')
    const itemsjson = await items.json()
    return itemsjson
})

const initialState={
    item:[],
    status:'',
    error:null

}


const productslice = createSlice({
    name:'items',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(productSlice.fulfilled,(state,action)=>{
            state.status= 'succeeded',
            state.items=action.payload
        })

    }
})

export default productslice.reducer