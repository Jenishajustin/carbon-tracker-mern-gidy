import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

// Components
import CO2Card from '../components/CO2Card';
import RecentEmission from '../components/RecentEmissions';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hello, Kenny</Text>
            <Text style={styles.subtitle}>Welcome to EcoTrack</Text>
          </View>
          <Image source={require('../assets/avatar.png')} style={styles.profilePic} />
          
        </View>

        {/* CO2 Emission Card */}
        <CO2Card />

        {/* Recent Emissions */}
        <View style={styles.recentSection}>
          <Text style={styles.sectionTitle}>Recent Emissions</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>view all</Text>
          </TouchableOpacity>
        </View>
        <RecentEmission />

      </ScrollView>

      
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA' },
  content: { padding: 20 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  greeting: { marginTop: 20, fontSize: 22, fontWeight: 'bold', color: '#333' },
  subtitle: { fontSize: 14, color: '#7D7D7D' },
  profilePic: { width: 60, height: 60, borderRadius: 25 },
  recentSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#2c3e50' },
  viewAll: { fontSize: 14, color: '#007AFF' },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
});

export default HomeScreen;
