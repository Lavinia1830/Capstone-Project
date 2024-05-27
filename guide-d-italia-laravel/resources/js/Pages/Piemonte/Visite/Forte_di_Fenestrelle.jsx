import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link, Head } from '@inertiajs/react';

export default function Forte_di_Fenestrelle(props) {
    return (
        <>
            <Head title="Forte di Fenestrelle"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='fonte_di_fenestrelle' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Forte di Fenestrelle</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Sulla costa del monte Orsiera, a pochi metri dall’abitato di <b>Fenestrelle</b> e al centro della val Chisone, sorge quello che è considerato come il <b>più 
                            possente e sviluppato sistema difensivo dell’arco alpino</b>.
                        </p>
                        <p>
                            L’idea di presidiare il confine con una struttura di tali dimensioni si rese necessaria ai re piemontesi della dinastia Savoia a partire dal 1728, in un 
                            periodo in cui tumulti, rivoluzioni e guerre civili erano all’ordine del giorno in Francia; l’ultima aggiunta e modifica architettonica avvenne però con 
                            oltre un secolo di ritardo, nel 1850.
                        </p>
                        <p>
                            Il <strong>forte di Fenestrelle</strong> si snoda, con le sue muraglie e i suoi diversi corpi di fabbrica, lungo circa tre chilometri di estensione. Tre sono 
                            gli edifici principali, dai nomi altisonanti e minacciosi: <b>S. Carlo</b>, <b>Tre Denti</b> e <b>Delle Valli</b>, posti a diverse altezze sul crinale della 
                            montagna. Sono circa 600 i metri di dislivello che separano l’estremità più bassa da quella più alta del forte, unite tra loro da percorsi esterni e 
                            sotterranei, che salgono fino ai 1.783 metri di quota.
                        </p>
                        <p>
                            Visitare la più grande struttura di storia militare delle Alpi, simbolo dell’identità piemontese, lascerà un ricordo indelebile.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1804.3270005764086!2d7.058027636444905!3d45.03052001438655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4789c9726438faad%3A0xf5614f004d531702!2sForte%20di%20Fenestrelle!5e1!3m2!1sit!2sit!4v1716818641224!5m2!1sit!2sit"
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
