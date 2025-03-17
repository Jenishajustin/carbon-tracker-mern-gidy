import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import EmissionItem from './EmissionItem';

const RecentEmissions = () => {
  const emissions = [
    { location: 'Anna Nagar → Airport', amount: '540g', image: require('../assets/car.png'), color: 'red' },
    { location: 'Koyambedu → T Nagar', amount: '90g', image: require('../assets/scooter.png'), color: 'green' },
    { location: 'Mangadu → Sriperumbudur', amount: '200g', image: require('../assets/car.png'), color: 'orange' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent Emissions</Text>
      {emissions.map((item, index) => (
        <EmissionItem key={index} location={item.location} amount={item.amount} image={item.image} color={item.color} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 15,
    margin: 20,
    borderRadius: 10,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RecentEmissions;
