import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FirstScreen from './src/components/FirstScreen';
import ThirdScreen from './src/components/ThirdScreen';
import FourthScreen from './src/components/FourthScreen';
import FifthScreen from './src/components/FifthScreen';
import SixthScreen from './src/components/SixthScreen';


export default function App() {
  return (
    <View style={styles.container}>
      {/* <FirstScreen/> */}
      {/* <ThirdScreen/> */}
      <FourthScreen/>
      {/* <FifthScreen/> */}
      {/* <SixthScreen/> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
