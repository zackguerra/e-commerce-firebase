import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart.selector'

import './cart-dropdown.styles.scss';

import {toggleCartHidden} from '../../redux/cart/cart.actions';

const CartDropdown = ({cartItems, history, dispatch}) => {
    console.log('dispatch: ', dispatch);
    return(
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ?
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
                :
                <span className="empty-message">Your cart is empty</span>
            }
        </div>
        <CustomButton 
            onClick={
                ()=> {
                    history.push('/checkout');
                    //toggleCartHidden
                    dispatch(toggleCartHidden());
                }
            }
        >GO TO CHECKOUT</CustomButton>
    </div>
)};

// const mapStateToProps = (state) => ({
//     cartItems: state.cart.cartItems
// })

//essentially, the same code as above, only destructured
// const mapStateToProps = ({ cart: {cartItems} }) => ({
//     cartItems
// })

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})


export default withRouter(connect(mapStateToProps)(CartDropdown));