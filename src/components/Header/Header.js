import cart from '../../assets/icons/shopping-cart.svg';
import * as S from './styles';

const Header = () => {
  return (
    <S.Header>
      <p>Company Name</p>
      <S.LinkCart to="/checkout">
        <img src={cart} alt="Cart Icon" />
        My Cart
      </S.LinkCart>
    </S.Header>
  );
};

export default Header;
