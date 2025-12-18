import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MapsAirportAlert } from '../utils/handleAlert';
import Gap from '../components/Gap';
import Header from '../components/Header'; // Make sure the path is correct

export default function AboutScreen({navigation}:any) {
  return (
    <View style={styles.container}>
      <Header title="About" />
      <View style={styles.content}>
        <Text style={styles.text}>
          Welcome to the MapsAirport app!
        </Text>
        <Text style={styles.text}>
          This app allows you to view airport information and easily navigate between pages.
        </Text>
        <Text style={styles.text}>
          Version: 1.0.2
        </Text>
        <Gap size={70} />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')} > 
            <Text style={styles.buttonText}>Back to Home</Text>
        </TouchableOpacity>
        <Gap size={35} />
        <TouchableOpacity style={styles.button} onPress={() => MapsAirportAlert.handleAlert("Credits", "Developped by Mael Gruand, Coordinated by Eliot Dangas")}> 
          <Text style={styles.buttonText}>See credits</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
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
