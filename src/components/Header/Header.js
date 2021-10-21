import cart from '../../assets/icons/shopping-cart.svg';
import * as S from './styles';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/carina.png';

const Header = ({ items }) => {
  return (
    <S.Header>
      <Link to="/shopping-cart">
        <S.Company>
          <S.Logo src={logo} alt="CarinaOS logo" />
          <S.Title>Navis Corp</S.Title>
        </S.Company>
      </Link>
      <S.LinkCart to="/shopping-cart/checkout">
        <S.IconContainer>
          <img src={cart} alt="Cart Icon" />
          {items > 0 ? <S.CartItemCounter>{items}</S.CartItemCounter> : null}
        </S.IconContainer>
        <span>My Cart</span>
      </S.LinkCart>
    </S.Header>
  );
};

export default Header;
