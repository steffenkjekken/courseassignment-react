import { useParams } from "react-router-dom";
import { URL } from "../components/utils/constants";
import { useDispatch, useSelector } from 'react-redux';
import useApi from "../hooks/useApi";
import { addProduct } from "../state/cartSlice";
import { reset } from "../state/counterSlice";
import { Counter } from "../components/Counter";
import { useEffect, useState } from "react";
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { Container, Image, Button, Col, Row, Badge, Spinner, Toast } from 'react-bootstrap';


const Product = () => {
    
    const quantity = useSelector((state) => state.counter)
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);

    //reset quantity on new product
    useEffect(() => {
      return () => {
        dispatch(reset())
      }
    }, [dispatch])

    const {id} = useParams()
    const { data, isLoading, isError } = useApi(URL + id);

      if (isLoading) {
        return  <Container className="m-auto text-center pt-5">
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
                </Container>;
      }
    
      if (isError) {
        return <div>Error</div>;
      };

      const handleAdd = () => {
        dispatch(
          addProduct({
            index: data.id,
            name: data.title,
            price: data.discountedPrice,
            amount: quantity.count,
            imageUrl: data.imageUrl,
          })
        );
      };

      const calculateDiscount = () => {
        const youSave = data.price - data.discountedPrice
        return youSave.toFixed(2);
      }

      const calculateDiscountPercentage = () => {
        const discountPercentage = ((data.price - data.discountedPrice) / data.price) * 100;
        return discountPercentage.toFixed(0);
      }

    return (
        <>
        <Container>
        <h1>{data.title}</h1>
        <Row className="g-3 py-3 d-flex">
        <Col xs={12} sm={6} md={6}>
        <Col xs={6} sm={12} md={10} lg={8}className="m-auto py-2">
        <Image fluid src={data.imageUrl} alt={data.title}></Image>
        </Col>
        </Col>
        <Col xs={12} sm={6} md={6} className="d-flex flex-column justify-content-between">
        <Container className="mb-3">
        <p>{data.description}</p>
        <p className="fs-3 mb-0">${data.discountedPrice}</p>
        {data.discountedPrice < data.price && (
            <Badge bg="warning" text='dark'>{calculateDiscountPercentage()}%</Badge>
          )}
        {data.discountedPrice < data.price && (
        <p className="text-muted">You save ${calculateDiscount()}</p>
      )}
        <div className="d-flex">
        <Counter key={data.id}/>
        <Button variant="success" className="mx-3" disabled={show} onClick={() => {
          handleAdd();
          setShow(true)
          dispatch(reset());
        }}> + Add to cart</Button>
        </div>
        <Toast className="mt-2" onClose={() => setShow(false)} show={show} delay={2000} autohide>
          <Toast.Body><BsFillCheckCircleFill size="20px" className="mx-1" color="green"/>Product successfully added to cart</Toast.Body>
        </Toast>
        </Container>
        {data.reviews && data.reviews.length > 0 && (
        <Container className="pt-5">
        <p className="fs-4 mb-1">Reviews</p>
        <ul className="list-group">
          {data.reviews.map(review => (
            <li className="list-group-item" key={review.id}>
                <div className="d-flex w-auto justify-content-between align-items-center">
                <p className="my-0 mx-0 me-2"><strong>{review.username}</strong></p>
                <Badge bg="warning" text="dark">
                {review.rating} / 5
                </Badge>
                </div>
              <p className="my-1">{review.description}</p>
              </li>
          ))}
        </ul>
        </Container>
      )}
        </Col>
        </Row>
        </Container>
        </>
    )
    
}

export default Product