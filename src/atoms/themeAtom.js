// External libraries
import {atom} from 'jotai';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const themeAtom = atom('light');

themeAtom.onMount = setAtom => {
  const loadTheme = async () => {
    try {
      const storedTheme = await AsyncStorage.getItem('theme');
      if (storedTheme) {
        setAtom(storedTheme);
      }
    } catch (error) {
      console.error('Failed to load theme:', error);
    }
  };
  loadTheme();
};

export const saveThemeToStorage = async theme => {
  try {
    await AsyncStorage.setItem('theme', theme);
  } catch (error) {
    console.error('Failed to save theme:', error);
  }
};

export const isLightThemeAtom = atom(get => get(themeAtom) === 'light');
