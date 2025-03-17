import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const CO2Card = () => {
  return (
    <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
      {/* ✅ Today’s Card */}
      <View style={styles.card}>
        <Text style={styles.todayText}>Today</Text>
        <View style={styles.co2Container}>
          <Text style={styles.co2Text}>Total CO2 Emission</Text>
          <Text style={styles.amountText}>1000g</Text>
        </View>
        <Image source={require('../assets/illustration.png')} style={styles.image} />
      </View>

      {/* ✅ Yesterday’s Card */}
      <View style={styles.card}>
        <Text style={styles.todayText}>Yesterday</Text>
        <View style={styles.co2Container}>
          <Text style={styles.co2Text}>Total CO2 Emission</Text>
          <Text style={styles.amountText}>1200g</Text> {/* Example different data */}
        </View>
        <Image source={require('../assets/illustration.png')} style={styles.image} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    marginTop: 10,
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    width: 300, // 🔹 Set width for individual card
    borderRadius: 15,
    elevation: 5,
    marginHorizontal: 10,
  },
  todayText: {
    fontSize: 17,
    color: '#7D7D7D',
  },
  co2Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  co2Text: {
    alignItems: 'center',
    marginTop: 30,
    fontSize: 16,
    color: '#333',
  },
  amountText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'flex-start',
    resizeMode: 'contain',
    marginTop: -85,
  },
});

export default CO2Card;
