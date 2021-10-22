import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View ,Image, ImageBackground} from 'react-native';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';


export default function Home(navigation) {
  return (
    <><ImageBackground source ={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpH32AM5BFE7iTQMtVNhxl_net_-CkRZDWZw&usqp=CAU"}}style={{
      backgroundColor: 'white',
      flex: 1,
      padding: 20,
      justifyContent:'space-between',
      alignItems:'center',
      flexDirection: "row"
      
      
    }}>
 <Ionicons name="ios-menu-outline" size={24} color="black" />
 <AntDesign name="search1" size={24} color="black" />
 
    </ImageBackground> 
    <View style={{flex:7}}> 
      <Text style={{ fontSize: 24 , fontWeight: '600',marginLeft:130}}>B FOOD</Text>
      
      
      </View> 
      </>
    
  

    
  
  );
}


