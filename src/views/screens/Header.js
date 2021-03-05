import React from 'react';
import {View} from 'react-native';
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator} from '@react-navigation/drawer';

import Home from './component/Home';
import Mobile from './component/Mobile';
import TabScreen from './component/Product';
//import Laptop from './component/Laptop';

//const Drawer = createDrawerNavigator();

export default function App() {
  /*return (
    <NavigationContainer>
      <Drawer.Navigator >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Mobile" component={Mobile} />
         <Drawer.Screen name="Product" component={TabScreen} />  

      </Drawer.Navigator>
    </NavigationContainer>
  );*/
  return(
      <View>
          <Text>welcome</Text>
      </View>
  )
}