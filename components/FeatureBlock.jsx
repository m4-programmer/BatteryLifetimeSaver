import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import H3 from './H3';
import { Ionicons } from '@expo/vector-icons'
import P from './P';
const FeatureBlock = ({title, text, navigate}) => {
  return (
    <TouchableOpacity className="flex-row justify-between items-start my-4 " onPress={navigate}>
          {/* Left Side */}
          <View >
            <H3 text={title} />
            <P text={text} />
          </View>
          {/* Right Side */}
          <View>
            <Ionicons name='arrow-forward-outline' color={"#fff"} size={25} />
          </View>
    </TouchableOpacity>

  )
}

export default FeatureBlock