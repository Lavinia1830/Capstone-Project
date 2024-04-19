import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';
import Footer from '@/Components/Footer';

export default function Sardegna(props) {

    const [isHoveredCagliari, setIsHoveredCagliari] = useState(false);
    const [isHoveredAlghero, setIsHoveredAlghero] = useState(false);
    const [isHoveredOlbia, setIsHoveredOlbia] = useState(false);
    const [isHoveredSassari, setIsHoveredSassari] = useState(false);
    const [isHoveredOristano, setIsHoveredOristano] = useState(false);
    const [isHoveredPortoCervo, setIsHoveredPortoCervo] = useState(false);
    const [isHoveredCostaSmeralda, setIsHoveredCostaSmeralda] = useState(false);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}Salina
        >
            <main>
                <div className='text-center sardegna'>
                    <h1>Sardegna</h1>
                </div>
                <div className='text-center margin mt-3'>
                    <p>
                        È conosciuta in tutto il mondo per il suo mare smeraldo e le sue spiagge candide, anche se il cuore del suo territorio è prevalentemente montuoso: benvenuti in <strong>Sardegna</strong>, terra di contrasti, natura superba e tradizioni millenarie. 
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className='color-subtitle'>Origini e cenni storici sulla Sardegna</h2>
                    <p>
                        Situata al centro del Mediterraneo, la Sardegna è stata un importante approdo per le civiltà affacciate sulle sue sponde.<br/>
                        Particolarmente importante per la storia dell'isola è stata a partire dall'età del bronzo la civiltà nuragica, che ha lasciato sul territorio eccezionali testimonianze: <b>8.000 nuraghi, antiche costruzioni in pietra di forma troncoconica</b>. L’esemplare più significativo è <b>Su 
                        Nuraxi di</b> <Link href='/destinazioni/sardegna/sud_sardegna/barumini' className='text-decoration-none color_link'>Barumini</Link>, ma disseminati sull’isola ci sono molti altri nuraghi ben conservati, oltre ad altre preziose testimonianze del passato: le <Link 
                        href='/visite/sardegna/arzachena/tombe_dei_giganti' className='text-decoration-none color_link'>tombe dei giganti</Link>, cioè monumenti sepolcrali dell'epoca nuragica, le <Link href='/visite/sardegna/nuoro/domus_de_janas' className='text-decoration-none color_link'>domus de 
                        janas</Link>, tombe preistoriche scavate nella roccia, i <Link href='/visita/sardegna/sassari/menhir_della_sardegna' className='text-decoration-none color_link'>menhir della Sardegna</Link>, misteriose pietre verticali conficcate nel terreno.<br/>
                        I Nuragici erano guerrieri e navigatori, pastori e contadini divisi in tribù che intrattenevano importanti commerci con popoli dal Mediterraneo fino alla Libia.
                    </p>
                    <p>
                        Durante il periodo dei Giudicati – quando, a partire dal IX secolo la Sardegna fu divisa in quattro Giudicati indipendenti -  l’isola subì un tentativo di conquista musulmana da parte di Mujāhid al-ʿĀmirī, militare e politico della Spagna Islamica, che fu sventato dai Sardi, via 
                        terra, e dalle flotte delle <b>Repubbliche Marinare</b> di Pisa e Genova, via mare.
                    </p>
                    <p>
                        Un'altra fondamentale fase storica per l'isola fu quella del <b>Regno di Sardegna</b>, istituito da papa Bonifacio VIII per risolvere la crisi tra la Corona d'Aragona e il ducato d'Angiò.
                    </p>
                    <p>
                        Al termine della guerra di successione spagnola, il Regno di Sardegna divenne dominio degli Asburgo d'Austria e poi fu ceduto al duca di Savoia Vittorio Amedeo II. Nel 1847 ci fu la fusione della Sardegna con Casa Savoia e l'estensione dello Statuto Albertino all’isola.<br/>
                        Quattordici anni dopo, nel 1861, dal Regno di Sardegna nascerà il Regno d'Italia.
                    </p>
                </div>
                <div className='margin mt-3'>
                    <h2 className="color-subtitle">Città principali della Sardegna</h2>
                    <p>
                        Cominciate la vostra visita da <Link href='/destinazioni/sardegna/cagliari' className='text-decoration-none color_link'>Cagliari</Link>, città principale e capoluogo dell’isola, che si trova a sud, nell’omonimo golfo. Per i cagliaritani <b>è Casteddu</b>, <b>cioè Castello</b>, come 
                        il quartiere fortificato medievale arroccato su un promontorio che è la prima cosa che vedrete se arrivate dal mare.<br/>
                        Il resto lo scoprirete poco a poco, perché all’ombra di palme svettanti e alberi di Jacaranda, Cagliari custodisce gelosamente quel che le tante civiltà del passato le hanno lasciato: riconoscerete le tracce dei Punici nella <b>Necropoli di Tuvixeddu</b>, quelle romane nel 
                        bell’Anfiteatro, le bizantine nella <b>Basilica di San Saturnino</b>, quelle dei fenici nella <b>Cattedrale del XIII secolo</b> e dei piemontesi <b>nei Bastioni di Saint Remy</b>, eretti a fine 800.<br/>
                        Di certo non potete perdere la <b>Spiaggia del Poetto</b>, per un tuffo nelle acque cristalline che digradano lentamente prima di diventare profonde, un po’ di running sul lungomare pedonale punteggiato di palme caraibiche o un aperitivo o una cena quasi <i>pied dans l’eau</i> in uno dei 
                        tantissimi locali di cui è disseminato il litorale.
                    </p>
                    <p>
                        Esattamente dall’altra parte dell’isola, cioè a nord-ovest, ecco <Link href='/destinazioni/sardegna/alghero' className='text-decoration-none color_link'>Alghero</Link>. Fondata nel XII secolo come città-fortezza dai genovesi, subì il dominio aragonese che ne ha influenzato l'arte e le 
                        tradizioni. Non perdete le <b>Torri Spagnole e le mura difensive genovesi</b>, ma neppure i bagni di sole e mare nelle spiaggette che circondano la cittadina, <b>lo shopping di gioielli in corallo nel centro storico</b>, artigianato d’eccellenza per cui Alghero è celebre nel mondo, e la sua 
                        sfrenata movida.
                    </p>
                    <p>
                        Tra i centri più frequentati dai turisti, <Link href='/destinazioni/sardegna/olbia' className='text-decoration-none color_link'>Olbia</Link>, capitale della scintillante <Link href='/mare/sardegna/sassari/costa_smeralda' className='text-decoration-none color_link'>Costa Smeralda</Link> e porta 
                        d’ingresso della suggestiva Gallura, e tornando a sud, <b>Sant’Antioco</b>, piccolo comune sull’omonima isoletta collegata alla terraferma, amatissima per le sue spiagge isolate, non perdete Porto Flavia, e la natura selvaggia.
                    </p>
                    <p>
                        A proposito di ambienti incontaminati e spiagge mozzafiato: <b>Cala Goloritzé</b>, nel Golfo di Orosei, è considerata uno degli angoli più belli del mondo così come <b>Cala Luna</b>, 800 metri di sabbia finissima e dorata che s’immerge nel mare limpido dalle tonalità azzurre. <i>Un unicum come</i>, 
                        per altri versi, <b>Barumini</b>, che ospita Su Nuraxi, il più grande villaggio nuragico di tutta la Sardegna edificato con antiche pietre vulcaniche della zona.
                    </p>
                </div>
                <div className='row d-flex justify-content-center mx-0 mb-4'>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Sardegna'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/sardegna/cagliari'
                            onMouseEnter={() => setIsHoveredCagliari(true)}
                            onMouseLeave={() => setIsHoveredCagliari(false)}
                            >Cagliari {isHoveredCagliari && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Sardegna'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/sardegna/alghero'
                            onMouseEnter={() => setIsHoveredAlghero(true)}
                            onMouseLeave={() => setIsHoveredAlghero(false)}
                            >Alghero {isHoveredAlghero && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Sardegna'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/sardegna/olbia'
                            onMouseEnter={() => setIsHoveredOlbia(true)}
                            onMouseLeave={() => setIsHoveredOlbia(false)}
                            >Olbia {isHoveredOlbia && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Sardegna'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/sardegna/sassari'
                            onMouseEnter={() => setIsHoveredSassari(true)}
                            onMouseLeave={() => setIsHoveredSassari(false)}
                            >Sassari {isHoveredSassari && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Sardegna'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/sardegna/oristano'
                            onMouseEnter={() => setIsHoveredOristano(true)}
                            onMouseLeave={() => setIsHoveredOristano(false)}
                            >Oristano {isHoveredOristano && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Sardegna'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/sardegna/porto_cervo'
                            onMouseEnter={() => setIsHoveredPortoCervo(true)}
                            onMouseLeave={() => setIsHoveredPortoCervo(false)}
                            >Porto Cervo {isHoveredPortoCervo && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Sardegna'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/mare/sardegna/sassari/costa_smeralda'
                            onMouseEnter={() => setIsHoveredCostaSmeralda(true)}
                            onMouseLeave={() => setIsHoveredCostaSmeralda(false)}
                            >Costa Smeralda {isHoveredCostaSmeralda && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                </div>
            </main>
            <Footer/>
        </AuthenticatedLayout>
    )
}
