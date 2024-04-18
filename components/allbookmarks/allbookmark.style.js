import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.small,
    marginBottom: SIZES.xLarge,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: SIZES.small,
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
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
