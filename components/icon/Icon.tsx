/* eslint-disable @typescript-eslint/ban-types */
import { ControlPoint } from '@mui/icons-material/';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

import { colors, iconSize } from '@/theme';

const availableIcons = {
  ControlPoint,
};

export type IconType = keyof typeof availableIcons;

export interface IconPropsType {
  color: keyof typeof colors;
  icon: IconType;
  onClick?: () => void;
  size: keyof typeof iconSize;
}

const Icon = ({ color, icon, onClick, size }: IconPropsType): JSX.Element => {
  const I: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> =
    availableIcons[icon];
  return (
    <I
      onClick={onClick}
      sx={{ color: colors[color], fontSize: iconSize[size] }}
    />
  );
};

export default Icon;
