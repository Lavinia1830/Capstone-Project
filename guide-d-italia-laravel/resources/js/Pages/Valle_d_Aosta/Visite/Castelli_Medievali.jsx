import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/inertia-react';
import {Card, CardBody} from 'react-bootstrap';

export default function Castelli_Medievali(props) {

    const [isHoveredCastelSavoia, setIsHoveredCastelSavoia] = useState(false);
    const [isHoveredCastellodiIssogne, setIsHoveredCastellodiIssogne] = useState(false);
    const [isHoveredCastellodiVerrès, setIsHoveredCastellodiVerrès] = useState(false);
    const [isHoveredCastellodiUssel, setIsHoveredCastellodiUssel] = useState(false);
    const [isHoveredCastellodiCly, setIsHoveredCastellodiCly] = useState(false);
    const [isHoveredCastellodiFénis, setIsHoveredCastellodiFénis] = useState(false);
    const [isHoveredFortediBard, setIsHoveredFortediBard] = useState(false);
    const [isHoveredCastelloRealediSarre, setIsHoveredCastelloRealediSarre] = useState(false);
    const [isHoveredCastellodiAymavilles, setIsHoveredCastellodiAymavilles] = useState(false);
    const [isHoveredCastelloSarrioddelaTour, setIsHoveredCastelloSarrioddelaTour] = useState(false);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='castelli_medievali' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Castelli Mediavali</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        La <b>Valle d’Aosta</b>, suggestiva e spettacolare, è una regione che offre tantissime opportunità ai suoi visitatori. Vi presentiamo un itinerario creato ad hoc che coadiuva <b>la natura, lo sport e la cultura</b>: un giro per <b>i fantastici castelli</b> della Valle d’Aosta. Questa 
                        regione è infatti nota, oltre che per le sue montagne, anche per gli affascinanti manieri che sembrano formare un tutt’uno con la natura che li circonda, rendendo il <b>paesaggio ancor più suggestivo</b>. Un itinerario che si può fare, oltre che in auto, a cavallo, e in bicicletta, anche 
                        a bordo di simpatiche carrozze.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Castel Savoia</h2>
                    <p>
                        Salendo dalla bassa valle in direzione di Aosta, si può per primo visitare <b>Castel Savoia</b>, nei pressi di <b>Gressoney-Saint-Jean</b>, residenza elettiva di Margherita di Savoia. Costruito tra il 1899 ed il 1904, ai piedi del Colle della Ranzola, nella località denominata 
                        “<b>Belvedere</b>”, che domina tutta la vallata fino al ghiacciaio del Lyskamm, l’edificio presenta cinque differenti torrette cuspidate e un rigoglioso giardino roccioso, dove crescono specie botaniche tipiche della flora alpina ed essenze rare e profumate. Assolutamente da non perdere 
                        una visita negli <b>alloggi della Regina</b> dove sono custoditi gli arredi originali.
                    </p>
                    <div className='row d-flex justify-center mx-0 mb-4'>
                        <Card className='col-lg-4 px-0 card_Castel_Savoia'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/visite/valle_d_aosta/castelli_medievali/castel_savoia'
                                onMouseEnter={() => setIsHoveredCastelSavoia(true)}
                                onMouseLeave={() => setIsHoveredCastelSavoia(false)}
                                >Castel Savoia {isHoveredCastelSavoia && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Castello di Issogne</h2>
                    <p>
                        Scendendo verso la A4, la seconda tappa potrebbe essere <b>Issogne</b>, sede dello splendido castello, esempio del gotico rinascimentale che racchiude veri e propri tesori d’arte. Proprietà dei <b>vescovi di Aosta</b>, il castello fu trasformato in sontuosa dimora da Giorgio di Challant, 
                        priore di S. Orso. Da non perdere i <b>signorili interni</b>, magistralmente decorati e il meraviglioso cortile porticato, al centro del quale è posta una fontana ottagonale, con uno <b>spettacolare albero di melograno in ferro battuto</b>.
                    </p>
                    <div className='row d-flex justify-center mx-0 mb-4'>
                        <Card className='col-lg-4 px-0 card_Castello_di_Issogne'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/visite/valle_d_aosta/castelli_medievali/castello_di_issogne'
                                onMouseEnter={() => setIsHoveredCastellodiIssogne(true)}
                                onMouseLeave={() => setIsHoveredCastellodiIssogne(false)}
                                >Castello di Issogne {isHoveredCastellodiIssogne && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Castello di Verrès</h2>
                    <p>
                        Non distante da Issogne troviamo <b>Verrès</b> , capoluogo di origine romana. Qui si trova il <b>Castello di Verrès</b>, trecentesco maniero militare, ingentilito dalle ricche decorazioni di porte, finestre e camini monumentali, appena restaurato. Finito di costruire nel 1390 
                        da <b>Ibleto di Challant</b>, esponente di una delle principali famiglie nobili valdostane, questo <b>castello monoblocco</b> è l’esempio del perfetto connubio tra la maestosa e poderosa essenzialità della fortezza con l’eleganza del castello.
                    </p>
                    <div className='row d-flex justify-center mx-0 mb-4'>
                        <Card className='col-lg-4 px-0 card_Castello_di_Verrès'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/visite/valle_d_aosta/castelli_medievali/castello_di_verrès'
                                onMouseEnter={() => setIsHoveredCastellodiVerrès(true)}
                                onMouseLeave={() => setIsHoveredCastellodiVerrès(false)}
                                >Castello di Verrès {isHoveredCastellodiVerrès && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Castello di Ussel</h2>
                    <p>
                        Risalendo verso Aosta, ci imbattiamo nel <b>Castello di Ussel</b>, costruito verso la metà del XIV sec, che fu di <b>proprietà degli Challant e dei Savoia</b>. Utilizzato anche come <b>prigione</b>, questo possente edificio monoblocco venne donato nel 1983 dal <b>barone 
                        Marcel Bich</b> alla Regione, che dopo un sapiente restauro lo adibì a sede espositiva. Di tipica architettura militare, il castello è a filo sullo strapiombo che domina la piana di Châtillon.
                    </p>
                    <div className='row d-flex justify-center mx-0 mb-4'>
                        <Card className='col-lg-4 px-0 card_Castello_di_Ussel'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/visite/valle_d_aosta/castelli_medievali/castello_di_ussel'
                                onMouseEnter={() => setIsHoveredCastellodiUssel(true)}
                                onMouseLeave={() => setIsHoveredCastellodiUssel(false)}
                                >Castello di Ussel {isHoveredCastellodiUssel && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Castello di Cly</h2>
                    <p>
                        Proseguendo sempre in direzione Aosta, diamo una rapida occhiata al maestoso <b>Castello di Cly</b> a <b>Saint-Denis</b> che sorge su un promontorio roccioso che controlla strategicamente il territorio sottostante.
                    </p>
                    <div className='row d-flex justify-center mx-0 mb-4'>
                        <Card className='col-lg-4 px-0 card_Castello_di_Cly'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/visite/valle_d_aosta/castelli_medievali/castello_di_cly'
                                onMouseEnter={() => setIsHoveredCastellodiCly(true)}
                                onMouseLeave={() => setIsHoveredCastellodiCly(false)}
                                >Castello di Cly {isHoveredCastellodiCly && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Castello di Fénis</h2>
                    <p>
                        Non poco distante incontriamo il famoso <b>Castello di Fenis</b>, con splendide mura merlate e torri maestose. Questo maniero medioevale, trasformato nel 1869 nella <b>residenza di caccia del re Vittorio Emanuele II</b>, 
                        presenta un’armoniosa struttura, organizzata concentricamente attorno al cortile interno, che rievoca un’<b>atmosfera suggestiva e fiabesca</b>. Da non perdere gli splendidi affreschi visibili all’interno della cappella.
                    </p>
                    <div className='row d-flex justify-center mx-0 mb-4'>
                        <Card className='col-lg-4 px-0 card_Castello_di_Fénis'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/visite/valle_d_aosta/castelli_medievali/castello_di_fénis'
                                onMouseEnter={() => setIsHoveredCastellodiFénis(true)}
                                onMouseLeave={() => setIsHoveredCastellodiFénis(false)}
                                >Castello di Fénis {isHoveredCastellodiFénis && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Forte di Bard</h2>
                    <p>
                        In questo itinerario per i castelli della Valle d’Aosta non poteva mancare una gita nello splendido <b>Forte di Bard</b>, imponente fortezza già nell’anno mille, <b>utilizzata come struttura militare fino al 1830</b>. Questo 
                        Forte sabauda riaperto dopo un lungo restauro, oggi, assieme all’omonimo borgo, è il nuovo <b>polo culturale delle Alpi Occidentali</b> ed ospita il <b>Museo delle Alpi</b> e interessantissime mostre temporanee.
                    </p>
                    <div className='row d-flex justify-content-center mx-0 mb-4'>
                        <Card className='col-lg-4 px-0 card_Forte_di_Bard'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/visite/valle_d_aosta/castelli_medievali/forte_di_bard'
                                onMouseEnter={() => setIsHoveredFortediBard(true)}
                                onMouseLeave={() => setIsHoveredFortediBard(false)}
                                >Forte di Bard {isHoveredFortediBard && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Castello Reale di Sarre</h2>
                    <p>
                        A dominare l’ingresso all’alta Valle c’è il <b>Castello reale di Sarre</b>, situato a <b>Lalex</b>, su di un poggio nella conca di Aosta. Costruito nel 1710 sui resti di un nucleo ancor più antico (XII sec), dopo vari passaggi di 
                        proprietà, l’edificio divenne la <b>residenza estiva dei Savoia</b> ed attualmente rappresenta il <b>museo della presenza sabauda in Valle</b>. Da non perdere una visita nell'Appartamento Reale con la Gran Sala del gioco, la 
                        Galleria dei trofei venatori e le stanze del secondo piano che riguardano la storia della dinastia sabauda nel XX sec.
                    </p>
                    <div className='row d-flex justify-center mx-0 mb-4'>
                        <Card className='col-lg-4 px-0 card_Castello_Reale_di_Sarre'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/visite/valle_d_aosta/castelli_medievali/castello_reale_di_sarre'
                                onMouseEnter={() => setIsHoveredCastelloRealediSarre(true)}
                                onMouseLeave={() => setIsHoveredCastelloRealediSarre(false)}
                                >Castello Reale di Sarre {isHoveredCastelloRealediSarre && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Castello di Aymavilles</h2>
                    <p>
                        Il <b>castello di Aymavilles</b> fu eretto intorno al XII secolo su una bassa collina digradante verso il fiume Dora. Fu ricostruito tra il XIV e il XV secolo e dotato di 4 possenti torrioni cilindrici angolari. Agli inizi del 1800 le 
                        vecchie strutture difensive furono abbattute e il maniero fu trasformato in un'elegante <b>residenza</b>, conferendogli quell'aspetto unico che anticipava lo <b>stile rococò</b> della Valle.
                    </p>
                    <div className='row d-flex justify-center mx-0 mb-4'>
                        <Card className='col-lg-4 px-0 card_Castello_di_Aymavilles'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/visite/valle_d_aosta/castelli_medievali/castello_di_aymavilles'
                                onMouseEnter={() => setIsHoveredCastellodiAymavilles(true)}
                                onMouseLeave={() => setIsHoveredCastellodiAymavilles(false)}
                                >Castello di Aymavilles {isHoveredCastellodiAymavilles && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Castello Sarriod de la Tour</h2>
                    <p>
                        Completate questo circuito visitando il <b>castello Sarriod de la Tour</b>, nella zona pianeggiante ricca di frutteti, nel comune di <b>Saint-Pierre</b>. È protetto da un'estesa cinta muraria in una posizione incantevole sopra il 
                        fiume Dora. L'architettura di questo <b>maniero è complessa</b> e comprende <b>diversi edifici risalenti ad epoche diverse</b>. Da non perdere la meravigliosa scala a chiocciola della torre (viret), gli affreschi del XIII secolo 
                        nella cappella e la Sala delle Teste, la sala ufficiale per ricevere gli ospiti il ​​cui soffitto è sostenuto da 171 mensoloni scolpiti a forme grottesche.
                    </p>
                    <div className='row d-flex justify-center mx-0 mb-4'>
                        <Card className='col-lg-4 px-0 card_Castello_Sarriod_de_la_Tour'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/visite/valle_d_aosta/castelli_medievali/castello_sarriod_de_la_tour'
                                onMouseEnter={() => setIsHoveredCastelloSarrioddelaTour(true)}
                                onMouseLeave={() => setIsHoveredCastelloSarrioddelaTour(false)}
                                >Castello Sarriod de la Tour {isHoveredCastelloSarrioddelaTour && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </main>
            <Footer/>
        </AuthenticatedLayout>
    )
}
