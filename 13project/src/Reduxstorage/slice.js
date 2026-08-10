import {createSlice} from '@reduxjs/toolkit'


const initialState={
    value:0
}


const addtoCart = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addItem:(state)=>{
            state.value+=1
        },
        removeItem:(state)=>{
             state.value>0 ? state.value-=1 : null
        },
        clearCart:(state)=>{
            state.value=0
        }
    }
})

export const {addItem, removeItem, clearCart} = addtoCart.actions


export default addtoCart.reducer