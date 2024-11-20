// External libraries
import {useAtom} from 'jotai';
import React, {useMemo} from 'react';
import {Animated, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Internal imports
import {useNotes} from '../../context/NotesContext';
import {isLightThemeAtom} from '../../atoms/themeAtom';

// Styles
import colors from '../../config/colors';
import {AnimatedSearchButtonStyle} from './AnimatedSearchButtonStyle';

export const AnimatedSearchButton = ({searchWidth}) => {
  const [isLightTheme] = useAtom(isLightThemeAtom);
  const styles = useMemo(
    () => AnimatedSearchButtonStyle(isLightTheme),
    [isLightTheme],
  );

  const {isSearchActive, setIsSearchActive, searchText, setSearchText} =
    useNotes().searchState;

  const handleSearchPress = () => {
    if (isSearchActive) {
      return;
    }
    setIsSearchActive(true);
    Animated.timing(searchWidth, {
      toValue: 170,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  return (
    <Animated.View
      key={isLightTheme ? 'light' : 'dark'}
      style={[
        styles.animationContainer,
        {
          width: searchWidth,
          backgroundColor: isLightTheme ? colors.black : colors.white,
        },
      ]}>
      {isSearchActive && (
        <TextInput
          style={styles.searchTextInput}
          placeholder="Search notes..."
          placeholderTextColor="#bbb"
          autoFocus={true}
          value={searchText}
          onChangeText={text => setSearchText(text)}
        />
      )}
      <TouchableOpacity onPress={handleSearchPress} style={styles.searchButton}>
        <Icon
          name="magnify"
          size={20}
          color={isLightTheme ? 'white' : 'black'}
        />
      </TouchableOpacity>
    </Animated.View>
  );
};
