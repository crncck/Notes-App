/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// External libraries
import React from 'react';
import {Provider} from 'jotai';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Components
import {HomeScreen} from './screens/HomeScreen/HomeScreen';
import {DetailScreen} from './screens/DetailScreen/DetailScreen';
import {NotesProvider} from './context/NotesContext';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider>
      <NotesProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Detail" component={DetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </NotesProvider>
    </Provider>
  );
}

export default App;
