import { Row, Col, Image, Container } from 'react-bootstrap';
import { Email } from './Email';
import MarkImg03 from '../../images/mark_img_03.png';
import './Contact.css';

export function Contact() {
    return (
        <Container className='py-5'>
            <Row>
                <Col md={6}>
                    <Row className="flex-column h-100">
                        <Col className="mt-auto">
                            <Image
                                src={MarkImg03}
                                alt='Mark Contact Photo'
                                fluid
                                rounded
                                style={{ maxWidth: '300px' }}
                            />
                        </Col>
                        <Col>
                            <div className="d-flex flex-column justify-content-between">
                                <p className='mt-3'>
                                    <strong>Address</strong> <br />
                                    Legazpi City, Albay <br />
                                    4500 Philippines <br />
                                    <br />
                                    <strong>Phone</strong> <br />
                                    (+63) 926 015 1163 <br />
                                    <br />
                                    <strong>Email</strong> <br />
                                    marksalvador.batasiii@gmail.com
                                </p>
                                <div className="social-links d-flex gap-4">
                                    <a href="https://github.com/MarkBatasIII" target="_blank" rel="noopener noreferrer" className="text-dark">
                                        <i className="fab fa-github fa-2x"></i>
                                    </a>
                                    <a href="https://www.facebook.com/markbatasiii/" target="_blank" rel="noopener noreferrer" style={{ color: '#1877F2' }}>
                                        <i className="fab fa-facebook fa-2x"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/in/markbatasiii/" target="_blank" rel="noopener noreferrer" style={{ color: '#0A66C2' }}>
                                        <i className="fab fa-linkedin fa-2x"></i>
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col md={6}>
                    <Email />
                </Col>
            </Row>
        </Container>
    );
}