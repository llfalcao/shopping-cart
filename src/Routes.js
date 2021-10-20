import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Header from './components/Header';
import Checkout from './pages/Checkout';

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/shopping-cart" component={App} />
        <Route exact path="/shopping-cart/checkout" component={Checkout} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
