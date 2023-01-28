import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  border: ${p => p.theme.borders.none};
  background-color: transparent;
  border-bottom: ${p => p.theme.borders.input};
  width: 400px;
  outline: none;
  padding-left: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.ml}px;

  ::placeholder {
    font-size: ${p => p.theme.fontSizes.ml}px;
    color: ${p => p.theme.colors.text};
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
