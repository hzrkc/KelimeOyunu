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
