import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput,ScrollView, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Feather, MaterialCommunityIcons} from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';




export default function Login({navigation}) {
  return (
    <ScrollView>
    <View style={{flex: 2, justifyContent: "center", alignItems: "center", backgroundColor: '#54C571',marginBottom: 10 }}>
        <Image 
        style={{
            width: 110,
            height: 110,
            marginTop: 30,
            borderRadius: 10,
            transform:[{rotate:"45deg"}],
            marginBottom: 30,
        }}
        source= {{uri:"https://images.unsplash.com/photo-1634033244119-9dce33e3aedb?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          }}
         />
         
       <Text style={{color: "rgba(0,0,0,0.6)", 
       fontSize: 24 ,
        fontWeight: '600',
         fontSize: 30,
         paddingBottom:50,
         fontStyle:"BOLD",
         marginBottom: 40,
         }}> AUTOMOBILE SHOP </Text>
        

         </View>
         
   <View style={{flex: 2,
    justifyContent: "center",
    backgroundColor: 'white',
    alignItems: "center",
     borderTopStartRadius:80,
     borderTopEndRadius:80 ,
     paddingBottom: 50,
     bottom:70

    }}>

      <View style={{padding:5}}>
       
      </View>

      


   <Text style={{ marginTop: 15}}>EMAIL OR USERNAME</Text>

   <TextInput style={{
    backgroundColor:"#e3e3e3" ,
    padding: 16,
    borderWidth: 1,
    borderStyle: 'dashed',
    margin:10,
    width:200,
    }} placeholder="new" /> 


   <Text>PASSWORD</Text>
   
   <TextInput style={{
    backgroundColor:"#e3e3e3" ,
    padding: 16,
    borderWidth: 1,
    margin:10,
    borderStyle: 'dashed',
    width:200,
    }} placeholder="new" /> 

     <TouchableOpacity onPress={() => {
       navigation.navigate("Home")
      }}>
      <Text style={{backgroundColor: "#3EB489", 
     padding: 10,
     paddingHorizontal: 60 ,
     flexDirection: 'row',
     alignItems: 'center',
     borderRadius: 10 ,
     marginTop: 20,}}>SUBMIT</Text>
      </TouchableOpacity>

    <TouchableOpacity  
     style={{backgroundColor: "#e3e3e3", 
     padding: 10,
     paddingHorizontal: 50 ,
     flexDirection: 'row',
     alignItems: 'center',
     borderRadius: 10 ,
     marginTop: 20,}}>
         <AntDesign name="google" size={24} color="rgb(256,100,10)" />
    <Text style={{fontSize: 20 , marginLeft: 10 }}>Login With Gmail</Text>
  
    

   </TouchableOpacity>

   <TouchableOpacity 
   
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
   <Text style={{marginTop:10, fontWeight: '500', color: 'grey' ,}}> Not a member ?
    <Text style={{color:"orange" , fontWeight: 'bold',}}> Signup </Text> 
     </Text>

   </TouchableOpacity>
   



    </View>
    
    </ScrollView>



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
