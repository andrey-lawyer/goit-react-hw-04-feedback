import styled from 'styled-components';
export const ListButtons = styled.ul`
  gap: 10px;
  display: flex;
  justify-content: center;
`;

export const ButtonEl = styled.button`
  background-color: #e0ffff;
  width: 60px;
  border: solid 1px;
  border-radius: 2px;
  cursor: pointer;

  :hover,
  focus {
    transform: scale(1.15);
    background-color: rgb(135, 206, 250);
  }
`;
