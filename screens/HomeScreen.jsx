import { View, Text, ScrollView, StyleSheet, Platform, Linking } from 'react-native'
import React, {useEffect} from 'react'
import Header from '../components/Header'
import BatteryCard from '../components/BatteryCard';
import FeatureBlock from '../components/FeatureBlock';
import { screens } from '../util/Helper';
import CustomButton from '../components/CustomButton';
import { Permissions } from 'expo';
import * as Brightness from 'expo-brightness';

const ios = Platform.OS === 'ios'
const HomeScreen = (props) => {
    const {isCharging, batteryLevel, isBatteryFull, navigate} = props
    const [brightness, setBrightness] = React.useState(null);

    const openBatteryUsageSettings = () => {
      Linking.openSettings();
    };
    const reduceBrightness = async () => {
      try {
        const { status } = await Brightness.requestPermissionsAsync();
        // Set the brightness level to a lower value (e.g., 0.5)
        if (status === 'granted') {
          Brightness.setSystemBrightnessAsync(0.05);
        }
      
      } catch (error) {
        console.error('Error setting brightness:', error);
      }
    };
    const saveBattery = async () => {
      try {
        const { status } = await Brightness.requestPermissionsAsync();
        // Set the brightness level to a lower value (e.g., 0.5)
        if (status === 'granted') {
          Brightness.setSystemBrightnessAsync(0.0);
        }
        alert("Battery Optimized Successfully");
      } catch (error) {
        console.error('Error setting brightness:', error);
      }
    };

  return (
    <>
      
          <Header />
      

        <ScrollView contentContainerStyle={styles.body}>
        {/* Card Section for batter */}
        <BatteryCard batteryLevel={batteryLevel} isCharging={isCharging} isBatteryFull={isBatteryFull}/>

        <Text className="text-2xl pt-10 text-white font-extrabold">Features</Text>
        {/* Optimize Brightness */}
            <FeatureBlock title={"Optimize for battery"} text={"Reduce brightness"} navigate={reduceBrightness} />
        {/* Set Notification */}
            <FeatureBlock title={"Notification Settings"} text={"Set notification to help you save battery"} navigate={()=>navigate(screens.notification)} />
        {/* Set Permission */}
          <FeatureBlock title={"Apps Battery Consumption"} text={"See apps that are consuming battery"} navigate={()=>openBatteryUsageSettings()} />
        {/* Using Deep Linking, Link user to their phone setting to see app that is consuming more battery */}
        
        {/* Button */}
        <View className="mt-20">
          <CustomButton text={"Save Battery"} color={"#fff"} onPress={saveBattery} />
        </View>
        </ScrollView>
    </>
  )
}

export default HomeScreen


const styles = StyleSheet.create({

    body: {
      paddingTop: ios ? 50 : 0,
      paddingHorizontal: 30,
    }
  });
  