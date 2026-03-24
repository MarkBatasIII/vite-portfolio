import { Row, Col, Card } from 'react-bootstrap';

export function Specialization() {
    const specializations = [
        {
            icon: 'fa-code',
            title: 'Web Development',
            text: 'HTML / CSS / Bootstrap / Font Awesome / Javascript / JQuery / React JS / Firebase / PHP / CodeIgniter'
        },
        {
            icon: 'fa-paint-brush',
            title: 'Design',
            text: 'Figma / Canva / Adobe Express'
        },
        {
            icon: 'fa-desktop',
            title: 'IT Support',
            text: 'Microsoft Office 365 / Google Suite / Asset Management / Hardware / Software Troubleshoot / Procurement'
        }
    ];

    return (
        <div className='container-flex'>
            <Row>
                <Col sm={12}>
                    <h2>My Specializations</h2>
                </Col>

                {specializations.map((item, index) => (
                    <Col key={index} sm={12} md={4} className="mb-4">
                        <Card className='h-100'>
                            <Card.Header className='pt-3'>
                                <span className={`fa-solid ${item.icon} fa-4x`}></span>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                    {item.text}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div >
    );
}