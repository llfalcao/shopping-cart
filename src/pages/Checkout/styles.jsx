import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin: 2rem;
  padding: 2rem;
  border-radius: 0.25rem;
  background: #000000dd;
  min-height: calc(100vh - 10rem);
`;

export const EmptyCart = styled.div`
  position: absolute;

  text-align: center;
  height: 100%;

  & p {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

export const BtnReturn = styled.button`
  background: #6057a9;
  color: #fff;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  margin-top: 2rem;

  &:hover {
    background: #776dc5;
  }
`;
