import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Piazza_Galimberti(props) {
    return (
        <>
            <Head title="Piazza Galimberti"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='piazza_galimberti' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Piazza Galimberti</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            <strong>Piazza Galimberti</strong> è una delle piazze principali di <a href='https://www.visitcuneese.it/dettaglio-ufficio-turistico/-/d/ufficio-turistico-di-cuneo-iat-' 
                            className='text-decoration-none color_link'>Cuneo</a>, situata nel cuore della città e dedicata a <b>Duccio Galimberti</b>, un 
                            eroe della <b>Resistenza Italiana</b> durante la <b>Seconda Guerra Mondiale</b>. La piazza fu progettata e costruita nel <b>XIX 
                            secolo</b>, seguendo un disegno urbanistico che prevedeva ampi spazi e una struttura armoniosa.
                        </p>
                        <p>
                            Circondata da eleganti edifici porticati, la piazza offre una varietà di negozi, caffè e ristoranti che ne fanno un punto di ritrovo 
                            molto frequentato dai cittadini e dai turisti. Gli edifici, con le loro facciate uniformi e le colonne, creano un senso di continuità 
                            e ordine architettonico che è caratteristico delle piazze italiane di quel periodo.
                        </p>
                        <p>
                            Al centro di <strong>Piazza Galimberti</strong> si erge la statua di <b>Duccio Galimberti</b>, eretta nel <b>1947</b> per commemorare 
                            il suo impegno e il suo sacrificio nella lotta contro il <b>fascismo</b>. Questa statua non solo onora la memoria di Galimberti, ma 
                            funge anche da simbolo del coraggio e della resistenza della città di <b>Cuneo</b> durante i tempi difficili della guerra.
                        </p>
                        <p>
                            La piazza è anche il cuore pulsante della vita cittadina e ospita regolarmente una varietà di eventi pubblici, tra cui mercati, 
                            concerti, e manifestazioni culturali. Ogni martedì, <strong>Piazza Galimberti</strong> diventa il palcoscenico di un grande mercato 
                            all'aperto, dove i venditori locali offrono prodotti freschi, artigianato e altre merci, attirando visitatori da tutta la regione.
                        </p>
                        <p>
                            Durante l'anno, la piazza si anima con eventi speciali come fiere, festival e celebrazioni. Questi eventi non solo promuovono la cultura 
                            e le tradizioni locali, ma rafforzano anche il senso di comunità tra gli abitanti di <b>Cuneo</b>. <strong>Piazza Galimberti</strong> è 
                            quindi non solo un importante centro storico e culturale, ma anche un simbolo della vitalità e dell'unità della città.
                        </p>
                        <p>
                            In sintesi, <strong>Piazza Galimberti</strong> rappresenta una parte fondamentale della storia e della vita quotidiana di <b>Cuneo</b>, 
                            incarnando sia il passato eroico della città che la sua continua evoluzione come centro di incontro e di scambio culturale.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2580.1091856036815!2d7.545386238870236!3d44.38979260437526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cd6938bf3ed499%3A0x2972804996c14a4c!2sPiazza%20Galimberti!5e1!3m2!1sit!2sit!4v1716988670365!5m2!1sit!2sit"
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
