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

} from 'react-native';
import { DataTable, TextInput } from 'react-native-paper';
const ViewDetails = ({navigation, route}) => {
    const item = route.params;
    /*const [text, setText] = React.useState('');



    const [days, setDays] = useState('')

return (
    <ScrollView>
    <View style={{backgroundColor:'white'}}>
    <Text style={{fontSize:50}}>Rooms Details</Text>
    <DataTable style={style.data}>
  <DataTable.Row>
    <DataTable.Cell >Location</DataTable.Cell>
    <DataTable.Cell style={{ backgroundColor:'white'}}>{item.location}</DataTable.Cell>
    
  </DataTable.Row>

  <DataTable.Row>
    <DataTable.Cell >Name</DataTable.Cell>
    <DataTable.Cell style={{backgroundColor:'white'}}>{item.name}</DataTable.Cell>
    
  </DataTable.Row>

  <DataTable.Row>
    <DataTable.Cell >Size</DataTable.Cell>
    <DataTable.Cell style={{backgroundColor:'white'}}>{item.size}</DataTable.Cell>
    
  </DataTable.Row>
  <DataTable.Row>
    <DataTable.Cell >Breakfast</DataTable.Cell>
    <DataTable.Cell style={{backgroundColor:'white'}}>Included</DataTable.Cell>
    
  </DataTable.Row>

  <DataTable.Row>
    <DataTable.Cell >Days</DataTable.Cell>
    <DataTable.Cell style={{backgroundColor:'white'}}>{days}</DataTable.Cell> 
  </DataTable.Row>
  <DataTable.Row>
    <DataTable.Cell >Price</DataTable.Cell>
    <DataTable.Cell style={{backgroundColor:'white'}}>{days*item.price}</DataTable.Cell>
    
  </DataTable.Row>

  </DataTable>
  </View>
  </ScrollView>
  
  
  );*/
  return(
      <View><Text>welcome</Text></View>
  )
};


export default ViewDetails;