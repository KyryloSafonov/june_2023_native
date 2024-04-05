import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FirstTab from './FirstTab.tsx';
import SecondTab from './SecondTab.tsx';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NestedFirstTab from './NestedFirstTab.tsx';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export enum TabScreens {
  FIRST = 'FIRST',
  SECOND = 'SECOND',
}

export enum FIRST_TAB_SCREENS {
  FIRST_SCREEN = 'FIRST_SCREEN',
  SECOND_SCREEN = 'SECOND_SCREEN',
}

const FirstTabScreens = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={FIRST_TAB_SCREENS.FIRST_SCREEN}
        component={FirstTab}
      />
      <Stack.Screen
        name={FIRST_TAB_SCREENS.SECOND_SCREEN}
        component={NestedFirstTab}
      />
    </Stack.Navigator>
  );
};

const Tabs: FC = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name={TabScreens.FIRST} component={FirstTabScreens} />
      <Tab.Screen name={TabScreens.SECOND} component={SecondTab} />
    </Tab.Navigator>
  );
};

export default Tabs;
