import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';
import Footer from '@/Components/Footer';

export default function Sicilia(props) {

    const [isHoveredSiracusa, setIsHoveredSiracusa] = useState(false);
    const [isHoveredCatania, setIsHoveredCatania] = useState(false);
    const [isHoveredSelinunte, setIsHoveredSelinunte] = useState(false);
    const [isHoveredAgrigento, setIsHoveredAgrigento] = useState(false);
    const [isHoveredGela, setIsHoveredGela] = useState(false);
    const [isHoveredMessina, setIsHoveredMessina] = useState(false);
    const [isHoveredTerminiImerese, setIsHoveredTerminiImerese] = useState(false);
    const [isHoveredTindari, setIsHoveredTindari] = useState(false);
    const [isHoveredTaormina, setIsHoveredTaormina] = useState(false);
    const [isHoveredPalermo, setIsHoveredPalermo] = useState(false);
    const [isHoveredIsoleEolie, setIsHoveredIsoleEolie] = useState(false);
    const [isHoveredVulcano, setIsHoveredVulcano] = useState(false);
    const [isHoveredStromboli, setIsHoveredStromboli] = useState(false);
    const [isHoveredLipari, setIsHoveredLipari] = useState(false);
    const [isHoveredPanarea, setIsHoveredPanarea] = useState(false);
    const [isHoveredAlicudi, setIsHoveredAlicudi] = useState(false);
    const [isHoveredFilicudi, setIsHoveredFilicudi] = useState(false);
    const [isHoveredSalina, setIsHoveredSalina] = useState(false);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}Salina
        >
            <main>
                <div className='text-center sicilia'>
                    <h1>Sicilia</h1>
                </div>
                <div className='text-center margin mt-3'>
                    <p>
                        È la più grande <b>isola del Mediterraneo</b> in cui arte, storia e cultura si intrecciano in un mix sorprendente che si dipana dal mare alla montagna, passando per campagne e borghi marinari: la <strong>Sicilia</strong>, disseminata di località di 
                        valore inestimabile e vestigia greche e arabo-normanne, sontuosamente impreziosita dal Barocco e benedetta da un clima mite in ogni stagione, è un paradiso che non scorderete.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className='color-subtitle'>Origini e cenni storici sulla Sicilia</h2>
                    <p>
                        Attirati dalle fertili terre vulcaniche e dalle aree ricche di risorse, gruppi di mercanti calcidici fondarono Naxos. I greci vi crearono empori commerciali e <b>colonie greche</b> che raggiunsero le dimensioni di fiorenti città: <Link href='/destinazioni/sicilia/siracura' 
                        className='text-decoration-none color_link'>Siracusa</Link>, <Link href='/destinazioni/sicilia/catania' className='text-decoration-none color_link'>Catania</Link>, <Link href='/destinazioni/sicilia/selinunte' className='text-decoration-none color_link'>Selinunte</Link>, 
                        <Link href='/destinazioni/sicilia/agrigento' className='text-decoration-none color_link'>Agrigento</Link>, <Link href='/destinazioni/sicilia/gela' className='text-decoration-none color_link'>Gela</Link>.
                    </p>
                    <p>
                        I Mamertini, popolazione italica che aveva occupato <Link href='/destinazioni/sicilia/messina' className='text-decoration-none color_link'>Messina</Link>, minacciati dai Cartaginesi, chiesero aiuto ai Romani e diedero il via alla Prima Guerra Punica. La <strong>Sicilia</strong> 
                        si trasformò in una provincia con una ricca produzione agricola e di questo periodo restano reperti e monumenti a <Link href='/destinazioni/sicilia/palermo/termini_imerese' className='text-decoration-none color_link'>Termini Imerese</Link>, Catania, <Link 
                        href='/destinazioni/sicilia/messina/tindari' className='text-decoration-none color_link'>Tindari</Link>, <Link href='/destinazioni/sicilia/messina/taorimina' className='text-decoration-none color_link'>Taormina</Link> e <b>Piazza Armerina</b>: per farvi un’idea, visitate 
                        la <Link href='/visite/sicilia/enna/vialla_romana_del_casale' className='text-decoration-none color_link'>Villa romana del Casale</Link>.
                    </p>
                    <p>
                        Alla caduta dell'Impero Romano d'Occidente fu ceduta a Odoacre e in seguito ai Visigoti di Teodorico, a cui seguirono gli <b>Arabi in Sicilia</b> con lo sbarco a Mazara.
                    </p>
                    <p>
                        Fu poi la volta dei <b>Normanni in Sicilia</b> che la resero un regno prosperoso e pacifico. Del periodo si ricorda in particolare Federico II, uno dei più grandi monarchi del Medioevo. La Rivolta dei Vespri Siciliani portò poi alla definitiva cacciata dei Francesi dalla Sicilia 
                        e <b>Federico III</b> divenne viceré a Palermo, poi eletto <b>Re di Sicilia</b>. Seguì un alternarsi di domini spagnoli e dei Savoia, ma in seguito alla Battaglia di Bitonto la Sicilia rientrò nell'orbita spagnola con l’incoronazione di <b>Carlo III</b> come re del <b>regno delle 
                        due Sicilie</b>. Con l'impresa garibaldina la regione fu annessa al Regno d'Italia. 
                    </p>
                </div>
                <div className='margin mt-3'>
                    <h2 className="color-subtitle">Le città principali della Sicilia</h2>
                    <p>
                        Partite da <Link href='/destinazioni/sicilia/palermo' className='text-decoration-none color_link'>Palermo</Link>, anima autentica e inimitabile dell’isola, città brulicante di vivaci <b>mercati</b> e sontuosamente impreziosita dal <b>Barocco</b>, che svela il suo passato con il 
                        rosso delle <b>cupole arabo-normanne</b>.
                        Una parte dei suoi palazzi nobiliari, delle chiese e dei monumenti sono divenuti Patrimonio dell’Umanità <b>UNESCO</b>, ma non vi basterà un viaggio per vederli tutti: cominciate dalla Cattedrale di Palermo, da Palazzo dei Normanni con la Cappella Palatina e dalla Chiesa di San 
                        Giovanni degli Eremiti, e segnate il resto per la prossima volta. Perché ci ritornerete.
                    </p>
                    <p>
                        A est di Palermo, e raggungibili con i traghetti da Milazzo, ecco le <Link href='/destinazioni/sicilia/isole_eolie' className='text-decoration-none color_link'>Isole Eolie</Link>: <Link href='/destinazioni/sicilia/isole_eolie/vulcano' className='text-decoration-none color_link'>Vulcano</Link>, 
                        <Link href='/destinazioni/sicilia/isole_eolie/stromboli' className='text-decoration-none color_link'>Stromboli</Link>, <Link href='/destinazioni/sicilia/isole_eolie/lipari' className='text-decoration-none color_link'>Lipari</Link>, <Link href='/destinazioni/sicilia/isole_eolie/panarea' 
                        className='text-decoration-none color_link'>Panarea</Link>, <Link href='/destinazioni/sicilia/isole_eolie/alicudi' className='text-decoration-none color_link'>Alicudi</Link>, <Link href='/destinazioni/sicilia/isole_eolie/filicudi' className='text-decoration-none color_link'>Filicudi</Link> e <Link 
                        href='/destinazioni/sicilia/isole_eolie/salina' className='text-decoration-none color_link'>Salina</Link>. Se potete regalatevi una pausa in uno di questi frammenti di paradiso di origine vulcanica disseminati al largo della costa settentrionale, in provincia di Messina.
                    </p>
                    <p>
                        Dall’altra parte della Sicilia, c’è <b>Catania</b>, seconda città dell'isola dopo Palermo e sua eterna rivale: andate subito in <Link href='/visite/palermo/piazza_del_duomo' className='text-decoration-none color_link'>piazza del Duomo</Link> ad ammirare la <Link href='/visite/sicilia/palermo/fontana_dell_elefante'
                        className='text-decoration-none color_link'>Fontana dell’Elefante</Link>, scolpita nella lava nera. Si dice che abbia il potere di placare l’ira del <Link href='/visite/sicilia/catania/etna' className='text-decoration-none color_link'>vulcano Etna</Link>, all’ombra del quale sorge la città.
                    </p>
                    <p>
                        Sulla stessa costa, ma 50 chilometri a nord, <b>Taormina</b>, ricca di aree archeologiche e di spiagge meravigliose. Visitate il <Link href='/visite/sicilia/taorimina/messina/teatro_greco_di_taormina' className='text-decoration-none color_link'>Teatro Greco di Taormina</Link>, il secondo per dimensioni in Sicilia, ma anche la magnifica <b>Isola 
                        Bella</b>, un isolotto collegato alla costa da un istmo che appare solo con la bassa marea.
                    </p>
                    <p>
                        Sempre sulla costa orientale troverete <b>Siracusa</b> e la meravigliosa isola di Ortigia. Dividete il vostro tempo tra il magnifico centro storico ricco di piazze, fontane e palazzi e l’area archeologica del <Link href='/visite/sicilia/siracusa/parco_della_neopolis' className='text-decoration-none color_link'>Parco della 
                        Neopolis</Link>. Non dimenticate di fare un giro nel Val di Noto celebre per il suo barocco anch'esso Patrimonio dell'Umanità.
                    </p>
                    <p>
                        L'ultima meta è la <Link href='/visite/sicilia/agrigento/valle_dei_tempi_di_agrigento' className='text-decoration-none color_link'>Valle dei Templi di Agrigento</Link>, uno dei parchi archeologici meglio conservati al mondo e fondamentale testimonianza del passaggio della civiltà ellenica.
                    </p>
                </div>
                <div className='row d-flex justify-content-center mx-0 mb-4'>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Sicilia'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/sicilia/siracusa'
                            onMouseEnter={() => setIsHoveredSiracusa(true)}
                            onMouseLeave={() => setIsHoveredSiracusa(false)}
                            >Siracusa {isHoveredSiracusa && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Sicilia'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/sicilia/catania'
                            onMouseEnter={() => setIsHoveredCatania(true)}
                            onMouseLeave={() => setIsHoveredCatania(false)}
                            >Catania {isHoveredCatania && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Sicilia'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/sicilia/selinunte'
                            onMouseEnter={() => setIsHoveredSelinunte(true)}
                            onMouseLeave={() => setIsHoveredSelinunte(false)}
                            >Selinunte {isHoveredSelinunte && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Sicilia'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/sicilia/agrigento'
                            onMouseEnter={() => setIsHoveredAgrigento(true)}
                            onMouseLeave={() => setIsHoveredAgrigento(false)}
                            >Agrigento {isHoveredAgrigento && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Sicilia'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazione/sicilia/gela'
                            onMouseEnter={() => setIsHoveredGela(true)}
                            onMouseLeave={() => setIsHoveredGela(false)}
                            >Gela {isHoveredGela && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Sicilia'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazione/sicilia/messina'
                            onMouseEnter={() => setIsHoveredMessina(true)}
                            onMouseLeave={() => setIsHoveredMessina(false)}
                            >Messina {isHoveredMessina && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Sicilia'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/sicilia/palermo/termini_imerese'
                            onMouseEnter={() => setIsHoveredTerminiImerese(true)}
                            onMouseLeave={() => setIsHoveredTerminiImerese(false)}
                            >Termini Imerese {isHoveredTerminiImerese && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Sicilia'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/sicilia/messina/tindari'
                            onMouseEnter={() => setIsHoveredTindari(true)}
                            onMouseLeave={() => setIsHoveredTindari(false)}
                            >Tindari {isHoveredTindari && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Sicilia'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/sicilia/messina/taorimina'
                            onMouseEnter={() => setIsHoveredTaormina(true)}
                            onMouseLeave={() => setIsHoveredTaormina(false)}
                            >Taormina {isHoveredTaormina && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Sicilia'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/sicilia/palermo'
                            onMouseEnter={() => setIsHoveredPalermo(true)}
                            onMouseLeave={() => setIsHoveredPalermo(false)}
                            >Palermo {isHoveredPalermo && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Sicilia'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/sicilia/isole_eolie'
                            onMouseEnter={() => setIsHoveredIsoleEolie(true)}
                            onMouseLeave={() => setIsHoveredIsoleEolie(false)}
                            >Isole Eolie {isHoveredIsoleEolie && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Sicilia'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/sicilia/isole_eolie/vulcano'
                            onMouseEnter={() => setIsHoveredVulcano(true)}
                            onMouseLeave={() => setIsHoveredVulcano(false)}
                            >Vulcano {isHoveredVulcano && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Sicilia'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/sicilia/isole_eolie/stromboli'
                            onMouseEnter={() => setIsHoveredStromboli(true)}
                            onMouseLeave={() => setIsHoveredStromboli(false)}
                            >Strompoli {isHoveredStromboli && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Sicilia'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/sicilia/isole_eolie/lipari'
                            onMouseEnter={() => setIsHoveredLipari(true)}
                            onMouseLeave={() => setIsHoveredLipari(false)}
                            >Lipari {isHoveredLipari && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Sicilia'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/sicilia/isole_eolie/panarea'
                            onMouseEnter={() => setIsHoveredPanarea(true)}
                            onMouseLeave={() => setIsHoveredPanarea(false)}
                            >Panarea {isHoveredPanarea && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Sicilia'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/sicilia/isole_eolie/alicudi'
                            onMouseEnter={() => setIsHoveredAlicudi(true)}
                            onMouseLeave={() => setIsHoveredAlicudi(false)}
                            >Alicudi {isHoveredAlicudi && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Sicilia'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/sicilia/isole_eolie/filicudi'
                            onMouseEnter={() => setIsHoveredFilicudi(true)}
                            onMouseLeave={() => setIsHoveredFilicudi(false)}
                            >Filicudi {isHoveredFilicudi && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Sicilia'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/sicilia/isole_eolie/salina'
                            onMouseEnter={() => setIsHoveredSalina(true)}
                            onMouseLeave={() => setIsHoveredSalina(false)}
                            >Salina {isHoveredSalina && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                </div>
            </main>
            <Footer/>
        </AuthenticatedLayout>
    )
}
