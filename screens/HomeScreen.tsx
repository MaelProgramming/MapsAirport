import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Gap from '../components/Gap';
import Header from '../components/Header';

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Header title="MapsAirport 🛩️" />
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('About')} // <-- ici on navigue vers About
        >
          <Text style={styles.buttonText}>Go to About</Text>
        </TouchableOpacity>
        <Gap size={45} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Map')} // <-- ici on navigue vers About
        >
          <Text style={styles.buttonText}>Go to Map</Text>
        </TouchableOpacity>

        <Gap size={30}/>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('TerminalMap')} // <-- ici on navigue vers About
        >
          <Text style={styles.buttonText}>See Airport Terminal Map</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 20 },
  text: { fontSize: 16, marginBottom: 20 },
  button: { backgroundColor: '#007AFF', paddingVertical: 12, paddingHorizontal: 20, borderRadius: 8 },
  buttonText: { color: '#fff', fontSize: 16 },
});
