import styled from 'styled-components';

export const Wrap = styled.section`
  padding-top: ${p => p.theme.space[3]}px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextWrap = styled.div`
  padding-top: ${p => p.theme.space[5]}px;
  text-align: center;
  width: 200px;

  @media (min-width: 768px) {
    width: 500px;
  }
`;

export const Text = styled.p`
  color: ${p => p.theme.colors.text};
  font-family: ${p => p.theme.fontFamily.link};
`;
export const WebName = styled.span`
  color: ${p => p.theme.colors.deleteButton};
`;
