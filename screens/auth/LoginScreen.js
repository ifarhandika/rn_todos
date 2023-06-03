import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loginUser } from "../../components/features/auth/authSlice"
import { View, Text, ActivityIndicator } from "react-native"
import { Link } from "@react-navigation/native"
import { auth } from "../../firebase"

import CustomInput from "../../components/common/input/CustomInput"
import CustomBtn from "../../components/common/button/CustomBtn"

import styles from "./styles"
import { loginAction } from "../../components/features/auth/authAction"

const LoginScreen = () => {
  const dispatch = useDispatch()
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    error: {
      status: false,
    },
  })

  const handleChange = (text, name) => {
    setUserData({
      ...userData,
      [name]: text,
    })
  }

  const handleLogin = () => {
    dispatch(loginAction(userData))
    console.log("sukselogin")
  }
  const authState = useSelector((state) => state.auth)
  const { isLoading, isError, errMsg } = authState

    console.log("isError", errMsg)

  if (isLoading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <CustomInput
        placeholder="Email"
        name="email"
        type="text"
        value={userData.email}
        handleChange={handleChange}
      />
      <CustomInput
        placeholder="Password"
        name="password"
        type="password"
        value={userData.password}
        handleChange={handleChange}
      />
      <CustomBtn text={"Login"} onPress={handleLogin} />
      {isError && <Text style={styles.errMsg}>{errMsg}</Text>}
      <Text style={styles.text}>
        Don't have an account?
        <Link to={{ screen: "Register" }} style={styles.textDesign}>
          <Text> Register </Text>
        </Link>
        now!
      </Text>
    </View>
  )
}

export default LoginScreen
