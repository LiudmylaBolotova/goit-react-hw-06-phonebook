import styled from 'styled-components';

export const List = styled.ol`
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.round}px;
  color: ${p => p.theme.colors.text};

  width: ${p => p.theme.sizes.width[4]}px;

  background-color: ${p => p.theme.colors.twoBackgroundColor};
`;
