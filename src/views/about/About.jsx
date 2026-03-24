import { Row, Col, Image } from 'react-bootstrap';
import markImg02 from '../../images/mark_img_02.png'

export function About() {
    return (
        <div className='container-flex h-25'>
            <Row>
                <Col sm={12} md={6} className='d-flex flex-column justify-content-center'>
                    <h2>About Me</h2>
                    <p>
                        31, Pet Lover, Programmer, and a Digital Enthusiast.
                    </p>
                    <p>
                        Tech-savvy professional with over 8 years of
                        experience in the technology industry,
                        specializing in web development, technical
                        support, and asset administration across both
                        client-facing and virtual environments.
                    </p>
                </Col>
                <Col sm={12} md={6}>
                    <Image src={markImg02} alt='Mark Profile Photo' fluid roundedCircle />
                </Col>
            </Row>
        </div>
    );
}