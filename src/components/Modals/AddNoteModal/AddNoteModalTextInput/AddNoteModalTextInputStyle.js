import {StyleSheet} from 'react-native';
import colors from '../../../../config/colors';

export const AddNoteModalTextInputStyle = isLightTheme => {
  return StyleSheet.create({
    container: {
      backgroundColor: isLightTheme ? colors.white : colors.darkGray,
      borderWidth: 2,
      borderColor: isLightTheme ? colors.border : colors.black,
      color: isLightTheme ? colors.black : colors.white,
      borderRadius: 10,
      padding: 10,
    },
  });
};
