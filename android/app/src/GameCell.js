// Tek bir hücreyi temsil eden bileşenin kodları

// React ve gerekli bileşenlerin dosyaya eklenmesi
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

// GameCell bileşeni
const GameCell = ({ value }) => {
  return (
    <View style={styles.cell}>
      <Text style={styles.letter}>{value}</Text>
    </View>
  );
};

// Stiller
const styles = StyleSheet.create({
  cell: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  letter: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default GameCell;
