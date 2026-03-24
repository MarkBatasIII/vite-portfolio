import { Row, Col, Image, Card } from 'react-bootstrap';
import payrollImg01 from '../../images/payroll_img_01.png'
import payrollImg02 from '../../images/payroll_img_02.png'
import payrollImg03 from '../../images/payroll_img_03.png'
import './Gallery.css'

export function PayrollGallery() {
    const imageList = [
        payrollImg01,
        payrollImg02,
        payrollImg03,
    ];

    return (
        <Row>
            <h2>Payroll</h2>
            {imageList.map((imgSrc, index) => (
                <Col key={index} sm={12} md={4} className='mt-4'>
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