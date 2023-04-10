import useApi from "../hooks/useApi"
import { URL } from "../components/utils/constants"
import { Item } from "../components/Item";
import { Container, Row, Spinner } from "react-bootstrap";


const List = (props) => {
    const { data, isLoading, isError } = useApi(URL);
    
      if (isLoading) {
        return <Container className="m-auto text-center pt-5"><Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner></Container>;
      }
    
      if (isError) {
        return <div>Error</div>;
      }

    console.log(data);
      //create a new array by filtering the original array
      
    const filteredData = data.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.title.toLowerCase().includes(props.input)
        }
    })

    return (
        <Row className="g-3 py-3">
            {data ? filteredData.map((product, idx)=>{
                return <Item key={idx} product={product}/>;
            }) 
            : "data not found"}
        </Row>

    )
    
}

export default List