import { configureStore } from "@reduxjs/toolkit";
import { addItem } from "./Slice";
import cartReducer from './Slice'
const appStore=configureStore(
    {
        reducer:{
            cart:cartReducer,
        }
    }
);
export default appStore;