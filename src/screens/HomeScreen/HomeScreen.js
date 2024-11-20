// External libraries
import React, {useRef, useMemo} from 'react';
import {
  SafeAreaView,
  View,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import {useAtom} from 'jotai';
import {MasonryFlashList} from '@shopify/flash-list';

// Internal imports
import {selectedNoteAtom} from '../../atoms/noteAtoms';
import {isLightThemeAtom} from '../../atoms/themeAtom';
import {useNotes} from '../../context/NotesContext';

// Styles
import {HomeStyles} from './HomeStyles';
import {noteColors} from '../../config/colors';

// Components
import {NoteItem} from '../../components/NoteItem/NoteItem';
import IconButton from '../../components/IconButton/IconButton';
import {Header} from '../../components/Header/Header';
import {AddNoteModal} from '../../components/Modals/AddNoteModal/AddNoteModal';

export const HomeScreen = ({navigation}) => {
  const {isSearchActive, setIsSearchActive, setSearchText} =
    useNotes().searchState;
  const {handleDeleteNote, filteredNotes} = useNotes().actions;
  const {setModalVisible} = useNotes().modalState;

  const [, setSelectedNote] = useAtom(selectedNoteAtom);
  const [isLightTheme] = useAtom(isLightThemeAtom);
  const styles = useMemo(() => HomeStyles(isLightTheme), [isLightTheme]);

  const searchWidth = useRef(new Animated.Value(40)).current;

  const handleOutsidePress = () => {
    if (!isSearchActive) {
      return;
    }
    setIsSearchActive(false);
    setSearchText('');
    Animated.timing(searchWidth, {
      toValue: 40,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const openNote = (item, index) => {
    setSelectedNote(item);
    navigation.navigate('Detail', {index: index});
  };

  const renderNote = ({item, index}) => {
    const backgroundColor = noteColors[index % noteColors.length];

    return (
      <NoteItem
        note={item}
        onPress={() => openNote(item, index)}
        backgroundColor={backgroundColor}
        onDelete={handleDeleteNote}
      />
    );
  };

  return (
    <TouchableWithoutFeedback onPress={handleOutsidePress}>
      <SafeAreaView style={styles.container}>
        <Header searchWidth={searchWidth} />
        <View style={styles.listContainer}>
          <MasonryFlashList
            data={filteredNotes}
            numColumns={2}
            keyExtractor={item => item.id.toString()}
            renderItem={renderNote}
            estimatedItemSize={200}
          />
        </View>
        <AddNoteModal />
        <View style={styles.footer}>
          <IconButton
            containerStyle={styles.plusButtonContainer}
            icon="plus"
            size={30}
            onPress={() => setModalVisible(true)}
            iconColor={isLightTheme ? 'white' : 'black'}
          />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};
