import styled from "styled-components";

export const Nav = styled.div`
  bottom: -1.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  margin: 1.6rem 0;
`;

export const Button = styled.button`
  border: none;
  border-radius: 0.8rem;
  padding: 0.8rem;
  margin: 0;
  color: #04c96b;
  font-size: 15px;
  background: white;
  &:hover {
    background: white;
    cursor: pointer;
    transform: translateY(0.2rem);
  }

  &[disabled] {
    color: white;
    cursor: revert;
    transform: revert;
  }
  &[disabled]:hover {
    background: white;
  }

  &[aria-current] {
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;
