import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Abbazia_di_Novalesa(props) {
    return (
        <>
            <Head title="Abbazia di Novalesa"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='abbazia_di_novalesa' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Abbazia di Novalesa</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            L'<strong>Abbazia di Novalesa</strong> si trova in <b>Val di Susa</b>, nel <Link href='/piemonte' className='text-decoration-none color_link'>Piemonte</Link>. 
                            Fu fondata nel <b>726</b> dal <b>conte Abbone</b> in un periodo di intensi scambi culturali e religiosi. Durante l'<b>Alto Medioevo</b>, l'abbazia divenne un 
                            importante <b>centro monastico</b> e <b>culturale</b>, grazie alla presenza di <b>monaci</b> che si dedicavano alla <b>preghiera</b>, allo studio e 
                            alla <b>trascrizione</b> di testi antichi.
                        </p>
                        <p>
                            Nel <b>IX secolo</b>, l'abbazia subì l'attacco dei <b>Saraceni</b> e i monaci furono costretti a fuggire, portando con sé le preziose <b>reliquie</b> e 
                            i <b>manoscritti</b>. Dopo un periodo di decadenza, l'abbazia conobbe una nuova fioritura grazie all'opera dei <b>monaci benedettini</b> che la ricostruirono 
                            e la riportarono al suo antico splendore.
                        </p>
                        <p>
                            Durante il <b>Basso Medioevo</b>, l'Abbazia di Novalesa continuò a essere un importante centro di <b>spiritualità</b> e <b>cultura</b>. I monaci si dedicarono 
                            alla coltivazione dei terreni circostanti e alla produzione di beni agricoli, contribuendo così allo sviluppo economico della regione.
                        </p>
                        <p>
                            Nel <b>XVIII secolo</b>, l'abbazia attraversò un periodo di declino, culminato con la sua soppressione nel <b>1798</b> durante le campagne napoleoniche. Nel 
                            corso del <b>XX secolo</b>, l'abbazia fu gradualmente restaurata e riportata alla vita monastica.
                        </p>
                        <p>
                            Oggi, l'Abbazia di Novalesa è un <b>importante sito storico</b> e culturale, meta di <b>pellegrinaggi</b> e visitata da numerosi <b>turisti</b>. I monaci 
                            continuano a vivere nell'abbazia, mantenendo viva la tradizione di <b>ospitalità</b> e <b>preghiera</b> che ha caratterizzato la loro storia per più di 
                            mille anni.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1906.6411855791523!2d7.006844367206288!3d45.17933063207658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4789ba733eb308bf%3A0xe48d824a429d43cb!2sAbbazia%20Benedettina%20Della%20Novalesa!5e1!3m2!1sit!2sit!4v1716900081890!5m2!1sit!2sit"
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
