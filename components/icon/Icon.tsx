/* eslint-disable @typescript-eslint/ban-types */
import { ControlPoint, Person } from '@mui/icons-material/';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

import { colors, iconSize } from '@/theme';

const availableIcons = {
  ControlPoint,
  Person,
};

export type IconType = keyof typeof availableIcons;

export interface IconPropsType {
  className?: string;
  color: keyof typeof colors;
  icon: IconType;
  onClick?: () => void;
  size: keyof typeof iconSize;
}

const Icon = ({
  className,
  color,
  icon,
  onClick,
  size,
}: IconPropsType): JSX.Element => {
  const I: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> =
    availableIcons[icon];
  return (
    <I
      className={className}
      onClick={onClick}
      sx={{ color: colors[color], fontSize: iconSize[size] }}
      {...(onClick && { cursor: 'pointer' })}
    />
  );
};

export default Icon;
