import { View, Text, ActivityIndicator } from "react-native"
import React from "react"
import styles from "./CustomLoading.style"

const CustomLoading = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" />
    </View>
  )
}

export default CustomLoading
