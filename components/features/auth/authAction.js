import { auth } from "../../../firebase"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const loginAction = createAsyncThunk("login", async (data) => {
  const { email, password } = data
  const response = await auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredentials) => {
      const user = userCredentials.user
      return user
    })
  return response.email
})

export const logOutAction = createAsyncThunk("logout", async () => {
  const response = await auth.signOut()
  return response
})
