import {StyleSheet} from 'react-native';
import colors from '../../../../config/colors';

export const MenuModalItemStyle = isLightTheme => {
  return StyleSheet.create({
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
