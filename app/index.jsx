import { Redirect } from "expo-router";
import { GlobalProvider } from "../Global/Context";

const StartPage = () => {
  return <Redirect href="/home" />;
};

export default StartPage;
