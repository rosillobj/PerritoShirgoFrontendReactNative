import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import COLORS from '../constants/colors'

const CustomButton = (props) => {
  return (
<TouchableOpacity
  style={{
    ...styles.button
  }}
  onPress={props.onPress}


>

<Text style={{fontSize:18}}>{props.title}</Text>


</TouchableOpacity>
  )
}


const styles = StyleSheet.create({

  button:{

    paddingBottom:16,
    paddingVertical:10,
    color:COLORS.primary,
    borderWidth: 2,
    borderRadius:12,
    alignItems:'center',
    justifyContent:'center'
  }


})

export default CustomButton