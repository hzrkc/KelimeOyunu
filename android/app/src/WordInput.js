import React from 'react';
import { TextInput, View, TouchableOpacity, StyleSheet, Text } from 'react-native';

const WordInput = ({ word, setWord, setBoard, setScore }) => {
  const handleClear = () => {
    setWord('');
  };

  const handleSubmit = () => {
    // Kelime doğru mu kontrol et
    const isWordValid = true; // kelime doğruysa true döndür

    if (isWordValid) {
      // Kelime puanını hesapla ve skoru güncelle
      const wordScore = word.length;
      setScore((prevScore) => prevScore + wordScore);

      // Kelimenin hücrelerini temizle
      setWord('');
      setBoard((prevBoard) => {
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
      <TextInput
        style={styles.input}
        value={word}
        onChangeText={setWord}
        placeholder="                                           "
        autoCapitalize="characters"
      />
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
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 30,
    width: '200%',
    borderRadius: 15,
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
    borderRadius: 40,
  },
  submitButton: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 40,
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default WordInput;
