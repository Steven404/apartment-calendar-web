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
  @media screen and (max-width: 1150px) {
    width: calc(85vw);
  }
`;

export const Info = styled.div`
  display: flex;
  @media screen and (max-width: 1150px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const HorizontalLine = styled.div`
  width: 2px;
  height: 20px;
  background-color: ${colors.darkBlue};
  border-radius: ${borderRadius.lg};
  margin-right: ${spacing.md};
  display: flex;
  @media screen and (max-width: 1150px) {
    display: none;
    margin-right: 0;
  }
`;

export const Details = styled.div`
  display: flex;
  width: 400px;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 1150px) {
    width: 100%;
    justify-content: flex-start;
  }
`;
