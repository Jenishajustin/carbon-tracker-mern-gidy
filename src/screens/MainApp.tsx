import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNav from '../components/BottomNav';

const Stack = createStackNavigator();

const MainApp = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeTabs" component={BottomNav} />
    </Stack.Navigator>
  );
};

export default MainApp;
