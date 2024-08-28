import { View, Text,Image, Pressable } from 'react-native'
import React from 'react'
import {LinearGradient} from "expo-linear-gradient";
import COLORS from '../constants/colors';
import { Button } from 'react-native';
import  CustomButton  from  '../components/CustomButton'
import  CustomButton2  from  '../components/CustomButton2'


const Welcome = ({navigation}) => {
  return (
<LinearGradient style={{flex:1}}
colors={[COLORS.secundary,  COLORS.primary,COLORS.black,COLORS.white]}
>
  <View style={{flex:1}}>
    <View>
      <Image
      source={require("../assets/hero1.jpg")}
      style={{
        height:100,
        width:100,
        borderRadius:20,
        position:"absolute",
        top:40,
        transform:[
          {translateX:20},
          {translateY:50},
          {rotate:"-15deg"}
        ]
        
      }}/>
      <Image
      source={require("../assets/hero2.jpg")}
      style={{

        height:100,
        width:100,
        borderRadius:20,
        position:"absolute",
        top:10,
        left:100,
        transform:[
          {translateX:50},
          {translateY:50},
          {rotate:"-5deg"}

        ]
      }}
      />
      <Image
      source={require("../assets/hero3.jpeg")}
      style={{

        height:100,
        width:100,
        position:'absolute',
        borderRadius:20,
        right:5,
        top:80,
        transform:[
          {rotate:"10deg"}
  

        ]
      }}
      />
      <Image
      source={require("../assets/hero4.jpg")}
      style={{

        height:150,
        width:200,
        position:'absolute',
        borderRadius:20,
        top:250,
        alignSelf:'center'

      }}
      />
    </View>
    <View style={{

      paddingHorizontal:22,
      position:'absolute',
      top:400,
      width:"100%",

    }}>
      <Text style={{
        fontSize:48,
        fontWeight:800,
        color:COLORS.white
      }} >Comencemos</Text>
      <Text style={{
        alignSelf:'center',
        fontSize:25,
        fontWeight:500,
        color:COLORS.white
      }}>Conectando Con Tu MasCotas</Text>
<CustomButton2
  title='Registrate'
  onPress={()=>navigation.navigate("SignUp")}
  style={{

    marginTop:32,
    width:"100%",
  }}/>
     <View style={{

      flexDirection:"row",
      marginTop:12,
      justifyContent: "center",

     }} ><Text style={{
      fontSize:16,
      color:COLORS.white,
      fontWeight:"bold",
      
     }} >¿Ya Tienes una Cuenta ?</Text>
     <Pressable
     
     onPress={()=>navigation.navigate("Login")}
     >
      <Text
      style={{

        fontSize:16,
        color:COLORS.primary,
        fontWeight:"bold",
        textDecorationLine:'underline'
      }}
      > Entra!</Text>
     </Pressable>

      
     </View>

 
    </View>


  </View>

</LinearGradient>
  )
}

export default Welcome