import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// import HomePage from './pages/homepage/homepage.component';
// import ShopPage from './pages/shop/shop.component';
// import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
// import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import { GlobalStyle } from './global.styles';
import { selectCurrentUser } from './redux/user/user.selectors';
import {checkUserSession} from './redux/user/user.actions';


const HomePage = lazy(() => import('./pages/homepage/homepage.component'))
const ShopPage = lazy(() => import('./pages/shop/shop.component'))
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'))
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'))

 
class App extends React.Component {
  unsubscribeFromAuth=null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render()  {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch> 
        <ErrorBoundary>
        <Suspense fallback={<div>...Loading</div>}>
      <Route exact path='/' component={HomePage}/>
      
      <Route  path='/shop' component={ShopPage}/>
      <Route  path='/checkout' component={CheckoutPage}/>
      <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)}/>
      </Suspense>
      </ErrorBoundary>
      </Switch>
      
    </div>
  );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
