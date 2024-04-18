import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  btnContainer: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: SIZES.small,
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
  }),
});

export default styles;
