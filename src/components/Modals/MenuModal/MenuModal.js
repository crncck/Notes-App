// External libraries
import {useAtom} from 'jotai';
import React, {useMemo} from 'react';
import {View, Modal, Pressable} from 'react-native';

// Internal imports
import {useNotes} from '../../../context/NotesContext';
import {saveThemeToStorage, themeAtom} from '../../../atoms/themeAtom';

// Styles
import {MenuModalStyle} from './MenuModalStyle';

// Components
import {MenuModalItem} from './MenuModalItem/MenuModalItem';

export const MenuModal = () => {
  const [theme, setTheme] = useAtom(themeAtom);
  const isLightTheme = theme === 'light';
  const styles = useMemo(() => MenuModalStyle(isLightTheme), [isLightTheme]);

  const {menuVisible, setMenuVisible} = useNotes().menuState;
  const {deleteAllNotes} = useNotes().actions;

  const toggleTheme = async () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    saveThemeToStorage(newTheme);
    setMenuVisible(false);
  };

  return (
    <Modal
      transparent
      animationType="fade"
      visible={menuVisible}
      onRequestClose={() => setMenuVisible(false)}>
      <Pressable
        style={styles.modalOverlay}
        onPress={() => setMenuVisible(false)}>
        <View style={styles.menuContainer}>
          <MenuModalItem
            onPress={toggleTheme}
            text={`${theme === 'light' ? 'Dark' : 'Light'} Mode`}
            theme={theme}
          />
          <MenuModalItem
            text="Delete All Notes"
            onPress={() => {
              deleteAllNotes();
              setMenuVisible(false);
            }}
            theme={theme}
            isRed={true}
          />
        </View>
      </Pressable>
    </Modal>
  );
};
