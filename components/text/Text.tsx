import React, { ReactNode } from 'react';

import { colors, commonWeights, fontSize } from '../../theme';
import { TextStyle } from './Text.styles';

interface TextPropsType {
  align?: 'left' | 'center' | 'right' | 'justify';
  children: ReactNode;
  className?: string;
  color?: keyof typeof colors;
  margin?: string;
  size?: keyof typeof fontSize;
  weight?: keyof typeof commonWeights;
}

const Text = ({
  align = 'left',
  children = 'Hello world',
  className,
  color = 'textGray',
  margin = '0px',
  size = 'md',
  weight = 500,
}: TextPropsType) => {
  return (
    <TextStyle
      className={className}
      align={align}
      weight={commonWeights[weight]}
      fontSize={size}
      margin={margin}
      textColor={color}
    >
      {children}
    </TextStyle>
  );
};

export default Text;
