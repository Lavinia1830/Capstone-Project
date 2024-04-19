import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';

export default function Palazzo_Reale(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='palazzo_reale_napoli' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Palazzo Reale</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        In piazza del Plebiscito nel cuore del centro storico di <Link href='/destinazioni/campania/napoli' className='text-decoration-none color_link'>Napoli</Link> risiede il Palazzo Reale. L’intero complesso che trova le sue origini nel 1600, è formato da diversi spazi noti per la loro 
                        suggestiva bellezza. La visita inizia dall’appartamento storico in cui è possibile ammirare tutta la maestosità della Cappella Reale, del Teatro di Corte, del salone d’Ercole, dell’appartamento di Etichetta e dello Scalone d’Onore. Arazzi, dipinti, sculture in marmo e affreschi, 
                        fanno da cornice a questa dimora antica e ne raccontano storia e vicissitudini. I giardini e i cortili di Palazzo Reale sono ciò che rende questo complesso ancora più affascinante, Conservano diverse specie botaniche e sono l’ideale per passeggiare. A renderli unici è il Giardino 
                        Pensile che gode di un'incantevole vista sul Golfo di Napoli e sul <Link href='/visite/campania/napoli/vesuvio' className='text-decoration-none color_link'>Vesuvio</Link>. All’interno di questo polo di cultura vengono ospitati oggi la Biblioteca Nazionale di Napoli, le due 
                        Soprintendenze per il Comune e per l’Area Metropolitana di Napoli, il museo Memus del Teatro di San Carlo e la Fondazione Premio Napoli.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2526.341013941349!2d14.248583137433346!3d40.836941274750075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b08525b44e79f%3A0x3f8bbbcb0c24edc9!2sPalazzo%20Reale%20di%20Napoli!5e1!3m2!1sit!2sit!4v1713355638209!5m2!1sit!2sit"
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
