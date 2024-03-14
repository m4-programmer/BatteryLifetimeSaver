import { View, Text, ScrollView, StyleSheet, Platform } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import BatteryCard from '../components/BatteryCard';
import FeatureBlock from '../components/FeatureBlock';
const ios = Platform.OS === 'ios'
const HomeScreen = (props) => {
    const {isCharging, batteryLevel, isBatteryFull} = props

    const navigate = () => {}
  return (
    <>
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
        <Text className="text-2xl pt-10 text-white font-extrabold">Top battery-consuming apps</Text>
        <View >

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
  