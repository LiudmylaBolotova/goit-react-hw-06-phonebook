import styled from 'styled-components';

export const BtnList = styled.button`
  width: ${p => p.theme.sizes.width[0]}px;
  height: ${p => p.theme.sizes.height[0]}px;

  border: ${p => p.theme.borders.small};
  border-radius: ${p => p.theme.radii.btnRound}px;

  margin-top: ${p => p.theme.space[3]}px;
  margin-left: ${p => p.theme.space[3]}px;

  cursor: pointer;

  font-size: ${p => p.theme.fontSizes[0]}px;
  font-weight: ${p => p.theme.fontWeights.middle};
  color: ${p => p.theme.colors.text};

  transition: ${p => p.theme.transitions.transitionBtn};
  :hover,
  :focus {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.color};
    color: ${p => p.theme.colors.twoTextColor};
  }
`;

export const Element = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding-bottom: ${p => p.theme.space[4]}px;
`;
