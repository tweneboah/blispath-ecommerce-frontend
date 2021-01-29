import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { savePaymentMethodAction } from '../redux/actions/cartActions';

const PaymentScreen = ({ history }) => {
  const cart = useSelector(state => state.cart);
  const { shippingAddress } = cart;

  //Redirect if there is no shipping address
  if (!shippingAddress.address) {
    history.push('/shipping');
  }

  const [paymentMethod, setPaymentMethod] = useState('PayPal');

  const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();
    dispatch(savePaymentMethodAction(paymentMethod));
    history.push('/placeorder');
  };

  return (
    // <FormContainer>
    //   <CheckoutSteps step1 step2 step3 />
    //   <h1>Payment Method</h1>
    //   <Form onSubmit={submitHandler}>
    //     <Form.Group>
    //       <Form.Label as='legend'>Select Method</Form.Label>
    //       <Col>
    //         <Form.Check
    //           type='radio'
    //           label='PayPal or Credit Card'
    //           id='PayPal'
    //           name='paymentMethod'
    //           value='PayPal'
    //           checked
    //           onChange={e => setPaymentMethod(e.target.value)}></Form.Check>
    //         {/* <Form.Check
    //           type='radio'
    //           label='Stripe'
    //           id='Stripe'
    //           name='paymentMethod'
    //           value='Stripe'
    //           onChange={(e) => setPaymentMethod(e.target.value)}
    //         ></Form.Check> */}
    //       </Col>
    //     </Form.Group>

    //     <Button type='submit' variant='primary'>
    //       Continue
    //     </Button>
    //   </Form>
    // </FormContainer>

    <h1>Payment Screen</h1>
  );
};

export default PaymentScreen;
