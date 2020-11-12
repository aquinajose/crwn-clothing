import {React} from 'react';
import {connect} from 'react-redux';

import {selectCartItems} from '../../redux/cart/cart.selectors';
import {selectCartTotal} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/chechout-item/checkout-item.component';

import './checkout.styles.scss';

const CheckOut =({cartItems,cartTotal})=>(
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {cartItems.length?(cartItems.map(cartItem=>
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)):
                (<span className="empty-message">Your Cart is empty</span>)}
        {cartTotal?(<div className="total">
            Total Cost is {cartTotal}
        </div>):''}
        
    </div>
)
const mapStateToProps =(state)=>({
    cartItems:selectCartItems(state),
    cartTotal:selectCartTotal(state)
})
export default connect(mapStateToProps)(CheckOut);