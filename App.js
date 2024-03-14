import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Platform } from 'react-native';
import Header from './components/Header';
import BatteryCard from './components/BatteryCard';

const ios = Platform.OS === 'ios'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      
      <Header />

      <ScrollView contentContainerStyle={styles.body}>
        {/* Card Section for batter */}
        <BatteryCard />
        {/*  */}
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
    justifyContent: "center",
    alignItems: "center",
    paddingTop: ios ? 50 : 0,
  
  }
});
