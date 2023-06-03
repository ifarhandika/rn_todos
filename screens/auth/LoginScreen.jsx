import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { resetState } from "../../components/features/auth/authSlice"
import { View, Text } from "react-native"
import { Link, StackActions } from "@react-navigation/native"
import { loginAction } from "../../components/features/auth/authAction"
import { validateLogin } from "./validation"

import CustomInput from "../../components/common/input/CustomInput"
import CustomBtn from "../../components/common/button/CustomBtn"
import CustomLoading from "../../components/common/loading/CustomLoading"

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
  }, [email, password])

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

//   if (isLoading) {
//     return <CustomLoading />
//   }

  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.mainText]}>Welcome!</Text>
      <Text style={[styles.text, styles.secondaryText]}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga,
        expedita.
      </Text>
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
      <CustomBtn text={"Login"} onPress={handleLogin} type="main" />
      <Text style={styles.text}>
        Don't have an account?
        <Link
          to={{ screen: "Register" }}
          action={StackActions.replace("Register")}
          style={styles.textDesign}>
          <Text> Register </Text>
        </Link>
        now!
      </Text>
      {isLoading && <CustomLoading />}
    </View>
  )
}

export default LoginScreen
