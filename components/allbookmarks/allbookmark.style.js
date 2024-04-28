import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  cardsContainer: {
    marginTop: SIZES.medium,
    marginBottom: SIZES.medium,
    gap: SIZES.small,
  },
  noBookmarkcontainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  noBookmarktext: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.primary,
  },
});

export default styles;
