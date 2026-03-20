import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import markImg from '../images/MarkBatas.png'
import './Cover.css'

export function Cover() {
    return (
        <div className='bg-primary'>
            <Row>
                <Col sm={12} md={6}>
                    <div className='d-flex flex-column justify-content-around text-center h-100'>
                        <h2>Mark Batas III</h2>
                        <h1>Web Developer</h1>
                    </div>
                </Col>
                <Col sm={12} md={6}>
                    <img className='markImg' src={markImg} alt='Mark Image' />
                </Col>
            </Row>
        </div>
    );
}