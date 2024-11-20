import {StyleSheet} from 'react-native';
import colors from '../../config/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  iconButton: {
    backgroundColor: colors.black,
    borderRadius: 50,
    padding: 10,
    marginHorizontal: 5,
  },
  body: {
    marginHorizontal: 30,
    marginTop: 10,
  },
  titleText: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  dateText: {
    marginTop: 20,
    color: colors.black,
    fontStyle: 'italic',
  },
  descriptionText: {
    marginTop: 20,
    fontSize: 18,
  },
  footer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 40,
    right: 20,
  },
});
