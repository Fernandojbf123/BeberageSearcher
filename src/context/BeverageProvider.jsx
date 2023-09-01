import { createContext, useEffect, useState } from "react"
import axios from "axios"

const BeverageContext = createContext()

const BeverageProvider = ({children}) => {


    const [beverages, setBeverages] = useState([]);
    const [isBeverageModalActive, setIsBeverageModalActive] = useState(false)
    const [beverageId, setBeverageId] = useState(null)
    const [beverageReceipt, setBeverageReceipt] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    async function fetchBeverage (query) {
        const {beverageName, category} = query;
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${beverageName}&c=${category}`
            const {data} = await axios(url)
            setBeverages(data.drinks)
        } catch (error) {
            console.log(error)
        }
    }

    function handleModalClick () {
        setIsBeverageModalActive(!isBeverageModalActive)
    }

    function getBeverageId (id) {
        setBeverageId(id)
    }


    async function fetchBeverageReceipt (id) {
        //id is the beverageId
        setIsLoading(true)
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
            const {data} = await axios(url)
            setBeverageReceipt(mappedBeverageReceipt(data.drinks[0]))
            
        } catch (error) {
            console.log(error)
        }
        finally{
            setIsLoading(false)
        }
    }

    function mappedBeverageReceipt (receipt) {

        let ingredients = [receipt.strIngredient1,receipt.strIngredient2, receipt.strIngredient3, receipt.strIngredient4, receipt.strIngredient5, receipt.strIngredient6, receipt.strIngredient7, receipt.strIngredient8, receipt.strIngredient9, receipt.strIngredient10, receipt.strIngredient11, receipt.strIngredient12, receipt.strIngredient13,receipt.strIngredient14, receipt.strIngredient15]
        
        let mappedIngredients = ingredients.filter( ingredient => { 
            if (ingredient!=null) {
                return ingredient
            }
         })

        let drink = {
            drinkId: receipt.idDrink,
            drinkType: receipt.strAlcoholic,
            drinkCategory: receipt.strCategory,
            drinkName: receipt.strDrink,
            drinkGlass: receipt.strGlass,
            drinkImg: receipt.strDrinkThumb,
            drinkIngredients: mappedIngredients,                                        
            drinkInstructions: receipt.strInstructions,
        }

        return drink
    }

  return (
    <BeverageContext.Provider
        value={{
            fetchBeverage,
            beverages,
            handleModalClick,
            isBeverageModalActive,
            getBeverageId,
            fetchBeverageReceipt,
            beverageReceipt,
            isLoading,
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
