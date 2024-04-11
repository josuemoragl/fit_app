import {DrawerNavigationOptions} from '@react-navigation/drawer';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

export const navigationScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  title: undefined,
  headerTitle: () => null,
};

export const drawerNavigationOptions: DrawerNavigationOptions = {
  headerTitle: () => null,
};
