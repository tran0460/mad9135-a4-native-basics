import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import List from "../Screens/List";
import Details from "../Screens/Details";

const Stack = createStackNavigator();

const DataNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="List"
        component={List}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          title: "Details",
        }}
      />
    </Stack.Navigator>
  );
};

export default DataNavigator;
