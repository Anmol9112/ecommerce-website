import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'; 
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { ReactComponent as Logo } from '../../assets/choose-kindness.svg';
import {HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink} from './header.styles';
import { signOutStart } from '../../redux/user/user.actions';

const Header = ({ currentUser, hidden, signOutStart }) => (
    <HeaderContainer>
    <LogoContainer to='/'>
    <Logo className='logo' />
</LogoContainer>
<OptionsContainer>
<OptionLink to='/shop'>
   SHOP 
</OptionLink>
<OptionLink to='/shop'>
   CONTACT 
</OptionLink>
{
    currentUser? (
    <OptionDiv onClick={signOutStart}>SIGN OUT</OptionDiv>
     ) : (
    <OptionLink to='/signin'>SIGN IN</OptionLink>
     )}
     <CartIcon />
     </OptionsContainer>
     {hidden ? null : <CartDropdown />}
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps,mapDispatchToProps)(Header);