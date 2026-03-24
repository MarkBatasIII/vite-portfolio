import { useState } from 'react'

import { Row, Col, Image, Card, Modal } from 'react-bootstrap'

import payrollImg01 from '../../images/payroll_img_01.png'
import payrollImg02 from '../../images/payroll_img_02.png'
import payrollImg03 from '../../images/payroll_img_03.png'

import './Gallery.css'

export function PayrollGallery() {

    const [show, setShow] = useState(false);
    const [selectedImg, setSelectedImg] = useState('');

    const imageList = [
        payrollImg01,
        payrollImg02,
        payrollImg03,
    ];

    const handleClose = () => setShow(false);

    const handleShow = (imgSrc) => {
        setSelectedImg(imgSrc);
        setShow(true);
    };

    return (
        <Row>
            <h2>Payroll</h2>
            {imageList.map((imgSrc, index) => (
                <Col key={index} sm={12} md={4} className='mt-4'>
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