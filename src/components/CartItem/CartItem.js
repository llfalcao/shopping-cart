import * as S from './styles';

const CartItem = ({ image, name, price }) => {
  return (
    <S.CartItem>
      <div>
        <S.Image src={image} alt={name} />
      </div>

      <S.ProductInfo>
        <p>{name}</p>
      </S.ProductInfo>

      <S.CountContainer>
        <S.Decrement>-</S.Decrement>
        <input type="number" defaultValue={0} />
        <S.Increment>+</S.Increment>
      </S.CountContainer>

      <S.Price>$ {price}</S.Price>

      <S.Remove>X</S.Remove>
    </S.CartItem>
  );
};

export default CartItem;
