import {StyleSheet} from 'react-native';
import colors from '../../../config/colors';

export const MenuModalStyle = isLightTheme => {
  return StyleSheet.create({
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingRight: 20,
    },
    menuContainer: {
      backgroundColor: isLightTheme ? colors.white : colors.darkGray,
      borderRadius: 10,
      elevation: 5,
      position: 'absolute',
      top: 135,
      right: 0,
    },
    menuItem: {
      paddingVertical: 10,
      paddingHorizontal: 15,
    },
    menuItemText: {
      fontSize: 16,
      color: isLightTheme ? colors.black : colors.white,
    },
  });
};
