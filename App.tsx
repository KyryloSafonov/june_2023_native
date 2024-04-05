/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home.tsx';
import Users from './screens/Users.tsx';
import UserPosts from './screens/UserPosts.tsx';
import {Routes} from './routes';
import Tabs from './screens/tabs/Tabs.tsx';

const Stack = createNativeStackNavigator();

const App = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '600',
          },
        }}
        initialRouteName={Routes.HOME}>
        <Stack.Screen name={Routes.HOME} component={Home} />
        <Stack.Screen name={Routes.USERS} component={Users} />
        <Stack.Screen name={Routes.USER_POSTS} component={UserPosts} />
        <Stack.Screen name={Routes.TABS} component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
