import { Link } from 'react-router-dom';
import CartItem from '../../components/CartItem/CartItem';
import * as S from './styles';

const Checkout = ({ cart, increment, decrement, handleChange, remove }) => {
  return (
    <S.Container>
      {/* Shopping Cart Container */}
      <h1>Shopping Cart</h1>
      <div>
        {cart.length > 0 ? (
          cart.map((product) => (
            <CartItem
              key={product.id}
              product={product}
              increment={increment}
              decrement={decrement}
              handleChange={handleChange}
              remove={remove}
            />
          ))
        ) : (
          <S.EmptyCart>
            <p>Your cart is empty</p>
            <Link to="/shopping-cart">
              <S.BtnReturn>Go back</S.BtnReturn>
            </Link>
          </S.EmptyCart>
        )}
      </div>
    </S.Container>
  );
};

export default Checkout;
