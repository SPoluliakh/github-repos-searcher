import styled from 'styled-components';

export const Wrap = styled.div`
  width: 160px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  color: ${p => p.theme.colors.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 540px) {
    width: 300px;
  }
  @media (min-width: 768px) {
    width: 400px;
  }
`;
