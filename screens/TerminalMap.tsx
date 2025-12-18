import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import MapView, { Marker, Polyline } from 'react-native-maps';

// Points d’intérêt du terminal à Madrid-Barajas
const points = [
    { id: 'C1', name: 'Check Point 1', latitude: 40.4950, longitude: -3.5662, congestion: 0.3 },
    { id: 'C2', name: 'Check Point 2', latitude: 40.4952, longitude: -3.5660, congestion: 0.7 },
];
const mapRef = useRef<MapView>(null);
const pedestrianSpeed = 1.2; // vitesse piéton 1.2 m/s

// Graphe avec distance et congestion
const graph: Record<
    string,
    { to: string; distance: number; congestion: number }[]> = {
    C1: [{ to: 'C2', distance: 60, congestion: 0.7 }],
    C2: [{ to: 'C1', distance: 60, congestion: 0.3 }],
};

// Dijkstra simplifié avec congestion
function dijkstra(startId: string, endId: string) {
    const visited: Record<string, boolean> = {};
    const distances: Record<string, number> = {};
    const previous: Record<string, string | null> = {};

    Object.keys(graph).forEach((node) => {
        distances[node] = Infinity;
        previous[node] = null;
    });
    distances[startId] = 0;

    while (true) {
        let closestNode: string | null = null;
        let closestDistance = Infinity;
        for (let node in distances) {
            if (!visited[node] && distances[node] < closestDistance) {
                closestDistance = distances[node];
                closestNode = node;
            }
        }
        if (!closestNode) break;
        visited[closestNode] = true;

        graph[closestNode].forEach((edge) => {
            // Prendre en compte la congestion pour le temps
            const timeCost = edge.distance * (1 + edge.congestion);
            const alt = distances[closestNode!] + timeCost;
            if (alt < distances[edge.to]) {
                distances[edge.to] = alt;
                previous[edge.to] = closestNode;
            }
        });
    }

    // Reconstruire le chemin
    const path: string[] = [];
    let node: string | null = endId;
    while (node) {
        path.unshift(node);
        node = previous[node];
    }
    return { path, distance: distances[endId] };
}

export default function TerminalMap() {
    const [start, setStart] = useState('C1');
    const [end, setEnd] = useState('C2');

    const result = dijkstra(start, end);
    const pathCoords = result.path.map((id) => {
        const p = points.find((pt) => pt.id === id)!;
        return { latitude: p.latitude, longitude: p.longitude };
    });

    const timeSeconds = result.distance / pedestrianSpeed;

    return (
        <View style={{ flex: 1 }}>
            <MapView
                ref={mapRef}
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: 40.4950,
                    longitude: -3.5662,
                    latitudeDelta: 0.0012,
                    longitudeDelta: 0.0012,
                }}
            >
                {points.map((p) => (
                    <Marker key={p.id} coordinate={{ latitude: p.latitude, longitude: p.longitude }} title={p.name} />
                ))}
                <Polyline coordinates={pathCoords} strokeColor="blue" strokeWidth={3} />
            </MapView>
            <View style={styles.controls}>
                <Text>Départ :</Text>
                <Picker selectedValue={start} onValueChange={(v) => setStart(v)} style={styles.picker}>
                    {points.map((p) => <Picker.Item key={p.id} label={p.name} value={p.id} />)}
                </Picker>
                <Text>Destination :</Text>
                <Picker selectedValue={end} onValueChange={(v) => setEnd(v)} style={styles.picker}>
                    {points.map((p) => <Picker.Item key={p.id} label={p.name} value={p.id} />)}
                </Picker>
                <Text>Temps estimé : {Math.round(timeSeconds)} s</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    controls: { padding: 10, backgroundColor: 'white' },
    picker: { height: 50, width: 200 },
});
