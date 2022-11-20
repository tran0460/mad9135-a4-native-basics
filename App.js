import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Screens/Home";
import { Ionicons } from "@expo/vector-icons";
import DataNavigator from "./Navigators/DataNavigator";
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: "Home",
            tabBarLabel: "Home",
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="md-home" size={24} color="black" />
              ) : (
                <Ionicons name="md-home-outline" size={24} color="black" />
              ),
            tabBarActiveTintColor: "black",
          }}
        />
        <Tab.Screen
          options={{
            title: "List",
            tabBarLabel: "List",
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="list-circle" size={24} color="black" />
              ) : (
                <Ionicons name="list-circle-outline" size={24} color="black" />
              ),
            tabBarActiveTintColor: "black",
          }}
          name="List"
          component={DataNavigator}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
