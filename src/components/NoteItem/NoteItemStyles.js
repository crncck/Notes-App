import {StyleSheet} from 'react-native';
import colors from '../../config/colors';

export default StyleSheet.create({
  noteItemContainer: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  noteItemInnerContainer: {
    backgroundColor: colors.noteBackground,
    borderRadius: 10,
    padding: 20,
  },
  noteItemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  noteItemDescription: {
    marginTop: 10,
  },
  noteItemDateText: {
    marginTop: 10,
    color: colors.gray,
    fontStyle: 'italic',
  },
});
