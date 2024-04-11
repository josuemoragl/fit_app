export interface ValuesType {
  [key: number]: Color;
}

export class Color {
  value: string;
  values?: ValuesType;
  constructor(value: string, values?: ValuesType) {
    this.value = value;
    this.values = values;
  }
}

export class Colors {
  static red: Color = new Color('#ff3333');
  static black: Color = new Color('#000000');
  static white: Color = new Color('#FFFFFF');
  static blue: Color = new Color('blue');
  static purple: Color = new Color('#6200ee');
  static lightPurple: Color = new Color('#bb86fc');
  static cyan: Color = new Color('#03dac6');
  static blue2: Color = new Color('#0000ba');
  static gray: Color = new Color('gray', {
    50: new Color('#FAFAFA'),
    100: new Color('#F5F5F5'),
    200: new Color('#EEEEEE'),
    300: new Color('#E0E0E0'),
    350: new Color('#D6D6D6'), // only for raised button while pressed in light theme
    400: new Color('#BDBDBD'),
    500: new Color('gray'),
    600: new Color('#757575'),
    700: new Color('#616161'),
    800: new Color('#424242'),
    850: new Color('#303030'), // only for background color in dark theme
    900: new Color('#212121'),
  });
}
