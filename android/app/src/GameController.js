import { useState, useEffect } from 'react';
import { getRandomLetter } from '../utils/utils';
import GameLogic from './GameLogic';

// GameController bileşeni, oyunun kontrollerini yönetir ve gameBoard, fallingLetter, currentWord ve score gibi state'leri tutar.
const GameController = ({ isPlaying, setIsPlaying, currentWord, setCurrentWord, score, setScore }) => {
  // gameBoard state'i, 10x10'luk bir matris oluşturur. Her hücre, boş bir nesne olarak başlar.
  const [gameBoard, setGameBoard] = useState(Array.from({ length: 10 }, () => Array.from({ length: 10 }, () => ({}))));
  
  // fallingLetter state'i, yukarıdan aşağıya düşen harfi tutar.
  const [fallingLetter, setFallingLetter] = useState(null);
  
  // useEffect hook'u, oyun başladığında ve her harf düştüğünde tetiklenir.
  useEffect(() => {
    // isPlaying değişkeni true ise, harflerin düşmesini sağlar.
    if (isPlaying) {
      // Her 1 saniyede bir, fallingLetter state'i güncellenir.
      const interval = setInterval(() => {
        // fallingLetter state'i boş ise, yeni bir harf oluşturur ve state'i günceller.
        if (!fallingLetter) {
          const newLetter = getRandomLetter();
          setFallingLetter({ letter: newLetter, row: 0, column: Math.floor(Math.random() * 10) });
        } else {
          // fallingLetter state'i boş değilse, harfi bir satır aşağıya düşürür.
          const newRow = fallingLetter.row + 1;
          const newFallingLetter = { ...fallingLetter, row: newRow };
          // Harf, son satıra düştüyse, oyunu durdurur ve sonucu kontrol eder.
          if (newRow === 9) {
            setIsPlaying(false);
            const newScore = GameLogic.checkWord(currentWord) ? score + currentWord.length : score;
            setScore(newScore);
          }
          // fallingLetter state'i güncellenir.
          setFallingLetter(newFallingLetter);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, fallingLetter, currentWord, score, setIsPlaying, setScore]);
  
  // handleMove fonksiyonu, oyuncunun düşen harfi yatayda hareket ettirmesini sağlar.
  const handleMove = (direction) => {
    if (isPlaying && fallingLetter) {
      const newColumn = fallingLetter.column + direction;
      // Yeni sütun, oyun alanının dışına çıkmazsa fallingLetter state'i güncellenir.
      if (newColumn >= 0 && newColumn <= 9) {
        const newFallingLetter = { ...fallingLetter, column: newColumn };
        setFallingLetter(newFallingLetter);
      }
    }
  };
  
  // handleRotate fonksiyonu, oyuncunun düşen harfi saat yönünde döndürmesini sağlar.
  const handleRotate = () => {
    if (gameOver || gamePaused || !currentShape) {
      return;
    }
  
    setCurrentShape((prevShape) => {
      const rotatedShape = rotateShape(prevShape);
      if (isShapeOutOfBound(rotatedShape, currentPos) || isShapeColliding(rotatedShape, boardCells, currentPos)) {
        return prevShape;
      }
      return rotatedShape;
    });
  };
  
  const handleMoveDown = () => {
    if (gameOver || gamePaused || !currentShape) {
      return;
    }
  
    const nextPos = [currentPos[0] + 1, currentPos[1]];
    if (isShapeOutOfBound(currentShape, nextPos) || isShapeColliding(currentShape, boardCells, nextPos)) {
      handleSettleDown();
    } else {
      setCurrentPos(nextPos);
    }
  };
  
  const handleGameOver = () => {
    setGameOver(true);
    setGamePaused(true);
    Alert.alert('Game Over', 'Press OK to start a new game', [{ text: 'OK', onPress: handleNewGame }]);
  };
  
}