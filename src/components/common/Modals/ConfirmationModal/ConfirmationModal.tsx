import { Row, Col } from "react-bootstrap";
import CommonModal from "../../CommonModal/CommonModal";
import TrashIcon from "../../../../assets/icons/svgIcons";

interface Props {
    show: boolean;
    onHide: () => void;
    onDelete: () => void;
}

const ConfirmationModal = ({ show, onHide, onDelete }: Props) => {
    return (
        <CommonModal title="Delete User" show={show} onHide={onHide}>
            <div className="confirmation-modal">

                <Row className="align-items-center text-center">
                    <Col>
                        <TrashIcon />
                        <p className="message mt-3">
                            Are you sure you want to delete this user?
                        </p>
                    </Col>
                </Row>
                <div className="modal_action_btn">
                    <button
                        className="btn btn-secondary"
                        onClick={onHide}
                    >
                        Cancel
                    </button>

                    <button
                        className="btn btn-danger"
                        onClick={onDelete}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </CommonModal>
    );
};

export default ConfirmationModal;