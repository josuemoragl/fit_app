import * as React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  drawerNavigationOptions,
  navigationScreenOptions,
} from '../../../../../common/infrastructure/utils/navigation';
import SettingsScreen from '../../settings_module/screens/settings_screen';
import UILibrariesStack from '../../ui_libraries_module/navigation/ui_libraries_stack';
import UILibrariesMainScreen from '../../ui_libraries_module/screens/main';
import JavascriptStack from '../modules/javascript_module/navigation/javascript_stack';
import JavaScriptMainScreen from '../modules/javascript_module/screens/main';
import HomeScreen from '../screens/home_screen';
import PokemonDetailScreen from '../screens/pokemon_detail_screen';

import {homeRoutes} from './home_routes';

const Drawer = createDrawerNavigator();

function HomeDrawerStack() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={drawerNavigationOptions}>
      <Drawer.Screen
        name={homeRoutes.homeScreen}
        component={HomeScreen}
        options={{
          title: 'Pokedex',
        }}
      />
      <Drawer.Screen
        name={homeRoutes.settingsScreen}
        component={SettingsScreen}
        options={{
          title: 'Settings',
        }}
      />
      <Drawer.Screen
        name={homeRoutes.javascriptMain}
        component={JavaScriptMainScreen}
        options={{
          title: 'JavaScript Questions',
        }}
      />
      <Drawer.Screen
        name={homeRoutes.uiLibrariesMain}
        component={UILibrariesMainScreen}
        options={{
          title: 'UI Libraries',
        }}
      />
    </Drawer.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{...navigationScreenOptions, headerShown: false}}>
      <Stack.Screen name={homeRoutes.homeDrawer} component={HomeDrawerStack} />
      <Stack.Screen
        name={homeRoutes.pokemonDetailScreen}
        component={PokemonDetailScreen}
      />
      <Stack.Screen
        name={homeRoutes.javascriptExplanations}
        component={JavascriptStack}
      />
      <Stack.Screen
        name={homeRoutes.uiLibrariesModule}
        component={UILibrariesStack}
      />
    </Stack.Navigator>
  );
}
