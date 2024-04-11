// SettingsScreen.js
import React, {useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import {Divider, List} from 'react-native-paper';
import {useAtom} from 'jotai';

import sessionAtom, {
  defaultSession,
} from '../../../../../../common/infrastructure/state/atoms/session_atom';
import LoaderModal from '../../../../../../common/presentation/components/molecules/loader_modal';
import {useTheme} from '../../../../../../common/presentation/theme';
import useToggleTheme from '../../../../../../common/presentation/theme/hooks/use_toggle_theme';
import {Brightness} from '../../../../../../common/presentation/theme/themeData/interfaces';
import {supabase} from '../../../../../../supabase';

import SwitchTheme from './components/swith_theme';

const SettingsScreen = () => {
  const [_, setSession] = useAtom(sessionAtom);

  const loaderModalRef = useRef<any>();

  const theme = useTheme();
  const [isSwitchOn, setIsSwitchOn] = React.useState(
    theme.colorScheme.brightness === Brightness.dark ? true : false,
  );

  const toggleTheme = useToggleTheme();

  const handleSignOut = async () => {
    try {
      loaderModalRef?.current.toggleModal();
      await supabase.auth.signOut();
      setSession(defaultSession);
      loaderModalRef?.current.toggleModal();
    } catch (error: any) {
      console.error('Error signing out:', error.message);
      loaderModalRef?.current.toggleModal();
    }
  };

  const swith = () => (
    <SwitchTheme
      isSwitchOn={isSwitchOn}
      setIsSwitchOn={setIsSwitchOn}
      toggleTheme={toggleTheme}
    />
  );

  return (
    <>
      <View style={[styles.container]}>
        <List.Item
          title="Dark Theme"
          description="Item description"
          right={swith}
        />
        <Divider />
        <List.Item
          title="Sign out"
          description="Item description"
          onPress={handleSignOut}
        />
      </View>
      <LoaderModal ref={loaderModalRef} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SettingsScreen;
