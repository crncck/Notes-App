import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../config/colors';

const deviceSize = Dimensions.get('window');

export const HomeStyles = (isLightTheme) => {

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isLightTheme ? colors.white : colors.black,
    },
    listContainer: {
      width: deviceSize.width,
      height: deviceSize.height / 1.1,
    },
    footer: {
      position: 'absolute',
      bottom: -90,
      right: 10,
    },
    plusButtonContainer: {
      backgroundColor: isLightTheme ? colors.black : colors.white,
      width: 60,
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 50,
      position: 'absolute',
      bottom: 120,
      right: 15,
    },
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingRight: 20,
    },
  });
};
