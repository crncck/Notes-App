// External libraries
import {atom} from 'jotai';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const notesAtom = atom([]);

export const loadNotesFromStorage = async () => {
  try {
    const storedNotes = await AsyncStorage.getItem('notes');
    if (storedNotes) {
      return JSON.parse(storedNotes);
    }
    return [];
  } catch (error) {
    console.error('Failed to load notes:', error);
    return [];
  }
};

export const saveNotesToStorage = async notes => {
  try {
    await AsyncStorage.setItem('notes', JSON.stringify(notes));
  } catch (error) {
    console.error('Failed to save notes:', error);
  }
};

export const clearNotesAtom = atom(null, async (get, set) => {
  set(notesAtom, []);

  try {
    await AsyncStorage.removeItem('notes');
  } catch (error) {
    console.error('Failed to clear notes from AsyncStorage:', error);
  }
});

export const selectedNoteAtom = atom(null);
