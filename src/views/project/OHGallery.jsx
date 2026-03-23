import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import ohImg01 from '../../images/oh_img_01.png'
import ohImg02 from '../../images/oh_img_02.png'
import ohImg03 from '../../images/oh_img_03.png'
import ohImg04 from '../../images/oh_img_04.png'
import './Gallery.css'

export function OHGallery() {
    const imageList = [
        ohImg01,
        ohImg02,
        ohImg03,
        ohImg04
    ];

    return (
        <Row>
            <h2>OH Snap</h2>
            {imageList.map((imgSrc, index) => (
                <Col key={index} sm={12} md={6} lg={3} className='mb-4'>
                    <Card>
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
        </Row>
    );
}