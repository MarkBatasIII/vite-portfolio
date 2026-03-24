import { Row, Col, Image } from 'react-bootstrap'

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
                    <div className="d-flex gap-4 mt-3">
                        <a
                            href="https://github.com/MarkBatasIII"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-dark"
                            title="Visit my GitHub"
                        >
                            <i className="fab fa-github fa-2x"></i>
                        </a>
                        <a
                            href="https://www.facebook.com/markbatasiii/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: '#1877F2' }}
                            title="Connect on Facebook"
                        >
                            <i className="fab fa-facebook fa-2x"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/markbatasiii/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: '#0A66C2' }}
                            title="View my LinkedIn"
                        >
                            <i className="fab fa-linkedin fa-2x"></i>
                        </a>
                    </div>
                </Col>
                <Col sm={12} md={6}>
                    <Image src={MarkImg03} alt='Mark Contact Photo' fluid rounded />
                </Col>
                <Col sm={12}>
                    <Email />
                </Col>
            </Row>
        </div>
    );
}