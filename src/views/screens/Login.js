import React, { Component } from 'react';
import {
  StyleSheet, View, props,Text, StatusBar,ImageBackground, TextInput, TouchableOpacity
} from 'react-native';

import { createStackNavigator } from "@react-navigation/stack";
import { AsyncStorage } from '@react-native-community/async-storage';
const userInfo = { username: 'likhitha', password: 'pass12345' };
const Stack = createStackNavigator();

export default class Login extends Component{
    
  constructor(props) {
    
    super(props);
    this.state = {
      username: '',
      password: ''
    }
   
  }
  
  render(){
      
    return (
        
      <View style={styles.container}>
          {/* <ImageBackground  source={require('/home/ytp-intern-002/HotelBookingApp/src/assets/1.jpg')}> */}
        <Text style={styles.welcome}>Login to hotel booking</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Name"
          onChangeText={(username) => this.setState({ username })}
          value={this.state.username}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input} placeholder="Enter Password"
          secureTextEntry
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password}
        />
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.userbutton}
            // onPress={() => alert("login works")}
            // onPress={() => this.props.navigation.navigate('homescreem')}
            onPress={this.login}
            //onPress={() => this.props.navigation.navigate('HomeScreen')}
          >
            <Text style={styles.buttontext}>Login</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.userbutton}
            onPress={() =>alert("signup works")}>
            <Text style={styles.buttontext}>Signup</Text>
          </TouchableOpacity> */}
        </View>
        {/* </ImageBackground> */}
      </View>
    );
  }
  login = async () => {
      
    if (userInfo.username === this.state.username && userInfo.password === this.state.password) {
      // await AsyncStorage.setItem('isLoggedIn', 1);
      this.props.navigation.navigate('Home');
     // alert('valid details');
    }
    else {
      alert('inavalid details');
    }
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF0F5',

  },
  welcome: {
    fontSize: 30,
    textAlign: "center",
    margin: 10,
    color: 'black',
    fontWeight: "bold",
  },
  input: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",

  },
  userbutton: {
    backgroundColor: "#87CEFA",
    padding: 8,
    width: "30%",

  },
  buttontext: {
    fontSize: 18,
    textAlign: "center",

  }
});