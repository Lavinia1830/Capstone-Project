import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/inertia-react';

export default function Skyway_Monte_Bianco() {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='funivia_skyway_monte_bianco' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Funivia Skyway Monte Bianco</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Funivia Skyway: il Monte Bianco da vicino</h2>
                    <p>
                        Capolavoro di ingegneria inaugurato nel 2015 che si integra perfettamente nell’ambiente naturale, <Link href='/montagna/valle_d_aosta/funivia_skyway_monte_bianco' className='text-decoration-none color_link'>Skyway Monte Bianco</Link> non è soltanto una funivia che conduce 
                        fino a 3.466 metri di altezza nel cuore delle Alpi, è anche uno scrigno di esperienze indimenticabili.
                    </p>
                    <p>
                        Il viaggio comincia a quota 1300 a <Link href='/destinazioni/valle_d_aosta/courmayeur' className='text-decoration-none color_link'>Courmayeur</Link> <b>The Valley</b> dove si trovano parcheggio, deposito bagagli, biglietterie e un bar. A 2.173 metri di altezza la montagna 
                        si svela già in tutta la sua magnificenza. La stazione <b>Pavillon The Mountain</b> ha una grande terrazza con vista a 180 gradi sul Monte Bianco e sulla Val Veny, bar, ristorante, boutique e sala cinema. Qui si trovano anche la <b>Cave Mont Blanc</b>, dove si vinifica 
                        ad alta quota, e l’<b>Hangar 2.173</b>, vecchia sede della stazione, che racconta la storia delle funivie. D’estate fiorisce il <b>Giardino Botanico Saussurea</b> con 900 specie di piante e fiori da tutto il mondo. In inverno da qui si parte per una passeggiata sulla 
                        neve con le ciaspole, mentre il parco giochi <b>Skyway for Kids</b> è dedicato ai più piccoli.
                    </p>
                    <p>
                        Giunti all’ultima stazione, <b>Punta Helbronner The Sky</b>, vi sembrerà di toccare il cielo con un dito. La terrazza panoramica offre una vista a 360 gradi. Per la pausa pranzo in alta quota c’è un bistrot, mentre per un’esperienza adrenalinica lo <b>Sky Vertigo</b> dà 
                        la sensazione di passeggiare nel vuoto.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d951.6966277556718!2d6.95540656023989!3d45.816031865255326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478947942337bb45%3A0x35ec8d80a9ee84fe!2sSkyway%20Monte%20Bianco!5e1!3m2!1sit!2sit!4v1713879726241!5m2!1sit!2sit"
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
