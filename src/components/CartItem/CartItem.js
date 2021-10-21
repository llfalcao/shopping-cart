import * as S from './styles';

const CartItem = ({ product, ...props }) => {
  const { id, image, fullName, price, quantity } = product;
  const { increment, decrement, handleChange, remove } = props;
  const subtotal = (price * quantity).toFixed(2);

  return (
    <S.CartItem>
      <div>
        <S.Image src={image} alt={fullName} />
      </div>

      <S.ProductInfo>
        <p>{fullName}</p>
      </S.ProductInfo>

      <S.CountContainer>
        <S.Decrement onClick={() => decrement(id)}>-</S.Decrement>
        <input
          type="text"
          pattern="[0-9]*"
          value={quantity && Math.max(1, quantity)}
          onChange={(e) => handleChange(e, id)}
        />
        <S.Increment onClick={() => increment(id)}>+</S.Increment>
      </S.CountContainer>

      <S.Price>$ {subtotal}</S.Price>

      <S.Remove onClick={() => remove(id)}>X</S.Remove>
    </S.CartItem>
  );
};

export default CartItem;
