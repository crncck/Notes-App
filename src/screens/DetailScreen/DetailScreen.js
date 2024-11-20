// External libraries
import React, {useState} from 'react';
import {SafeAreaView, TextInput, Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';

// Internal imports
import {useNotes} from '../../context/NotesContext';
import {saveNotesToStorage} from '../../atoms/noteAtoms';

// Styles
import styles from './DetailStyles';
import {noteColors} from '../../config/colors';

// Components
import IconButton from '../../components/IconButton/IconButton';

export const DetailScreen = ({navigation}) => {
  const {notes, setNotes} = useNotes().notesState;
  const {selectedNote, setSelectedNote} = useNotes().selectedNoteState;

  const [noteDate] = useState(selectedNote?.date || '');
  const [noteTitle, setNoteTitle] = useState(selectedNote?.title || '');
  const [noteDescription, setNoteDescription] = useState(
    selectedNote?.description || '',
  );

  const {index} = useRoute().params;
  const backgroundColor = noteColors[index % noteColors.length];

  const saveNote = () => {
    setNotes(
      notes.map(note =>
        note.id === selectedNote.id
          ? {...note, title: noteTitle, description: noteDescription}
          : note,
      ),
    );
  };

  const deleteNote = () => {
    const updatedNotes = notes.filter(note => note.id !== selectedNote.id);
    setNotes(updatedNotes);
    saveNotesToStorage(updatedNotes);
    setSelectedNote(null);
    navigation.goBack();
  };

  const handleBack = () => {
    setSelectedNote(null);
    navigation.goBack();
  };

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: backgroundColor}]}>
      <View style={styles.header}>
        <IconButton
          containerStyle={styles.iconButton}
          icon="keyboard-backspace"
          size={30}
          onPress={handleBack}
          iconColor="white"
        />
      </View>
      <View style={styles.body}>
        <TextInput
          value={noteTitle}
          onChangeText={setNoteTitle}
          placeholder="Edit title"
          style={styles.titleText}
          multiline
        />
        <Text style={styles.dateText}>{noteDate}</Text>
        <TextInput
          value={noteDescription}
          onChangeText={setNoteDescription}
          placeholder="Edit description"
          multiline
          style={styles.descriptionText}
        />
      </View>
      <View style={styles.footer}>
        <IconButton
          containerStyle={styles.iconButton}
          icon={'check'}
          size={30}
          onPress={saveNote}
          iconColor="white"
        />
        <IconButton
          containerStyle={styles.iconButton}
          icon="delete"
          size={30}
          onPress={deleteNote}
          iconColor="white"
        />
      </View>
    </SafeAreaView>
  );
};
