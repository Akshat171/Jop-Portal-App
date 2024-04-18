import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,

    flexDirection: "column",
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: "#FFF",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  },
  upperContainer: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: SIZES.medium,
    marginBottom: SIZES.small,
  },
  logoContainer: {
    width: 60,
    height: 60,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  aboutCompany: {
    marginHorizontal: SIZES.medium,
  },
  logImage: {
    width: "70%",
    height: "70%",
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contentContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
  },
  leftColumn: {
    flex: 1,
    alignItems: "flex-start",
  },
  rightColumn: {
    flex: 1,
    alignItems: "flex-end",
  },
  locationImage: {
    width: 14,
    height: 14,
    tintColor: COLORS.gray,
  },
  jobName: {
    fontSize: SIZES.medium,
    fontFamily: "DMBold",
    color: COLORS.primary,
  },
  jobType: {
    fontSize: SIZES.small + 2,
    fontFamily: "DMMedium",
    color: COLORS.gray,
    marginTop: 3,
    textTransform: "capitalize",
  },
  others: {
    fontSize: SIZES.small + 2,
    fontFamily: "DMRegular",
    color: COLORS.gray,
    marginTop: 3,
    textTransform: "capitalize",
    gap: 3,
  },
  jobVacancy: {
    fontSize: SIZES.small + 1,
    fontFamily: "DMRegular",
    color: "#0E56A8",
    marginTop: 3,
    textTransform: "capitalize",
    backgroundColor: "#E7F3FE",
    padding: 3,
    borderRadius: SIZES.medium,
  },
});

export default styles;
