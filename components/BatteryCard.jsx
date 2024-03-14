import { View, Text, StyleSheet } from 'react-native'
import { BatterLevel } from '../util/Helper';

const BatteryCard = ({batteryLevel,isCharging, isBatteryFull, deviceName = null}) => {
    
  const bgColor = BatterLevel(batteryLevel) < 20 ? 'bg-red-500 ' : (isCharging === 'Yes') ? ' bg-orange-400 bg-gradient-to-b' : ' bg-purple-500 ';
  return (
    <View className={`${bgColor} w-[100%] h-100 rounded py-4 px-3`} style={styles.box}> 
        {/* Battery image */}
        <View></View>
        {/* Description */}
        <View className="flex flex-row justify-between py-3">
            <Text className="text-white text-xl font-bold">
                Battery Level: 
            </Text>
            <Text className="text-lg font-bold ">
                 {BatterLevel(batteryLevel)}%
            </Text>
        </View>
    
        <View className="flex flex-row justify-between bg-grad  py-3">
            <Text className="text-white text-xl font-bold ">
                Battery Charging: 
            </Text>
            <Text className="text-lg font-bold">
                {isCharging}
            </Text>
        </View>

        <View className="flex flex-row justify-between py-3">
            <Text className="text-white text-xl font-bold ">
                Battery Full: 
            </Text>
            <Text className="text-lg font-bold">
                {isBatteryFull}
            </Text>
        </View>

        <View className="flex flex-row justify-between py-3">
            <Text className="text-white text-xl font-bold ">
                Device Name: 
            </Text>
            <Text className="text-lg font-bold">
                {deviceName}
            </Text>
        </View>
    </View>
  )
}

export default BatteryCard

const styles = StyleSheet.create({
    box: {
        shadowColor: "#fff",
        elevation: 2, 
        shadowOffset: {
            width: 0,
            height: 4,
        },
    shadowOpacity: 0.06,
    }
});