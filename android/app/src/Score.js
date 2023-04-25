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
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  score: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  scoreNumber: {
    fontSize: 45,
    color: 'black',
    marginLeft: 5,
  },
});


export default Score;
