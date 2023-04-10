import { Button, Container, Stack } from "react-bootstrap";
import { BsTrash3 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { removeProduct, resetCartTotal } from "../state/cartSlice";

export default function Cart() {

const cart = useSelector((state) => state.cart);

const cartQuantity = cart.products.reduce((a, b) => + a + + b.amount, 0)

const totalNumber = Number(cart.total)

console.log(totalNumber);

const dispatch = useDispatch();
console.log(cart.products.reduce((a, b) => + a + + b.amount, 0));

console.log(cart);

if (totalNumber === 0) {
    return (
        <Container className="text-center py-5">
        <p className="text-muted fs-4">Your cart is empty</p>
        </Container>
    )}
else

  return (
    <Container className="pb-2" style={{
        maxWidth: "760px"
    }}>
        {cart.products.map((item, idx) => {

        const itemTotal = item.price * item.amount

          return (
            <Stack direction="horizontal" gap={2} key={idx} className="border-bottom py-3 mb-2">
            <img src={item.imageUrl} alt={item.title}
            style={{
                width: "125px",
                height: "100px",
                objectFit: "cover",
            }}/>
            <div className="me-auto">
              {item.name} <span className="text-muted">x{item.amount}</span>
              <p className="text-muted" style={{fontSize: ".80rem"}}>$ {item.price}</p>
            </div>
            <div className="ms-auto">
            <p>${itemTotal.toFixed(2)}</p>
              </div>
            <div className="text-muted d-flex flex-column align-items-end pb-3" style={{fontSize: ".80rem"}}>
            <Button variant="danger" size="sm"
                onClick={() => {
                dispatch(removeProduct(item.index));
                }}
                >
                <BsTrash3/>
            </Button>
            </div>
            </Stack>
          );
        })}
        <div className="d-flex justify-content-between"> 
            <div>
            <p className="fs-4 mb-0">Cart Total: ${totalNumber.toFixed(2)}</p>
            <p className="text-muted">Items: {cartQuantity}</p>
            </div>
            <div className="">
            <Button variant="danger" size="sm"
            onClick={() => {
            dispatch(resetCartTotal());
            }}
        >
            Empty Cart
        </Button>
            </div> 
        </div>
        <div className="text-center mt-auto mb-3">
            <Link to="/checkout">
            <Button variant="primary" className="px-5" size="lg" onClick={() => {
            dispatch(resetCartTotal());
            }}>Check out</Button>
            </Link>
        </div>
        </Container>
  )
}
