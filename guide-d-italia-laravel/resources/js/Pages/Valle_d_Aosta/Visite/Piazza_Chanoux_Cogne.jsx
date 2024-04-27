import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/inertia-react';

export default function Piazza_Chanoux_Cogne(props) {
    return (
        <>
            <Head title="Piazza Chanoux Cogne"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='piazza_chanoux_cogne' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Piazza Chanoux</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Concludi l’itinerario tra le cose da vedere a Cogne con <strong>piazza Chanoux</strong>. Questo è <b>un bello spazio che si sviluppa su due livelli</b>, collegati da una breve scalinata. <b>Qui trovi il municipio cittadino, uno spazio espositivo dedicato alle miniere di Cogne</b> e 
                            bar e ristorantini dove fermarti a rigenerarti con qualche specialità tipica.
                        </p>
                        <p>
                            La piazza Chanoux rubò anche la scena alla <i>Grandze Place Commune</i>. Dopo la costruzione del municipio in questo luogo, <b>gli addetti comunali presero a divulgare qui i nuovi comunicati municipali alla folla</b>. Il messo saliva sui gradini del municipio e continuò questa pratica fino agli anni successivi 
                            al secondo dopoguerra.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d631.453109879876!2d7.355899780175418!3d45.60836100587792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4788e172e342f729%3A0xccb1bbbcdb3af5e0!2sVia%20Bourgeois%2C%2050%2C%2011012%20Cogne%20AO!5e1!3m2!1sit!2sit!4v1714215552435!5m2!1sit!2sit"
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
        </>
    )
}
