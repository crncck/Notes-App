// External libraries
import {useAtom} from 'jotai';
import React, {useMemo} from 'react';
import {TouchableOpacity, Text} from 'react-native';

// Internal imports
import {isLightThemeAtom} from '../../../../atoms/themeAtom';

// Styles
import {MenuModalItemStyle} from './MenuModalItemStyle';

export const MenuModalItem = ({text, onPress, isRed}) => {
  const [isLightTheme] = useAtom(isLightThemeAtom);
  const styles = useMemo(
    () => MenuModalItemStyle(isLightTheme),
    [isLightTheme],
  );
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <Text style={[styles.menuItemText, isRed && {color: 'red'}]}>{text}</Text>
    </TouchableOpacity>
  );
};
