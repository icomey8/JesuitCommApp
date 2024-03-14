// imports
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import Constants from 'expo-constants';
import { DatePickerModal } from 'react-native-paper-dates';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button } from 'react-native-paper';
import { enGB, registerTranslation } from 'react-native-paper-dates'

// absence form
const AbsenceForm = ({ navigation }) => {

// For Hook Forms
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

    /* NOTE - I THINK WE MAY HAVE TO SWITCH TO A DIFFERENT LIBRARY FOR THE DATE PICKER, ONE
    THAT IS MORE WIDELY USED / HAS MORE HELP AND RESOURCES */

// For Date Picker 
    const [range, setRange] = React.useState({ startDate: undefined, endDate: undefined });
    const [open, setOpen] = React.useState(false);

    const onDismiss = React.useCallback(() => {
        setOpen(false);
      }, [setOpen]);

    const onConfirm = React.useCallback(
        ({ startDate, endDate }) => {
          setOpen(false);
          setRange({ startDate, endDate });
        },
        [setOpen, setRange]
      );
    registerTranslation('en', enGB)

    
    return (
        <SafeAreaProvider>
        <View style={styles.container}>
          <Text style={styles.label}> First Name</Text>
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
          <Text style={styles.label}> Last Name</Text>
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


          <Text style={styles.label}>Purpose of Absence</Text>
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

        <Text style={styles.label}>Date of Absence</Text>
        <Button onPress={() => setOpen(true)} uppercase={false} mode="outlined">
          Pick range
        </Button>
        <DatePickerModal 
             locale='en'
             visible={open}
             onDismiss={onDismiss}
             startDate={range.startDate}
             endDate={range.endDate}
             onConfirm={onConfirm}
             startYear={2023}
             endYear={2024}
        />


        <Text style={styles.label}>Destination (Address, City, State) </Text>
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

        <Text style={styles.label}> use a checkbox component here for "whereabouts information" </Text>
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
        </SafeAreaProvider>
        )
    };
    // don't forget return to home page button above
    


// stylesheet 
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


export default AbsenceForm;
