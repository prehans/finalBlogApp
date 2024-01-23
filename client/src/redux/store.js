import {createSlice, configureStore} from '@reduxjs/toolkit'
const authSlice = createSlice({
    name:"auth",
    initialState:{
       isLogin:false
    },
    reducers:{
         Login(state){
            state.isLogin = true;
         },
         Logout(state){
            state.isLogin = false;
         }
    }
});
export const authActions = authSlice.actions
export const store = configureStore({
 reducer:authSlice.reducer,
})