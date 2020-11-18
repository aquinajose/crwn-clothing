import {React} from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton =({price})=>{
    const priceForStripe= price*100;
    const publishableKey="pk_test_vKL5Fgh9gXcawKPVUyYWk4PN00DKM1TxFA";

    const onToken = token=>{
        console.log(token);
        alert("Payment Successful")
    }
    return(
        <StripeCheckout 
            label="Pay Now" 
            name='Crown Clothng Ltd' 
            billingAddress 
            shippingAddress 
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />

    )
}

export default StripeCheckoutButton;