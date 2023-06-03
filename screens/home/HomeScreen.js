import { StyleSheet, Text, View } from "react-native"
import React from "react"
import CustomBtn from "../../components/common/button/CustomBtn"
import { auth } from "../../firebase"
import { useDispatch } from "react-redux"
import { logOutAction } from "../../components/features/auth/authAction"

const HomeScreen = () => {
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logOutAction())
  }
  return (
    <View>
      <Text>HomeScreen</Text>
      <CustomBtn text={"Log Out"} onPress={handleLogout} />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
