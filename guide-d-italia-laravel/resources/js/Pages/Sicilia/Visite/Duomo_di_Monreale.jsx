import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Duomo_di_Monreale(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='duomo_di_monreale' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Duomo di Monreale</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className='margin mt-3'>
                    <h2 className="color-subtitle">I mosaici da record nel monumento di Guglielmo II</h2>
                    <p>
                        Affacciata sulla piccola Piazza Guglielmo II, nel borgo di <b>Monreale</b>, sorge il maestoso <b>Duomo</b>, indiscusso gioiello di arte arabo-normanno. Secondo la leggenda fu la Madonna, apparsa in sogno a Guglielmo II, a rivelare al sovrano che lì dove stava dormendo avrebbe trovato un tesoro e a chiedergli di usarlo per edificare 
                        una chiesa in suo onore.
                    </p>
                    <p>
                        La costruzione della Cattedrale di Monreale, composta anche dal <b>Convento</b> e dal <b>Palazzo Reale</b>, iniziò così nel 1174. Dal 2015 è stata inserita nella lista dei Patrimoni dell’Umanità UNESCO.
                    </p>
                    <p>
                        L’esterno si caratterizza per gli archi a sesto acuto sovrapposti, il gioco dei volumi, le austere torri in tufo che incorniciano il candido portico e la vivace decorazione delle absidi. Ma la vera meraviglia si trova all’interno: le tre navate sono interamente ricoperte da enormi <b>mosaici a fondo dorato</b>. Si tratta della più 
                        estesa decorazione musiva in Italia, seconda al mondo dopo quella della chiesa di Santa Sofia a Istanbul: oltre 6mila metri quadri di tessere in vetro e pietra. 
                    </p>
                    <p>
                        Vero fiore all’occhiello del monumento è l’imponente <b>Cristo Pantocratore</b> che decora l’abside centrale e sembra benedire i fedeli. Alzate lo sguardo e preparatevi a rimanere senza fiato. Inoltre se vi spostate lungo la navata da destra a sinistra e viceversa, mi sembrerà che vi stia seguendo con gli occhi. Si consiglia una 
                        visita all’intero complesso.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d657.0930778226406!2d13.291807666121763!3d38.08195016660865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1319ee3fa6ee3193%3A0x33ee5901f0be482!2sCattedrale%20di%20Monreale!5e1!3m2!1sit!2sit!4v1713523480263!5m2!1sit!2sit"
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
