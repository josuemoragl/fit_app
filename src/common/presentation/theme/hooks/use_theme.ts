import {useContext} from 'react';
import {ThemeContext} from '../theme_context';

const useTheme = () => {
  return useContext(ThemeContext).theme;
};

export default useTheme;
