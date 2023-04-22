import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import GameBoard from './GameBoard';
import WordInput from './WordInput';
import Score from './Score';
import { AppRegistry } from 'react-native';


// Rasgele harf oluşturma fonksiyonu
const generateRandomLetter = () => {
  // Türkçe alfabede yer alan harfler
  const letters = 'abcçdefgğhıijklmnoöprsştuüvyz';
  // Rastgele bir harf seçip döndürüyoruz
  return letters[Math.floor(Math.random() * letters.length)];
};

// Oyun tahtasını rastgele harflerle dolduran yardımcı fonksiyon
const generateRandomBoard = () => {
  const alphabet = 'ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ';
  const board = Array.from({ length: 10 }, () =>
    Array.from({ length: 8 }, () => alphabet[Math.floor(Math.random() * alphabet.length)])
  );
  return board;
};

const App = () => {
  // Oyun tahtasını tutacak state
  const [board, setBoard] = useState(() => generateRandomBoard());
  // Girilen kelimeyi tutacak state
  const [word, setWord] = useState('');
  // Puanı tutacak state
  const [score, setScore] = useState(0);

  // Klavyeden tuşa basıldığında tetiklenecek fonksiyon
  const handleKeyPress = (event) => {
    // Sadece harfler kabul edilecek, diğer tuşlar yok sayılacak
    if (/^[a-zA-Z]+$/.test(event.key)) {
      // Girilen harf büyük harf olarak kaydedilecek
      const letter = event.key.toUpperCase();
      // Harf, boş olan ilk hücreye yerleştirilecek
      setBoard((prevBoard) => {
        const newBoard = [...prevBoard];
        const rowIndex = 0;
        const cellIndex = newBoard[rowIndex].indexOf('');
        if (cellIndex !== -1) {
          newBoard[rowIndex][cellIndex] = letter;
        }
        return newBoard;
      });
      // Girilen harf, kelimenin sonuna eklenecek
      setWord((prevWord) => prevWord + letter);
    }
  };

  return (
    <View style={styles.container} onKeyPress={handleKeyPress}>
      <GameBoard board={board} />
      <WordInput word={word} setWord={setWord} setBoard={setBoard} setScore={setScore} />
      <Score score={score} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
