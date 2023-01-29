import styled from 'styled-components';

export const Text = styled.p`
  padding-top: ${p => p.theme.space[5]}px;
  color: ${p => p.theme.colors.text};
  font-family: ${p => p.theme.fontFamily.link};
`;
