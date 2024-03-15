import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, } from 'react-native';
import React, { useEffect } from 'react'
import * as Battery from 'expo-battery';
import HomeScreen from './screens/HomeScreen';
import NotificationScreen from './screens/NotificationScreen';
import { BatterLevel, screens } from './util/Helper';

export default function App() {
    const [batteryLevel, setBatteryLevel] = React.useState(null);
    const [isCharging, setIsCharging] = React.useState("No");
    const [isBatteryFull, setIsBatteryFull] = React.useState("No");
    const [navigation, setNavigation] = React.useState("Home");
   const [notification, setNotification] = React.useState(false);
   const [toggleValue, setToggleValue] = React.useState(false);

  const handleToggleChange = () => {
    setToggleValue(!toggleValue);
  };
    
    useEffect(()=>{
      const getBatteryDetails = async () => {
        const level = await Battery.getBatteryLevelAsync();
        const mode = await Battery.getPowerStateAsync();
        const batteryState = await Battery.getBatteryStateAsync();
        setIsCharging(batteryState === 2 ? "Yes" : "No");
        setIsBatteryFull(batteryState === 3 ? "Yes" : "No");
        setBatteryLevel(level); // Convert to percentage
        //alert battery 
        if (toggleValue && (level) < 0.15) {
          alert("Battery low");
        }
    };
        getBatteryDetails()
        // console.log(BatterLevel(batteryLevel));
        
         // Event listener for battery state changes
         const subscription = Battery.addBatteryStateListener(getBatteryDetails);

         // Clean-up function
         return () => {
             subscription.remove();
         };
    },[1000])
        
  return (
    <SafeAreaView style={styles.container(navigation == screens.home)}>
      
      {navigation == screens.home && <HomeScreen batteryLevel={batteryLevel} isCharging={isCharging} isBatteryFull={isBatteryFull} navigate={setNavigation} />}
      {navigation == screens.notification && <NotificationScreen navigate={setNavigation} toggleValue={toggleValue} handleToggleChange={handleToggleChange} />}
      
      <StatusBar style="light" />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container (isHome)  {
    return {
      flex: 1,
      backgroundColor: '#121717',
      paddingTop: isHome ? 100 : 50
    }
  },
});
