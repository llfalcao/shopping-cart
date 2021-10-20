import products from './assets/data/products';

const App = ({ addToCart }) => {
  return (
    <div className="app">
      <h1>App</h1>
      {products.map((product) => {
        return (
          <div key={product.id} className={`p${product.id}`}>
            <p>{product.name}</p>
            <button onClick={(e) => addToCart(e, products)}>Add to cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default App;
