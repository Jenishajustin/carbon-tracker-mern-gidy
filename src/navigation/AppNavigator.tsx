import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomNav from '../components/BottomNav'; // Ensure the path is correct

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={BottomNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
