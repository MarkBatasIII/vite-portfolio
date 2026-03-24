import { Row, Col, Image, Button } from 'react-bootstrap'

import { Gallery } from './Gallery'

import hiringImg01 from '../../images/hiring_img_01.png'

export function Project() {
    return (
        <>
            <div className='container-flex'>
                <Row>
                    <Col sm={12} md={6} className='d-flex justify-content-center align-items-center'>
                        <Image src={hiringImg01} alt='Hiring Collection Image' fluid />
                    </Col>
                    <Col sm={12} md={6} className='d-flex flex-column justify-content-center h-100'>
                        <h1>My Projects</h1>
                        <h3>Web Applications</h3>
                        <p>
                            During my time at OneHalf, I've focused on building robust, functional
                            web experiences tailored to specific business needs. My work ranges from
                            developing a streamlined <strong>Hiring Website</strong> and
                            the <strong>Oh Snap Window Tracking</strong> system to managing
                            complex data flows within <strong>Payroll</strong> applications.
                        </p>
                        <p>
                            Explore these projects to see how I translate technical challenges into clean,
                            user-friendly digital solutions.
                        </p>
                        <Button type="button">Explore</Button>
                    </Col>
                </Row>
            </div>
            <Gallery />
        </>
    );
}