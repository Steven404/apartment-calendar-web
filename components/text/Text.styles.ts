import styled from 'styled-components';

import { colors, fontSize } from '../../theme';

export const TextStyle = styled.span<{
  align: 'left' | 'center' | 'right' | 'justify';
  fontSize: keyof typeof fontSize;
  lineHeight?: number;
  margin: string;
  textColor: keyof typeof colors;
  weight: number;
}>`
  ${(props) => props.align && `text-align: ${props.align};`}
  ${(props) => props.margin && `margin: ${props.margin};`}
  ${(props) => props.textColor && `color: ${colors[props.textColor]};`}
  ${(props) => props.fontSize && `font-size: ${fontSize[props.fontSize]};`}
  ${(props) => props.weight && `font-weight: ${props.weight};`};
`;
