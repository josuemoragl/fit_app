import {Brightness, ThemeData} from './themeData/interfaces';
import {Colors} from './colors';

const darkTheme: ThemeData = {
  colorScheme: {
    background: Colors.gray.values![700],
    brightness: Brightness.dark,
    primary: Colors.lightPurple,
    secondary: Colors.cyan,
    onPrimary: Colors.cyan,
    onSecondary: Colors.white,
    error: Colors.red,
    onError: Colors.red,
    onBackground: Colors.gray.values![700],
    surface: Colors.gray.values![700],
    onSurface: Colors.gray.values![700],
  },
  switchTheme: {
    trackColor: {true: Colors.gray.value, false: Colors.gray.value},
    thumbColorDisabled: Colors.gray,
    thumbColorEnabled: Colors.black,
    iosBackgroundColor: Colors.gray,
  },
  cardTheme: {
    color: Colors.gray.values![800],
    shadowColor: Colors.black,
  },
  textTheme: {
    color: Colors.white,
  },
};

export default darkTheme;
