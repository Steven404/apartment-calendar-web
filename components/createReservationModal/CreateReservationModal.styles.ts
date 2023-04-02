import styled from 'styled-components';

import { spacing } from '@/theme';

export const ButtonsWrapper = styled.div`
  margin-top: ${spacing.lg};
  > :last-child {
    margin-left: ${spacing.sm};
  }
`;
