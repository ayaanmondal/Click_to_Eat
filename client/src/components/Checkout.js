import React from "react";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { placeOrder } from "../actions/orderAction";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";

export default function Checkout({ subtotal }) {
  const orderstate = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderstate;
  const dispatch = useDispatch();
  function tokenHandler(token) {
    console.log(token);
    dispatch(placeOrder(token, subtotal));
  }

  return (
    <div>

      {loading && <Loading />}
      {success && <Success success="Order Placed Successfully" />}
      {error && <Error error="Something Went Wrong!!" />}

      <StripeCheckout
        amount={subtotal * 100}
        shippingAddress
        token={tokenHandler}
        stripeKey="pk_test_51JGzdKSHNX9Oz9p2qVBNcPnTzsuo4QyVQMNhVCt3W3pO6TGkOJmM6K8BKGpmbLInnSDV5Xvs6R5p4GOwcuklcY5800gG1oZqb1"
        currency="INR"
      >
        <button className="btn">Pay Now</button>
      </StripeCheckout>
    </div>
  );
}
