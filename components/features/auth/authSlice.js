import { createSlice } from "@reduxjs/toolkit"
import { logOutAction, loginAction, registerAction } from "./authAction"

const initialState = {
  isError: false,
  errMsg: null,
  isLoading: false,
  isLoggedIn: false,
  userInfo: null,
  userToken: null,
  success: false,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetState: () => initialState,
  },
  extraReducers: (builder) => {
    //Register
    builder.addCase(registerAction.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(registerAction.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.isLoggedIn = true
      state.userInfo = payload
    })
    builder.addCase(registerAction.rejected, (state, payload) => {
      state.isLoading = false
      state.isError = true
      state.errMsg = payload.error.message
    })

    //Login
    builder.addCase(loginAction.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(loginAction.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.isLoggedIn = true
      state.userInfo = payload
    })
    builder.addCase(loginAction.rejected, (state, payload) => {
      state.isLoading = false
      state.isError = true
      if (payload.error.code === "auth/wrong-password") {
        state.errMsg = "The email or password you have entered is incorrect"
      }
      if (payload.error.code === "auth/user-not-found") {
        state.errMsg = "The account does not exist"
      }
    })

    //Logout
    builder.addCase(logOutAction.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(logOutAction.fulfilled, (state) => {
      state.isLoading = false
      state.isLoggedIn = false
      state.userInfo = null
    })
    builder.addCase(logOutAction.rejected, (state, payload) => {
      state.isLoading = false
      state.isError = true
      state.errMsg = payload.error.message
    })
  },
})

export const { resetState } = authSlice.actions

export default authSlice.reducer
