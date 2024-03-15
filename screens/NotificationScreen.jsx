import { View, Text } from 'react-native'
import React from 'react'
import TopNavBar from '../components/TopNavBar'
import { screens } from '../util/Helper'
import H3 from '../components/H3'
import P from '../components/P'
import CustomToggle from '../components/CustomToggle'

const NotificationScreen = ({navigate, toggleValue, handleToggleChange}) => {
  
  return (
    <View className="px-4"> 
      <TopNavBar back={()=>navigate(screens.home)} title={screens.notification} />
      <H3 text={"Alert me when"} />

      {/* notification */}
      <View className="flex-row justify-between items-start my-4 pr-5">
          {/* Left Side */}
          <View >
            <H3 text={"Low Battery Alert"} />
            <P text={"Get alert when battery is below 15%"} />
          </View>
          {/* Right Side */}
          <View style={{marginLeft: -20}}>
            <CustomToggle value={toggleValue} onValueChange={handleToggleChange} />
          </View>
    </View>
    </View>
  )
}

export default NotificationScreen