import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../config/colors';

const deviceSize = Dimensions.get('window');

export const AddNoteModalStyle = isLightTheme => {
  return StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.modalBackground,
    },
    modalContent: {
      width: deviceSize.width / 1.1,
      minHeight: deviceSize.height / 2.5,
      padding: 20,
      backgroundColor: isLightTheme ? colors.white : colors.darkGray,
      borderRadius: 20,
      alignItems: 'center',
    },
    titleInput: {
      alignItems: 'center',
      marginBottom: 10,
      width: '50%',
      maxHeight: 40,
    },
    descriptionInput: {
      textAlignVertical: 'top',
      padding: 15,
      height: 100,
      width: deviceSize.width / 1.2,
      minHeight: deviceSize.height / 4,
    },
  });
};
