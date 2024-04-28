import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: SIZES.small,
    paddingTop: SIZES.small,
    borderRadius: SIZES.small,
    backgroundColor: "#7DA0FA",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  },
  upperContainer: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: SIZES.small,
    marginBottom: SIZES.small,
    alignItems: "center",
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
  Columns: {
    flex: 1,
    alignItems: "flex-start",
    gap: 4,
  },

  jobName: {
    fontSize: SIZES.medium,
    fontFamily: "DMBold",
    color: COLORS.white,
  },
  jobType: {
    fontSize: SIZES.small + 2,
    fontFamily: "DMMedium",
    color: COLORS.lightWhite,
    marginTop: 3,
    textTransform: "capitalize",
  },
  others: {
    fontSize: SIZES.small + 2,
    fontFamily: "DMRegular",
    color: COLORS.lightWhite,
    marginTop: 3,
    textTransform: "capitalize",
    gap: 2,
  },
  locationImage: {
    width: 14,
    height: 14,
    tintColor: "black",
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
  contactContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
  },
  call_contactBtn: {
    borderWidth: 1,
    borderRadius: SIZES.small,
    backgroundColor: "#4B49AC",
    borderColor: "#4B49AC",
  },
  call_contactText: {
    padding: 3,
    paddingHorizontal: 40,
    color: COLORS.white,
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  wa_conatctBtn: {
    borderWidth: 2,
    borderRadius: SIZES.small,
    borderColor: "#4B49AC",
  },
  wa_conatctText: {
    padding: 3,
    paddingHorizontal: 40,
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
});

export default styles;
