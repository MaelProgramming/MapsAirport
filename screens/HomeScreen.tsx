import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../components/Header';

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Header title="Home" />
      <View style={styles.content}>
        <Text style={styles.text}>Welcome to MapsAirport!</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('About')} // <-- ici on navigue vers About
        >
          <Text style={styles.buttonText}>Go to About</Text>
        </TouchableOpacity>
        <Text>{'\n'}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Map')} // <-- ici on navigue vers About
        >
          <Text style={styles.buttonText}>Go to Map</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 20 },
  text: { fontSize: 16, marginBottom: 20 },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
