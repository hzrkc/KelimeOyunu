import React from 'react';
import { Text, StyleSheet } from 'react-native';
import kelimeListesi from './kelimeListesi'; // Kelime listesi dosyasını içe aktaralım

const Score = ({ score, word }) => {
  let matchingWordScore = 0;
  
  // Kelime listesindeki her kelime için kontrol yapalım
  for (let i = 0; i < kelimeListesi.length; i++) {
    // Girilen kelime kelime listesinde var mı diye kontrol edelim
    if (word && kelimeListesi[i].toUpperCase() === word.toUpperCase()) {
      // Kelime uzunluğuna göre puan hesaplayalım
      const wordLength = word.length;
      matchingWordScore = wordLength; // Kelime uzunluğu kadar puan verelim
      
      // Eşleşen kelime bulunduğunda döngüyü sonlandıralım
      break;
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
    marginTop: 20,
  },
  scoreNumber: {
    color: 'green',
  },
});

export default Score;
