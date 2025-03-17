import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface EmissionItemProps {
  location: string;
  amount: string;
  image: any;
  color: string;
}

const EmissionItem: React.FC<EmissionItemProps> = ({ location, amount, image, color }) => {
  return (
    <View style={styles.itemContainer}>
      {/* Increased Image Size */}
      <Image source={image} style={styles.image} />

      <View style={styles.textContainer}>
        <Text style={styles.location}>{location}</Text>
        <Text style={[styles.amount, { color }]}>{amount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    elevation: 2,
  },
  image: {
    width: 50, // 🔹 Increased width (Adjust as needed)
    height: 50, // 🔹 Increased height (Adjust as needed)
    resizeMode: 'contain',
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  location: {
    fontSize: 16,
    color: '#333',
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default EmissionItem;
