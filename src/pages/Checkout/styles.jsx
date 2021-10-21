import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  min-height: calc(100vh - 10rem);

  @media (min-width: 1360px) {
    min-height: 500px;
  }

  @media (max-width: 850px) {
    flex-wrap: wrap;
  }
`;

export const ShoppingCart = styled.div`
  position: relative;
  width: 70vw;
  min-height: 250px;
  margin: 2rem 2rem 0;
  padding: 0 1.8rem 1rem;
  border-radius: 0.25rem;
  background: #e5e5e5e5;

  & h1 {
    margin-top: 1rem;
    color: #111;
    font-weight: 400;
    font-size: 4vmin;
  }

  @media (max-width: 850px) {
    width: 100vw;
  }
`;

export const EmptyCart = styled.div`
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & p {
    font-size: 4vmin;
    font-weight: 500;
    color: #111;
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

export const Summary = styled.div`
  width: 30vw;
  margin: 2rem 2rem 2rem 0;
  padding: 0 1.8rem 1rem;
  border-radius: 0.25rem;
  background: #e5e5e5e5;
  color: #111;
  height: max-content;

  & h2 {
    margin: 1rem 0;
    color: #111;
    font-weight: 400;
    font-size: 4vmin;
  }

  & p {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    & span {
      display: block;
      font-size: 2.6vmin;
    }
  }

  @media (max-width: 850px) {
    width: 100vw;
    margin: 1rem 2rem 2rem;
  }
`;

export const BtnPlaceOrder = styled.button`
  background: #776dc5;
  color: #fff;
  width: 100%;
  font-weight: 500;
  padding: 0.8rem 1rem;
  border-radius: 0.25rem;
  margin-top: 2rem;

  &:active {
    background: #6057a9;
  }
`;
