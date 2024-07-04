import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {headerNoBackTitleOptions} from '../../../../../../../common/infrastructure/utils/navigation';
import JavaScriptBindMethodcreen from '../screens/bindMethodScreen';
import JavaScriptConstVsObjectFreezeScreen from '../screens/const_vs_object_freeze';
import JavaScriptIIFEScreen from '../screens/IIFEScreen';
import JavaScriptCloseFunctionScreen from '../screens/javascript_close';
import JavaScriptClosuresScreen from '../screens/javascript_clousures';
import JavaScriptEqualityScreen from '../screens/javascript_equality';
import JavaScriptGeneratorsScreen from '../screens/javascript_generators';
import JavaScriptHoistingScreen from '../screens/javascript_hoisting';
import JavaScriptMainScreen from '../screens/main';
import JavaScriptMapVsForEachScreen from '../screens/map_vs_foreach';
import JavaScriptNullVsUndefinedScreen from '../screens/null_vs_undefined';
import JavaScriptTemporaryDeadZoneScreen from '../screens/temporary_dead_zone';
import JavaScriptValueOrReferenceScreen from '../screens/value_or_reference';
import JavaScriptWeakMapVsMapScreen from '../screens/weak_map_vs_map';

import {javascriptRoutes} from './javascript_routes';

const Stack = createNativeStackNavigator();

export default function JavascriptStack() {
  return (
    <Stack.Navigator
      screenOptions={headerNoBackTitleOptions}
      initialRouteName={javascriptRoutes.main}>
      <Stack.Screen
        name={javascriptRoutes.main}
        component={JavaScriptMainScreen}
      />
      <Stack.Screen
        name={javascriptRoutes.javaScriptEquality}
        component={JavaScriptEqualityScreen}
      />
      <Stack.Screen
        name={javascriptRoutes.IIFEScreen}
        component={JavaScriptIIFEScreen}
      />
      <Stack.Screen
        name={javascriptRoutes.bindMethodScreen}
        component={JavaScriptBindMethodcreen}
      />
      <Stack.Screen
        name={javascriptRoutes.constVsObjectFreezeScreen}
        component={JavaScriptConstVsObjectFreezeScreen}
      />
      <Stack.Screen
        name={javascriptRoutes.javascriptGenerators}
        component={JavaScriptGeneratorsScreen}
      />
      <Stack.Screen
        name={javascriptRoutes.javascriptHoisting}
        component={JavaScriptHoistingScreen}
      />
      <Stack.Screen
        name={javascriptRoutes.temporaryDeadZone}
        component={JavaScriptTemporaryDeadZoneScreen}
      />
      <Stack.Screen
        name={javascriptRoutes.mapVsForEach}
        component={JavaScriptMapVsForEachScreen}
      />
      <Stack.Screen
        name={javascriptRoutes.nullVsUndefined}
        component={JavaScriptNullVsUndefinedScreen}
      />
      <Stack.Screen
        name={javascriptRoutes.weakMapVsMap}
        component={JavaScriptWeakMapVsMapScreen}
      />
      <Stack.Screen
        name={javascriptRoutes.valueOrReferenceLanguage}
        component={JavaScriptValueOrReferenceScreen}
      />
      <Stack.Screen
        name={javascriptRoutes.javascriptClosures}
        component={JavaScriptClosuresScreen}
      />
      <Stack.Screen
        name={javascriptRoutes.javascriptClose}
        component={JavaScriptCloseFunctionScreen}
      />
    </Stack.Navigator>
  );
}
