import CartItem from '../../components/CartItem/CartItem';
import products from '../../assets/data/products';
import * as S from './styles';

const Checkout = () => {
  return (
    <S.Container>
      {/* Shopping Cart Container */}
      <h1>Checkout</h1>
      <div>
        {products.map((product) => (
          <CartItem
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </S.Container>
  );
};

export default Checkout;
