import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({text, bgColor, color, onPress}) => {
    const colorMap = {
        primary: '#3e88d6',  
        success: '#28a745',  
        warning: '#ffc107',  
        danger: '#dc3545',    
    };
    
    const backgroundColor = bgColor ? colorMap[bgColor] : colorMap['warning'];
  return (
    <TouchableOpacity className={`py-3  px-2 w-[100%] rounded-md bg-green-500`} onPress={onPress}>
        <Text className={`text-center font-semibold  text-base `} style={{color}}>{text}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton