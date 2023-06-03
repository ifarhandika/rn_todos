import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import React from "react"

import styles from "./CustomBtn.style"

const CustomBtn = ({ text, onPress, disabled, type }) => {
  if (type === "main") {
    return (
      <TouchableOpacity
        style={
          disabled === true
            ? styles.disabledContainer
            : [styles.container, styles.mainBtn]
        }
        onPress={onPress}
        disabled={disabled}>
        <Text style={[styles.text, styles.mainTextBtn]}>{text}</Text>
      </TouchableOpacity>
    )
  }

  if (type === "secondary") {
    return (
      <TouchableOpacity
        style={
          disabled === true
            ? styles.disabledContainer
            : [styles.container, styles.secondaryBtn]
        }
        onPress={onPress}
        disabled={disabled}>
        <Text style={[styles.text, styles.secondaryTextBtn]}>{text}</Text>
      </TouchableOpacity>
    )
  }
}

export default CustomBtn
