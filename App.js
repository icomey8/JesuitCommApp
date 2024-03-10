import React from 'react';
import {View, StatusBar, Text, StyleSheet, TouchableOpacity} from 'react-native';

//Navigation & Forms import
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AbsenceForm from './AbsenceForm';



const Stack = createStackNavigator();

// main home screen
const MainScreen = ({ navigation }) => {

  const navigateToPage = (pageName) => {
    navigation.navigate(pageName);
  };

  // group of forms
  const FormList = () => {
    return (
      <View style={styles.buttonContainer}> 
        <View style={styles.buttonRow}> 

          <TouchableOpacity style={styles.button} onPress={() => navigateToPage('Absence-Form')}>
            <Text> Absence Form </Text>
          </TouchableOpacity>

        </View>


        <View style={styles.buttonRow}> 
          <TouchableOpacity style={styles.button} onPress={() => navigateToPage('Absence-Form')}>
            <Text> Villa House Sign-up </Text>
          </TouchableOpacity>
        </View>


        <View style={styles.buttonRow}> 
          <TouchableOpacity style={styles.button} onPress={() => navigateToPage('Absence-Form')}>
            <Text> Community Room Reservation </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonRow}> 
          <TouchableOpacity style={styles.button} onPress={() => navigateToPage('Absence-Form')}>
            <Text> Dinner Sign-Out </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonRow}> 
          <TouchableOpacity style={styles.button} onPress={() => navigateToPage('Absence-Form')}>
            <Text> Service Request </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonRow}> 
          <TouchableOpacity style={styles.button} onPress={() => navigateToPage('Absence-Form')}>
            <Text> Personal Expenses Request </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonRow}> 
          <TouchableOpacity style={styles.button} onPress={() => navigateToPage('Absence-Form')}>
            <Text> Automobile Accident Report </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonRow}> 
          <TouchableOpacity style={styles.button} onPress={() => navigateToPage('Absence-Form')}>
            <Text> Check Request </Text>
          </TouchableOpacity>
        </View>



      </View>
    );
};
  
return (
  <View style={styles.container}>
    {/* Your main content goes here */}
    <Text> Hello, welcome to the sign-ups page. </Text>

    {/* Buttons at the bottom */}
    {FormList()}

    <StatusBar style="auto" />
  </View>
);
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#89f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {

  },
  buttonContainer: {
    //position: 'absolute',
    //bottom: 0,
    width: '70%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingVertical: 20,
    paddingBottom: 50,
    
    backgroundColor: '#93282a',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
   
  },
  button: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    borderWidth: 2, 
    borderColor: '#000',
    backgroundColor: '#fff',
  },
});

 
  

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="Absence-Form" component={AbsenceForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}