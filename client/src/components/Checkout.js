import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
export default function Checkout({subtotal}) {

    function tokenHandler(token){
        console.log(token);
    }

    return (
        <div>
            <StripeCheckout
                amount={subtotal * 100}
                shippingAddress
                token={tokenHandler}
                stripeKey='pk_test_51JGzdKSHNX9Oz9p2qVBNcPnTzsuo4QyVQMNhVCt3W3pO6TGkOJmM6K8BKGpmbLInnSDV5Xvs6R5p4GOwcuklcY5800gG1oZqb1'
                currency="INR">

                <button className='btn'>Pay Now</button>
            </StripeCheckout>
        </div>
    )
}
