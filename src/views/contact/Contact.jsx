import { Row, Col, Image } from 'react-bootstrap';
import { Email } from './Email'
import MarkImg03 from '../../images/mark_img_03.png'

export function Contact() {
    return (
        <div className='container-flex'>
            <Row>
                <Col sm={12} md={6} className='d-flex flex-column justify-content-center'>
                    <h2>Work with Me</h2>
                    <p>
                        Address <br />
                        Legazpi City, Albay <br />
                        4500 Philippines <br />
                        <br />
                        Phone <br />
                        (+63) 926 015 1163 <br />
                        <br />
                        Email <br />
                        marksalvador.batasiii@gmail.com
                    </p>
                </Col>
                <Col sm={12} md={6}>
                    <Image src={MarkImg03} alt='Mark Profile Photo' fluid rounded />
                </Col>
                <Col sm={12}>
                    <h2>Send me an email</h2>
                    <Email />
                </Col>
            </Row>
        </div>
    );
}