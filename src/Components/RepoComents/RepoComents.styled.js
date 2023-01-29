import styled from 'styled-components';

export const ReposComentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 350px;
  @media (min-width: 768px) {
    width: 400px;
  }
  @media (min-width: 1200px) {
    width: 450px;
  }
  margin-bottom: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;
  box-shadow: ${p => p.theme.shadows.textShadow};
  border-radius: ${p => p.theme.radii.normal};
  overflow-y: auto;
  transition: 250ms linear;
  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
  :hover {
    box-shadow: ${p => p.theme.shadows.boxShadow};
  }
`;

export const ChangeBtn = styled.button`
  font-family: ${p => p.theme.fontFamily.Text};
  cursor: pointer;
  background-color: ${p => p.theme.colors.deleteButton};
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

export const Text = styled.textarea`
  font-family: ${p => p.theme.fontFamily.link};
  letter-spacing: 0.9px;
  color: ${p => p.theme.colors.text};
  background-color: inherit;
  width: 100%;
  border: none;
  resize: none;
`;

export const ComentsForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
