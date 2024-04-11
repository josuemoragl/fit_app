import {useContext} from 'react';
import {ThemeContext} from '../theme_context';

const useToggleTheme = () => {
  return useContext(ThemeContext).toggleTheme;
};

export default useToggleTheme;
