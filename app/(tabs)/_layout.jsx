import { Tabs } from "expo-router";
import { AntDesign, Feather } from "@expo/vector-icons";
import { GlobalProvider } from "../../Global/Context";

const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          tabBarIcon: () => <Feather name="bookmark" size={24} color="black" />,
        }}
      />
    </Tabs>
  );
};

export default Layout;
