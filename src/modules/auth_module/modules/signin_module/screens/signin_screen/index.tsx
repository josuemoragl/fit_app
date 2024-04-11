import React, {useRef, useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {Button, TextInput as Input} from 'react-native-paper';

import {useNavigation} from '@react-navigation/native';

import SupabaseDataSource from '../../../../../../common/infrastructure/datasources/supabase_datasource';
import AuthRepositoryImpl from '../../../../../../common/infrastructure/repositories/auth_repository';
import LoaderModal from '../../../../../../common/presentation/components/molecules/loader_modal';
import {authRoutes} from '../../../../navigation/auth_routes';

export default function Auth() {
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const loaderModalref = useRef<any>();

  async function signInWithEmail() {
    const authRepository = new AuthRepositoryImpl(new SupabaseDataSource());
    loaderModalref?.current.toggleModal();
    setLoading(true);
    const {error} = await authRepository.signinWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      Alert.alert(error.message);
    }
    setLoading(false);
    loaderModalref?.current.toggleModal();
  }

  /*async function signUpWithEmail() {
    setLoading(true);
    const {
      data: {session},
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      Alert.alert(error.message);
    }
    if (!session) {
      Alert.alert('Please check your inbox for email verification!');
    }
    setLoading(false);
  }*/

  return (
    <>
      <View style={styles.container}>
        <View style={[styles.verticallySpaced, styles.mt20]}>
          <Input
            label="Email"
            onChangeText={text => setEmail(text)}
            value={email}
            placeholder="email@address.com"
            autoCapitalize={'none'}
          />
        </View>
        <View style={styles.verticallySpaced}>
          <Input
            label="Password"
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry={true}
            placeholder="Password"
            autoCapitalize={'none'}
          />
        </View>
        <View style={[styles.verticallySpaced, styles.mt20]}>
          <Button disabled={loading} onPress={() => signInWithEmail()}>
            SignIn
          </Button>
        </View>
        <View style={styles.verticallySpaced}>
          <Button
            disabled={loading}
            onPress={() => navigation.navigate(authRoutes.signupStack)}>
            Sign Up
          </Button>
        </View>
      </View>
      <LoaderModal ref={loaderModalref} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
  mt20: {
    marginTop: 20,
  },
});
