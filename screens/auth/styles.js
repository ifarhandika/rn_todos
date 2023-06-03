import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 50,
  },
  loading: {
    position: "absolute",
    zIndex: 1000,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
  },
  textDesign: {
    color: "#50A060",
  },
  logo: {
    width: "70%",
    height: 100,
  },
  errMsg: {
    textAlign: "left",
    color: "red",
  },
})

export default styles
