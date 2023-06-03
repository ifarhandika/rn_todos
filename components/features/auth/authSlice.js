import { createSlice } from "@reduxjs/toolkit"
import { logOutAction, loginAction } from "./authAction"

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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginAction.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(loginAction.fulfilled, (state, { payload }) => {
      console.log("fulfilledpayload", payload)
      state.isLoading = false
      state.isLoggedIn = true
      state.userInfo = payload
    })
    builder.addCase(loginAction.rejected, (state, payload) => {
      console.log("rejectedpayload", payload.error.message)
      state.isLoading = false
      state.isError = true
      state.errMsg = payload.error.message
    })

    builder.addCase(logOutAction.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(logOutAction.fulfilled, (state, { payload }) => {
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
  // {
  //   [loginAction.pending]: (state) => {
  //     state.isLoading = true
  //   },
  //   [loginAction.fulfilled]: (state, payload) => {
  //     console.log("fulfilledpayload", payload)
  //     state.isLoading = false
  //     // state.userInfo = payload
  //   },
  //   [loginAction.rejected]: (state, { payload }) => {
  //     console.log("rejectedpayload", payload)
  //     state.isLoading = false
  //     //   state.isError = paylo
  //   },
  // },
})

export const { loginUser } = authSlice.actions
export default authSlice.reducer
