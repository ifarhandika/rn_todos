import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { resetState } from "../../components/features/auth/authSlice"
import { View, Text, ActivityIndicator } from "react-native"
import { Link } from "@react-navigation/native"
import { loginAction } from "../../components/features/auth/authAction"
import { validateLogin } from "./validation"

import CustomInput from "../../components/common/input/CustomInput"
import CustomBtn from "../../components/common/button/CustomBtn"

import styles from "./styles"

const LoginScreen = () => {
  const dispatch = useDispatch()
  const authState = useSelector((state) => state.auth)
  const { isLoading, isError, errMsg } = authState
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    error: {
      status: false,
    },
  })
  const { email, password, error } = userData

  useEffect(() => {
    dispatch(resetState())
  }, [])

  const handleChange = (text, name) => {
    setUserData({
      ...userData,
      [name]: text,
    })
  }

  const handleLogin = () => {
    if (!validateLogin(userData, setUserData)) return
    dispatch(loginAction(userData))
  }

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
      {error.status && error.email && (
        <Text style={styles.errMsg}>{error.email}</Text>
      )}
      <CustomInput
        placeholder="Password"
        name="password"
        type="password"
        value={userData.password}
        handleChange={handleChange}
      />
      {error.status && error.password && (
        <Text style={styles.errMsg}>{error.password}</Text>
      )}
      {isError && <Text style={styles.errMsg}>{errMsg}</Text>}
      <CustomBtn text={"Login"} onPress={handleLogin} />
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
