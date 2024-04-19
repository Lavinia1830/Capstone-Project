import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';

export default function Bergamo(props) {

    const [isHoveredScarpe, setIsHoveredScarpe] = useState(false);
    const [isHoveredPVecchia, setIsHoveredPVecchia] = useState(false);
    const [isHoveredPRegione, setIsHoveredPRegione] = useState(false);
    const [isHoveredMTCattedrale, setIsHoveredMTCattedrale] = useState(false);
    const [isHoveredAccademiaCarrara, setIsHoveredAccademiaCarrara] = useState(false);
    const [isHoveredPGMoroni, setIsHoveredPGMoroni] = useState(false);
    const [isHoveredCappallaColleoni, setIsHoveredCappallaColleoni] = useState(false);






    return (
        <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        >
            <main>
                <div className='bergamo' style={{ position: 'relative' }}>
                    <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Bergamo</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Città</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Torri, borghi storici, chiese, funicolari, scalette che si arrampicano nel verde e scorci inaspettati che mostrano la pianura e le montagne circostanti: Bergamo è una delle più amate città della Lombardia.
                    </p>
                    <p>
                        Una storia ricca che parla anche di musica lirica, un paesaggio caratteristico e un cuore medievale arroccato sulla collina, circondato dalle <b>Mura Venete oggi Patrimonio dell'Umanità UNESCO</b>.
                    </p>
                    <p>
                        Scopritela a piedi per apprezzarne al meglio ogni sfumatura: i capolavori musicali, è la città di <b>Donizetti</b>, uno dei cinque grandi compositori di lirica al mondo, quelli artistici di Mantegna, 
                        Botticelli, Raffaello e Bellini e quelli architettonici con i suoi bastioni realizzati nel XVI secolo.
                    </p>
                    <p>
                        Un viaggio nella storia, nel buon cibo, nella bellezza a tutto tondo.
                    </p>
                    <p>
                        La <b>storia di Bergamo</b> ha origini lontane come insediamento degli Orobi. Divenne Municipio romano dal 49 a.C., ma con la caduta dell'Impero fu saccheggiata ripetutamente.
                    </p>
                    <p>
                        La <b>Bergamo medievale</b> vide il fiorire di potenti famiglie longobarde, note per aver suddiviso il territorio urbano in due quartieri reali. Dal 904 il vescovo Adalberto regalò alla città anni di migliorie 
                        e rifacimenti, ma dal 1098 fu Libero comune e, dopo alcune guerre contro Brescia, <b>si unì alla Lega Lombarda contro l'imperatore Federico Barbarossa</b>. Dal XIII secolo, mentre infuriavano le lotte tra guelfi e 
                        ghibellini, la città passò sotto l'influenza dei Visconti di Milano, che fortificarono la Cittadella.
                    </p>
                    <p>
                        Entrata a far parte dei domini della <b>Repubblica di Venezia</b>, i veneziani ne ricostruirono la città vecchia, erigendo le imponenti mura difensive. Il dominio veneto finì con l'epoca napoleonica, giunta dopo la 
                        breve vita della Repubblica Bergamasca, della Repubblica Cisalpina e del Regno d'Italia. Con la Restaurazione, Bergamo finì nella sfera austriaca del Regno Lombardo-Veneto che assicurò una prima industrializzazione 
                        del territorio grazie alle manifatture tessili.
                    </p>
                    <p>
                        La città visse un <b>Risorgimento fervente</b>: Garibaldi, alla testa dei Cacciatori delle Alpi, entrò trionfalmente in Bergamo ponendo fine alla dominazione straniera. Nel 1860 Bergamo contribuì con il maggior numero 
                        di volontari alla spedizione di Garibaldi, dettaglio che le valse il titolo di "<b>Città dei Mille</b>". Dal 1860 Bergamo entrò a far parte del Regno d'Italia.
                    </p>
                </div>
                <div className='row d-flex justify-content-center mx-0 mb-4'>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Bergamo'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/bergamo/piazza_mercato_delle_scarpe'
                            onMouseEnter={() => setIsHoveredScarpe(true)}
                            onMouseLeave={() => setIsHoveredScarpe(false)}
                            >Piazza Mercato delle Scarpe {isHoveredScarpe && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Bergamo'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/bergamo/piazza_vecchia'
                            onMouseEnter={() => setIsHoveredPVecchia(true)}
                            onMouseLeave={() => setIsHoveredPVecchia(false)}
                            >Piazza Vecchia {isHoveredPVecchia && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Bergamo'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/bergamo/palazzo_della_regione'
                            onMouseEnter={() => setIsHoveredPRegione(true)}
                            onMouseLeave={() => setIsHoveredPRegione(false)}
                            >Palazzo della Regione {isHoveredPRegione && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Bergamo'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/bergamo/museo_e_tesoro_della_cattedrale'
                            onMouseEnter={() => setIsHoveredMTCattedrale(true)}
                            onMouseLeave={() => setIsHoveredMTCattedrale(false)}
                            >Museo e Tesoro della Cattedrale {isHoveredMTCattedrale && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Bergamo'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/bergamo/accademia_carrara'
                            onMouseEnter={() => setIsHoveredAccademiaCarrara(true)}
                            onMouseLeave={() => setIsHoveredAccademiaCarrara(false)}
                            >Accademia Carrara {isHoveredAccademiaCarrara && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Bergamo'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/bergamo/palazzo_e_giardini_moroni'
                            onMouseEnter={() => setIsHoveredPGMoroni(true)}
                            onMouseLeave={() => setIsHoveredPGMoroni(false)}
                            >Palazzo e Giardini Moroni {isHoveredPGMoroni && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Bergamo'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/bergamo/cappella_colleoni'
                            onMouseEnter={() => setIsHoveredCappallaColleoni(true)}
                            onMouseLeave={() => setIsHoveredCappallaColleoni(false)}
                            >Cappella Colleoni {isHoveredCappallaColleoni && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                </div>
            </main>
            <Footer/>
        </AuthenticatedLayout>
    )
}
