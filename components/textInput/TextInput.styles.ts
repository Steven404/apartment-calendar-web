import styled from 'styled-components';

import { borderRadius, colors, filters, spacing } from '@/theme';

import Icon from '../icon/Icon';

export const Wrapper = styled.div<{
  alignItems: 'flex-start' | 'center' | 'flex-end';
  hasError: boolean;
}>`
  input[type='date']::-webkit-calendar-picker-indicator {
    filter: ${(props) => (props.hasError ? filters.error : filters.darkBlue)};
    width: 20px;
    cursor: pointer;
  }
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.alignItems};
`;

export const InputWrapper = styled.div<{ hasError: boolean }>`
  margin-top: ${spacing.sm};
  display: flex;
  align-items: center;
  border: 2px solid
    ${(props) => (props.hasError ? colors.error : colors.darkBlue)};
  border-radius: ${borderRadius.md};
  height: 30px;
  width: 250px;
`;

export const TextInputStyled = styled.input`
  border: none;
  border-radius: ${borderRadius.md};
  outline: none;
  height: 85%;
  width: 200px;
`;

export const IconStyled = styled(Icon)`
  margin-left: ${spacing.sm};
  margin-right: ${spacing.xs};
  align-self: center;
`;

export const HorizontalLine = styled.div<{ hasError: boolean }>`
  width: 2px;
  height: 20px;
  background-color: ${(props) =>
    props.hasError ? colors.error : colors.darkBlue};
  border-radius: ${borderRadius.lg};
  margin-right: ${spacing.xs};
`;
