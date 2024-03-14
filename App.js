import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Platform, TouchableOpacity } from 'react-native';
import Header from './components/Header';
import BatteryCard from './components/BatteryCard';
import React, { useEffect } from 'react'
import * as Battery from 'expo-battery';

import FeatureBlock from './components/FeatureBlock';
const ios = Platform.OS === 'ios'

export default function App() {
    const [batteryLevel, setBatteryLevel] = React.useState(null);
    const [isCharging, setIsCharging] = React.useState("No");
    const [isBatteryFull, setIsBatteryFull] = React.useState("No");

    const getBatteryDetails = async () => {
        const level = await Battery.getBatteryLevelAsync();
        const mode = await Battery.getPowerStateAsync();
        const batteryState = await Battery.getBatteryStateAsync();
        console.log(batteryState);
        setIsCharging(batteryState === 2 ? "Yes" : "No");
        setIsBatteryFull(batteryState === 3 ? "Yes" : "No");
        setBatteryLevel(level); // Convert to percentage
    };
    useEffect(()=>{
        getBatteryDetails()

         // Event listener for battery state changes
         const subscription = Battery.addBatteryStateListener(getBatteryDetails);

         // Clean-up function
         return () => {
             subscription.remove();
         };
    },[1000])
    const navigate = () => {}
  return (
    <SafeAreaView style={styles.container}>
      
      <Header />

      <ScrollView contentContainerStyle={styles.body}>
        {/* Card Section for batter */}
        <BatteryCard batteryLevel={batteryLevel} isCharging={isCharging} isBatteryFull={isBatteryFull}/>

        <Text className="text-2xl pt-10 text-white font-extrabold">Features</Text>
        {/* Optimize Brightness */}
          <FeatureBlock title={"Optimize for battery"} text={"Reduce brightness"} navigate={navigate} />
        {/* Set Notification */}
          <FeatureBlock title={"Notification Settings"} text={"Set notification to help you save battery"} navigate={navigate} />
        {/* Set Permission */}
        <FeatureBlock title={"Permission Settings"} text={"Set permission"} navigate={navigate} />
        {/* Top Battery Consuming Apps */}
        <View >
        
        </View>
      </ScrollView>
      
      <StatusBar style="light" />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121717',
    paddingTop: 100
  },
  body: {
    paddingTop: ios ? 50 : 0,
    paddingHorizontal: 30,
  }
});
