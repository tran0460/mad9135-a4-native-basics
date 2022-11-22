import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Screens/Home";
import { Ionicons } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import DataNavigator from "./Navigators/DataNavigator";
import { AppContextProvider } from "./AppContext";
const Tab = createBottomTabNavigator();
export default function App() {
  const [data, setData] = useState([]);
  const [currentItem, setCurrentItem] = useState({});

  useEffect(() => {
    const url = `https://ghibliapi.herokuapp.com/films?_limit=20`;
    try {
      fetch(url)
        .then(async (resp) => {
          if (resp.ok) return await resp.json();
        })
        .then((fetchData) => {
          setData(fetchData.sort((a, b) => b.rt_score - a.rt_score));
        });
    } catch (err) {
      console.error(err);
    }
  }, []);

  const contextValue = { data, setData, currentItem, setCurrentItem };
  return (
    <AppContextProvider value={contextValue}>
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
              headerShown: false,
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <Ionicons name="list-circle" size={24} color="black" />
                ) : (
                  <Ionicons
                    name="list-circle-outline"
                    size={24}
                    color="black"
                  />
                ),
              tabBarActiveTintColor: "black",
            }}
            name="List"
            component={DataNavigator}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </AppContextProvider>
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
