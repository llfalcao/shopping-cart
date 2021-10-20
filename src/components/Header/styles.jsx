import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  background: #3bba7d;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.span`
  /*  */
`;

export const LinkCart = styled(Link)`
  display: flex;
  align-items: center;

  & img svg {
    stroke: red;
  }
`;
