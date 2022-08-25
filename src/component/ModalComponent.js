import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalComponent(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>{props.children}</Modal.Body>
    </Modal>
  );
}

export default ModalComponent;
