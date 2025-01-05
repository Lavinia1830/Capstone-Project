import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Castello_di_Serralunga_d_Alba(props) {
    return (
        <>
            <Head title="Castello di Serralunga d'Alba"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='castello_di_serralunga_d_alba' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Castello di Serralunga d'Alba</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Il <strong>Castello di Serralunga d’Alba</strong> è uno degli esempi più significativi di architettura militare e residenziale 
                            del <b>Trecento</b>. Situato nel cuore delle <Link href='/territori/piemonte/cuneo/langhe' 
                            className='text-decoration-none color_link'>Langhe</Link>, in <Link href='/piemonte' 
                            className='text-decoration-none color_link'>Piemonte</Link>, il castello si erge maestoso su una collina, dominando 
                            il paesaggio circostante.
                        </p>
                        <p>
                            Costruito intorno al <b>1340</b> per volontà della famiglia <b>Falletti</b>, il castello aveva una funzione principalmente 
                            difensiva, ma era anche una residenza signorile. La sua struttura è caratterizzata da una torre centrale alta e slanciata, 
                            affiancata da due torri minori. Questo particolare design, insolito per l'epoca, gli conferisce un aspetto unico e 
                            inconfondibile.
                        </p>
                        <p>
                            Durante il periodo <b>medievale</b>, il castello giocò un ruolo fondamentale nella difesa del territorio, grazie alla sua 
                            posizione strategica e alle sue fortificazioni robuste. Oltre alla funzione militare, il castello serviva anche come centro 
                            amministrativo e giuridico per i territori circostanti, ospitando frequentemente le riunioni e le assemblee dei nobili locali.
                        </p>
                        <p>
                            Nel corso dei secoli, il castello subì diverse modifiche e restauri, ma riuscì a conservare intatta gran parte della sua 
                            struttura originaria. Tra il <b>XV</b> e il <b>XVI secolo</b>, furono aggiunti elementi decorativi e architettonici che 
                            riflettono l'influenza del Rinascimento.
                        </p>
                        <p>
                            Oggi, il <strong>Castello di Serralunga d’Alba</strong> è una delle principali attrazioni turistiche della regione, aperto al 
                            pubblico e sede di eventi culturali e manifestazioni storiche. La sua visita offre un affascinante viaggio nel tempo, 
                            permettendo di immergersi nella storia e nelle tradizioni di un'epoca lontana.
                        </p>
                        <p>
                            La combinazione di architettura militare e residenziale, insieme alla sua posizione panoramica, rende il castello un luogo di 
                            grande interesse non solo storico, ma anche paesaggistico.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d642.587352236182!2d7.999778862288424!3d44.61075692667818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d2b1aa4fd5ace9%3A0xd89ecb3d04ff9561!2sCastello%20di%20Serralunga%20d&#39;Alba!5e1!3m2!1sit!2sit!4v1722952017790!5m2!1sit!2sit"
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
