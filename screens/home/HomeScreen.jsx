import { StyleSheet, Text, View } from "react-native"
import React from "react"
import CustomBtn from "../../components/common/button/CustomBtn"
import { auth } from "../../firebase"
import { useDispatch, useSelector } from "react-redux"
import { logOutAction } from "../../components/features/auth/authAction"

const HomeScreen = () => {
  const dispatch = useDispatch()
  const userAuth = useSelector((state) => state.auth)
  const { userInfo } = userAuth
  const handleLogout = () => {
    dispatch(logOutAction())
  }
  return (
    <View>
      <Text>HomeScreen</Text>
      <Text>Logged in as: {userInfo.email}</Text>
      <CustomBtn text={"Log Out"} onPress={handleLogout} type="main" />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
