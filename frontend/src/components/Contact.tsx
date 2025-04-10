import React from 'react';
import './Contact.scss'
import { getLocalizedElement, languageState } from '@/app/locale';
import Image from 'next/image';
import img_googlemaps from './../../public/googlemaps.png';
import img_applemaps from './../../public/applemaps.png';



const Contact: React.FC = () => {
    const [language, _] = languageState.useState();
    return (
        <div className="contact-us-container">
            <h2 className='contact-title'>{getLocalizedElement("contact_title", language)}</h2>
            <p>{getLocalizedElement("contact_contactUs", language)}</p>
            <h2 className='contact-sub'>{getLocalizedElement("contact_addressHeader", language)}</h2>
            <p>Tecnológico de Monterrey, Campus Guadalajara</p>
            <p>Av. Gral. Ramón Corona 2514<br />Colonia Nuevo México, 45201<br />Zapopan, Jal., México</p>
            <div className="maps-links">
                <a href="https://maps.app.goo.gl/vaAGnbzTkCvCTm2eA" target="_blank" rel="noopener noreferrer">
                    <Image src={img_googlemaps} alt="Google Maps" />
                </a>
                <a href="https://maps.apple.com/?ll=20.733693,-103.456489&q=Habitat%20del%20Futuro%20de%20los%20Negocios&t=m" target="_blank" rel="noopener noreferrer">
                    <Image src={img_applemaps} alt="Apple Maps" />
                </a>
            </div>

        </div>
    );
};

export default Contact;