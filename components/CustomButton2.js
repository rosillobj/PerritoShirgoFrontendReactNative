import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import COLORS from '../constants/colors'


const CustomButton2 = (props) => {
    const filledBgColor =props.color || COLORS.primary;
    const outLineColor = COLORS.white;
    const bgColor = props.filled ? filledBgColor : outLineColor;
    const textColor =props.filled ? COLORS.white : COLORS.primary;
    return (
 
    <TouchableOpacity
        style={{

            ...styles.button,
            ...{backgroundColor:bgColor},
            ...props.style
        }}
        onPress={props.onPress}
        
    >
        <Text style={{fontSize:18, ...{color:textColor} }}>{props.title}</Text>
    </TouchableOpacity>

  )
}
const styles = StyleSheet.create({
    button:{

        paddingBottom:16,
        paddingVertical:10,
        borderColor:COLORS.primary,
        borderWidth:2,
        borderRadius:12,
        alignItems:'center',
        justifyContent:'center',
    }
    
})
export default CustomButton2