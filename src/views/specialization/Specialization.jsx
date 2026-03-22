import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export function Specialization() {
    return (
        <div className='container-flex'>
            <Row>
                <Col sm={12}>
                    <h2>My Specializations</h2>
                </Col>

                <Col sm={12} md={4}>
                    <Card className='h-100'>
                        <Card.Header className='pt-3'>
                            <span className='fa-solid fa-code fa-4x'></span>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>Web Development</Card.Title>
                            <Card.Text>
                                HTML / CSS / Bootstrap / Font Awesome /
                                Javascript / JQuery / React JS /
                                Firebase / PHP / CodeIgniter
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col sm={12} md={4}>
                    <Card className='h-100'>
                        <Card.Header className='pt-3'>
                            <span className='fa-solid fa-paint-brush fa-4x'></span>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>Design</Card.Title>
                            <Card.Text>
                                Figma / Canva / Adobe Express
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col sm={12} md={4}>
                    <Card className='h-100'>
                        <Card.Header className='pt-3'>
                            <span className='fa-solid fa-desktop fa-4x'></span>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>IT Support</Card.Title>
                            <Card.Text>
                                Microsoft Office 365 / Google Suite /
                                Asset Management / Hardware /
                                Software Troubleshoot / Procurement
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div >
    );
}