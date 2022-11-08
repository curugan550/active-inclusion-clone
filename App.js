import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import StyledButton from './component/StyledButton';
import Homepage from './component/Homepage';
import Header from './component/Header';

export default function App() {
  return (
    <View style={styles.container}>
        <Header/>
        <Homepage/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
