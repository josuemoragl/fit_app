import {Color} from '../colors';

import {ICardTheme} from './cardTheme/interfaces';
import {ISwitchTheme} from './switchTheme/interfaces';
import {TextStyle as RNTextStyle} from 'react-native';

export enum Brightness {
  dark,
  light,
}

interface Locale {
  languageCode: string;
  countryCode: string;
}

export interface Typography {
  black: TextTheme;
  white: TextTheme;
}

interface TextStyle {
  color: Color;
  backgroundColor?: Color;
  fontSize: RNTextStyle['fontSize'];
  fontWeight: RNTextStyle['fontWeight'];
  fontStyle?: RNTextStyle['fontStyle'];
  letterSpacing?: RNTextStyle['letterSpacing'];
  wordSpacing?: number;
  height?: number;
  locale?: Locale;
}

interface TextTheme {
  color: Color;
  displayLarge?: TextStyle;
  displayMedium?: TextStyle;
  displaySmall?: TextStyle;
  headlineLarge?: TextStyle;
  headlineMedium?: TextStyle;
  headlineSmall?: TextStyle;
  titleLarge?: TextStyle;
  titleMedium?: TextStyle;
  titleSmall?: TextStyle;
  bodyLarge?: TextStyle;
  bodyMedium?: TextStyle;
  bodySmall?: TextStyle;
  labelLarge?: TextStyle;
  labelMedium?: TextStyle;
  labelSmall?: TextStyle;
  overline?: TextStyle;
}

interface ColorScheme {
  brightness: Brightness;
  primary: Color;
  onPrimary: Color;
  primaryContainer?: Color;
  onPrimaryContainer?: Color;
  secondary: Color;
  onSecondary: Color;
  secondaryContainer?: Color;
  onSecondaryContainer?: Color;
  tertiary?: Color;
  onTertiary?: Color;
  tertiaryContainer?: Color;
  onTertiaryContainer?: Color;
  error: Color;
  onError: Color;
  errorContainer?: Color;
  onErrorContainer?: Color;
  background: Color;
  onBackground: Color;
  surface: Color;
  onSurface: Color;
  surfaceVariant?: Color;
  onSurfaceVariant?: Color;
  outline?: Color;
  outlineVariant?: Color;
  shadow?: Color;
  scrim?: Color;
  inverseSurface?: Color;
  onInverseSurface?: Color;
  inversePrimary?: Color;
  surfaceTint?: Color;
}

export interface IThemeData {
  colorScheme: ColorScheme;
  switchTheme: ISwitchTheme;
  cardTheme: ICardTheme;
  textTheme: TextTheme;
}

export abstract class ThemeData {
  colorScheme: ColorScheme;
  switchTheme: ISwitchTheme;
  cardTheme: ICardTheme;
  textTheme: TextTheme;
  constructor(themeData: IThemeData) {
    this.colorScheme = themeData.colorScheme;
    this.switchTheme = themeData.switchTheme;
    this.cardTheme = themeData.cardTheme;
    this.textTheme = themeData.textTheme;
  }
}
