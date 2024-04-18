import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: SIZES.small,
    backgroundColor: COLORS.primary,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  bookmarkBtn: {
    width: 55,
    height: 55,
    borderWidth: 3,
    borderColor: COLORS.gray2,
    borderRadius: SIZES.xLarge,
    marginLeft: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  bookmarkStyle: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.gray,
  },
  applyBtn: {
    flex: 1,
    backgroundColor: COLORS.gray2,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",

    borderRadius: SIZES.medium,
  },
  applyBtnText: {
    fontSize: SIZES.medium,
    color: COLORS.primary,
    fontFamily: FONT.bold,
  },
});

export default styles;
