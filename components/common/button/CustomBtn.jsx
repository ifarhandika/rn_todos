import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import React from "react"

import styles from "./CustomBtn.style"

const CustomBtn = ({ text, onPress, disabled }) => {
  return (
    <TouchableOpacity
      style={disabled === true ? styles.disabledContainer : styles.container}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default CustomBtn
