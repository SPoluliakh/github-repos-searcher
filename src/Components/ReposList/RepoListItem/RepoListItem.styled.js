import styled from 'styled-components';

export const Item = styled.li`
  text-align: center;
  @media (min-width: 1200px) {
    display: flex;
    align-items: center;
  }
`;

export const ReposWrap = styled.div`
  width: ${p => (p['data-list'] ? 200 : 350)}px;
  padding: ${p => p.theme.space[3]}px;
  box-shadow: ${p => p.theme.shadows.textShadow};
  border-radius: ${p => p.theme.radii.normal};
  transition: 250ms linear;
  overflow-x: hidden;
  @media (min-width: 668px) {
    width: ${p => (p['data-list'] ? 265 : 400)}px;
  }
  @media (min-width: 768px) {
    width: ${p => (p['data-list'] ? 280 : 400)}px;
  }
  @media (min-width: 1200px) {
    width: 450px;
  }

  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
  :hover {
    box-shadow: ${p => p.theme.shadows.boxShadow};
  }
`;

export const RemouveBtn = styled.button`
  font-family: ${p => p.theme.fontFamily.Text};
  cursor: pointer;
  background-color: ${p =>
    p.disabled ? p.theme.colors.hoverBtn : p.theme.colors.deleteButton};
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.input};
  box-shadow: ${p => p.theme.shadows.buttonsShadow};
  color: ${p => p.theme.colors.text};
  margin-top: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[2]}px;
  transition: 250ms linear;
  :hover {
    background-color: ${p => p.theme.colors.hoverBtn};
  }
`;
export const ArrowWrap = styled.div`
  margin-right: ${p => p.theme.space[3]}px;
  margin-left: ${p => p.theme.space[3]}px;
`;

export const RepoTitle = styled.h2``;

export const LinkToRepo = styled.a`
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  font-family: ${p => p.theme.fontFamily.link};
`;
