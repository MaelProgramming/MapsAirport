import React from 'react';
import { View, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Header from '../components/Header';

export default function MapScreen({ navigation }: any) {
  const initialRegion = {
    latitude: 40.4168,   // Madrid
    longitude: -3.7038,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

  return (
    <View style={styles.container}>
      <Header title="Map" />

      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        showsUserLocation={true}      // Point bleu de l’utilisateur
        showsMyLocationButton={true}   // Bouton natif pour centrer la carte
      >
        <Marker
          coordinate={{ latitude: 40.4168, longitude: -3.7038 }}
          title="Madrid"
          description="Capital city of Spain"
        />
      </MapView>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1, width: Dimensions.get('window').width, height: Dimensions.get('window').height },
  buttonsContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: { backgroundColor: '#007AFF', paddingVertical: 12, paddingHorizontal: 20, borderRadius: 8 },
  buttonText: { color: '#fff', fontSize: 16 },
});
