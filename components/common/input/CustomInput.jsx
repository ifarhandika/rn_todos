import { View, TextInput } from "react-native"
import React from "react"
import styles from "./CustomInput.style"

const CustomInput = ({
  placeholder,
  name,
  type,
  value,
  handleChange,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        name={name}
        value={value}
        style={styles.text}
        placeholder={placeholder}
        secureTextEntry={type === "password" ? true : false}
        onChangeText={(text) => handleChange(text, name)}
      />
    </View>
  )
}

export default CustomInput
