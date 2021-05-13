import { HomeDrawerNavigator } from './HomeDrawerNavigator';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

export const AppNavigator = () => (
  <NavigationContainer>
    <Navigator headerMode='none'>
      <Screen name={'Drawer'} component={HomeDrawerNavigator}/>
    </Navigator>
  </NavigationContainer>
);
