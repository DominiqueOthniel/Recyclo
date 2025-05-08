import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ProgressBarAndroid, Platform, ProgressViewIOS } from 'react-native';

export default function RankProgressScreen() {
  useEffect(() => {
    console.log("RankProgressScreen loaded");
  }, []);

  const userStats = {
    totalReports: 26,
    rank: 'Éco-Héros',
    nextRank: 'Ambassadeur',
    progress: 0.52,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ton Rang</Text>
      <Text style={styles.rankText}>Actuel : {userStats.rank}</Text>
      <Text style={styles.rankText}>Prochain : {userStats.nextRank}</Text>

      <View style={styles.progressContainer}>
        {Platform.OS === 'ios' ? (
          <ProgressViewIOS progress={userStats.progress} style={styles.progressBar} />
        ) : (
          <ProgressBarAndroid styleAttr="Horizontal" progress={userStats.progress} indeterminate={false} />
        )}
        <Text style={styles.percentage}>{Math.round(userStats.progress * 100)}%</Text>
      </View>

      <Text style={styles.note}>Continue de trier pour passer au rang supérieur !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f8e9',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 20,
  },
  rankText: {
    fontSize: 18,
    marginBottom: 10,
    color: '#33691e',
  },
  progressContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  progressBar: {
    height: 10,
    marginBottom: 8,
    width: 200,
  },
  percentage: {
    fontSize: 16,
    color: '#388e3c',
  },
  note: {
    marginTop: 10,
    fontSize: 14,
    color: '#757575',
  },
});
