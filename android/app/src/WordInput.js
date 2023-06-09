import React, { useState } from 'react';
import { TextInput, View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import kelimeListesi from './kelimeListesi';

const WordInput = ({ word, text, setText, setWord, setBoard, setScore, wrongWordsCount, setWrongWordsCount }) => {
  const [hataliKelimeSayisi, setHataliKelimeSayisi] = useState(0);

  const handleClear = () => {
    setWord('');
    setText('');
  };

  const handleSubmit = () => {
    // Kelime doğru mu kontrol et
    const isWordValid = true; // kelime doğruysa true döndür

    if (isWordValid) {
      
      // Kelime puanını hesapla ve skoru güncelle

      const letterScores = {
        'A': 1, 'B': 3, 'C': 4, 'Ç': 4, 'D': 3, 'E': 1, 'F': 7, 'G': 5, 'Ğ': 8, 'H': 5,
        'I': 2, 'İ': 1, 'J': 10, 'K': 1, 'L': 1, 'M': 2, 'N': 1, 'O': 2, 'Ö': 7, 'P': 5,
        'R': 1, 'S': 2, 'Ş': 4, 'T': 1, 'U': 2, 'Ü': 3, 'V': 7, 'Y': 3, 'Z': 4
      };
      
      let matchingWordScore = 0;
      let isWordMatched = false;

      for (let i = 0; i < kelimeListesi.length; i++) {
        const kelime = kelimeListesi[i];
        
        if (kelime && text.trim().toUpperCase() === kelime.trim().toUpperCase()) {
          matchingWordScore = calculateWordScore(text, letterScores);
          isWordMatched = true;
          break;
        }
      }
      
      if (!isWordMatched) {
        setHataliKelimeSayisi(prevHataliKelimeSayisi => prevHataliKelimeSayisi + 1);
        setWrongWordsCount((prevState) => prevState + 1);
      }
      console.log(hataliKelimeSayisi);
      
      function calculateWordScore(word, letterScores) {
        let score = 0;
        const normalizedWord = word.trim().toUpperCase();
        for (let i = 0; i < normalizedWord.length; i++) {
          const letter = normalizedWord.charAt(i);
          if (letterScores.hasOwnProperty(letter)) {
            score += letterScores[letter];
          }
        }
        return score;
      }

      setScore(prevScore => prevScore + matchingWordScore);

      // Kelimenin hücrelerini temizle
      setWord('');
      setText('');
      setBoard(prevBoard => {
        const newBoard = [...prevBoard];
        for (let row = 0; row < newBoard.length; row++) {
          for (let cell = 0; cell < newBoard[row].length; cell++) {
            if (newBoard[row][cell] === '') {
              newBoard[row][cell] = '-';
            }
          }
        }
        return newBoard;
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style = {styles.text}>
        {text}
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
          <Text style={styles.buttonText}>X</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>O</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '80%',
  },
  clearButton: {
    backgroundColor: 'red',
    marginRight: 10,
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  submitButton: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fdf5e6',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    borderWidth: 4,
    borderColor: 'black',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
  },
});

export default WordInput;
