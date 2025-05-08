import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';

// Example of gamification data (you might want to pull this from a real database)
const initialBadges = [
  { name: 'Tri Plastique', condition: '5 rapports de plastique' },
  { name: 'Explorateur', condition: '3 points de collecte différents' },
  { name: 'Déchet Vert', condition: '3 collectes de déchets organiques' },
  { name: 'Recyclage Express', condition: '3 rapports en 1 heure' },
];

export default function ProfileScreen() {
  // useState to track the badges user has earned and other metrics
  const [userBadges, setUserBadges] = useState([]);
  const [totalReports, setTotalReports] = useState(0);
  const [totalWeight, setTotalWeight] = useState(0);

  // Simulate the user completing a report
  const handleAddReport = (weight) => {
    setTotalReports(totalReports + 1);
    setTotalWeight(totalWeight + weight);

    // Simulate unlocking badges
    let newBadges = [...userBadges];
    if (totalReports + 1 >= 5) {
      newBadges.push('Tri Plastique');
    }
    if (totalReports + 1 >= 3) {
      newBadges.push('Explorateur');
    }
    setUserBadges(newBadges);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Profil Utilisateur</Text>
      <Text style={styles.subtitle}>Total Rapports: {totalReports}</Text>
      <Text style={styles.subtitle}>Poids Total: {totalWeight} kg</Text>

      <View style={styles.badgesContainer}>
        <Text style={styles.badgesTitle}>Badges Débloqués:</Text>
        {initialBadges.map((badge, index) => (
          <View key={index} style={styles.badgeCard}>
            <Text style={styles.badgeName}>{badge.name}</Text>
            <Text>{badge.condition}</Text>
            {userBadges.includes(badge.name) ? (
              <Text style={styles.badgeStatus}>Débloqué</Text>
            ) : (
              <Text style={styles.badgeStatus}>Pas encore débloqué</Text>
            )}
          </View>
        ))}
      </View>

      <Button title="Ajouter un rapport" onPress={() => handleAddReport(2)} /> {/* Simulate adding a report */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f1f8e9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#388e3c',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#388e3c',
    marginBottom: 10,
  },
  badgesContainer: {
    marginTop: 20,
  },
  badgesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  badgeCard: {
    backgroundColor: '#e8f5e9',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  badgeName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  badgeStatus: {
    marginTop: 5,
    fontStyle: 'italic',
    color: '#388e3c',
  },
});
