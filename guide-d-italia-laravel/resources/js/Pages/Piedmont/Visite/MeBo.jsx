import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function MeBo(props) {
    return (
        <>
            <Head title="MeBo - Menabrea Botalla Museum"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='mebo' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>MeBo - Menabrea Botalla Museum</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            <strong>MeBo – Menabrea Botalla Museum</strong>, è il frutto della <b>collaborazione</b> fra due <b>storiche aziende</b> biellesi: <b>Menabrea</b> e <b>Botalla</b>, che hanno messo in piedi uno 
                            spazio espositivo per <b>raccontare</b> la loro <b>storia</b> e la loro <b>produzione</b> di <b>birra</b> e <b>formaggio</b>. La prima, Casa Menabrea - Museo della Birra, offre il racconto degli 
                            oltre 170 anni di storia del birrificio attraverso manifesti pubblicitari, premi, libri commerciali e fotografie. Il processo produttivo è invece raccontato con le materie prime utilizzate, i 
                            macchinari del 1846 restaurati, bottiglie e boccali. Casa Botalla - Museo del Formaggio offre un’immersione nella tradizione casearia delle Alpi biellesi, si illustrano le caratteristiche degli 
                            alpeggi e delle razze animali del territorio, gli attrezzi d’epoca e i procedimenti moderni delle fasi del processo produttivo.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d492.4835262483313!2d8.052132761181547!3d45.57094255914617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478620e56ff4cb03%3A0xa145c12dbc3c66b8!2sMeBo%20-%20Menabrea%20Botalla%20Museum!5e1!3m2!1sit!2sit!4v1716279210811!5m2!1sit!2sit"
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
