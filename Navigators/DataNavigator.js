import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import List from "../Screens/List";
import Details from "../Screens/Details";

const Stack = createStackNavigator();

const DataNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DataScreen"
        component={List}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DataDetailsScreen"
        component={Details}
        options={{
          title: "More Details",
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default DataNavigator;
