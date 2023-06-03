import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ActivityIndicator, Text, View } from "react-native"
import { Link } from "@react-navigation/native"

import CustomInput from "../../components/common/input/CustomInput"
import CustomBtn from "../../components/common/button/CustomBtn"

import styles from "./styles"
import { registerAction } from "../../components/features/auth/authAction"
import { validateRegister } from "./validation"

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
  const { error } = userData

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
      <CustomBtn text={"Register"} onPress={handleSubmit} />
      <Text style={styles.text}>
        Already have an account?
        <Link to={{ screen: "Login" }} style={styles.textDesign}>
          <Text> Log In </Text>
        </Link>
        now!
      </Text>
    </View>
  )
}

export default RegisterScreen
