import React, {useRef, useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {Button, TextInput as Input} from 'react-native-paper';
import {Formik} from 'formik';

import {useNavigation} from '@react-navigation/native';

import SupabaseDataSource from '../../../../../../common/infrastructure/datasources/supabase_datasource';
import AuthRepositoryImpl from '../../../../../../common/infrastructure/repositories/auth_repository';
import LoaderModal from '../../../../../../common/presentation/components/molecules/loader_modal';
import useSupabase from '../../../../../../supabase';
import {authRoutes} from '../../../../navigation/auth_routes';

import {validationSchema} from './validationSchema';

export default function Auth() {
  const navigation = useNavigation<any>();
  const [loading, setLoading] = useState(false);

  const loaderModalref = useRef<any>();
  const {getSupabase} = useSupabase();

  async function signInWithEmail(values: any) {
    try {
      const authRepository = new AuthRepositoryImpl(
        new SupabaseDataSource(getSupabase()),
      );
      loaderModalref?.current.toggleModal();
      setLoading(true);
      const {error} = await authRepository.signinWithPassword({
        email: values.email,
        password: values.password,
      });

      if (error) {
        Alert.alert(error.message);
      }
      setLoading(false);
      loaderModalref?.current.toggleModal();
    } catch (e) {
      console.log({e});
    }
  }

  return (
    <>
      <View style={styles.container}>
        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={validationSchema}
          onSubmit={async (values, {setSubmitting}) => {
            setSubmitting(true);
            await signInWithEmail(values);
            setSubmitting(false);
          }}>
          {({
            values,
            errors,
            handleChange,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <>
              <View style={[styles.verticallySpaced, styles.mt20]}>
                <Input
                  label="Email"
                  onChangeText={handleChange('email')}
                  value={values.email}
                  placeholder="email@address.com"
                  autoCapitalize="none"
                  error={!!errors.email}
                />
              </View>
              <View style={styles.verticallySpaced}>
                <Input
                  label="Password"
                  onChangeText={handleChange('password')}
                  value={values.password}
                  secureTextEntry={true}
                  placeholder="Password"
                  autoCapitalize="none"
                />
              </View>
              <View style={[styles.verticallySpaced, styles.mt20]}>
                <Button
                  disabled={loading}
                  onPress={handleSubmit as any}
                  loading={isSubmitting}>
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
            </>
          )}
        </Formik>
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
