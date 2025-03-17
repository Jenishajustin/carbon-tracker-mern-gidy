import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StatisticsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Statistics Page</Text>
      <Text style={styles.description}>
        This page will show CO2 emissions and other statistics.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
});

export default StatisticsScreen;
