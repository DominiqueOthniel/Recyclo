import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const userBadges = [
  'Tri Plastique',
  'Explorateur',
  'Déchet Vert',
];

const allBadges = [
  { name: 'Ponctuel', condition: 'Dépôt 3 jours de suite', icon: '⏰' },
  { name: 'Tri Plastique', condition: '5 rapports de plastique', icon: '♻️' },
  { name: 'Déchet Vert', condition: '3 collectes organiques', icon: '🍃' },
  { name: 'Explorateur', condition: '3 points de collecte différents', icon: '🧭' },
  { name: '# Reporter', condition: '5 photos ajoutées', icon: '📸' },
  { name: 'Recyclage Express', condition: '3 rapports en 1h', icon: '⚡' },
  { name: 'Multi-trieur', condition: 'Au moins 1 de chaque type', icon: '🗑️' },
  { name: 'Éco-Influenceur', condition: 'Inviter des amis', icon: '👥' },
  { name: 'Conseiller', condition: '10 éco-conseils lus', icon: '📚' },
];

export default function BadgesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tes Badges</Text>

      <FlatList
        data={allBadges}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          const unlocked = userBadges.includes(item.name);
          return (
            <View style={[styles.badgeCard, unlocked ? styles.unlocked : styles.locked]}>
              <Text style={styles.icon}>{item.icon}</Text>
              <View style={{ flex: 1 }}>
                <Text style={styles.badgeTitle}>{item.name}</Text>
                <Text style={styles.badgeCondition}>
                  {unlocked ? 'Débloqué' : `Condition : ${item.condition}`}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f1f8e9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#33691e',
    marginBottom: 15,
  },
  badgeCard: {
    flexDirection: 'row',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    alignItems: 'center',
  },
  unlocked: {
    backgroundColor: '#dcedc8',
  },
  locked: {
    backgroundColor: '#fbe9e7',
  },
  icon: {
    fontSize: 32,
    marginRight: 15,
  },
  badgeTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2e7d32',
  },
  badgeCondition: {
    fontSize: 14,
    color: '#616161',
  },
});
