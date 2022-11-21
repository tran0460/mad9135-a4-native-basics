import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createContext, useContext } from "react";
import Home from "./Screens/Home";
import { Ionicons } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import DataNavigator from "./Navigators/DataNavigator";
const Tab = createBottomTabNavigator();
const AppContext = createContext();
export default function App() {
  const [data, setData] = useState([]);
  const [currentItem, setCurrentItem] = useState({});

  useEffect(() => {
    const url = `https://ghibliapi.herokuapp.com/films?_limit=10`;
    try {
      fetch(url)
        .then(async (resp) => {
          if (resp.ok) return await resp.json();
        })
        .then((fetchData) => {
          setData(fetchData);
        });
    } catch (err) {
      console.error(err);
    }
  }, []);

  const contextValue = { data, setData, currentItem, setCurrentItem };
  return (
    <AppContext.Provider value={contextValue}>
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
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  return useContext(AppContext);
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
