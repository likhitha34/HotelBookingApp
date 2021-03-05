import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ConfirmBooking from './ConfirmBooking';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="ConfirmBooking" component={ConfirmBooking} />
    </Stack.Navigator>
  );
}
export {  MainStackNavigator };