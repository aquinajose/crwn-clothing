import {React} from 'react';
import {connect} from 'react-redux';

import {ReactComponent as ShoppingBag} from '../../assets/images/shopping-bag.svg'
import './cart-icon.styles.scss';
import {toggleCart} from '../../redux/cart/cart.actions';

const CartIcon =(props)=>{
    return(
            <div className="cart-icon" onClick={props.toggleCartHidden}>
                <ShoppingBag className="shopping-icon" />
                <span className="item-count">3</span>
            </div>
    )
}
const mapDispatchToProps =(dispatch)=>({
    toggleCartHidden:()=>{dispatch(toggleCart())}
})
export default connect(null,mapDispatchToProps)(CartIcon);