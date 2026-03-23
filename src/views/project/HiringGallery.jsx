import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import hiringImg02 from '../../images/hiring_img_02.png'
import hiringImg03 from '../../images/hiring_img_03.png'
import hiringImg04 from '../../images/hiring_img_04.png'
import hiringImg05 from '../../images/hiring_img_05.png'
import hiringImg06 from '../../images/hiring_img_06.png'
import hiringImg07 from '../../images/hiring_img_07.png'
import './Gallery.css'

export function HiringGallery() {
    const imageList = [
        hiringImg02,
        hiringImg03,
        hiringImg04,
        hiringImg05,
        hiringImg06,
        hiringImg07
    ];

    return (
        <Row>
            <h2>Hiring</h2>
            {imageList.map((imgSrc, index) => (
                <Col key={index} sm={12} md={6} lg={4} className='mb-4'>
                    <Card>
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
        </Row>
    );
}