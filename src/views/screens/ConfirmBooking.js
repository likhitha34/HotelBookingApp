import React ,{ useState, useEffect } from 'react';
import {
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  //Picker,

} from 'react-native';
import { DataTable, TextInput } from 'react-native-paper';

import ModalDropdown from 'react-native-modal-dropdown';
import {AsyncStorage} from '@react-native-community/async-storage';


const STORAGE_KEY = '@save_days';
const ConfirmBooking = ({navigation, route}) => {
    const item = route.params;
    const [text, setText] = React.useState('');

    //let data=[{value:'Pay During checking'}];

    const [days, setDays] = useState('')
    const saveData = async () => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, days)
        alert('Data successfully saved')
      } catch (e) {
        alert('Failed to save the data to the storage')
      }
    }
    const readData = async () => {
      try {
        const userDays = await AsyncStorage.getItem(STORAGE_KEY)
    
        if (userDays !== null) {
          setAge(userDays)
        }
      } catch (e) {
        alert('Failed to fetch the data from storage')
      }
    }
    useEffect(() => {
      readData()
    }, [])

    /*const clearStorage = async () => {
      try {
        await AsyncStorage.clear()
        alert('Storage successfully cleared!')
      } catch (e) {
        alert('Failed to clear the async storage.')
      }
    }*/
    const onChangeText = userDays => setDays(userDays)

const onSubmitEditing = () => {
  if (!days) return

  saveData(days)
  setDays('')
}
   
    return (
      
      <ScrollView>
        <StatusBar
        barStyle="dark-content"
        
      />
      <View style={{backgroundColor:'white'}}>
      <Text style={{fontSize:40,marginLeft:40,marginTop:20}}>Rooms Details</Text>
      
      <DataTable style={style.data}>
    

    <DataTable.Row >
      <DataTable.Cell><Text style={{fontWeight:'bold'}}>Location</Text></DataTable.Cell>
      <DataTable.Cell style={{ backgroundColor:'white'}}>{item.location}</DataTable.Cell>
      
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell ><Text style={{fontWeight:'bold'}}>Name</Text></DataTable.Cell>
      <DataTable.Cell style={{backgroundColor:'white'}}>{item.name}</DataTable.Cell>
      
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell ><Text style={{fontWeight:'bold'}}>Size</Text></DataTable.Cell>
      <DataTable.Cell style={{backgroundColor:'white'}}>{item.size}</DataTable.Cell>
      
    </DataTable.Row>
    <DataTable.Row>
      <DataTable.Cell ><Text style={{fontWeight:'bold'}}>Breakfast</Text></DataTable.Cell>
      <DataTable.Cell style={{backgroundColor:'white'}}>Included</DataTable.Cell>
      
    </DataTable.Row>
    <DataTable.Row>
      <DataTable.Cell ><Text style={{fontWeight:'bold'}}>Price</Text></DataTable.Cell>
      <DataTable.Cell style={{backgroundColor:'white'}}>{item.price}</DataTable.Cell>
      
    </DataTable.Row>

    </DataTable>
    
    
    <View style={{backgroundColor:'white',marginLeft:40}}>
    
    {/*<TextInput  label='No_of_adults' value={text}
    onChangeText={text => setText(text)} style={{borderWidth:2,borderColor:'pink',margin:20,backgroundColor:'white'}}/>*/}
     
    <TextInput
          style={style.input}
          value={days}
          placeholder=" enter days"
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
        />
        <Text style={style.text}>Your total price for {days} days is €{days*item.price}</Text>
        </View>
        <View style={{width:200,fontSize:20,height:40,marginLeft:40}}>
        <ModalDropdown   options={['pay during checkin']} />
   {/*<Dropdown label='select payment' data={data} />*/} 
    </View >
      <TouchableOpacity onPress={()=>Alert.alert('your room has been booked')}>
       
      <View style={style.btn}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}} >
          Confirm Booking
        </Text>
      </View>
      
      </TouchableOpacity>
      {/*<TouchableOpacity onPress={()=>navigation.navigate('ViewDetails',item)}>
      <View style={style.btn}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}} >
          View Details 
        </Text>
      </View>
  </TouchableOpacity>*/}
      </View>
      </ScrollView>
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
    data:{
      marginTop:50,
      borderRadius: 20,
      width:300,
      //alignItems: 'center',
      marginLeft: 40,
      //fontWeight:'bold',
      
    },
    input: {
      padding: 15,
      height: 50,
      borderBottomWidth: 1,
      borderBottomColor: '#333',
      backgroundColor:'white',
      margin: 10
    },
    text: {
      fontSize: 24,
      padding: 10,
      backgroundColor: 'white'
    },
    modal:{
      width : 560,
      position : 'absolute',
  }
    
  });
  
  export default ConfirmBooking;