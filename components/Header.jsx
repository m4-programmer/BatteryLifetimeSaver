import { View, Text } from 'react-native'
import React from 'react'

const Header = ({text}) => {
  return (
    <View className='top-10 absolute mb-10 w-[100%]'>
      <Text className='text-white font-bold text-3xl text-center '>{text ?? "Battery Saver"}</Text>
    </View>
  )
}

export default Header