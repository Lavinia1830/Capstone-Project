import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';
import Footer from '@/Components/Footer';

export default function Basilicata(props) {

    const [isHoveredMatera, setIsHoveredMatera] = useState(false);
    const [isHoveredPotenza, setIsHoveredPotenza] = useState(false);
    const [isHoveredMaratea, setIsHoveredMaratea] = useState(false);
    const [isHoveredMelfi, setIsHoveredMelfi] = useState(false);
    const [isHoveredVenosa, setIsHoveredVenosa] = useState(false);
    const [isHoveredPietrapertosa, setIsHoveredPietrapertosa] = useState(false);
    const [isHoveredCastelmezzano, setIsHoveredCastelmezzano] = useState(false);
    const [isHoveredTricarico, setIsHoveredTricarico] = useState(false);
    const [isHoveredParcoNazionaledelPollino, setIsHoveredParcoNazionaledelPollino] = useState(false);
    
    
    

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='text-center basilicata'>
                    <h1>Basilicata</h1>
                </div>
                <div className='text-center margin mt-3'>
                    <p>
                        Bagnata da due mari, a ovest dal Tirreno mentre a est dallo Ionio, molto diversi tra loro per i paesaggi, le spiagge e i colori del litorale, la Basilicata incanta con i suoi <b>piccoli e suggestivi borghi</b> che superano i 1000 metri di altitudine, boschi e foreste 
                        che ricoprono le montagne, un paesaggio caratterizzato dalla natura incontaminata che va a braccetto con una prestigiosa storia: tutto in una sola, piccola regione ricca di attrattive per tutti i gusti.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className='color-subtitle'>Origini e cenni storici sulla Basilicata</h2>
                    <p>
                        La <b>storia della Basilicata</b>storia della Basilicata affonda le sue origini nell'antichità con lo sviluppo delle comunità indigene, come dimostrano le testimonianze della <b>Cultura di Serra d'Alto</b> e la <b>necropoli presso Castelluccio</b>.<br/>
                        Il suo periodo d'oro risale tuttavia alla colonizzazione della <b>Magna Grecia</b>: grazie all'incredibile fertilità del litorale ionico fu scelta da alcuni coloni greci per fondare Metapontion, l’odierna Metaponto. Insieme a Sibari, Metaponto divenne ben presto una delle 
                        più potenti città della Magna Grecia.
                    </p>
                    <p>
                        Nel Medioevo, dopo le incursioni saracene, si impose il periodo della <b>famiglia Altavilla</b>, storici protagonisti delle vicende dell'Italia meridionale, che approfittarono delle guerre fra i vari ducati e principati per divenire i padroni della zona.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className='color-subtitle'>Le città principali della Basilicata</h2>
                    <p>
                        La <strong>Basilicata</strong> è ricca di mete affascinanti, ma la sua perla rara è Matera, un miracolo sospeso nel tempo.<br/>
                        La città dei <Link href='/destinazioni/basilicata/matera' className='text-decoration-none color_link'>Sassi di Matera</Link> è stata scelta <b>nel 2019 come Capitale europea della cultura</b> ed è un piccolo gioiello scavato nelle montagne in cui viveva la popolazione. <br/>
                        I Sassi, con il loro labirinto di vicoli e scalinate con antichissimi edifici, sono stati dichiarati <b>Patrimonio UNESCO</b>.
                    </p>
                    <p>
                        <Link href='/destinazioni/basilicata/potenza' className='text-decoration-none color_link'>Potenza</Link> è il <b>capoluogo della Basilicata</b>, posto sulla dorsale appenninica a nord delle Dolomiti Lucane, con una zona antica in cima alla collina e una città moderna ai piedi 
                        della stessa.<br/>
                        Della città conquistano le antiche vie del centro storico, a partire dalla stretta <b>via Pretoria</b>. Nonostante il terremoto del 1980 l’abbia profondamente danneggiata, la città resta una galleria d’arte a cielo aperto di grandissimo valore.
                    </p>
                    <p>
                        Anche <Link href='/destinazione/basilicata/melfi' className='text-decoration-none color_link'>Melfi</Link>, storica cittadina in provincia di Potenza, ammalia con le sue imponenti mura. Grazie alla sua <b>posizione strategica</b>, è stata protagonista di importanti eventi 
                        storici: vi si decise di intraprendere la prima Crociata e, secoli dopo, Federico II promulgò le prime leggi scritte del Medioevo.
                    </p>
                    <p>
                        Tra le altre bellissime mete in zona spiccano <b>Maratea</b>, il <b>Golfo di Policastro</b>, i tanti borghi e le <b>Dolomiti Lucane</b>.
                    </p>
                </div>
                <div className='row d-flex justify-content-center mx-0 mb-4'>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Basilicata'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/basilicata/matera'
                            onMouseEnter={() => setIsHoveredMatera(true)}
                            onMouseLeave={() => setIsHoveredMatera(false)}
                            >Matera {isHoveredMatera && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Basilicata'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/basilicata/potenza'
                            onMouseEnter={() => setIsHoveredPotenza(true)}
                            onMouseLeave={() => setIsHoveredPotenza(false)}
                            >Potenza {isHoveredPotenza && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Basilicata'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/basilicata/maratea'
                            onMouseEnter={() => setIsHoveredMaratea(true)}
                            onMouseLeave={() => setIsHoveredMaratea(false)}
                            >Maratea {isHoveredMaratea && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Basilicata'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/basilicata/melfi'
                            onMouseEnter={() => setIsHoveredMelfi(true)}
                            onMouseLeave={() => setIsHoveredMelfi(false)}
                            >Melfi {isHoveredMelfi && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Basilicata'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/basilicata/boghi/venosa'
                            onMouseEnter={() => setIsHoveredVenosa(true)}
                            onMouseLeave={() => setIsHoveredVenosa(false)}
                            >Venosa {isHoveredVenosa && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Basilicata'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/basilicata/boghi/pietrapertosa'
                            onMouseEnter={() => setIsHoveredPietrapertosa(true)}
                            onMouseLeave={() => setIsHoveredPietrapertosa(false)}
                            >Pietrapertosa {isHoveredPietrapertosa && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Basilicata'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/basilicata/boghi/castelmezzano'
                            onMouseEnter={() => setIsHoveredCastelmezzano(true)}
                            onMouseLeave={() => setIsHoveredCastelmezzano(false)}
                            >Castelmezzano {isHoveredCastelmezzano && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Basilicata'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/basilicata/boghi/tricarico'
                            onMouseEnter={() => setIsHoveredTricarico(true)}
                            onMouseLeave={() => setIsHoveredTricarico(false)}
                            >Tricarico {isHoveredTricarico && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Basilicata'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/montagna/basilicata/parco_nazionale_del_pollino'
                            onMouseEnter={() => setIsHoveredParcoNazionaledelPollino(true)}
                            onMouseLeave={() => setIsHoveredParcoNazionaledelPollino(false)}
                            >Parco Nazionale del Pollino {isHoveredParcoNazionaledelPollino && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                </div>
            </main>
            <Footer/>
        </AuthenticatedLayout>
    )
}
