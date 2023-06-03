import { StyleSheet } from "react-native"
import { COLORS } from "../../../constants/theme"

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    marginVertical: 10,
    alignItems: "center",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  mainBtn: {
    backgroundColor: COLORS.primary,
  },
  secondaryBtn: {
    backgroundColor: COLORS.lightWhite,
    color: COLORS.primary,
  },
  text: {
    fontWeight: "500",
  },
  mainTextBtn: {
    color: COLORS.lightWhite,
  },
  secondaryTextBtn: {
    color: COLORS.primary,
  },
  disabledContainer: {
    backgroundColor: "#d3d3d3",
    width: "100%",
    padding: 10,
    marginVertical: 10,
    alignItems: "center",
    borderRadius: 5,
  },
})

export default styles
