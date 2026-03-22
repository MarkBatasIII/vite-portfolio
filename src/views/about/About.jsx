import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import markImg02 from '../../images/mark_img_02.png'
import './About.css'

export function About() {
    return (
        <div className='container-flex'>
            <Row>
                <Col sm={12} md={6}>
                    <div className='d-flex flex-column justify-content-center h-100'>
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
                    </div>
                </Col>
                <Col sm={12} md={6}>
                    <img className='markImg02' src={markImg02} alt='Mark Profile Photo' />
                </Col>
            </Row>
        </div>
    );
}