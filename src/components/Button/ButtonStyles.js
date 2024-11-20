import {StyleSheet} from 'react-native';
import colors from '../../config/colors';

export default StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: colors.button,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    width: '40%',
  },
  text: {
    fontSize: 16,
    color: colors.black,
  },
});


