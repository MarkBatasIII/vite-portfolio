import { useRef, useState } from 'react'

import { Form, Button } from 'react-bootstrap'

import { EmailModal } from './EmailModal';

import emailjs from '@emailjs/browser'

export function Email() {

    const form = useRef();

    const [isSending, setIsSending] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', body: '', variant: '' });

    const sendEmail = async (e) => {
        e.preventDefault();
        setIsSending(true);

        try {
            await emailjs.sendForm(
                'service_ipxybpx',
                'template_sbacuij',
                form.current,
                '1VF9IoKNcMnYOl83K'
            );

            setModalContent({
                title: 'Success!',
                body: 'Your message has been sent successfully.',
                variant: 'text-success'
            });
            form.current.reset();
        } catch (error) {
            setModalContent({
                title: 'Submission Error',
                body: error.text || "Check your configuration.",
                variant: 'text-danger'
            });
        } finally {
            setIsSending(false);
            setShowModal(true);
        }
    };

    return (
        <div className='mt-4'>
            <h2>Send an email</h2>
            <Form ref={form} onSubmit={sendEmail}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        required autoComplete="name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formSubject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        placeholder="Enter the subject"
                        required
                        autoComplete="off" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="name@example.com"
                        required
                        autoComplete="email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="message"
                        required
                        autoComplete="off" />
                </Form.Group>

                <input type="hidden" name="time" value={new Date().toLocaleString()} />

                <Button
                    className='w-100 mb-3'
                    type="submit"
                    disabled={isSending}
                >
                    {isSending ? 'Sending...' : 'Send'}
                </Button>
            </Form>

            <EmailModal
                show={showModal}
                onHide={() => setShowModal(false)}
                content={modalContent}
            />
        </div>
    );
};