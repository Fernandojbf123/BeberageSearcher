import {Modal, Image, Row } from "react-bootstrap"
import useBeverage from "../hooks/useBeverage"
import Spinner from "./Spinner";

const ModalBeverage = () => {

    const { handleModalClick, isBeverageModalActive, beverageReceipt, isLoading } = useBeverage();
    const { drinkId, drinkType, drinkCategory, drinkName, drinkGlass, drinkImg, drinkIngredients, drinkInstructions } = beverageReceipt

    return (
        <Modal show={isBeverageModalActive} onHide={handleModalClick}>
            {isLoading ? (
                <Spinner />
            ) : (
                <>
                    <Image
                        src={drinkImg}
                        alt={drinkName}
                    />

                    <Modal.Header>
                        <Modal.Title>{drinkName}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Row className="p-3">
                            <h2>Ingredients and Quantities</h2>
                            <ul>
                                {drinkIngredients?.map(ingredient => (
                                    <li key={ingredient}>
                                        {ingredient}
                                    </li>
                                ))}
                            </ul>
                            <h2>Intructions:</h2>
                            <p>{drinkInstructions}</p>

                        </Row>
                    </Modal.Body>
                </>
            )}
        </Modal>
    )
}

export default ModalBeverage
