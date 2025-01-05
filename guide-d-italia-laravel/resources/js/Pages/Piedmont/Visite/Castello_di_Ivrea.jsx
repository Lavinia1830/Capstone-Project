import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link, Head } from '@inertiajs/react';

export default function Castello_di_Ivrea(props) {
    return (
        <>
            <Head title="Castello di Ivrea"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='castello_di_ivrea' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Castello di Ivrea</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Il Castello fu costruito nel <b>1358</b> per volere del <b>Conte Verde</b>, <b>Amedeo VI di Savoia</b>, quale simbolo del dominio sabaudo 
                            su <Link href='/destinazioni/piemonte/ivrea' className='text-decoration-none color_link'>Ivrea</Link> e <Link href='/territori/piemonte/canavese'
                            className='text-decoration-none color_link'>Canavese</Link>, soprattutto per scopi difensivi, sull’altura che domina la città e la strada 
                            per la Valle d’Aosta. I quattro imponenti torrioni circolari caratterizzano la struttura, che sorge vicino alla cattedrale e al palazzo vescovile. <br/>
                            Il complesso presenta una pianta trapezoidale con torri merlate alte 34 m, eccetto quella che nel 1676 venne parzialmente distrutta 
                            dall’esplosione, causata da un fulmine, delle munizioni custodite al suo interno.<br/>
                            Lungo il perimetro delle mura un ampio fossato garantiva una buona protezione e l’accesso era consentito solo dal ponte levatoio, mentre 
                            dall’alto le caditoie, ancora ben individuabili su alcuni lati, assicuravano la possibilità di gettare pietre e liquidi bollenti sugli 
                            assalitori.<br/>
                            Sulla facciata principale è visibile una bifora con incisi i <b>due stemmi Savoia</b>, così come sulle altre aperture sono presenti le 
                            inferriate a maglie legate di tipo savoiardo.<br/>
                            L’interno del Castello fu completamente sventrato e snaturato quando, dal 1700 al 1970, venne destinato a carcere politico e criminale.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980.6517296400752!2d7.8725304885922!3d45.46765193929517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478884b8985786e3%3A0x78c10f2ceaac6420!2sCastello%20Sabaudo%20di%20Ivrea!5e1!3m2!1sit!2sit!4v1716566472953!5m2!1sit!2sit"
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
