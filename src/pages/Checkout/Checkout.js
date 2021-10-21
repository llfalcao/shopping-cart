import { Link } from 'react-router-dom';
import CartItem from '../../components/CartItem/CartItem';
import * as S from './styles';

const Checkout = (props) => {
  const { cart, increment, decrement, handleChange, remove, placeOrder } =
    props;

  let subtotal = 0;
  cart.map((item) => (subtotal += item.quantity * item.price));
  subtotal = subtotal.toFixed(2);

  return (
    <S.Container>
      <S.ShoppingCart>
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
      </S.ShoppingCart>

      <S.Summary>
        <h2>Summary</h2>
        <p>
          <span>Subtotal</span>
          <span>$ {subtotal > 0 ? subtotal : '0.00'}</span>
        </p>
        <p>
          <span>Shipping</span>
          <span>$ 0.00</span>
        </p>
        <p>
          <span>Discounts</span>
          <span>$ 0.00</span>
        </p>
        <p style={{ marginTop: '0.5rem' }}>
          <span>
            <strong>Total</strong>
          </span>
          <span>
            <strong>$ {subtotal > 0 ? subtotal : '0.00'}</strong>
          </span>
        </p>

        <S.BtnPlaceOrder onClick={placeOrder}>PLACE ORDER</S.BtnPlaceOrder>
      </S.Summary>
    </S.Container>
  );
};

export default Checkout;
