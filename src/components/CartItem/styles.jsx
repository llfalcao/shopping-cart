import styled from 'styled-components';

export const CartItem = styled.div`
  background: #625c9190;
  display: flex;
  align-items: center;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 0.25rem;

  & input,
  button {
    width: 30px;
    height: 30px;
    text-align: center;
  }

  /* Remove input arrows 
  ** Chrome, Safari, Edge, Opera */
  & input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* Firefox */
  & input[type='number'] {
    -moz-appearance: textfield;
  }
`;

export const Image = styled.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: 0 1rem;
  flex-grow: 1;
  padding-bottom: 0.5rem;
`;

export const CountContainer = styled.div`
  & button {
    background: #ccc;
  }
`;

export const Price = styled.span`
  margin: 0 2rem;
`;

export const Decrement = styled.button`
  border-radius: 0.25rem 0 0 0.25rem;
`;

export const Increment = styled.button`
  border-radius: 0 0.25rem 0.25rem 0;
`;

export const Remove = styled.button`
  background: #c33939;
  margin-right: 1rem;
  color: #fff;
  font-weight: 600;
`;
