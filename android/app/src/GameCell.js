import React, { useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Animated } from 'react-native';

const GameCell = ({ value }) => {
  const color = getRandomColor();

  const animatedValue = useRef(new Animated.Value(0)).current;

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue, {
        toValue: -1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const interpolateRotation = animatedValue.interpolate({
    inputRange: [-1, 1],
    outputRange: ['-15deg', '15deg'],
  });

  return (
    <TouchableOpacity onPress={handlePress}>
      <Animated.View style={[styles.cell, { backgroundColor: color, transform: [{ rotateZ: interpolateRotation }] }]}>
        <Text style={styles.letter}>{value}</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

const getRandomColor = () => {
  const colors = ['#F44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5', '#2196F3', '#03A9F4', '#00BCD4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722', '#795548', '#9E9E9E', '#607D8B'];
  return colors[Math.floor(Math.random() * colors.length)];
};

const styles = StyleSheet.create({
  cell: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  letter: {
    fontSize: 26,
    fontWeight: 'bold',
  },
});

export default GameCell;
