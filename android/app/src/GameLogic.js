// Oyun mekaniği işlemlerinin bulunduğu dosya

// GameBoard ve GameCell dosyalarını içeri aktarıyoruz
import GameBoard from './GameBoard';
import GameCell from './GameCell';

// GameBoard bileşeninden bir matris döndüren fonksiyon
const initializeBoard = () => {
  const board = [];
  for (let i = 0; i < 10; i++) {
    const row = [];
    for (let j = 0; j < 10; j++) {
      row.push({ letter: '', filled: false });
    }
    board.push(row);
  }
  return board;
};

// GameLogic bileşeni
class GameLogic {
  constructor() {
    this.board = initializeBoard();
    this.currentWord = '';
  }

  // Harf seçildiğinde yapılacak işlemler
  selectLetter(row, col) {
    const cell = this.board[row][col];
    if (!cell.filled) {
      cell.filled = true;
      this.currentWord += cell.letter;
    }
  }

  // Harf seçiminden vazgeçildiğinde yapılacak işlemler
  unselectLetter(row, col) {
    const cell = this.board[row][col];
    if (cell.filled) {
      cell.filled = false;
      this.currentWord = this.currentWord.slice(0, -1);
    }
  }

  // Yeni bir oyun başlatır
  resetGame() {
    this.board = initializeBoard();
    this.currentWord = '';
  }

  // Matristeki tüm harfleri yeniden doldurur
  refillBoard() {
    for (let i = 0; i < this.board.length; i++) {
      const row = this.board[i];
      for (let j = 0; j < row.length; j++) {
        const cell = row[j];
        if (!cell.filled) {
          const randomIndex = Math.floor(Math.random() * 26);
          const randomLetter = String.fromCharCode(65 + randomIndex);
          cell.letter = randomLetter;
        }
      }
    }
  }
}

export default GameLogic;
