import { configureStore } from "@reduxjs/toolkit";
import empreducer from './edata.js'

export const store = configureStore({
   reducer:{
        emp : empreducer
    }

})