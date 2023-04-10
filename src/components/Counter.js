import React from 'react'
import { increment, decrement } from "../state/counterSlice";
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';

export const Counter = () => {

const quantity = useSelector((state) => state.counter);
console.log(quantity);
const dispatch = useDispatch();

  return (
    <div className="d-flex align-items-center">
        <Button onClick={() => {
          dispatch(decrement());
        }}> - </Button>
        <div>
          <span className='fs-4 px-2'>{quantity.count}</span>
        </div>
         <Button className='primary' onClick={() => {
          dispatch(increment());
        }}> + </Button>
    </div>
  )
}
