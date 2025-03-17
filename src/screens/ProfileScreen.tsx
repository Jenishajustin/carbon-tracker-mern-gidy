import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';
type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Profile'>;
type Props = { navigation: ProfileScreenNavigationProp };

const ProfileScreen: React.FC<Props> = ({ navigation }) => {
  const [name, setName] = useState('');

  const handleProfileCreation = () => {
    // Mock profile creation logic
    navigation.replace('MainApp'); // Redirect to main app with BottomNav after profile setup
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Your Profile</Text>
      <TextInput style={styles.input} placeholder="Enter your name" value={name} onChangeText={setName} />
      <Button title="Continue" onPress={handleProfileCreation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { height: 40, borderBottomWidth: 1, marginBottom: 10 },
});

export default ProfileScreen;
