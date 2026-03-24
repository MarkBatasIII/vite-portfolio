import { Row, Col, Image, Button } from 'react-bootstrap'

import markImg01 from '../../images/mark_img_01.png'
import blob from '../../images/blob.svg'

export function Header() {
    return (
        <div className='container-flex'>
            <Row>
                <Col sm={12} md={6} className='d-flex justify-content-center align-items-center'>
                    <div className="image-wrapper position-relative">
                        <img
                            src={blob}
                            alt=""
                            className="blob-bg position-absolute"
                        />
                        <Image
                            src={markImg01}
                            alt='Mark Profile Photo'
                            fluid
                            className="position-relative"
                            style={{ zIndex: 1 }}
                        />

                    </div>
                </Col>
                <Col sm={12} md={6} className='d-flex flex-column justify-content-center'>
                    <h1>Mark Batas III</h1>
                    <h3>Web Developer</h3>
                    <p>
                        Welcome to my site! I'm a developer passionate about building clean,
                        functional experiences across the web and mobile. Whether you're here to
                        collaborate or just curious about my latest projects, I hope you find something
                        that inspires you.
                    </p>
                    <p>
                        Take a look around, and feel free to reach out if you'd like to chat about tech
                        or a new idea.
                    </p>
                    <Button href="#project">Explore</Button>
                </Col>
            </Row>
        </div>
    );
}