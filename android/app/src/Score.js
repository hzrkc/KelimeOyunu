import React from 'react';
import { Text, StyleSheet } from 'react-native';
import kelimeListesi from './kelimeListesi';

const Score = ({ score, word }) => {

  let matchingWordScore = 0;

  if (word) {
    const normalizedWord = word.trim().toUpperCase();
  
    for (let i = 0; i < kelimeListesi.length; i++) {
      const normalizedKelime = kelimeListesi[i].trim().toUpperCase();
  
      if (normalizedKelime === normalizedWord) {
        matchingWordScore = normalizedWord.length;
        break;
      }
    }
  }
  

  return (
    <Text style={styles.score}>
      Skor: <Text style={styles.scoreNumber}>{score + matchingWordScore}</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  score: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 5,
  },
  scoreNumber: {
    color: 'green',
  },
});

export default Score;
