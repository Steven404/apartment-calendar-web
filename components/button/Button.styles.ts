import styled from 'styled-components';

import { borderRadius, colors, spacing } from '@/theme';

const options = {
  colors: {
    accept: colors.green,
    cancel: colors.error,
  },
};

export const Wrapper = styled.button<{ kind: 'accept' | 'cancel' }>`
  background-color: ${(props) => options.colors[props.kind]};
  border: none;
  border-radius: ${borderRadius.xl};
  padding: ${spacing.sm} ${spacing.md};
  text-align: center;
  cursor: pointer;
  transition: opacity 0.5s ease 0s;

  :hover {
    opacity: 0.5;
  }
`;
