import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';
import Footer from '@/Components/Footer';

export default function Molise(props) {

    const [isHoveredCampobasso, setIsHoveredCampobasso] = useState(false);
    const [isHoveredTermoli, setIsHoveredTermoli] = useState(false);
    const [isHoveredIsernia, setIsHoveredIsernia] = useState(false);
    const [isHoveredFerrazzano, setIsHoveredFerrazzano] = useState(false);
    const [isHoveredPietrabbondante, setIsHoveredPietrabbondante] = useState(false);
    const [isHoveredTrivento, setIsHoveredTrivento] = useState(false);
    const [isHoveredFornelli, setIsHoveredFornelli] = useState(false);
    const [isHoveredAgnone, setIsHoveredAgnone] = useState(false);
    const [isHoveredFrosolone, setIsHoveredFrosolone] = useState(false);
    const [isHoveredOratino, setIsHoveredOratino] = useState(false);
    const [isHoveredCampitelloMatese, setIsHoveredCampitelloMatese] = useState(false);
    const [isHoveredParcoNazionaledAbruzzoLazioeMolise, setIsHoveredParcoNazionaledAbruzzoLazioeMolise] = useState(false);
    const [isHoveredLaCostaMolisana, setIsHoveredLaCostaMolisana] = useState(false);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='text-center molise'>
                <h1>Molise</h1>
                </div>
                <div className='text-center margin mt-3'>
                    <p>
                        Una piccola regione, una terra generosa che si contraddistingue per la sua natura incontaminata, per la lunga storia, per il ricco patrimonio artistico, per le antiche tradizioni e per una gastronomia saporita: è <b>il Molise, meta ancora poco battuta, 
                        e per questo ancora più interessante</b>. Scopritene le località sciistiche, le colline, il litorale con le spiagge sabbiose, i percorsi storici della transumanza e le numerose riserve naturali che proteggono le specie vegetali e animali tipiche di questa area.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className='color-subtitle'>Origini e cenni storici sul Molise</h2>
                    <p>
                        Il territorio molisano ha condiviso la sua storia con l’<Link href='/abruzzo' className='text-decoration-none color_link'>Abruzzo</Link> fino alla caduta dell’Impero Romano, come testimoniano i ritrovamenti nella località di Pineta dell’<b>Homo Aeserniensis</b>, 
                        che si spostava tra le due regioni su base stagionale.<br/>
                        Tutti i principali centri molisani sono diventati colonie romane con le conquiste avvenute durante la <b>guerra sociale</b> e i conflitti sannitici e annibalici (ricordiamo per esempio Morrone del <b>Sannio</b>, Isernia, Larino, Venafro e <b>Pietrabbondante</b>), 
                        con la formazione e la nascita di nuove urbanizzazioni promosse dal cristianesimo, come per esempio la <b>Diocesi di Trivento</b>, fino all’avvento dei Normanni.
                    </p>
                    <p>
                        Una data fondamentale nella storia del <strong>Molise</strong> è il 1221, anno nel quale l’imperatore Federico II trasformò il Molise in un distretto di giustizia imperiale in cui nacquero diversi monasteri come lo splendido sito della Madonna delle Grotte a <b>Rocchetta a Volturno</b>.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className='color-subtitle'>Le città principali del Molise</h2>
                    <p>
                        Un borgo antico con mura fortificate, sovrastato dall'imponente Castello Svevo e premiato più volte con la Bandiera Blu d'Europa grazie alla meravigliosa limpidezza del suo mare: è <Link href='/destinazioni/molise/termoli' className='text-decoration-none 
                        color_link'>Termoli</Link>, una delle mete principali del Molise, in cui trovare impianti sportivi, servizi alberghieri all'avanguardia e spiagge attrezzatissime.<br/>
                        <Link href='/destinazione/molise/campobasso' className='text-decoration-none color_link'>Campobasso</Link> è invece il capoluogo della regione, posto in posizione favorevole per panorami unici nel loro genere. Tra i suoi simboli ci sono il <Link 
                        href='/visite/molise/campobasso/castello_monforte' className='text-decoration-none color_link'>Castello Monforte</Link>, monumento nazionale e punto più alto della città che torreggia dal colle su cui sorge; la <Link href='/visite/molise/campobasso/chiesa_di_san_giorgio'
                        className='text-decoration-none color_link'>Chiesa di San Giorgio</Link>, eretta nel XII secolo in pieno stile gotico, e la <Link href='/visite/molise/campobasso/chiesa_di_san_antonio_abate' className='text-decoration-none color_link'>Chiesa di Sant'Antonio Abate</Link> con 
                        la sua bella facciata tardo-rinascimentale e il fastoso interno barocco.
                    </p>
                    <p>
                        Nella provincia si possono ammirare tantissimi reperti archeologici come il Villaggio di Campomarino, risalente alla preistoria, e numerose necropoli.
                    </p>
                    <p>
                        <Link href='/destinazioni/molise/isernia' className='text-decoration-none color_link'>Isernia</Link> fu invece la capitale dei popoli di origini sannitiche, ha una storia antichissima di cui oggi raccontano i suoi stretti e caratteristici vicoli.
                    </p>
                    <p>
                        La <Link href='/visite/molise/isernia/fontana_fraterna' className='text-decoration-none color_link'>Fontana Fraterna</Link> è uno dei suoi monumenti più conosciuti: ha 6 getti d'acqua e una curiosa forma a loggiato realizzata con blocchi di pietra calcarea probabilmente 
                        provenienti da antichi monumenti romani.
                    </p>
                    <p>
                        Infine, <Link href='/destinazioni/molise/ferrazzano' className='text-decoration-none color_link'>Ferrazzano</Link>, un borgo noto per le case che sembrano abbracciarsi: sono tutte vicine per proteggersi dal freddo. Sorto in una posizione strategica sulle antiche vie di 
                        comunicazione del Molise, è caratterizzato da meravigliosi scorci.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className='color-subtitle'>Cosa vedere in Molise: 4 tappe imprescindibili</h2>
                    <p>
                        Tra le tappe obbligate durante una vacanza in <strong>Molise</strong>, c’è quella al <Link href='/destinazioni/molise/campitello_matese' className='text-decoration-none color_link'>Campitello Matese</Link>, località sciistica con 40 chilometri di piste, ricca di laghi, 
                        boschi, grotte e caverne, prati e sentieri inediti ideali per passeggiate a piedi, escursioni a cavallo, in mountain bike o in quad e discese in parapendio.
                    </p>
                    <p>
                        Un salto in provincia di Isernia permette di bearsi della <b>Abbazia di San Vincenzo al Volturno</b>, un antico edificio monastico in cui il tempo sembra essersi fermato coniugando la storia, la spiritualità e la natura incontaminata che lo circonda.
                    </p>
                    <p>
                        Una volta in zona è impossibile rinunciare a una visita al <Link href='/laghi/lago_di_castel_di_vincenzo' className='text-decoration-none color_link'>Lago di Castel San Vincenzo</Link>, ben custodito nel <Link href='/visite/abuzzo__lazio_molise/parco_nazionele_d_abruzzo_lazio_molise' 
                        className='text-decoration-none color_link'>Parco Nazionale d'Abruzzo, Lazio e Molise</Link>. È uno specchio d’acqua di un turchese brillante circondato da boschi e in cui si riflettono le vette delle Mainarde. Non sembra artificiale, ma lo è: è stato realizzato alla fine degli anni 
                        50 per scopi idroelettrici.
                    </p>
                    <p>
                        Merita uno stop anche uno dei borghi più belli del <strong>Molise</strong>, <Link href='/destinazioni/molise/borghi/fornelli' className='text-decoration-none color_link'>Fornelli</Link>. Noto come il <i>Paese delle Torri</i> di epoca normanna e angioina ma anche come <b>Città dell’Olio</b>, 
                        grazie all’eccellente qualità dell’olio prodotto nelle sue campagne, vanta un centro storico e una struttura urbana rimasti inalterati nei secoli.
                    </p>
                </div>
                <div className='row d-flex justify-content-center mx-0 mb-4'>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Molise'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/molise/campobasso'
                            onMouseEnter={() => setIsHoveredCampobasso(true)}
                            onMouseLeave={() => setIsHoveredCampobasso(false)}
                            >Campobasso {isHoveredCampobasso && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Molise'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/molise/borghi/termoli'
                            onMouseEnter={() => setIsHoveredTermoli(true)}
                            onMouseLeave={() => setIsHoveredTermoli(false)}
                            >Termoli {isHoveredTermoli && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Molise'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/molise/isernia'
                            onMouseEnter={() => setIsHoveredIsernia(true)}
                            onMouseLeave={() => setIsHoveredIsernia(false)}
                            >Isernia {isHoveredIsernia && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Molise'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/molise/ferrazzano'
                            onMouseEnter={() => setIsHoveredFerrazzano(true)}
                            onMouseLeave={() => setIsHoveredFerrazzano(false)}
                            >Ferrazzano {isHoveredFerrazzano && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Molise'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/molise/borghi/pietrabbondante'
                            onMouseEnter={() => setIsHoveredPietrabbondante(true)}
                            onMouseLeave={() => setIsHoveredPietrabbondante(false)}
                            >Pietrabbondante {isHoveredPietrabbondante && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Molise'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/molise/borghi/trivento'
                            onMouseEnter={() => setIsHoveredTrivento(true)}
                            onMouseLeave={() => setIsHoveredTrivento(false)}
                            >Trivento {isHoveredTrivento && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Molise'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/molise/borghi/fornelli'
                            onMouseEnter={() => setIsHoveredFornelli(true)}
                            onMouseLeave={() => setIsHoveredFornelli(false)}
                            >Fornelli {isHoveredFornelli && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Molise'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/molise/borghi/agnone'
                            onMouseEnter={() => setIsHoveredAgnone(true)}
                            onMouseLeave={() => setIsHoveredAgnone(false)}
                            >Agnone {isHoveredAgnone && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Molise'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/molise/borghi/frosolone'
                            onMouseEnter={() => setIsHoveredFrosolone(true)}
                            onMouseLeave={() => setIsHoveredFrosolone(false)}
                            >Frosolone {isHoveredFrosolone && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Molise'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/molise/borghi/oratino'
                            onMouseEnter={() => setIsHoveredOratino(true)}
                            onMouseLeave={() => setIsHoveredOratino(false)}
                            >Oratino {isHoveredOratino && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Molise'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/montagna/campitello_matese'
                            onMouseEnter={() => setIsHoveredCampitelloMatese(true)}
                            onMouseLeave={() => setIsHoveredCampitelloMatese(false)}
                            >Campitello Matese {isHoveredCampitelloMatese && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Molise'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/montagna/parco_nazionale_d_abruzzo_lazio_e_molise'
                            onMouseEnter={() => setIsHoveredParcoNazionaledAbruzzoLazioeMolise(true)}
                            onMouseLeave={() => setIsHoveredParcoNazionaledAbruzzoLazioeMolise(false)}
                            >Parco Nazionale d'Abruzzo Lazio e Molise {isHoveredParcoNazionaledAbruzzoLazioeMolise && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Molise'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/mare/molise/la_costa_molisana'
                            onMouseEnter={() => setIsHoveredLaCostaMolisana(true)}
                            onMouseLeave={() => setIsHoveredLaCostaMolisana(false)}
                            >La costa molisana {isHoveredLaCostaMolisana && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                </div>
            </main>
            <Footer/>
        </AuthenticatedLayout>
    )
}
