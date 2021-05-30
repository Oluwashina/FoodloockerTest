import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ForgotPassword from './pages/ForgotPassword/forgotPassword';
import Home from './pages/Home/Home';
import ItemPage from './pages/Home/ItemPage';
import Cart from './pages/Cart/cart';
import CheckoutPage from './pages/Checkout/checkout';

function App() {
  return (
    <>
    <div>
      <Router>
          <Switch> 
            <Route exact path="/" component={Home} />
            <Route path="/item/:id" component={ItemPage} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={CheckoutPage} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Register} />
            <Route path="/forgotpassword" component={ForgotPassword} />
           </Switch>
       </Router>
    </div>
      
    </>
  );
}

export default App;
