// External libraries
import {useAtom} from 'jotai';
import React, {useMemo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Internal imports
import {useNotes} from '../../context/NotesContext';
import {isLightThemeAtom} from '../../atoms/themeAtom';

// Styles
import {HeaderStyle} from './HeaderStyle';

// Components
import {AnimatedSearchButton} from '../AnimatedSearchButton/AnimatedSearchButton';
import {MenuModal} from '../Modals/MenuModal/MenuModal';

export const Header = ({searchWidth}) => {
  const [isLightTheme] = useAtom(isLightThemeAtom);
  const styles = useMemo(() => HeaderStyle(isLightTheme), [isLightTheme]);

  const {setMenuVisible} = useNotes().menuState;

  return (
    <View style={styles.header}>
      <Text style={styles.text}>Notes</Text>
      <View style={styles.searchContainer}>
        <AnimatedSearchButton searchWidth={searchWidth} />
      </View>
      <TouchableOpacity
        onPress={() => setMenuVisible(true)}
        style={styles.dotsMenu}>
        <Icon
          name="dots-vertical"
          size={25}
          color={isLightTheme ? 'white' : 'black'}
          style={styles.dotsMenuIcon}
        />
      </TouchableOpacity>
      <MenuModal />
    </View>
  );
};
