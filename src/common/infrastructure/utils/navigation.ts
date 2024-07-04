import {DrawerNavigationOptions} from '@react-navigation/drawer';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

export const navigationScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  title: undefined,
  headerTitle: () => null,
  headerBackTitle: undefined,
};

export const drawerNavigationOptions: DrawerNavigationOptions = {
  headerTitle: () => null,
};

export const headerNoBackTitleOptions: NativeStackNavigationOptions = {
  headerBackTitleVisible: false,
  headerTitle: '',
  headerLeft: () => null,
};
