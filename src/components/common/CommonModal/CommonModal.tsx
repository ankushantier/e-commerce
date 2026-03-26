import { Modal, Button } from "react-bootstrap";
    
const CommonModal = ({
    show,
    onHide,
    children,
    title
}) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            title
            centered
            // backdrop="static"
            className="common-modal"
        >
            <Modal.Header closeButton>
                {title && <Modal.Title id="contained-modal-title-vcenter">
                    {title}
                </Modal.Title>}
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
        </Modal>
    );
};

export default CommonModal;
