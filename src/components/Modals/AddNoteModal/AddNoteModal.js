// External libraries
import {useAtom} from 'jotai';
import React, {useMemo} from 'react';
import {View, Modal, TouchableWithoutFeedback} from 'react-native';

// Internal imports
import {isLightThemeAtom} from '../../../atoms/themeAtom';
import {useNotes} from '../../../context/NotesContext';

// Styles
import {AddNoteModalStyle} from './AddNoteModalStyle';

// Components
import Button from '../../Button/Button';
import {AddNoteModalTextInput} from './AddNoteModalTextInput/AddNoteModalTextInput';

export const AddNoteModal = () => {
  const [isLightTheme] = useAtom(isLightThemeAtom);
  const styles = useMemo(() => AddNoteModalStyle(isLightTheme), [isLightTheme]);

  const {modalVisible, setModalVisible} = useNotes().modalState;
  const {newNote, setNewNote} = useNotes().notesState;
  const {addNote} = useNotes().actions;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}>
      <TouchableWithoutFeedback onPressOut={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <AddNoteModalTextInput
              placeholder="Add title.."
              value={newNote.title}
              onChangeText={text => setNewNote({...newNote, title: text})}
              style={styles.titleInput}
            />
            <AddNoteModalTextInput
              placeholder="Enter your note here.."
              value={newNote.description}
              onChangeText={text => setNewNote({...newNote, description: text})}
              style={styles.descriptionInput}
            />
            <Button text="Add Note" onPress={addNote} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
