import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';



export default function Login({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image 
        style={{
            width: 150,
            height: 150,
            borderRadius: 10,
            transform:[{rotate:"45deg"}],
            marginBottom: 50,
        }}
        source= {{uri:"https://images.unsplash.com/photo-1634033244119-9dce33e3aedb?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          }}
         />
   <Text style={{color: "rgba(0,0,0,0.6)", fontSize: 24}}> Welcome to </Text>
   <Text style={{color: "black", fontSize: 30, fontWeight: '600'}}> AUTOMOBILE SHOP </Text>
   <TouchableOpacity  
     style={{backgroundColor: "#e3e3e3", 
     padding: 10,
     paddingHorizontal: 60 ,
     flexDirection: 'row',
     alignItems: 'center',
     borderRadius: 10 ,
     marginTop: 20,}}>
         <AntDesign name="google" size={24} color="rgb(256,100,10)" />
    <Text style={{fontSize: 20 , marginLeft: 10 }}>Login With Gmail</Text>
    
   </TouchableOpacity>

   <TouchableOpacity 
   onPress={() => {
       navigation.navigate("Home")
      }}
   style={{backgroundColor: "black", 
     padding: 10,
     borderRadius: 10,
     flexDirection: 'row',
     paddingHorizontal: 60 ,
     marginTop: 20,}}>
         <AntDesign name="apple1" size={24} color="white"/>
    <Text style={{fontSize: 17, color: "white", marginLeft:10}}>Login With Apple</Text>
   </TouchableOpacity>

   <TouchableOpacity>
   <Text style={{marginTop:10, fontWeight: '500', color: 'grey'}}> Not a member ?
    <Text style={{color:"orange" , fontWeight: 'bold'}}> Signup </Text> 
     </Text>

   </TouchableOpacity>
   <View style={{flex: 1,flexDirection: "row", justifyContent:'space-between',alignItems:'center',backgroundColor:'blue'}}>
    <Ionicons name="ios-menu-outline" size={24} color="black" />
    <FontAwesome name="motorcycle" size={24} color="black" />
    <View style={{flexDirection:'row'}}>
    <AntDesign name="search1" size={24} color="black" />
    <Ionicons name="notifications-outline" size={24} color="black" />
    
      
    </View>
    </View>
    </View>
    
  );
}

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     backgroundColor: 'red',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
