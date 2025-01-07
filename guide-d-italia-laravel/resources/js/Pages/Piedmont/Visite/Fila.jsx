import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Fila(props) {
    return (
        <>
            <Head title="Fondazione FILA Museum"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='fila' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Fondazione FILA Museum</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            La <strong>Fondazione FILA Museum</strong> nasce nel <b>2010</b> per volontà di <b>Gene Yoon</b>, Presidente di <b>FILA</b>, con lo scopo principale di <b>tutelare</b> e <b>far conoscere</b> il <b>valore</b> e 
                            la <b>storia</b> del marchio biellese, dalle <b>origini locali</b> fino alla sua <b>notorietà internazionale</b> nell’ambito dell’<b>abbigliamento</b> e delle <b>calzature sportive</b>. Siamo una realtà 
                            impegnata nella <b>promozione</b> della <b>cultura d’impresa</b>, con un’attenzione particolare alla <b>moda</b> e alla <b>storia industriale</b>. Dal <b>2014</b> facciamo parte di <b>Museimpresa</b>, 
                            l’<b>Associazione Italiana Archivi e Musei d’Impresa</b>, con la quale condividiamo i <b>principi</b> e i <b>valori</b> della <b>cultura d’impresa</b>.
                        </p>
                        <p>
                            La nostra <b>Mission</b> consiste nel <b>custodire</b> e dare <b>continuità</b> ai <b>valori aziendali</b> che hanno contribuito alla <b>nascita</b> e alla <b>crescita</b> del <b>Brand FILA</b>. La <b>cultura 
                            d’impresa</b> è una parte fondamentale del nostro <b>DNA</b>, poiché crediamo che la comprensione delle <b>radici</b> e dei <b>valori</b> su cui si basa un’azienda sia essenziale per il suo <b>sviluppo futuro</b>. 
                            Attraverso la nostra attività, vogliamo <b>preservare</b> e <b>promuovere</b> la <b>cultura d’impresa</b> di <b>FILA</b>, consentendo al pubblico di immergersi nell’affascinante mondo di un marchio che ha 
                            lasciato un’<b>impronta significativa</b> nell’<b>industria sportiva</b> e della <b>moda</b>.
                        </p>
                        <p>
                            La forza della <b>Fondazione</b> risiede nella sua <b>duplice funzione</b> di <b>archivio</b> e <b>museo</b>. Siamo consapevoli dell’importanza di <b>conservare</b> accuratamente la <b>storia</b> di <b>FILA</b>, 
                            ma siamo anche attenti a garantire che questa storia sia <b>accessibile</b> a un pubblico ampio e diversificato. In linea con l’<b>evoluzione tecnologica</b>, stiamo intraprendendo un cammino di <b>digitalizzazione </b> 
                            per rendere i nostri <b>archivi</b> e le nostre <b>collezioni</b> disponibili attraverso modalità innovative.
                        </p>
                        <p>
                            Sfruttando <b>tecnologie all’avanguardia</b>, stiamo creando <b>esperienze coinvolgenti</b> che offrono al pubblico la possibilità di <b>esplorare</b> i nostri contenuti in modalità del tutto nuove. Grazie 
                            all’<b>integrazione di bot conversazionali</b>, rendiamo l’esperienza interattiva, permettendo al pubblico di immergersi in modo dinamico nella <b>storia</b> e nel <b>patrimonio</b> di <b>FILA</b> attraverso 
                            una <b>conversazione intelligente</b> e <b>coinvolgente</b>.
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
