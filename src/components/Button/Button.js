// External libraries
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// Internal imports
import styles from '../Button/ButtonStyles';

const Button = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
