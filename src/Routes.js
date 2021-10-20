import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Header from './components/Header';

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/shopping-cart" component={App} />
        <Route exact path="/shopping-cart/checkout" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
