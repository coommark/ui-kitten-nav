import { ActivityIcon, VideoIcon } from '../assets/icons';
import { BottomNavigation, BottomNavigationTab, Divider } from '@ui-kitten/components';

import { HomeScreen } from '../screens/HomeScreen';
import React from 'react';
import { StoryDetailsScreen } from '../screens/StoryDetailsScreen';
import { VideosScreen } from '../screens/VideosScreen';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabBar = ({ navigation, state }) => (
    <View>
        <Divider/>
        <BottomNavigation
            appearance='noIndicator'
            selectedIndex={state.index}
            onSelect={index => navigation.navigate(state.routeNames[index])}>
            <BottomNavigationTab title='Stories' icon={ActivityIcon}/>
            <BottomNavigationTab title='Videos' icon={VideoIcon}/>
        </BottomNavigation>
    </View>
  
);

export const BottomTabsNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name='Home' component={HomeScreen}/>
    <Screen name='Videos' component={VideosScreen}/>
    <Screen name='Details' component={StoryDetailsScreen}/>
  </Navigator>
);
