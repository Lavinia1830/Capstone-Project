import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Chiesa_della_Maddalena(props) {
  return (
    <>
            <Head title="Chiesa della Maddalena"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='chiesa_della_maddalena' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Chiesa della Maddalena</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            La <strong>Chiesa della Madonna</strong> dell'Alba è un'antica chiesa situata nel cuore della <b>città</b>. Fondata 
                            nel <b>XII secolo</b>, rappresenta uno dei più importanti luoghi di culto della regione. La chiesa è famosa per il 
                            suo <b>affresco</b> del <b>XV secolo</b> raffigurante la <b>Vergine Maria</b> con il <b>Bambino Gesù</b>, opera 
                            del celebre artista <b>Giovanni Battista da San Marino</b>.
                        </p>
                        <p>
                            Ogni anno, migliaia di <b>pellegrini</b> visitano la chiesa per ammirare l'affresco e partecipare 
                            alle <b>celebrazioni </b>religiose, specialmente durante la <b>festa dell'Assunta</b>. La struttura della chiesa è 
                            un esempio magnifico di <b>architettura romanica</b>, con le sue alte <b>navate</b>, le <b>vetrate</b> colorate e 
                            il <b>campanile</b> che si staglia imponente sul paesaggio circostante.
                        </p>
                        <p>
                            Nel corso dei secoli, la chiesa ha subito diversi <b>restauri</b> per preservare la sua bellezza e il suo valore 
                            storico. Recentemente, un team di <b>restauratori</b> ha lavorato per riportare l'affresco al suo antico splendore, 
                            utilizzando tecniche avanzate di <b>conservazione</b>.
                        </p>
                        <p>
                            Oltre alla sua importanza religiosa, la Chiesa della Madonna dell'Alba è un importante <b>punto di 
                            riferimento</b> culturale e artistico, ospitando <b>concerti</b>, <b>mostre</b> e altri eventi che attraggono 
                            visitatori da tutto il mondo. La chiesa rappresenta un simbolo di <b>fede</b>, <b>storia</b> e <b>arte</b> che 
                            continua a ispirare generazioni di credenti e appassionati di <b>cultura</b>.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d763.0104498844053!2d8.033786259184481!3d44.698776665769905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d2b3681ef68891%3A0xb115b028ffcce189!2sChiesa%20della%20Maddalena!5e1!3m2!1sit!2sit!4v1720622986563!5m2!1sit!2sit"
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
