import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const TopNavBar = ({back, title}) => {
  return (
    <View className="flex-row gap-10 items-center  py-2">
      <TouchableOpacity onPress={back}>
        <Ionicons name='arrow-back' color={"#fff"} size={35} />
      </TouchableOpacity>
      <View>
        <Text className="text-white text-3xl font-bold">{title}</Text>
      </View>
    </View>
  )
}

export default TopNavBar