import { Col,Card, Button} from "react-bootstrap"
import useBeverage from "../hooks/useBeverage"

const Beverage = ({beverage}) => {

  const {idDrink} = beverage;

  const {handleModalClick, getBeverageId, fetchBeverageReceipt} = useBeverage();



  return (
    <Col md={6} lg={3}>
        <Card className="mb-4">
            <Card.Img 
                variant="top"
                src={beverage.strDrinkThumb}
                alt={beverage.strDrink}
            />

            <Card.Body>
                <Card.Title>{beverage.strDrink}</Card.Title>
                <Card.Text>{"something else"}</Card.Text>
                <Button 
                    variant="warning"
                    className="w-100 text-uppercase"
                    onClick={ () => 
                                    {
                                      handleModalClick() 
                                      getBeverageId(idDrink)
                                      fetchBeverageReceipt(idDrink)
                                    }
                    }
                    >Check receipt</Button>
            </Card.Body>
        </Card>
      
    </Col>
  )
}

export default Beverage
