import { createContext } from "react"

const BeverageContext = createContext()

const BeverageProvider = ({children}) => {

   

  return (
    <BeverageContext.Provider
        values={{

        }}
    >
        {children}
        
    </BeverageContext.Provider>
  )
}

export {
    BeverageProvider
}

export default BeverageContext
