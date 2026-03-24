import { Row, Col, Image } from 'react-bootstrap'

import markImg02 from '../../images/mark_img_02.png'

export function About() {
    return (
        <div className='container-flex'>
            <Row className='test'>
                <Col sm={12} lg={6} className='d-flex flex-column justify-content-center'>
                    <h2>About Me</h2>
                    <p>
                        31 | Web Developer | Designer | Pet Lover
                    </p>
                    <p>
                        Hi, I'm Mark! I'm a 31-year-old programmer and digital enthusiast who's spent
                        the last 8 years immersed in the world of technology. My journey started with
                        a simple goal: helping people navigate their tech. Over a decade later, that
                        same curiosity has led me to specialize in building and designing websites that
                        make life a little easier.
                    </p>
                    <p>
                        I like to think of myself as a "website builder." I don't just write code;
                        I design experiences. Whether it's troubleshooting a complex software issue,
                        organizing digital assets, or building a brand-new website from scratch,
                        I'm at my happiest when I'm creating tools that are as simple to use as they
                        are great to look at.
                    </p>
                    <p>
                        What I bring to the table:
                    </p>
                    <ul>
                        <li>
                            Web Development: I build fast, modern websites using tools like React and PHP.
                        </li>
                        <li>
                            Creative Design: I love using Figma and Canva to make sure everything I build has a clean, professional aesthetic.
                        </li>
                        <li>
                            Problem Solving: With years of experience in IT support, there isn't much in the tech world that I can't figure out or fix.
                        </li>
                    </ul>
                    <p>
                        When I'm not behind a screen, you'll usually find me hanging out with my pets or exploring
                        new digital trends. I'm always looking for the next project that lets me blend my technical
                        skills with my creative side.
                    </p>
                </Col>
                <Col sm={12} lg={6} className='d-flex justify-content-center align-items-center'>
                    <Image className='bg-primary' src={markImg02} alt='Mark About Photo' fluid roundedCircle />
                </Col>
            </Row>
        </div>
    );
}