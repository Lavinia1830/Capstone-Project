import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import {Card, CardBody, CardTitle} from 'react-bootstrap';
import { Head, Link } from '@inertiajs/react';

export default function Palazzo_Madama(props) {

  return (
    <>
        <Head title="Palazzo Madama"/>
        <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        >
            <main>
                <div className='palazzo_madama' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Palazzo Madama</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Quello che è oggi <strong>Palazzo Madama</strong> in <b>Piazza Castello</b>, praticamente di fronte a <b>Palazzo Reale</b>, era stato in origine una porta di città, per trasformarsi nel medioevo in fortezza e poi nel castello dei principi d’Acaja. 
                        Per parte loro, le collezioni civiche di arte antica si erano invece formate separatamente altrove a partire dal 1863, per raccogliere e tramandare il patrimonio storico e artistico di Torino e del Piemonte. Le due sorti, la millenaria dell’edificio 
                        e la secolare delle collezioni, si sono congiunte nel 1934. Nel frattempo l’edificio era stato, fra l’altro, sede del primo Senato dello Stato unitario italiano.
                    </p>
                    <p>
                        Il museo attuale, che si sviluppa in diversi percorsi dedicati alla storia, all’architettura e alle collezioni, conta oltre settantamila opere di pittura, scultura e arti decorative dal periodo bizantino all’Ottocento. Il percorso dell’arte europea 
                        dall’alto medioevo fino al barocco è illustrato anche da codici miniati, maioliche e porcellane, ori e argenti, arredi e tessuti. Fra le opere più celebri si possono citare un <i>Ritratto d’uomo</i> di Antonello da Messina, il codice delle <i>Très 
                        belles Heures de Notre Dame</i> di Jean de Berry, e una serie di oggetti artistici provenienti dal Gabinetto delle meraviglie di Carlo Emanuele I di Savoia.
                    </p>
                    <p>
                        La Sala Senato, la Corte Medievale e la sala Atelier ospitano mostre temporanee. Il museo fa corpo con la GAM-Galleria Civica d’Arte Moderna e Contemporanea e con il <b>Museo d’Arte Orientale</b> nel dipendere dalla Fondazione Torino Musei.
                    </p>
                </div>
                <div className='row d-flex justify-content-center mx-0 mb-4'>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Palazzo_Madama d-flex'>
                        <CardTitle>
                            <h3 className='text-light text-center mt-3'>Medioevo</h3>
                        </CardTitle>
                        <CardBody className='align-content-center'>
                            <p className='fst-italic text-light'>Piano -1</p>
                            <p className='text-light'>
                                Percorso cronologico sullo sviluppo stilistico e iconografico della scultura piemontese in pietra del Dodicesimo al Tredicesimo secoli. All'esterno è possibile visitare il Giardino medievale, un'oasi verde nel cuore della città.
                            </p>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Palazzo_Madama d-flex'>
                        <CardTitle>
                            <h3 className='text-light text-center mt-3'>Gotico e Rinascimento</h3>
                        </CardTitle>
                        <CardBody className='align-content-center'>
                            <p className='fst-italic text-light'>Piano 0</p>
                            <p className='text-light'>
                                Sculture, dipinti e oggetti preziosi realizzati tra Tredicesimo e Sedicesimo secolo. Quattro secoli di cultura figurativa piemontese dell'arte gotica al Rinascimento. In Sala Acaia il capolavoro di Antonello da Messina, Il 
                                Ritratto d'uomo.
                            </p>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Palazzo_Madama d-flex'>
                        <CardTitle>
                            <h3 className='text-light text-center mt-3'>Barocco</h3>
                        </CardTitle>
                        <CardBody className='align-content-center'>
                            <p className='fst-italic text-light'>Piano 1</p>
                            <p className='text-light'>
                                Percorso cronologico e stilistico della collzione tra Sei e Settecento presentato negli antichi appartamenti delle Madame Reali. Le opere di committenza ducale e di provenienza italiana e staniera dialogano con le sfarzose 
                                decorazioni barocche delle sale.
                            </p>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Palazzo_Madama d-flex'>
                        <CardTitle>
                            <h3 className='text-light text-center mt-3'>Arti Decorative</h3>
                        </CardTitle>
                        <CardBody className='align-content-center'>
                            <p className='fst-italic text-light'>Piano 2</p>
                            <p className='text-light'>
                                Raccolta di arte decorativa organizzta in tre sale: la sala delle maioliche e porcellana, la Sala Atelier e infine la Sala Vetri con la strordinaria collezione di vetri dipinti e dorati del marchese Emanuale Taparelli 
                                d'Azeglio.
                            </p>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Palazzo_Madama d-flex'>
                        <Link href='/visite/piemonte/torino/palazzo_madama/giardino_botanico_medievale' className='text-decoration-none'>
                            <CardTitle>
                                <h3 className='text-light text-center mt-3'>Giardino</h3>
                            </CardTitle>
                            <CardBody className='align-content-center'>
                                <p className='fst-italic text-light'>Il giardino botanico medievale</p>
                                <p className='text-light'>
                                    Le prime notizie sul giardino del castello di Torino risalgono al 1402 con i documenti che registrano le spese per l’ingrandimento dell’edificio durante il governo di Ludovico principe d’Acaia (1402-1418): le fonti che 
                                    citano il giardino sono i Conti della Vicaria e Clavaria di Torino, i registri in cui il clavario della città - che nel Medioevo amministrava la città per conto dei principi d’Acaia e poi dei duchi di Savoia - annotava 
                                    le spese sostenute via via per la manutenzione del castello e delle fortificazioni cittadine.
                                </p>
                            </CardBody>
                        </Link>
                    </Card>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3335.042480990076!2d7.682903076583924!3d45.0710759595823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47886d703ff69533%3A0x22ef78451aa2fa9b!2sPalazzo%20Madama!5e1!3m2!1sit!2sit!4v1712573399208!5m2!1sit!2sit"
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
