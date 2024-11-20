// External libraries
import {useAtom} from 'jotai';
import React, {useMemo} from 'react';
import {TextInput} from 'react-native';

// Internal imports
import {isLightThemeAtom} from '../../../../atoms/themeAtom';

// Styles
import {AddNoteModalTextInputStyle} from './AddNoteModalTextInputStyle';

export const AddNoteModalTextInput = ({
  placeholder,
  value,
  onChangeText,
  style,
}) => {
  const [isLightTheme] = useAtom(isLightThemeAtom);
  const styles = useMemo(
    () => AddNoteModalTextInputStyle(isLightTheme),
    [isLightTheme],
  );

  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor="gray"
      multiline
      value={value}
      onChangeText={onChangeText}
      style={[styles.container, style]}
    />
  );
};
