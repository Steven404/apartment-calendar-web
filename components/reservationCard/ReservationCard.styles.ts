import styled from 'styled-components';

import { borderRadius, colors, spacing } from '@/theme';

export const Wrapper = styled.div`
  display: flex;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);
  padding: ${spacing.md} ${spacing.md};
  width: 1000px;
  border-radius: ${borderRadius.lg};
  border: 2px solid ${colors.darkBlue};

  justify-content: space-between;
  align-items: center;
`;

export const Info = styled.div`
  display: flex;
`;

export const HorizontalLine = styled.div`
  width: 2px;
  height: 20px;
  background-color: ${colors.darkBlue};
  border-radius: ${borderRadius.lg};
  margin-right: ${spacing.xs};
`;

export const Details = styled.div`
  width: 400px;
`;
