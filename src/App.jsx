import { Container } from "react-bootstrap"
import Formulary from "./components/Formulary"
import { CategoryProvider } from "./context/CategoryProvider"
import { BeverageProvider } from "./context/BeverageProvider"
import ListBeverages from "./components/ListBeverages"
import ModalBeverage from "./components/ModalBeverage"

function App() {

  return (

    <CategoryProvider>
      <BeverageProvider>
        <header className="py-5">
          <h1>Beverage receipt searcher</h1>
        </header>

        <Container className="mt-5">
          
          <Formulary />
          
          <ListBeverages />
          
          <ModalBeverage />

        </Container>
        
      </BeverageProvider>
    </CategoryProvider>
  )
}

export default App
