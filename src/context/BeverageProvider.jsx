import { createContext, useEffect, useState } from "react"
import axios from "axios"

const BeverageContext = createContext()

const BeverageProvider = ({children}) => {


    const [beverages, setBeverages] = useState([]);

    async function fetchBeverage (query) {
        const {beverageName, category} = query;
        try {
            const url = `http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${beverageName}&c=${category}`
            const {data} = await axios(url)
            setBeverages(data.drinks)
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <BeverageContext.Provider
        value={{
            fetchBeverage,
            beverages
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
