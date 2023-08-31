import {Modal, Image} from "react-bootstrap"

const ModalBeverage = () => {

    const handleModalClick = () => {

    }
  
    return (
    <Modal show={true} onHide={handleModalClick}>
        <Modal.Body>
            Body Modal
        </Modal.Body>
    </Modal>
  )
}

export default ModalBeverage
