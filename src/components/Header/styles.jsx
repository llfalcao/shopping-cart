import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  /* background: #6057a9; */
  color: #fff;
  text-shadow: 0 2px 2px #18261855;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 75px;
`;

export const Title = styled.span`
  margin: 0 2rem;
  font-weight: 500;
  font-size: 1.5rem;
  padding-bottom: 5px;
  text-align: center;
`;

export const LinkCart = styled(Link)`
  display: flex;
  align-items: center;
  margin: 0 2rem;
  background: #776dc5;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;

  &:active {
    background: #6057a9;
  }

  & span {
    font-weight: 600;
    padding-bottom: 2px;
  }
`;

export const IconContainer = styled.div`
  position: relative;

  & img {
    margin-right: 0.7rem;
  }
`;

export const CartItemCounter = styled.div`
  position: absolute;
  width: 12px;
  height: 12px;
  top: -0.1rem;
  right: 0.5rem;
  border-radius: 100%;
  background: purple;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 8px;
  font-weight: 600;
`;
