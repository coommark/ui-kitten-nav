import { Button, Divider, Layout, TopNavigation, TopNavigationAction } from '@ui-kitten/components';

import { MenuIcon } from "../assets/icons";
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";

export const HomeScreen = () => {
  const navigation = useNavigation();
  const navigateDetails = () => {
    navigation.navigate('Details');
  };
  const renderDrawerAction = () => (
    <TopNavigationAction
      icon={MenuIcon}
      onPress={() => navigation.openDrawer()}
    />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>      
        <TopNavigation
          title="Stories"
          alignment="center"
          accessoryLeft={renderDrawerAction}
        />      
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button onPress={navigateDetails}>Go to details</Button>
      </Layout>
    </SafeAreaView>
  );
};