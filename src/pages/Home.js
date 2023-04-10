import { Container, Form} from "react-bootstrap";
import { useState } from "react";
import List from "../components/List";

const Products = () => {
    const [searchField, setSearchField] = useState("");
    let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setSearchField(lowerCase);
    };

    return (
        <Container>
            <Form className="d-flex pt-3">
                  <Form.Control
                    type="search"
                    onChange={inputHandler}
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
            </Form>
        <List input={searchField}/>
      </Container>

    )
    
}

export default Products