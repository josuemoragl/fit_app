import {createContext} from 'react';

import {ThemeData} from './themeData/interfaces';
import lightTheme from './light_theme';

interface IThemeContext {
  theme: ThemeData;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext>({
  theme: lightTheme,
  toggleTheme: () => undefined,
});
