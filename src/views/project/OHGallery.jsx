import { useState } from 'react'

import { GalleryCard } from './GalleryCard'
import { GalleryModal } from './GalleryModal'

import { Row, Col } from 'react-bootstrap'

import ohImg01 from '../../images/oh_img_01.png'
import ohImg02 from '../../images/oh_img_02.png'
import ohImg03 from '../../images/oh_img_03.png'
import ohImg04 from '../../images/oh_img_04.png'

export function OHGallery() {

    const [show, setShow] = useState(false);
    const [selectedImg, setSelectedImg] = useState('');

    const imageList = [
        ohImg01,
        ohImg02,
        ohImg03,
        ohImg04
    ];

    const handleOpenModal = (imgSrc) => {
        setSelectedImg(imgSrc);
        setShow(true);
    };

    return (
        <Row>
            <h2>OH Snap</h2>
            {imageList.map((imgSrc, index) => (
                <Col sm={12} md={3} className='mt-4'>
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