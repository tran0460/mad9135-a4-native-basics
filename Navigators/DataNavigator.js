import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import List from "../Screens/List";
import Details from "../Screens/Details";

const Stack = createStackNavigator();

const DataNavigator = () => {
  return (
    <Stack.Navigator>
      <DataStack.Screen
        name="DataScreen"
        component={List}
        options={{
          headerShown: false,
        }}
      />
      <DataStack.Screen
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
