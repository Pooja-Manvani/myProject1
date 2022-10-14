import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Parentss from './components/parent';
import PersonAdd from './Crud_Componnents/personAdd';
import PersonList from './Crud_Componnents/personList';
import PersonRemove from './Crud_Componnents/personRemove';


export default function App() {
  
  return (
    <View style={styles.container}>
      <Text style={styles.head}>React App</Text>
      <StatusBar style="auto"/>
      <Parentss></Parentss>
      <PersonList/>
      <PersonAdd />
      <PersonRemove />
    </View>
  );
}

 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  head: {
    top: 0,
    fontSize: 20,
    color: 'red',
    height: 50,
    width: 300,
    backgroundColor: '#94d9e7',
    paddingTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  }
});
