import { useState } from 'react';

import { Row, Col, Image, Card, Modal } from 'react-bootstrap'

import hiringImg02 from '../../images/hiring_img_02.png'
import hiringImg03 from '../../images/hiring_img_03.png'
import hiringImg04 from '../../images/hiring_img_04.png'
import hiringImg05 from '../../images/hiring_img_05.png'
import hiringImg06 from '../../images/hiring_img_06.png'
import hiringImg07 from '../../images/hiring_img_07.png'

import './Gallery.css'

export function HiringGallery() {

    const [show, setShow] = useState(false);
    const [selectedImg, setSelectedImg] = useState('');

    const imageList = [
        hiringImg02,
        hiringImg03,
        hiringImg04,
        hiringImg05,
        hiringImg06,
        hiringImg07
    ];

    const handleClose = () => setShow(false);

    const handleShow = (imgSrc) => {
        setSelectedImg(imgSrc);
        setShow(true);
    };

    return (
        <Row>
            <h2>Hiring</h2>
            {imageList.map((imgSrc, index) => (
                <Col key={index} sm={12} md={6} lg={4} className='mt-4'>
                    <Card
                        className="img-card"
                        onClick={() => handleShow(imgSrc)}
                        style={{ cursor: 'pointer' }}
                    >
                        <Card.Body>
                            <Image
                                className='img-gallery'
                                src={imgSrc}
                                alt={`Hiring Website Screen ${index + 1}`}
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