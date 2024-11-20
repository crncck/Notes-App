import {StyleSheet} from 'react-native';
import colors from '../../config/colors';

export const HeaderStyle = isLightTheme => {
  return StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
    },
    text: {
      fontSize: 50,
      marginLeft: 20,
      marginTop: 20,
      fontWeight: 'bold',
      color: isLightTheme ? colors.black : colors.white,
    },
    searchContainer: {
      padding: 10,
      marginRight: 35,
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 20,
      paddingHorizontal: 10,
      position: 'relative',
    },
    dotsMenu: {
      backgroundColor: isLightTheme ? colors.black : colors.white,
      borderRadius: 50,
      position: 'absolute',
      right: 10,
      top: 40,
      zIndex: 10,
    },
    dotsMenuIcon: {
      padding: 2,
    },
  });
};
