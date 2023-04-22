import React from 'react';
import { TextInput, View, Button, StyleSheet } from 'react-native';

const WordInput = ({ word, setWord, setBoard, setScore }) => {
  const handleClear = () => {
    setWord('');
    setBoard(Array.from({ length: 10 }, () => Array.from({ length: 10 }, () => '')));
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
        placeholder="Kelimeyi buraya girin"
        autoCapitalize="characters"
      />
      <View style={styles.buttonContainer}>
        <Button title="Temizle" onPress={handleClear} />
        <Button title="Gönder" onPress={handleSubmit} />
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
    marginBottom: 10,
    width: '80%',
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
});

export default WordInput;
