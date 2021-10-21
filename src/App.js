import './styles/app.css';
import products from './assets/data/products';

const App = ({ addToCart }) => {
  return (
    <div className="app">
      <header>
        <h1>CarinaOS</h1>
        <h2>Fast, reliable, and secure.</h2>
      </header>
      <div className="products">
        {products.map((product) => {
          return (
            <div className={`p${product.id} product`} key={product.id}>
              <div className="product-image">
                <img className="icon" src={product.icon} alt="Product Icon" />
              </div>
              <div className="product-info">
                <p className="product-title">{product.name}</p>
                <p className="product-price">$ {product.price}</p>
                <button
                  className="btn btn-addtocart"
                  onClick={(e) => addToCart(e, products)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
