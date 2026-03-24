import { useState } from 'react';

import { Row, Col, Image, Card, Modal } from 'react-bootstrap'

import ohImg01 from '../../images/oh_img_01.png'
import ohImg02 from '../../images/oh_img_02.png'
import ohImg03 from '../../images/oh_img_03.png'
import ohImg04 from '../../images/oh_img_04.png'

import './Gallery.css'

export function OHGallery() {

    const [show, setShow] = useState(false);
    const [selectedImg, setSelectedImg] = useState('');

    const imageList = [
        ohImg01,
        ohImg02,
        ohImg03,
        ohImg04
    ];

    const handleClose = () => setShow(false);

    const handleShow = (imgSrc) => {
        setSelectedImg(imgSrc);
        setShow(true);
    };

    return (
        <Row>
            <h2>OH Snap</h2>
            {imageList.map((imgSrc, index) => (
                <Col key={index} sm={12} md={6} lg={3} className='mt-4'>
                    <Card
                        className="img-card"
                        onClick={() => handleShow(imgSrc)}
                        style={{ cursor: 'pointer' }}
                    >
                        <Card.Body>
                            <Image
                                className='img-gallery'
                                src={imgSrc}
                                alt={`OH Snap Website Screen ${index + 1}`}
                                fluid
                            />
                        </Card.Body>
                    </Card>
                </Col>
            ))}
            <Modal show={show} onHide={handleClose} centered size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Image Preview</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                    <Image src={selectedImg} fluid />
                </Modal.Body>
            </Modal>
        </Row>
    );
}