import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link, Head } from '@inertiajs/react';

export default function Via_Francigena(props) {
    return (
        <>
            <Head title="Via Francigena"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='via_francigena' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Via Francigena</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            La <strong>Via Francigena</strong>, che ricalca la <b>Strada Consolare Romana delle Gallie</b> risalente al I° sec. A.C., collegava Roma con il nord Europa favorendo gli scambi di popolazioni e di merci, ma anche il passaggio delle truppe militari. Assieme al Cammino di 
                            Santiago di Compostela è uno dei cammini di pellegrinaggio più importanti in Europa. L’originale percorso è stato effettuato nel 990 da Sigerico, vescovo di Canterbury, che doveva arrivare a <Link href='/destinazioni/lazio/roma' className='text-decoration-none color_link'>Roma</Link> per
                            ricevere dal Papa (Giovanni XV) il “Pallio”, la stola d’agnello che lo nominava “ufficialmente” arcivescovo di Canterbury; da quel momento ha preso il nome di Via Francigena o di Sigerico ed è diventato l’itinerario dei pellegrini diretti a San Pietro e, da qui, a Brindisi (o a Otranto) 
                            per imbarcarsi verso la città Santa.<br/>
                            L’intero percorso è lungo circa 1800 km. Noi faremo il tratto dal Colle del Gran San Bernardo a Pont-Saint-Martin. Il percorso di circa 90 km non presenta difficoltà morfologiche. Con noi avremo Enea Fiorentini, socio e amico della GM sezione di Roma, trasferito da diversi 
                            anni ad Aosta. Grande alpinista, grande camminatore e conoscitore della Francigena, infatti ha ricostruito e pubblicato una guida del percorso. A lui dobbiamo anche il faticoso lavoro di individuazione e prenotazione degli alloggi e dei ristoranti per questa gita. Lungo il 
                            cammino incontreremo piccoli paesi, centri storici come Augusta Pretoria (Aosta) o Saint-Rhemy-en-Bosses, siti di interesse archeologico risalenti ad epoche romaniche e medioevali, passeremo vicino a castelli famosi (Quart, Nus, Châtillon) e a chiese ricche di storia. In 
                            diversi punti cammineremo sui solchi della originaria Strada Romana delle Gallie del I° secolo.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1390.6513965691295!2d7.760040712523971!3d45.60214981800362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47889662f190480b%3A0x842b3bfcaae2e952!2sStrada%20romana%20delle%20Gallie!5e1!3m2!1sit!2sit!4v1713781881979!5m2!1sit!2sit"
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
