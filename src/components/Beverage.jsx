import { Row, Col,Card, Button} from "react-bootstrap"

const Beverage = ({beverage}) => {
  return (
    <Col md={2} lg={4}>
        <Card>
            <Card.Img 
                variant="top"
                src={beverage.strDrinkThumb}
                alt={beverage.strDrink}
            />

            <Card.Body>
                <Card.Title>{beverage.strDrink}</Card.Title>
                <Card.Text>{"somthing else"}</Card.Text>
                <Button 
                    variant="warning"
                    className="w-100 text-uppercase"
                    >Check receipt</Button>
            </Card.Body>
        </Card>
      
    </Col>
  )
}

export default Beverage
