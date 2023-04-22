import React from 'react';
import { StyleSheet, View } from 'react-native';
import GameCell from './GameCell';

const GameBoard = ({ board }) => {
  return (
    <View style={styles.container}>
      {board.map((row, rowIndex) => {
        return (
          <View key={rowIndex} style={styles.row}>
            {row.map((cell, cellIndex) => (
              <GameCell key={`${rowIndex}_${cellIndex}`} value={cell} />
            ))}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
});

export default GameBoard;
