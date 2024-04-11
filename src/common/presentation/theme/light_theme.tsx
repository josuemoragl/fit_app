import {Brightness, ThemeData} from './themeData/interfaces';
import {Colors} from './colors';

const lightTheme: ThemeData = {
  colorScheme: {
    brightness: Brightness.light,
    primary: Colors.purple,
    secondary: Colors.cyan,
    onPrimary: Colors.purple,
    onSecondary: Colors.cyan,
    error: Colors.red,
    onError: Colors.red,
    background: Colors.white,
    onBackground: Colors.white,
    surface: Colors.white,
    onSurface: Colors.white,
  },
  switchTheme: {
    trackColor: {true: Colors.white.value, false: Colors.gray.value},
    thumbColorDisabled: Colors.white,
    thumbColorEnabled: Colors.black,
    iosBackgroundColor: Colors.gray,
  },
  cardTheme: {
    color: Colors.white,
    shadowColor: Colors.black,
  },
  textTheme: {
    color: Colors.black,
  },
};

export default lightTheme;
