import styled from 'styled-components';

import { spacing } from '@/theme';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

export const ReservationsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  > * {
    margin-bottom: ${spacing.md};
  }
`;
