import { Container } from "react-bootstrap"
import Formulary from "./components/Formulary"
import { CategoryProvider } from "./context/CategoryProvider"

function App() {

  return (

    <CategoryProvider>
      <header className="py-5">
        <h1>Beverage receipt searcher</h1>
      </header>

      <Container className="mt-5">
        <Formulary />
      </Container>
    </CategoryProvider>
  )
}

export default App
