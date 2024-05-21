import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Cittadellarte(props) {
    return (
        <>
            <Head title="Cittadellarte - Fondazione Pistoletto"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='cittadellarte' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Cittadellarte - Fondazione Pistoletto</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            <strong>Cittadellarte – Fondazione Pistoletto</strong> è un luogo dove convergono artisti, scienziati, attivisti, imprenditori, studiosi, amministratori, coltivatori, designer, architetti, medici e 
                            rappresentanti del mondo istituzionale, <b>una città dell’arte</b>, dove l’arte è vissuta e insegnata come strumento di <b>trasformazione della società in senso responsabile</b>.
                        </p>
                        <p>
                            Il nome Cittadellarte incorpora tre significati: quello di <b>cittadella</b>, ovvero un’area in cui l’arte è protetta e ben difesa.
                        </p>
                        <p>
                            Quello di <b>città</b>, che corrisponde all’idea di apertura e interrelazione complessa con il mondo. E quello di civitas, <b>civiltà</b> allargata, mondiale, cosmopolita.
                        </p>
                        <p>
                            Cittadellarte, soprattutto, è un <b>laboratorio-scuola</b> dedicato allo studio, alla sperimentazione e allo sviluppo di <b>pratiche</b> che traducono in realtà il simbolo del Terzo Paradiso.
                        </p>
                        <p>
                            Questo percorso di <b>digitalizzazione</b> ci permetterà di raggiungere un pubblico più <b>vasto</b> e di <b>preservare</b> l’<b>eredità</b> di <b>FILA</b> per le generazioni future. Continueremo a impegnarci 
                            nella <b>ricerca</b>, nella <b>conservazione</b> e nella <b>promozione</b> della <b>cultura d’impresa</b>, garantendo che la <b>storia</b> di <b>FILA</b> rimanga <b>viva</b> e <b>ispiratrice</b> nel tempo.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d695.7798625181938!2d8.052430922464415!3d45.56549304214002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478620e655eaa0eb%3A0xaa50c2113cbc16e4!2sFondazione%20FILA%20Museum!5e1!3m2!1sit!2sit!4v1716281369734!5m2!1sit!2sit"
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
