import { useState, useEffect } from "react";
import { Container, Form, Row, Col, Button, Alert} from "react-bootstrap"
import useCategory from "../hooks/useCategory";
import useBeverage from "../hooks/useBeverage";

const Formulary = () => {

   const {categories} = useCategory();
   const {fetchBeverage} = useBeverage();

   const [query, setQuery] = useState({
    beverageName: "",
    category: "",
   })

   const [alertMsg, setAlertMsg] = useState("")

   function updateQuery (e) {
    setQuery({...query, [e.target.name]: e.target.value})
   }
  
  
   function handleSubmit (e) {
    e.preventDefault()
    setAlertMsg("")
    if (Object.values(query).includes("")) {
        setAlertMsg("All fields are mandatory")
        return
    }
    fetchBeverage(query)
  }



  return (
    <Form
        onSubmit={handleSubmit}
    >
        {alertMsg && 
            <Alert variant="danger" className="text-center">
                {alertMsg}
            </Alert>
        }
        <Row>
            <Col md={6}>
                <Form.Group >

                    <Form.Label
                        htmlFor="beverageName" 
                        >Beverage name
                    </Form.Label>

                    <Form.Control 
                        id="beverageName"
                        name="beverageName"
                        type="text"
                        placeholder="Eg: Tequila, Whisky, Etc"
                        onChange={updateQuery}
                    />
                </Form.Group>
            </Col>

            <Col md={6}>
                  <Form.Group >

                      <Form.Label
                          htmlFor="category"
                      >Beverage category
                      </Form.Label>

                      <Form.Select
                        id="category"
                        name="category"
                        onChange={updateQuery}
                        >
                        <option value="">- Select a category -</option>
                        {categories.map ((category) => (
                            <option 
                                key={category.strCategory}
                                value={category.strCategory}
                                >{category.strCategory}
                            </option>
                        ))}
                      </Form.Select>
                  </Form.Group>
            </Col>
        </Row>

        <Row className="justify-content-end mt-2" >
            <Col md={3}>
                        <Button 
                            variant="danger"
                            className="text-uppercase w-100"
                            type="submit">
                            Search beverage
                        </Button>
            </Col>
        </Row>

    </Form>
  )
}

export default Formulary
