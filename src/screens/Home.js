import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header'
import Create from '../components/Create'
import Tax from '../components/Tax'
import Balance from '../components/Balance'
import Edit from '../components/Edit';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header/>
      <Balance/>
      <Create/>
      <Tax/>
      <Edit/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});