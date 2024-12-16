import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Fiume_Dora_Baltea(props) {
    return (
        <>
            <Head title="Fiume Dora Baltea"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='fiume_dora_baltea' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Fiume Dora Baltea</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            La <strong>Dora Baltea</strong> è un importante <b>fiume</b> del <b>Nord Italia</b>, che scorre principalmente nella <Link href='/valle_d_aosta' 
                            className='text-decoration-none color_link'>Valle d'Aosta</Link> e nel <Link href='/piemonte' className='text-decoration-none color_link'>Piemonte</Link>. 
                            Nasce dal <Link href='/montagna/valle_d_aosta/monte_bianco' className='text-decoration-none color_link'>Monte Bianco</Link>, il massiccio montuoso più alto 
                            delle Alpi e dell'<b>Europa occidentale</b>. Il suo percorso inizia con il contributo di diversi <b>torrenti</b> glaciali, tra cui la <b>Dora di Ferret</b> e 
                            la <b>Dora di Veny</b>.
                        </p>
                        <p>
                            La Dora Baltea attraversa la <b>Valle d'Aosta</b> da <b>Ovest</b> a <b>Est</b>, passando per le città di <Link href='/destinazioni/valle_d_aosta/courmayeur' 
                            className='text-decoration-none color_link'>Courmayeur</Link>, <Link href='/destinazioni/valle_d_aosta/aosta' 
                            className='text-decoration-none color_link'>Aosta</Link> e <Link href='/destinazioni/piemonte/ivrea' className='text-decoration-none color_link'>Ivrea</Link>. 
                            Successivamente, entra nella <Link href='/territori/piemonte/pianura_padana' className='text-decoration-none color_link'>Pianura Padana</Link> e confluisce 
                            nel <Link href='/fiumi/fiume_po' className='text-decoration-none color_link'>Po</Link>, il fiume più lungo d'Italia, vicino a <b>Chivasso</b>.
                        </p>
                        <p>
                            La Dora Baltea è nota per la sua <b>portata</b> d'acqua variabile, influenzata dallo <b>scioglimento</b> delle <b>nevi</b> e dai <b>ghiacciai</b> alpini, oltre 
                            che dalle precipitazioni stagionali. Questo fiume ha giocato un ruolo cruciale nella <b>storia</b> e nello <b>sviluppo</b> della regione, fornendo risorse idriche 
                            essenziali per l'<b>agricoltura</b>, l'<b>industria</b> e la <b>produzione</b> di <b>energia idroelettrica</b>.
                        </p>
                        <p>
                            Le sue acque sono utilizzate per <b>irrigazione</b> e per la produzione di <b>energia elettrica</b> grazie a numerose <b>dighe</b> e <b>centrali idroelettriche</b> presenti 
                            lungo il suo corso. La <strong>Dora Baltea</strong> è anche un'importante destinazione per gli <b>sport acquatici</b>, come il <b>rafting</b> e il <b>kayak</b>, 
                            grazie alle sue rapide e alle sue acque tumultuose.
                        </p>
                        <p>
                            Nel corso dei secoli, il fiume ha influenzato profondamente la vita e la cultura delle popolazioni che vivono lungo le sue sponde, diventando un elemento centrale 
                            nella loro <b>identità</b> e nelle loro <b>tradizioni</b>.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28787.183733111426!2d8.015528047074618!3d45.19295524890959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4787d0e1af25d179%3A0x208077b9f40824c5!2sFiume%20Dora%20Baltea!5e1!3m2!1sit!2sit!4v1716573396002!5m2!1sit!2sit"
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
