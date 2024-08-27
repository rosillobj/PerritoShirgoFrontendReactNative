import { View, Text, Image, Touchable, Pressable } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../constants/colors';
import { TextInput } from 'react-native';
import { TouchableOpacity} from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import  CheckBox  from 'expo-checkbox';
import  CustomButton2  from  '../components/CustomButton2';


const SignUp = ({navigation}) => {

  const [IsPasswordShown,setIsPasswordShown] =useState(false);
  const [isChecked,setIsChecked]=useState(false);
  return (
<SafeAreaView style={{flex:1,backgroundColor:COLORS.white}}>
<View style={{marginHorizontal:22,}}>
  <View style={{marginVertical:22,}}>
    <Text style={{

      fontSize:22,
      fontWeight:"bold",
      marginVertical:22,
      color :COLORS.black
    }}>Crea Tu Cuenta</Text>
    <Text style={{

      fontSize:16,
      color:COLORS.black
    }}>Uniendo Doctores y Mascotas</Text>
  </View>

  <View style={{marginBottom:12}}>
<Text style={{
  fontSize:16,
  fontWeight:400,
  marginVertical:8,
}}>Correo Electronico:</Text>
<View style={{

  width:'100%',
  height:48,
  borderColor:COLORS.black,
  borderWidth:1,
  borderRadius:8,
  alignItems:'center',
  justifyContent:'center',
  paddingLeft:22
}}>
  <TextInput
  placeholder ='Introduce Tu Correo'
  placeholderTextColor = {COLORS.black}
  keyboardType='email-address'
  style ={{
    width:'100%',
  }}
  />



</View>

  </View>

 <View style={{marginBottom:14}}>
  <Text style={{

    fontSize:16,
    color:COLORS.black,
    fontWeight:400,
  }}>Telefono Movil:</Text>
  
  

  <View style={{

    width:'100%',
    height:48,
    borderColor:COLORS.black,
    borderWidth:1,
    borderRadius:8,
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingLeft:22,
  }}
  >
<TextInput
placeholder='+52'
placeholderTextColor={COLORS.black}
keyboardType='numeric'
style={{

  width:'12%',
  borderRightWidth:1,
  borderLeftColor:COLORS.grey,
  height:'100%',
  
}}

/>
<TextInput
placeholder='Introduce Tu Numero De Telefono'
placeholderTextColor={COLORS.black}
keyboardType='numeric'
style={{

  width:'80%'
}}/>
      </View>
      </View>
  <View style={{paddingBottom:19,paddingTop:10}}>
    <Text style={{
      fontSize:16,
      color:COLORS.black,
      fontWeight:400,
}}>Password</Text>
<View style={{
  width:'100%',
  height:48,
  borderColor:COLORS.black,
  borderWidth:1,
  borderRadius:8,
  justifyContent:'center',
  alignItems:'left',
  paddingLeft:'5%'
}}>
  <TextInput
  placeholder='Escribe Una Contraseña'
  placeholderTextColor={COLORS.black}
  secureTextEntry={IsPasswordShown}
  style={{

    width:'100%'
  }}
  
  /><TouchableOpacity onPress={()=>setIsPasswordShown(!IsPasswordShown)}
  style={{

    position:"absolute",
    right:12
  }}
  >
    {
      IsPasswordShown == true ? (
        <Ionicons name="eye-off" size={24} color={COLORS.black}/>
      ) :(
        <Ionicons name="eye" size={24} color={COLORS.grey}/>
      )
    }
    


  </TouchableOpacity>

</View>
    
    
    </View> 
    <View style={{flexDirection:'row', marginVertical:6}}>
    <CheckBox 
    style={{marginRight:8}} 
    value={isChecked}
    onValueChange={setIsChecked}
    color = {isChecked ? COLORS.primary : undefined}
    />
    <Text>Estoy de acuerdo con los terminos y condiciones</Text>


    </View>
    <View style={{paddingBottom:12}}>
      <CustomButton2
      
      title="Enviar"
      filled
      style={{
        marginTop:18,
        marginBottom:4,
      }}

      />

    </View>
</View>

<View style={{flexDirection:'row',alignItems:'center',marginVertical:20}}>

        <View style ={{

          flex:1,
          height:5,
          backgroundColor:COLORS.grey,
          marginHorizontal:10,
        }} >
    
   </View>
         
   <Text>Ó Inicia Sesion con</Text>  
   <View style ={{

flex:1,
height:5,
backgroundColor:COLORS.grey,
marginHorizontal:10,
}} >

</View>

      </View>
      <View  style={{flexDirection:'row',justifyContent:'center'}}>
        <TouchableOpacity onPress={()=> console.log("Pressed")} 
          style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center',
            flexDirection:'row',
            height:'52',
            borderWidth:3,
            borderColor:COLORS.grey,
            marginRight:4,
            borderRadius:10,
            }}>
              <Image
              source={require("../assets/google.png")}
              style={{
               height:36,
               width:36,
               marginRight:8  

              }}
              resizeMode='contain'
              />
<Text>Google</Text>
        </TouchableOpacity>

  
      <TouchableOpacity onPress={()=> console.log("Pressed")} 
          style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center',
            flexDirection:'row',
            height:'52',
            borderWidth:3,
            borderColor:COLORS.grey,
            marginRight:4,
            borderRadius:10,
            }}>
              <Image
              source={require("../assets/facebook.png")}
              style={{
               height:36,
               width:36,
               marginRight:8  

              }}
              resizeMode='contain'
              />
<Text>Facebook </Text>
        </TouchableOpacity>
        </View> 
        <View style={{
    
          flexDirection:'row',
          justifyContent:'center',
          marginVertical:22,
        }}>
          <Text style={{fontSize:16,color:COLORS.black}}>Ya Tienes Una Cuenta? </Text>
          <Pressable onPress={()=>navigation.navigate("Login")} >
          <Text style={{
            fontSize:16,
            color:COLORS.primary,
            fontWeight:'bold',
          
            marginLeft:6,
          }}> Login </Text>
          </Pressable>
          </View>       
</SafeAreaView>
  )
}

export default SignUp