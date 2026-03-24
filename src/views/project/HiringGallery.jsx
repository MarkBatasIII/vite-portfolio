import { useState } from 'react'

import { GalleryCard } from './GalleryCard'
import { GalleryModal } from './GalleryModal'

import { Row, Col } from 'react-bootstrap'

import hiringImg02 from '../../images/hiring_img_02.png'
import hiringImg03 from '../../images/hiring_img_03.png'
import hiringImg04 from '../../images/hiring_img_04.png'
import hiringImg05 from '../../images/hiring_img_05.png'
import hiringImg06 from '../../images/hiring_img_06.png'
import hiringImg07 from '../../images/hiring_img_07.png'

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

    const handleOpenModal = (imgSrc) => {
        setSelectedImg(imgSrc);
        setShow(true);
    };

    return (
        <Row>
            <h2>Hiring</h2>
            {imageList.map((imgSrc, index) => (
                <Col sm={12} md={6} lg={4} className='mt-4'>
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