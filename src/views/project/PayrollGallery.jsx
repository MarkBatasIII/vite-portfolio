import { useState } from 'react'

import { GalleryCard } from './GalleryCard'
import { GalleryModal } from './GalleryModal'

import { Row, Col } from 'react-bootstrap'

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

    const handleOpenModal = (imgSrc) => {
        setSelectedImg(imgSrc);
        setShow(true);
    };

    return (
        <Row>
            <h2>Payroll</h2>
            {imageList.map((imgSrc, index) => (
                <Col sm={12} md={4} className='mt-4'>
                    <GalleryCard
                        key={index}
                        imgSrc={imgSrc}
                        index={index}
                        onClick={handleOpenModal}
                    />
                </Col>
            ))}
            <GalleryModal
                show={show}
                onHide={() => setShow(false)}
                selectedImg={selectedImg}
            />
        </Row>
    );
}