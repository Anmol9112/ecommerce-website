import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51I55JdJukbqY7k88JRxEnwM8buKUE3owYhESvkfF8AoNEU7NAt5qzWl8OXyIErxyHxv6kc7idjvWHO7YtQW4fBLT00xtLcf3D3';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
         label ='Pay Now'
         name = 'Choose Kindness Ltd.'
         billingAddress
         shippingAddress
         image='https://svgshare.com/i/CUz.svg'
         description={`Your total is $${price}`}
         amount={priceForStripe}
         panelLabel='Pay Now'
         token={onToken}
        stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;