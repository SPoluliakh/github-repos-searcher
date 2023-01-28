import styled from 'styled-components';

export const UserMenuWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${p => p.theme.space[5]}px;
`;

export const WelcomText = styled.p`
  color: ${p => p.theme.colors.text};
  margin-bottom: ${p => p.theme.space[3]}px;
  text-shadow: ${p => p.theme.shadows.textShadow};
  font-family: ${p => p.theme.fontFamily.Text};
`;
export const OutBtn = styled.button`
  font-family: ${p => p.theme.fontFamily.Text};
  cursor: pointer;
  background-color: ${p => p.theme.colors.deleteButton};
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.input};
  box-shadow: ${p => p.theme.shadows.buttonsShadow};
  color: ${p => p.theme.colors.text};
  transition: 250ms linear;
  :hover {
    background-color: ${p => p.theme.colors.hoverBtn};
  }
`;
