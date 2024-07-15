import {DrawerNavigationOptions} from '@react-navigation/drawer';
import {StackActions} from '@react-navigation/native';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

export const navigationScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  title: undefined,
  headerTitle: () => null,
  headerBackTitle: undefined,
  headerBackTitleVisible: false,
};

export const drawerNavigationOptions: DrawerNavigationOptions = {
  headerTitle: () => null,
};

export const headerNoBackTitleOptions: NativeStackNavigationOptions = {};

export const stackPush = (navigation: any, parent: any, child: any) => {
  const pushAction = StackActions.push(parent, child);
  navigation.dispatch(pushAction);
};
