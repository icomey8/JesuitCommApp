import { useForm } from 'react-hook-form';
import {  View, StyleSheet } from 'react-native';

const App = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <View styles={styles.container}> 
        <form onSubmit={handleSubmit(onSubmit)}> 
            <input {...register('email', {
                required: "email is required",
            })} 
            type='text' placeholder='email'/>

            {errors.email && (<div className='text-red-500'>{errors.email.message} </div>)}

            <input {...register('password', {
                required: "password is required",
                minLength: 8,
            })} 
            type='text' placeholder='password'/>

            {errors.password && (<div className='text-red-500'>{errors.password.message} </div>)}

            <button type="submit">Submit </button>
        </form>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#19f',
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


export default App;

