import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn : false

}

const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {}
});

export const {} = authSlice.actions

export default authSlice.reducer