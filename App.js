import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Alert,StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from './src/views/screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
//import Header from './src/views/screens/Header';
import ViewDetails from './src/views/screens/ViewDetails';
//import COLORS from './src/consts/colors';
import DetailsScreen from './src/views/screens/DetailsScreen';
import ConfirmBooking from './src/views/screens/ConfirmBooking';
import Login from './src/views/screens/Login';
const Stack = createStackNavigator();
import { createDrawerNavigator} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    
    
    <NavigationContainer>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
         <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="ConfirmBooking" component={ConfirmBooking} /> 
      </Stack.Navigator>
      
    </NavigationContainer>
    
   
    
  );
  }; 
    
  
const style = StyleSheet.create({
  btn: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: 'green',
    marginHorizontal: 20,
    borderRadius: 10,
  },
});
  
  
