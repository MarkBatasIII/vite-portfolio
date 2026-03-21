import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { db } from '../firebase/config'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { useState } from 'react'
import { ShowContact } from './ShowContact'


export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        setStatus('');

        try {
            await addDoc(collection(db, 'contacts'), {
                name: formData.name.trim(),
                email: formData.email.trim(),
                message: formData.message.trim(),
                createdAt: serverTimestamp(),
            });
            setStatus('Thank you. Your message has been sent.')
            setFormData({ name: '', email: '', message: '' })
        }
        catch (error) {
            console.error('Error saving message:', error);
            setStatus('Sorry something went wrong. Please try again.')
        }
    }

    return (
        <div className="vh-100">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your full name" name="name" value={formData.name} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" name="email" value={formData.email} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} name="message" value={formData.message} onChange={handleChange} />
                </Form.Group>
                <Button type="submit">Send</Button>
            </Form>
            {status && (
                <p style={{ marginTop: '1rem', color: status.includes('Thank') ? 'green' : 'red' }}>
                    {status}
                </p>
            )}
            <ShowContact />
        </div>
    );
}