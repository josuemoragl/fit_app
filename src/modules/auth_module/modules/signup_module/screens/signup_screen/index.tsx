// SignUpScreen.js
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';

import Header from '../../../../../../common/presentation/components/molecules/appbar';
import useSupabase from '../../../../../../supabase';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {getSupabase} = useSupabase();

  const handleSignUp = async () => {
    try {
      const supabase = getSupabase();
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
