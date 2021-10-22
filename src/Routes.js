import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Header from './components/Header';
import Checkout from './pages/Checkout';

const Routes = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (e, products) => {
    const id = e.target.closest('.product').classList[0].substring(1);
    const newCart = [...cart];
    const index = newCart.findIndex((item) => item.id === id);
    if (index > -1) {
      newCart[index].quantity += 1;
    } else {
      products[id].quantity = 1;
      newCart.push(products[id]);
    }
    setCart(newCart);
  };

  const increment = (id) => {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        if (item.quantity === '') {
          item.quantity = 1;
        } else {
          item.quantity += 1;
        }
      }
      return item;
    });
    setCart(newCart);
  };

  const decrement = (id) => {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        if (item.quantity === '') {
          item.quantity = 1;
        } else if (item.quantity > 1) {
          item.quantity -= 1;
        }
      }
      return item;
    });
    setCart(newCart);
  };

  const handleChange = (e, id) => {
    const value = e.target.value;
    const newCart = cart.map((item) => {
      if (item.id === id) {
        if (value === '') {
          item.quantity = '';
        } else {
          item.quantity = value >= 1 ? value : 1;
        }
      }
      return item;
    });

    setCart(newCart);
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  return (
    <BrowserRouter>
      <Header items={cart.length} />
      <Switch>
        <Route
          exact
          path="/shopping-cart"
          render={() => <App addToCart={addToCart} />}
        />
        <Route
          exact
          path="/shopping-cart/checkout"
          render={() => (
            <Checkout
              cart={cart}
              increment={increment}
              decrement={decrement}
              handleChange={handleChange}
              remove={removeFromCart}
            />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
