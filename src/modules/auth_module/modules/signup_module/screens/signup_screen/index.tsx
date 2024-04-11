// SignUpScreen.js
import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {supabase} from '../../../../../../supabase';
import Header from '../../../../../../common/presentation/components/molecules/appbar';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const {error} = await supabase.auth.signUp({email, password});
      if (error) {
        throw error;
      }
      // Aquí puedes redirigir al usuario a otra pantalla o realizar otra acción después del registro exitoso
    } catch (error: any) {
      console.error('Error signing up:', error.message);
    }
  };

  return (
    <>
      <Header />
      <View style={styles.container}>
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
        <Button mode="contained" onPress={handleSignUp} style={styles.button}>
          Sign Up
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
  },
});

export default SignUpScreen;
