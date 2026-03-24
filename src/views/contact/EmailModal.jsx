import { Modal, Button } from 'react-bootstrap';

export function EmailModal({ show, onHide, content }) {
    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton closeVariant="white" className="bg-primary text-white">
                <Modal.Title className="text-white">
                    {content.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {content.body}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}