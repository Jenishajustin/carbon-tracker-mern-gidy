import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Import Screens
import HomeScreen from '../screens/HomeScreen';
import StatisticsScreen from '../screens/StatisticsScreen'; // Ensure this path is correct and the file exists
import EcoScreen from '../screens/EcoScreen'; // Update this path to the correct location of EcoScreen
// If the path is incorrect, update it to the correct path, for example:
// import EcoScreen from '../correct/path/to/EcoScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

// Custom Bottom Navigation Bar
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

const CustomTabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  return (
    <View style={styles.navbar}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        let iconName = 'home-outline';

        if (route.name === 'Home') iconName = 'home-outline';
        else if (route.name === 'Statistics') iconName = 'bar-chart-outline';
        else if (route.name === 'Eco') iconName = 'leaf-outline';
        else if (route.name === 'Profile') iconName = 'person-outline';

        return (
          <TouchableOpacity
            key={route.name}
            onPress={() => navigation.navigate(route.name)}
            style={styles.button}
          >
            <Icon name={iconName} size={30} color={isFocused ? '#007bff' : '#333'} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const BottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Statistics" component={StatisticsScreen} />
      <Tab.Screen name="Eco" component={EcoScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    paddingVertical: 15,
    elevation: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  button: {
    padding: 10,
  },
});

export default BottomNav;
