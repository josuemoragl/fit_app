import React from 'react';
import {Switch} from 'react-native';

export default function SwitchTheme({
  isSwitchOn,
  toggleTheme,
  setIsSwitchOn,
}: any) {
  return (
    <Switch
      value={isSwitchOn}
      onValueChange={() => {
        setIsSwitchOn((prevState: boolean) => !prevState);
        toggleTheme();
      }}
    />
  );
}
