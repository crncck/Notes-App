// External libraries
import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const IconButton = ({icon, onPress, containerStyle, iconColor, size}) => {
  return (
    <TouchableOpacity onPress={onPress} style={containerStyle}>
      <Icon name={icon} size={size} color={iconColor} />
    </TouchableOpacity>
  );
};

export default IconButton;
