import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Form, Button } from 'react-bootstrap';

export function Email() {
    const form = useRef();

    const sendEmail = async (e) => {
        e.preventDefault();

        try {
            const result = await emailjs.sendForm(
                'service_ipxybpx',
                'template_sbacuij',
                form.current,
                '1VF9IoKNcMnYOl83K'
            );

            console.log('SUCCESS:', result.text);
            alert("Message sent!");
            e.target.reset();

        } catch (error) {
            console.error('FAILED TO SEND:', error);

            if (error.text) {
                alert(`Error: ${error.text}`);
            } else {
                alert("Check your Service ID, Template ID, and Public Key.");
            }
        }
    };

    return (
        <Form ref={form} onSubmit={sendEmail}>
            <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Enter your full name" required />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" name="title" placeholder="Enter the subject" required />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="name@example.com" required />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} name="message" required />
            </Form.Group>
            <input type="hidden" name="time" value={new Date().toLocaleString()} />
            <Button className='w-100 mb-3' type="submit">Send</Button>
        </Form>
    );
};