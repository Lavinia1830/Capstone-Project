import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link, Head } from '@inertiajs/react';

export default function Valli_di_Lanzo(props) {
    return (
        <>
            <Head title="Canavese"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='valli_di_lanzo' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Valli di Lanzo</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Territori</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Benvenuti nelle <strong>Valli di Lanzo</strong>, in dialetto piemontese <i>Valade 'd Lans</i>: il cuore pulsante delle Alpi Graie. 
                            Siamo in Piemonte, circondati da alcune tra le maggiori vette delle regione, lungo la linea di confine tra Italia e Francia. 
                            Storica culla dell’alpinismo italiano, questa vallata comprende, in realtà, altre tre conche: la <b>Valle di Viù</b>, 
                            la <b>Val d'Ala</b> e <b>la Val Grande</b>.
                        </p>
                        <p>
                            Qui, alpinismo, arrampicata sportiva ed escursioni sono all’ordine del giorno e non correrete mai il rischio di annoiarvi. Dalla 
                            pesca e le passeggiate in cerca di erbe commestibili all’escursionismo estivo ed invernale, dai trekking dei grandi itinerari fino 
                            ai principali sport invernali, tra cui anche il curling. Se invece siete in cerca di adrenalina, potrete <b>arrampicarvi</b> lungo 
                            le vie che hanno fatto la storia dell’alpinismo torinese, lanciarvi in <b>parapendio</b> o seguire la corrente dei torrenti con 
                            i <b>kayak</b>.
                        </p>
                        <p>
                            Le <strong>Valli di Lanzo</strong> sono attrezzate per offrire sport, attività e divertimento accessibili e alla portata di tutti per 
                            vivere grandi emozioni e scoprire un territorio ricchissimo.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10156.452571545133!2d7.387214762292349!3d45.312236127836464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4788576568a7c835%3A0xb0ebacab762c8543!2sTurismo%20Valli%20di%20Lanzo!5e1!3m2!1sit!2sit!4v1716555051491!5m2!1sit!2sit"
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
