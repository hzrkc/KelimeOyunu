import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import GameBoard from './GameBoard';
import WordInput from './WordInput';
import Score from './Score';

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

  const [wrongWordsCount, setWrongWordsCount] = useState(0);

  const [gameOver, setGameOver] = useState(false);

  const [text, setText] = useState("");
  function addLetter(letter){
 
      setText(text+letter);
  }

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

  useEffect(() => {
    console.log(`wrongWordsCount değişti, yeni değeri: ${wrongWordsCount}`);

    if (wrongWordsCount === 3) {
      setBoard(Array.from({ length: 10 }, () =>
        Array.from({ length: 8 }, () => '')
      ));
    }
  }, [wrongWordsCount]);

  useEffect(() => {
    if (wrongWordsCount === 3) {
      setGameOver(true);
    }
  }, [wrongWordsCount]);

  return (
    <View style={styles.container} onKeyPress={handleKeyPress}>

      <GameBoard 
      board={board} 
      addLetter = {addLetter}/>

      <WordInput
        word={word}
        setWord={setWord}
        setBoard={setBoard}
        setScore={setScore}
        text = {text}
        setText = {setText}
        wrongWordsCount={wrongWordsCount}
        setWrongWordsCount={setWrongWordsCount}
      />
      <Score score={score} />
      {gameOver && <GameOverMessage score={score} />}
    </View>
  );
};

const GameOverMessage = ( {score} ) => {
  return (
    <View style={styles.gameOverContainer}>
      <Text style={styles.gameOverText}>Oyun Bitti.</Text>
      <Text style={styles.gameOverText}>Skorunuz: {score} </Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#faebd7',
  },
  gameOverContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gameOverText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default App;
