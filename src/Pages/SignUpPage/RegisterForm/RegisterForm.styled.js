import styled from 'styled-components';

export const RegisterForm = styled.form`
  margin-top: ${p => p.theme.space[5]}px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputArea = styled.input`
  font-family: ${p => p.theme.fontFamily.Text};
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.m}px;
  padding: ${p => p.theme.space[1]}px;
  border: none;
  outline: none;
  border-bottom: ${p => p.theme.borders.input};
  background-color: transparent;
  width: 200px;

  @media (min-width: 768px) {
    width: 400px;
  }

  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]}px;
  }

  ::placeholder {
    font-size: 20px;
    font-family: ${p => p.theme.fontFamily.Text};
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

export const LabelArea = styled.label`
  font-family: ${p => p.theme.fontFamily.Text};
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.m}px;
  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.ml}px;
  }

  cursor: pointer;
  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]}px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  :not(:last-child) {
    margin-right: ${p => p.theme.space[3]}px;
  }
`;

export const RegisterButton = styled.button`
  padding: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.m}px;
  background-color: ${p => p.theme.colors.deleteButton};
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.input};
  box-shadow: ${p => p.theme.shadows.buttonsShadow};
  color: ${p => p.theme.colors.text};
  margin-top: ${p => p.theme.space[2]}px;
  font-family: ${p => p.theme.fontFamily.Text};
  transition: 250ms linear;
  cursor: pointer;
  :hover {
    background-color: ${p => p.theme.colors.hoverBtn};
  }
`;
