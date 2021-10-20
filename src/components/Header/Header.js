import cart from '../../assets/icons/shopping-cart.svg';
import * as S from './styles';

const Header = () => {
  return (
    <S.Header>
      <S.Title>Navis Corp</S.Title>
      <S.LinkCart to="/shopping-cart/checkout">
        <img src={cart} alt="Cart Icon" />
        <span>My Cart</span>
      </S.LinkCart>
    </S.Header>
  );
};

export default Header;
