import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Form, Button, Modal } from 'react-bootstrap';

export function Email() {
    const form = useRef();

    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', body: '', variant: '' });

    const handleClose = () => setShowModal(false);

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

            setModalContent({
                title: 'Success!',
                body: 'Your message has been sent successfully.',
                variant: 'text-success'
            });
            setShowModal(true);

            e.target.reset();

        } catch (error) {
            console.error('FAILED TO SEND:', error);

            setModalContent({
                title: 'Submission Error',
                body: error.text || "Check your Service ID, Template ID, and Public Key.",
                variant: 'text-danger'
            });
            setShowModal(true);
        }
    };

    return (
        <div className='mt-4'>
            <h2>Send an email</h2>
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
            <Modal show={showModal} onHide={handleClose} centered>
                <Modal.Header closeButton closeVariant="white" className="bg-primary text-white">
                    <Modal.Title className={modalContent.variant}>
                        {modalContent.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {modalContent.body}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};