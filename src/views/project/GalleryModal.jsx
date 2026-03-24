import { Modal, Image } from 'react-bootstrap'

export function GalleryModal({ show, onHide, selectedImg }) {
    return (
        <Modal show={show} onHide={onHide} centered size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Image Preview</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
                <Image src={selectedImg} fluid />
            </Modal.Body>
        </Modal>
    );
}