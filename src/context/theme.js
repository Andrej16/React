import React from 'react';
import { themes } from '../constants/themes';

export const ThemeContext = React.createContext({
   theme: themes.light,
   toggleTheme: () => {}
});

