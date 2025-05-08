import React from 'react';
import { View, Text, Dimensions, StyleSheet, ScrollView } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const wasteData = [
  {
    name: 'Plastique',
    population: 40,
    color: '#4caf50',
    legendFontColor: '#333',
    legendFontSize: 14,
  },
  {
    name: 'Verre',
    population: 20,
    color: '#2196f3',
    legendFontColor: '#333',
    legendFontSize: 14,
  },
  {
    name: 'Organique',
    population: 30,
    color: '#ff9800',
    legendFontColor: '#333',
    legendFontSize: 14,
  },
  {
    name: 'Métal',
    population: 10,
    color: '#9c27b0',
    legendFontColor: '#333',
    legendFontSize: 14,
  },
];

export default function StatsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Statistiques de Tri</Text>
      <PieChart
        data={wasteData}
        width={screenWidth - 32}
        height={220}
        chartConfig={{
          backgroundColor: '#f5f5f5',
          backgroundGradientFrom: '#f5f5f5',
          backgroundGradientTo: '#f5f5f5',
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        accessor={'population'}
        backgroundColor={'transparent'}
        paddingLeft={'16'}
        absolute
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#e8f5e9',
    flexGrow: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 20,
  },
});
