// External libraries
import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
} from 'react';
import {Alert} from 'react-native';
import {useAtom, useSetAtom} from 'jotai';

// Internal imports
import {
  notesAtom,
  clearNotesAtom,
  selectedNoteAtom,
  loadNotesFromStorage,
  saveNotesToStorage,
} from '../atoms/noteAtoms';

const NotesContext = createContext();

export const NotesProvider = ({children}) => {
  const [notes, setNotes] = useAtom(notesAtom);
  const clearNotes = useSetAtom(clearNotesAtom);
  const [selectedNote, setSelectedNote] = useAtom(selectedNoteAtom);
  const [newNote, setNewNote] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    loadNotesFromStorage().then(loadedNotes => {
      setNotes(loadedNotes || []);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formatDate = date =>
    date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

  const addNote = () => {
    if (newNote.title && newNote.description) {
      const newNotes = [
        ...notes,
        {id: Date.now(), date: formatDate(new Date()), ...newNote},
      ];
      setNotes(newNotes);
      saveNotesToStorage(newNotes);
      setNewNote('');
      setModalVisible(false);
    }
  };

  const handleDeleteNote = noteId => {
    const updatedNotes = notes.filter(note => note.id !== noteId);
    setNotes(updatedNotes);
    saveNotesToStorage(updatedNotes);
  };

  const deleteAllNotes = () => {
    Alert.alert(
      'Delete All Notes',
      'Are you sure you want to delete all notes?',
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            clearNotes();
          },
        },
      ],
    );
  };

  const filteredNotes = useMemo(() => {
    return (notes || []).filter(
      note =>
        note.title.toLowerCase().includes(searchText.toLowerCase()) ||
        note.description.toLowerCase().includes(searchText.toLowerCase()),
    );
  }, [notes, searchText]);

  return (
    <NotesContext.Provider
      value={{
        notesState: {notes, setNotes, newNote, setNewNote},
        modalState: {modalVisible, setModalVisible},
        searchState: {
          searchText,
          setSearchText,
          isSearchActive,
          setIsSearchActive,
        },
        menuState: {menuVisible, setMenuVisible},
        actions: {filteredNotes, addNote, handleDeleteNote, deleteAllNotes},
        selectedNoteState: {selectedNote, setSelectedNote},
      }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => useContext(NotesContext);
