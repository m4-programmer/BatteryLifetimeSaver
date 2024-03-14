import { View, Text } from 'react-native'
import React from 'react'

const H3 = ({text}) => {
  return (
    <View>
      <Text className="text-lg font-bold text-white">{text}</Text>
    </View>
  )
}

export default H3