import {React} from 'react';
import {connect} from 'react-redux';

import {ReactComponent as ShoppingBag} from '../../assets/images/shopping-bag.svg'
import './cart-icon.styles.scss';
import {toggleCart} from '../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';


const CartIcon =({toggleCartHidden,itemCount})=>{
    return(
            <div className="cart-icon" onClick={toggleCartHidden}>
                <ShoppingBag className="shopping-icon" />
                <span className="item-count">{itemCount}</span>
            </div>
    )
}

const mapStateToProps =(state)=>({
    itemCount:selectCartItemsCount(state)
})
const mapDispatchToProps =(dispatch)=>({
    toggleCartHidden:()=>{dispatch(toggleCart())}
})
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);