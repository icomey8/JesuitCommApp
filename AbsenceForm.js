// imports
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { TextInput } from 'react-native-gesture-handler';



// absence form
const AbsenceForm = ({ navigation }) => {
    const navigateToHome = () => {
        navigation.navigate('Home');
      };

    const { handleSubmit, control } = useForm();
    
      return (
        <View style={styles.container}>
          <Text>Welcome to the Absence Form Page! test test</Text>

          <Controller style={styles.formField}
          control={control}
          name="firstName"
          render={() => <TextInput placeholder={"first name"} />}
          /> 
          
          <Controller style={styles.formField}
          control={control}
          name="lastName"
          render={() => <TextInput placeholder={"last name"} />}
          /> 
          
          <Controller style={styles.formField}
          control={control}
          name="purpose"
          render={() => <TextInput placeholder={"purpose of absence"} />}
          /> 

          <Controller style={styles.formField}
          control={control}
          name="destination"
          render={() => <TextInput placeholder={"destination (address, city, state)"} />}
          /> 
          
          <button type="submit">Submit</button>
        
        </View>
      );
    };
    // don't forget return to home page button above
    


// stylesheet 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1ff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    formField: {
        borderRadius: 5,
        backgroundColor: '#93282a',
    },
    button: {
      marginTop: 20,
      padding: 10,
      borderRadius: 5,
      backgroundColor: '#93282a',
    },
    Text:{
      color: 'black',
    }
  });


export default AbsenceForm;
