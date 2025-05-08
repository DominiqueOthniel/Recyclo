import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const mockData = [
  {
    id: '1',
    date: '2025-05-06',
    type: 'Plastique',
    location: 'Point A',
    weight: '3.5 kg',
  },
  {
    id: '2',
    date: '2025-05-04',
    type: 'Organique',
    location: 'Point B',
    weight: '2.1 kg',
  },
  {
    id: '3',
    date: '2025-05-01',
    type: 'Verre',
    location: 'Point C',
    weight: '4.0 kg',
  },
];

export default function HistoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historique des Collectes</Text>
      <FlatList
        data={mockData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.date}>{item.date}</Text>
            <Text style={styles.detail}>Type: {item.type}</Text>
            <Text style={styles.detail}>Lieu: {item.location}</Text>
            <Text style={styles.detail}>Poids: {item.weight}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8f5e9',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  date: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1b5e20',
  },
  detail: {
    fontSize: 14,
    marginTop: 4,
    color: '#555',
  },
});
