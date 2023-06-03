import React, { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { Link } from "@react-navigation/native"

import CustomInput from "../../components/common/input/CustomInput"
import CustomBtn from "../../components/common/button/CustomBtn"
import { auth } from "../../firebase"

import styles from "./styles"

const RegisterScreen = () => {
  const [userData, setUserData] = useState({
    username: "",
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

  const handleSubmit = () => {
    auth
      .createUserWithEmailAndPassword(userData.email, userData.password)
      .then((userCredentials) => {
        const user = userCredentials.user
        console.log("user", user)
      })
    alert("sukses regitser")
  }

  return (
    <View style={styles.container}>
      <CustomInput
        placeholder="Username"
        name="username"
        type="text"
        value={userData.username}
        handleChange={handleChange}
      />
      <CustomInput
        placeholder="E-mail"
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
      <CustomBtn
        text={"Register"}
        onPress={() => handleSubmit(userData, setUserData)}
      />
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
