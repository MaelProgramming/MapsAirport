import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Header from '../components/Header';

export default function MapScreen() {
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
        showsUserLocation={true}
      >
        <Marker
          coordinate={{ latitude: 40.4168, longitude: -3.7038 }}
          title="Madrid"
          description="Center of the map"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
