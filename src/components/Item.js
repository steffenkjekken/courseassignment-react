import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import { Badge, Col, Image } from 'react-bootstrap';

export const Item = ({product}) => {

  const calculateDiscount = () => {
    const discountPercentage = ((product.price - product.discountedPrice) / product.price) * 100;
    return discountPercentage.toFixed(0);
  }

  return (
    <Col xs={6} sm={6} md={4}>
    <Card className='align-items-center glossme h-100'>
        <Link to={`/products/${product.id}`}
        style={{ 
          textDecoration:'none',
          color: "black"
         }}
        >
          <Col className="text-center">
          <Image fluid src={product.imageUrl} alt={product.title} style={{
            height:"30vh",
            width:"50vw",
            objectFit: "cover",
          }}/>
          </Col>
          <div className='p-2 d-flex flex-column'>
          <div className='text-wrap'>
          <p className='fs-6'>{product.title}</p>
          </div>
          <div className='text-end md-auto'>
          <p className='m-0'><strong>${product.discountedPrice}</strong></p>
          {product.discountedPrice < product.price && (
            <Badge bg="warning" text='dark'>{calculateDiscount()}%</Badge>
          )}
          </div>
          </div>
        </Link>
    </Card>
    </Col>
  )
};