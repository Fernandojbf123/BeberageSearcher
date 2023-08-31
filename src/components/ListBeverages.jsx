import useBeverage from "../hooks/useBeverage"
import { Container, Row, Col } from "react-bootstrap"
import Beverage from "./Beverage";

const ListBeverages = () => {
    
    const {beverages} = useBeverage();
  
    return (
    <Row className="mt-5">
        {beverages.map(beverage => (
            <Beverage 
                key={beverage.idDrink}
                beverage={beverage}
            />
        ))}
    </Row>
  )
}

export default ListBeverages
