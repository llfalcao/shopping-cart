import cart from '../../assets/icons/shopping-cart.svg';
import * as S from './styles';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <S.Header>
      <Link to="/shopping-cart">
        <S.Title>Navis Corp</S.Title>
      </Link>
      <S.LinkCart to="/shopping-cart/checkout">
        <img src={cart} alt="Cart Icon" />
        <span>My Cart</span>
      </S.LinkCart>
    </S.Header>
  );
};

export default Header;
