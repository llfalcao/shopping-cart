import cart from '../../assets/icons/shopping-cart.svg';
import * as S from './styles';

const Header = () => {
  return (
    <S.Header>
      <S.Title>Evergreen</S.Title>
      <S.LinkCart to="/checkout">
        <img src={cart} alt="Cart Icon" />
        <span>My Cart</span>
      </S.LinkCart>
    </S.Header>
  );
};

export default Header;
