import * as React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  drawerNavigationOptions,
  navigationScreenOptions,
} from '../../../../../common/infrastructure/utils/navigation';
import SettingsScreen from '../../settings_module/screens/settings_screen';
import HomeScreen from '../screens/home_screen';
import PokemonDetailScreen from '../screens/pokemon_detail_screen';

import {homeRoutes} from './home_routes';

const Drawer = createDrawerNavigator();

function HomeDrawerStack() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={drawerNavigationOptions}>
      <Drawer.Screen name={homeRoutes.homeScreen} component={HomeScreen} />
      <Drawer.Screen
        name={homeRoutes.settingsScreen}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={navigationScreenOptions}>
      <Stack.Screen name={homeRoutes.homeDrawer} component={HomeDrawerStack} />
      <Stack.Screen
        name={homeRoutes.pokemonDetailScreen}
        component={PokemonDetailScreen}
      />
    </Stack.Navigator>
  );
}
