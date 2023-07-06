import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FirstScreen from './src/components/FirstScreen';

export default function App() {
  return (
    <View style={styles.container}>
     <FirstScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242428',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
