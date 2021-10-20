import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin: 2rem;
  padding: 2rem;
  border-radius: 0.25rem;
  background: #e5e5e5;

  min-height: calc(100vh - 10rem);

  & h1 {
    color: #111;
    font-weight: 400;
  }
`;

export const EmptyCart = styled.div`
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & p {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

export const BtnReturn = styled.button`
  background: #776dc5;
  color: #fff;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  margin-top: 2rem;

  &:active {
    background: #6057a9;
  }
`;
