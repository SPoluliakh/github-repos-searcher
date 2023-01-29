import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  border: ${p => p.theme.borders.none};
  background-color: transparent;
  border-bottom: ${p => p.theme.borders.input};
  outline: none;
  padding-left: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.mm}px;
  font-family: ${p => p.theme.fontFamily.link};

  @media (min-width: 320px) {
    width: 220px;
  }

  @media (min-width: 768px) {
    width: 300px;
  }
  @media (min-width: 1200px) {
    width: 400px;
  }

  ::placeholder {
    font-size: ${p => p.theme.fontSizes.ml}px;
    color: ${p => p.theme.colors.text};
    font-family: ${p => p.theme.fontFamily.link};
    transition: 300ms linear;
  }
  :focus {
    ::placeholder {
      position: absolute;
      font-size: ${p => p.theme.fontSizes.xs}px;
      top: -4px;
      left: 0;
    }
  }
`;

export const ClearButton = styled.button`
  padding: ${p => p.theme.space[0]}px;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  background-color: transparent;
  cursor: pointer;
  color: ${p => p.theme.colors.deleteButton};
  transition: scale 250ms linear;
  :hover {
    scale: 1.2;
  }
`;
