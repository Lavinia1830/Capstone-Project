import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';

export default function Cagliari(props) {

    const [isHoveredBastioneSaintRemy, setIsHoveredBastioneSaintRemy] = useState(false);
    const [isHoveredPalazzoCivico, setIsHoveredPalazzoCivico] = useState(false);
    const [isHoveredDuomodiCagliari, setIsHoveredDuomodiCagliari] = useState(false);
    const [isHoveredTorridiSanPancrazioedellElefante, setIsHoveredTorridiSanPancrazioedellElefante] = useState(false);
    const [isHoveredParcodiMolentargiuseSaline, setIsHoveredParcodiMolentargiuseSaline] = useState(false);
    const [isHoveredSelladelDiavolo, setIsHoveredSelladelDiavolo] = useState(false);
    const [isHoveredSpiaggiadelPoetto, setIsHoveredSpiaggiadelPoetto] = useState(false);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='cagliari' style={{ position: 'relative' }}>
                    <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Cagliari</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Città</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        <b>Fondata dai Fenici</b>Fondata dai Fenici, occupata dai <b>Cartaginesi</b> e dai <b>Romani</b>, contesa da <b>Spagnoli</b> e <b>Pisani</b>, a lungo gestita dai <b>Piemontesi</b>, conserva con cura i segni di tutte le sue dominazioni da ammirare 
                        nelle chiese, nei palazzi e nelle sue ricche testimonianze artistiche.
                    </p>
                    <p>
                        Il passato si fonde con un <b>presente vivace</b>: trattorie, botteghe artigiane, mercati tradizionali e chiassose vie la rendono una città vibrante e sempre allegra. Il relax e la scoperta sono a portata di mano: le <b>meravigliose spiagge</b>, 
                        i parchi verdi e le aree lagunari vi faranno innamorare a prima vista.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Storia e curiosità su Cagliari</h2>
                    <p>
                        Fondata nel <b>neolitico</b>, periodo in cui si svilupparono sull'Isola diverse culture prenuragiche come la Cultura di Monte Claro, Cagliari divenne un'autentica città grazie ai dominatori fenicio-punici interessati alla favorevole posizione geografica. 
                        Al termine della Prima <b>Guerra Punica</b>, la città passò sotto il dominio di <b>Roma</b>, divenendo nota come Caralis.
                    </p>
                    <p>
                        Con il diffondersi del Cristianesimo, la città entrò in contatto con grandi nomi come quello di <b>Sant'Agostino</b>. La fase di declino arrivò con il dominio dei Vandali per poi terminare con il ritorno dell'Impero Bizantino, periodo caratterizzato 
                        dai Giudicati, autonomie locali che concessero alle popolazioni dell'Isola una relativa autodeterminazione. Alla fine del <b>Giudicato di Cagliari</b> si insediarono i <b>Pisani</b>, che misero in sicurezza la parte alta della città con bastioni e 
                        fortificazioni da ammirare ancor oggi. Un secolo dopo fu il turno degli <b>Aragonesi</b> che, unitisi alla corona <b>Catalana</b>, diedero vita al tanto deprecato <b>Governo Spagnolo</b>.
                    </p>
                    <p>
                        Dopo un inconsistente e poco amato dominio <b>austriaco</b>, <strong>Cagliari</strong> e la <Link href='/sardegna' className='text-decoration-none color_link'>Sardegna</Link> passano in mano ai <b>Savoia</b>, inaugurando così l'epoca dei maestosi 
                        interventi urbanistici, trasformandola da fortificazione ad area urbanistica ricca di opere splendide.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Cosa vedere a Cagliari: 3 luoghi da non perdere</h2>
                    <p>
                        Un giro vicino al mare, un tuffo nella vita quotidiana, un pizzico di spiritualità: ecco <b>cosa vedere a Cagliari</b> in 3 pratiche tappe essenziali e amatissime:
                    </p>
                    <ul className="lista">
                        <li>
                            <p>
                                la <b>Cagliari balneare</b>: un bagno, un po’ di jogging o un aperitivo lungo la <b>Spiaggia del Poetto</b>, che con i suoi 8 chilometri di sabbia è il luogo in cui i cagliaritani trascorrono buona parte del loro tempo libero. L’arenile si estende 
                                dal promontorio della Sella del Diavolo sino al litorale di Quartu Sant’Elena ed è puntellato da palme, bar e ristoranti, che qui chiamano ancora <i>chioschetti</i>, ricordando un passato in cui i <b>locali sul lungomare</b> erano decisamente più 
                                spartani. Perché Poetto? Per alcuni deriva dal catalano poeht, pozzetto, in riferimento alla cisterna presso la torre Sant'Elia, per altri discende da <i>Su Puertu</i> il porto, termine con cui gli spagnoli indicavano l’approdo di Marina Piccola;
                            </p>
                        </li>
                        <li>
                            <p>
                                la <b>Cagliari dei quartieri</b>: dedicate una una tappa al <b>quartiere Castello di Cagliari</b>, il più importante tra i 4 quartieri storici della città. Per la sua storia e la sua conformazione, e certamente per la sua posizione: arroccata su 
                                un colle calcareo, guarda il mare, come ad accogliere chi arriva in città;
                            </p>
                        </li>
                        <li>
                            <p>
                                la <b>Cagliari spirituale</b>: se siete ancora attorno a Castello, fermatevi alla <b>Cattedrale di Cagliari</b>, il cui nome ufficiale è Cattedrale di Santa Maria Assunta e di Santa Cecilia, che è il principale luogo di culto della città. 
                                Originariamente costruita in stile romanico-pisano, nel corso dei secoli ha subito varie trasformazioni in stile gotico, barocco e neoromanico.
                            </p>
                        </li>
                    </ul>
                </div>
                <div className='row d-flex justify-content-center mx-0 mb-4'>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Cagliari'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/sardegna/cagliari/bastione_saint_remy'
                            onMouseEnter={() => setIsHoveredBastioneSaintRemy(true)}
                            onMouseLeave={() => setIsHoveredBastioneSaintRemy(false)}
                            >Bastione Saint Remy {isHoveredBastioneSaintRemy && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Cagliari'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/sardegna/cagliari/palazzo_civico'
                            onMouseEnter={() => setIsHoveredPalazzoCivico(true)}
                            onMouseLeave={() => setIsHoveredPalazzoCivico(false)}
                            >Palazzo Civico {isHoveredPalazzoCivico && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Cagliari'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/sardegna/cagliari/duomo_di_cagliari'
                            onMouseEnter={() => setIsHoveredDuomodiCagliari(true)}
                            onMouseLeave={() => setIsHoveredDuomodiCagliari(false)}
                            >Duomo di Cagliari {isHoveredDuomodiCagliari && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Cagliari'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/sardegna/cagliari/torri_di_san_pancrazio_e_dell_elefante'
                            onMouseEnter={() => setIsHoveredTorridiSanPancrazioedellElefante(true)}
                            onMouseLeave={() => setIsHoveredTorridiSanPancrazioedellElefante(false)}
                            >Torri di San Pancrazio e dell'Elefante {isHoveredTorridiSanPancrazioedellElefante && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Cagliari'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/sardegna/cagliari/parco_di_molentargius_e_saline'
                            onMouseEnter={() => setIsHoveredParcodiMolentargiuseSaline(true)}
                            onMouseLeave={() => setIsHoveredParcodiMolentargiuseSaline(false)}
                            >Parco di Molentargius e Saline {isHoveredParcodiMolentargiuseSaline && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Cagliari'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/mare/sardegna/cagliari/sella_del_diavolo'
                            onMouseEnter={() => setIsHoveredSelladelDiavolo(true)}
                            onMouseLeave={() => setIsHoveredSelladelDiavolo(false)}
                            >Sella del Diavolo {isHoveredSelladelDiavolo && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Cagliari'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/mare/sardegna/cagliari/spiaggia_del_poetto'
                            onMouseEnter={() => setIsHoveredSpiaggiadelPoetto(true)}
                            onMouseLeave={() => setIsHoveredSpiaggiadelPoetto(false)}
                            >Spiaggia del Poetto {isHoveredSpiaggiadelPoetto && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                </div>
            </main>
            <Footer/>
        </AuthenticatedLayout>
    )
}
