import React from 'react'
import { Button } from 'react-bootstrap';
import { BsCart } from "react-icons/bs";
import { useSelector } from 'react-redux';

const CartIcon = () => {

  const cart = useSelector((state) => state.cart);
  const cartQuantity = cart.products.reduce((a, b) => + a + + b.amount, 0)

  return (
    <>
    <Button 
    style={{
      position: "relative",
      height: "3rem",
      width: "3rem",
      }}
    variant="outline-primary"
    className='rounded-circle'
    >
      <BsCart className='fs-5'/>
    <div className='rounded-circle bg-danger d-flex justify-content-center align-items-center' 
    style={{ 
      color: "white", 
      width: "1.5rem", 
      height: "1.5rem",
      position: "absolute",
      bottom: "0",
      right: "0",
      transform: "translate(25%, 25%)",
      }}>
        {cartQuantity}
      </div>
      </Button>
      </>
  )
}
export default CartIcon
