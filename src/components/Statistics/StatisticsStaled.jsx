import styled from 'styled-components';

export const Score = styled.span`
  color: ${({ scoreType }) =>
    scoreType < 50
      ? '#DB4437'
      : scoreType < 80
      ? '#E2B534'
      : scoreType < 90
      ? '#0F9D58'
      : scoreType >= 90
      ? '#4285F4'
      : ''};
`;
