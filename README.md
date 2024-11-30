# Notes App

A colorful and user-friendly note-taking app with light and dark theme support.

#### App Demonstration

<img src="/assets/demo.gif" width="280"/>

## Features

- **Add Notes**: Easily create new notes to keep track of your ideas.
- **View Notes**: Browse through your notes in a structured and visually appealing grid layout.
- **Edit Notes**: Modify and update your notes seamlessly.
- **Delete Notes**: Remove unnecessary notes with ease.
- **Search Notes**: Quickly find notes using the search bar.
- **Theme Options**: Switch between light and dark themes to suit your preferences.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/crncck/Notes-App.git
```

2. Navigate to the project directory:
```bash
cd Notes-App
```

3. Install dependencies:
```bash
npm install
```

4. Run the app:
```bash
npx react-native run-ios
```

## Usage

1. Open the app on your device or emulator.
2. Use the floating "+" button to add new notes.
3. Tap on a note to view or edit its content.
4. Use the search bar to quickly filter notes.
5. Toggle the theme using the menu for a light or dark experience.


## Folder Structure

The app's file structure:

```
src/ 
├── atoms                    # Jotai atoms for state management 
│ ├── noteAtoms.js           # Atoms for notes 
│ └── themeAtom.js           # Atom for theme toggle 
├── components               # Reusable UI components 
│ ├── AnimatedSearchButton  
│ ├── Button 
│ ├── Header
│ ├── IconButton 
│ └── Modals 
│ │ └── AddNoteModal 
│ │ └── MenuModal 
│ └── NoteItem 
├── config
│ └── colors.js              # App-wide color definitions 
├── context                  # Context API setup 
│ └── NotesContext.js        # Notes context provider 
├── screens                  # Main application screens 
│ ├── DetailScreen 
│ ├── HomeScreen 
├── App.js                   # Entry point of the application
```


## Technologies Used

- **[Jotai](https://jotai.org/)**: Enables storing notes and theme preference in atoms and helps to manage theme globally.
- **[AsyncStorage](https://react-native-async-storage.github.io/async-storage/)**: Enables local storage for persisting user notes. Ensures that notes and theme preferences remain saved even when the app is closed and reopened.
- **[React Navigation](https://reactnavigation.org/)**: Manages seamless navigation between **HomeScreen** (notes list) and **DetailScreen** (view/edit note details).
- **[Context API](https://react.dev/reference/react/Context)**: Provides a global context for accessing shared functionality and data, such as handling note-related actions (e.g., adding/deleting/editing).
- **[Masonry Flashlist](https://shopify.github.io/flash-list/docs/masonry-flash-list)**: Used to display notes in a visually appealing **masonry grid layout** with high performance.
- **[React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)**: Used for adding stylish and scalable icons for buttons and actions within the app.

## Screenshots

### App Icon
<img src="https://i.ibb.co/8rwrfRY/icon.png" alt="converter" width="100"/>


### App Screens

<img alt="Home Screen" src="https://i.ibb.co/ZTHnN1h/home.png" width="300" title="Home Screen"/><img src="https://i.ibb.co/DCWn80V/detail-1.png" width="300" title="Detail Screen"/>

<img src="https://i.ibb.co/wwp8Gjz/search.png" width="300" title="Search Feature"/><img src="https://i.ibb.co/Fnd2XLW/delete.png" width="300" title="Delete Feature"/>

<img src="https://i.ibb.co/pjVYLNZ/menu.png" width="300" title="Menu Feature"/><img src="https://i.ibb.co/qmgcQW3/dark.png" width="300" title="Dark Mode" />

<img src="https://i.ibb.co/xGqGhtx/add-note.png" width="300" title="Add Note Feature"/><img src="https://i.ibb.co/RgnmDZk/delete-all.png" width="300" title="Delete All Feature"/> 

## License

This project is licensed under the  [MIT License](https://github.com/crncck/Notes-App/blob/main/LICENSE).
