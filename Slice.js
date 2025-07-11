import { createSlice } from "@reduxjs/toolkit";


const slice=createSlice(
    {
        name:"shop",
        initialState:{
            items:[]
        },
        reducers:{
            addItem:(state,action)=>{
                const itemExist=state.items.some(ite=>ite.id===action.payload.id)
                if(!itemExist)
                {
                    state.items.push(action.payload)
                }
                else
                {
                    window.alert("item already added into cart")
                }
                
            },
            removeitem: (state, action) => {              
                const itemIndex = state.items.findIndex(ite => ite.id === action.payload.id);
                console.log("hi");
                if (itemIndex !== -1) {
                    console.log("hi");
                    state.items.splice(itemIndex, 1);
                }
            },
            clearCart:(state,action)=>{
                state.items.length==0;
            }
            
        }
    }
)
export const {addItem,removeitem,clearCart}=slice.actions;
export default slice.reducer;