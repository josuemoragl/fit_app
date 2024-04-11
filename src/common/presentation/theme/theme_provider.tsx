import React, {useEffect, useState} from 'react';
import {Appearance} from 'react-native';

import {Brightness, ThemeData} from './themeData/interfaces';
import darkTheme from './dark_theme';
import lightTheme from './light_theme';
import {ThemeContext} from './theme_context';

interface ThemeProviderProps {
  children: React.ReactElement;
}
export function ThemeProvider({
  children,
}: ThemeProviderProps): React.ReactElement {
  const [colorScheme] = useState(Appearance.getColorScheme());

  const [theme, setTheme] = useState<ThemeData>(
    colorScheme === 'dark' ? darkTheme : lightTheme,
  );

  useEffect(() => {
    const subscription = Appearance.addChangeListener(listener => {
      if (listener.colorScheme === 'dark') {
        if (theme.colorScheme.brightness !== Brightness.dark) {
          setTheme(darkTheme);
        }
        return;
      }

      if (listener.colorScheme === 'light') {
        if (theme.colorScheme.brightness !== Brightness.light) {
          setTheme(lightTheme);
        }
        return;
      }
    });

    return () => subscription.remove();
  }, [theme]);

  const toggleTheme = (): void => {
    setTheme(previusTheme =>
      previusTheme.colorScheme.brightness === Brightness.light
        ? darkTheme
        : lightTheme,
    );
  };

  return (
    <ThemeContext.Provider value={{theme: theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}
