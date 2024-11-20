import {StyleSheet} from 'react-native';
import colors from '../../config/colors';

export const AnimatedSearchButtonStyle = isLightTheme => {
  return StyleSheet.create({
    animationContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 20,
      backgroundColor: isLightTheme ? colors.black : colors.white,
    },
    searchTextInput: {
      flex: 1,
      padding: 5,
      paddingLeft: 10,
      color: isLightTheme ? colors.white : colors.black,
    },
    searchButton: {
      padding: 5,
      paddingHorizontal: 10,
    },
  });
};
