// External libraries
import React from 'react';
import {TouchableOpacity, Text, View, Dimensions} from 'react-native';
import ContextMenu from 'react-native-context-menu-view';

// Styles
import styles from './NoteItemStyles';

export const NoteItem = ({note, onPress, backgroundColor, onDelete}) => {
  const width = Dimensions.get('window').width / 2.2;

  return (
    <View style={styles.noteItemContainer}>
      <ContextMenu
        actions={[
          {title: 'Delete note', systemIcon: 'trash', destructive: true},
        ]}
        onPress={event => {
          const {index} = event.nativeEvent;
          if (index === 0) {
            onDelete(note.id);
          }
        }}
        triggerOnLongPress>
        <TouchableOpacity
          onPress={() => onPress(note)}
          style={[styles.noteItemInnerContainer, {backgroundColor, width}]}>
          <Text style={styles.noteItemTitle}>{note.title}</Text>
          <Text numberOfLines={5} style={styles.noteItemDescription}>
            {note.description}
          </Text>
          <Text style={styles.noteItemDateText}>{note.date}</Text>
        </TouchableOpacity>
      </ContextMenu>
    </View>
  );
};
