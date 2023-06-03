import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Text, View } from "react-native"
import { Link, StackActions } from "@react-navigation/native"
import { registerAction } from "../../components/features/auth/authAction"
import { validateRegister } from "./validation"
import { resetState } from "../../components/features/auth/authSlice"

import CustomInput from "../../components/common/input/CustomInput"
import CustomBtn from "../../components/common/button/CustomBtn"
import CustomLoading from "../../components/common/loading/CustomLoading"

import styles from "./styles"

const RegisterScreen = () => {
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

  const handleSubmit = () => {
    if (!validateRegister(userData, setUserData)) return
    dispatch(registerAction(userData))
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.mainText]}>Sign Up!</Text>
      <Text style={[styles.text, styles.secondaryText]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
        atque?
      </Text>
      <CustomInput
        placeholder="E-mail"
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
      <CustomBtn text={"Register"} onPress={handleSubmit} type="main" />
      <Text style={styles.text}>
        Already have an account?
        <Link
          to={{ screen: "Login" }}
          action={StackActions.replace("Login")}
          style={styles.textDesign}>
          <Text> Log In </Text>
        </Link>
        now!
      </Text>
      {isLoading && <CustomLoading />}
    </View>
  )
}

export default RegisterScreen
