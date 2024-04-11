import {Color} from '../../colors';

interface TrackColor {
  false: string;
  true: string;
}

export interface ISwitchTheme {
  trackColor: TrackColor;
  thumbColorEnabled: Color;
  thumbColorDisabled: Color;
  iosBackgroundColor: Color;
}
