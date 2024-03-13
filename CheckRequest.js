import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import Constants from 'expo-constants';


const CheckRequestForm = () => {
    const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm({
        defaultValues: {
          firstName: '',
          lastName: ''
        }
      });

    const onSubmit = data => {
        console.log(data);
      };

    const onChange = arg => {
        return {
          value: arg.nativeEvent.text,
        };
      };
      
      console.log('errors', errors);


    return (
    <View style={styles.container}>
      <Text style={styles.label}>Full Name</Text>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="firstName"
        rules={{ required: true }}
      />
      <Text style={styles.label}>first name</Text>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="lastName"
        rules={{ required: true }}
      />


      <View style={styles.button}>
        <Button
          style={styles.buttonInner}
          color
          title="Button"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
    label: {
      color: 'black',
      margin: 20,
      marginLeft: 0,
    },
    button: {
      marginTop: 40,
      color: 'white',
      height: 40,
      backgroundColor: '#93282a',
      borderRadius: 4,
    },
    container: {
      flex: 1,
      justifyContent: '',
      paddingTop: Constants.statusBarHeight,
      padding: 8,
      backgroundColor: '#white',
    },
    input: {
      backgroundColor: 'white',
      borderColor: '#f0f',
      height: 40,
      padding: 10,
      borderRadius: 4,
    },
  });

export default CheckRequestForm;

