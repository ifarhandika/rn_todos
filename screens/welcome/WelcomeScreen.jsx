import React from "react"
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native"
import { useNavigation } from "@react-navigation/native"

import AppLogo from "../../assets/gote-logo.png"
import CustomBtn from "../../components/common/button/CustomBtn"

const WelcomeScreen = () => {
  const navigate = useNavigation()
  const onLoginPressed = () => {
    navigate.navigate("Login")
  }
  const onRegisterPressed = () => {
    navigate.navigate("Register")
  }
  return (
    <SafeAreaView style={styles.container}>
      <Image source={AppLogo} style={styles.logo} />
      <CustomBtn text={"Login"} onPress={onLoginPressed} />
      <CustomBtn text={"Register"} onPress={onRegisterPressed} />
    </SafeAreaView>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding: 50,
    backgroundColor: "white",
  },
  logo: {
    width: "70%",
    height: 100,
  },
})
