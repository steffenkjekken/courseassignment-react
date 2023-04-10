import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function CheckoutSuccess() {
  return (
    <Container className="text-center py-5">
        <p className="fs-4">Your order was successfully placed</p>
        <Link to="/">
          <Button variant='primary'>
            Go back to home
          </Button>
        </Link>
      </Container>
  )
}
