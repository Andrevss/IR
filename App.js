import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import Balance from './src/components/Balance';
import Tax from './src/components/Tax';
import Create from './src/components/Create';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Balance/>
      <Create/>
      <Tax/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
