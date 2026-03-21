import { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase/config';
import Table from 'react-bootstrap/Table';

export function ShowContact() {
    const [messages, setMessages] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMessage = async () => {
            try {
                const q = query(collection(db, 'contacts'), orderBy('createdAt', 'desc'));

                const querySnapshot = await getDocs(q);

                const messagesList = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                setMessages(messagesList);
            } catch (error) {
                console.error("Error fetching messages:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchMessage();
    }, []);

    if (loading) return <p>Loading Messages...</p>

    return (
        <div className='pt-5'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th>Created At</th>
                    </tr>
                </thead>
                <tbody>
                    {messages.map(msg => (
                        <tr key={msg.id}>
                            <td>{msg.name}</td>
                            <td>{msg.email}</td>
                            <td>{msg.message}</td>
                            <td>{new Date(msg.createdAt.toDate()).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}