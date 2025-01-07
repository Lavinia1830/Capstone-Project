import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';

export default function Ponte_di_Rialto(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='ponte_di_rialto' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Ponte di Rialto</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Il <strong>Ponte di Rialto</strong>, <b>simbolo della grandezza</b> di Venezia durante la Serenissima, è il <b>più antico e famoso tra i quattro ponti che attraversano il Canal Grande</b>.
                    </p>
                    <p>
                        Conosciuto in tutto il mondo per la sua bellezza, esempio mirabile di architettura rinascimentale, fu per anni il <b>fulcro dell'economia di</b> <Link href='/destinazioni/venezia' className='text-decoration-none color_link'>Venezia</Link>.
                    </p>
                    <p>
                        All’inizio del ‘500 cominciarono a parlare di sostituire il precedente ponte in legno, bruciato e caduto varie volte. Dopo aver scartato i progetti dei famosi architetti Michelangelo, Palladio e Sansovino, il progetto venne affidato ad <b>Antonio da Ponte</b>, 
                        uno dei più valenti ingegneri veneziani dell'epoca. La costruzione ebbe inizio nel 1588 e si concluse nel 1591, e fu l’unico collegamento tra le due sponde del Canal Grande fino al 1854. 
                    </p>
                    <p>
                        Lo caratterizzano un'unica <b>arcata di oltre 28 metri</b> riccamente decorata, <b>dodicimila pali</b> di legno per sostenere le fondamenta, e <b>24 botteghe</b>, distribuite sui due lati della struttura, dove inizialmente vi erano perlopiù negozi di orafi, gioiellieri ed artigiani.
                    </p>
                    <p>
                        D’obbligo è attraversare il ponte e fare una foto dall’alto dove si può godere di una magnifica vista sul Canal Grande.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1970.2594428169766!2d12.334145119264395!3d45.4379192671045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477eb1c7faa33a3b%3A0x732011a1298ecc89!2sPonte%20di%20Rialto!5e1!3m2!1sit!2sit!4v1712994213940!5m2!1sit!2sit"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map"
                        className='mx-auto mappa'
                    ></iframe>
                </div>
            </main>
            <Footer/>
        </AuthenticatedLayout>
    )
}
