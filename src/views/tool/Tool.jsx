import css from '../../images/css.png'
import html from '../../images/html.svg'

import './Tool.css';

export function Tool() {

    const apiToken = import.meta.env.VITE_LOGODEV_API_KEY;

    const brands = [
        { name: 'Figma', domain: 'figma.com' },
        { name: 'Canva', domain: 'canva.com' },
        { name: 'Adobe', domain: 'adobe.com' },
        { name: 'VSCode', domain: 'vscode.dev' },
        { name: 'HTML', localImage: html },
        { name: 'CSS', localImage: css },
        { name: 'Firebase', domain: 'firebase.blog' },
        { name: 'Vite', domain: 'vitejs.dev' },
        { name: 'React JS', domain: 'react.dev' },
        { name: 'JavaScript', domain: 'javascripttutorial.net' },
        { name: 'Bootstrap', domain: 'getbootstrap.com' },
        { name: 'FontAwesome', domain: 'fontawesome.com' },
        { name: 'jQuery', domain: 'jquery.com' },
        { name: 'PHP', domain: 'php.net' },
        { name: 'CodeIgniter', domain: 'codeigniter.com' },
        { name: 'Python', domain: 'python.org' },
        { name: 'Django', domain: 'djangoproject.com' },
        { name: 'GitHub', domain: 'github.com' },
        { name: 'Office 365', domain: 'office.com' },
        { name: 'Google Suite', domain: 'google.com' },
        { name: 'Email JS', domain: 'emailjs.com' },
        { name: 'Logo.dev', domain: 'logo.dev' }
    ];

    // Doubling the array for the infinite scroll effect
    const displayBrands = [...brands, ...brands];

    return (
        <div className="marquee-container">
            <div className="marquee-content">
                {displayBrands.map((brand, index) => {

                    const imageSrc = brand.localImage
                        ? brand.localImage
                        : `https://img.logo.dev/${brand.domain}?token=${apiToken}`;

                    return (
                        <div className="marquee-item" key={index}>
                            <img
                                src={imageSrc}
                                alt={`${brand.name} logo`}
                                onError={(e) => {
                                    e.target.src = `https://ui-avatars.com/api/?name=${brand.name}`;
                                }}
                            />
                            <span className="brand-label">{brand.name}</span>
                        </div>
                    );
                })}
            </div>

            <div className="attribution">
                Logos provided by <a href="https://logo.dev" target="_blank" rel="noreferrer">Logo.dev</a>
            </div>
        </div>
    );
}