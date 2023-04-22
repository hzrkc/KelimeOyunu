import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Score = ({ score }) => {
  return (
    <Text style={styles.score}>
      Skor: <Text style={styles.scoreNumber}>{score}</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  score: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  scoreNumber: {
    color: 'green',
  },
});

export default Score;
