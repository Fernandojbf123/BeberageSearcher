import { Container, Form, Row, Col, Button} from "react-bootstrap"

const Formulary = () => {
  return (
    <Form>
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
                        name="category">
                        <option value="">- Select a category -</option>
                      </Form.Select>
                  </Form.Group>
            </Col>
        </Row>

    </Form>
  )
}

export default Formulary
