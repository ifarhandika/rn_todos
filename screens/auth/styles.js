import { StyleSheet } from "react-native"
import { COLORS } from "../../constants/theme"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 50,
  },
  text: {
    textAlign: "center",
  },
  textDesign: {
    color: "#50A060",
  },
  mainText: {
    fontSize: 40,
    fontWeight: "bold",
  },
  secondaryText: {
    fontSize: 18,
    fontWeight: "300",
    color: COLORS.gray2,
    marginHorizontal: 25,
    marginBottom: 40,
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
