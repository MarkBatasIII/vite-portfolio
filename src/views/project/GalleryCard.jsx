import { Card, Image } from 'react-bootstrap'

export function GalleryCard({ imgSrc, index, onClick }) {
    return (
        <Card
            className="img-card"
            onClick={() => onClick(imgSrc)}
            style={{ cursor: 'pointer' }}
        >
            <Card.Body>
                <Image
                    className='img-gallery'
                    src={imgSrc}
                    alt={`Hiring Screen ${index + 1}`}
                    fluid
                />
            </Card.Body>
        </Card>
    );
}