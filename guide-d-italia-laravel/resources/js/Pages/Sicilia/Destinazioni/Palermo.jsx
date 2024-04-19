import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';

export default function Palermo(props) {

    const [isHoveredPalazzodeiNormanni, setIsHoveredPalazzodeiNormanni] = useState(false);
    const [isHoveredTeatroMassimo, setIsHoveredTeatroMassimo] = useState(false);
    const [isHoveredCattedralediPalermo, setIsHoveredCattedralediPalermo] = useState(false);
    const [isHoveredSantaMariadellAmmiraglio, setIsHoveredSantaMariadellAmmiraglio] = useState(false);
    const [isHoveredDuomodiMonreale, setIsHoveredDuomodiMonreale] = useState(false);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='palermo' style={{ position: 'relative' }}>
                    <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Pelermo</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Città</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Città dalle origini fenicie, poi dominata dai romani, dagli arabi, dai normanni e dagli svevi, <b>sfoggia testimonianze del suo glorioso passato ovunque si guardi</b>. Lo stile arabo-normanno si fonde con il barocco e il Liberty in un mix di rara 
                        bellezza, da osservare con sorpresa e meraviglia. Questa metropoli costiera, tra le più grandi d'Europa, conquista con i suoi colori, profumi e sapori che travolgono i sensi e animano le strade. Decadente e sontuosa, antica e contemporanea, 
                        autentica eppure ammaliatrice: state in guardia, <strong>Palermo</strong> vi entrerà nel cuore e nelle viscere per non uscirne mai più. 
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Storia e curiosità su Palermo</h2>
                    <p>
                        La <b>storia di Palermo</b> è ricca e affascinante e basta guardarsi attorno per averne conferma. I primi a occupare la valle in cui sorge Palermo furono i Fenici che, nel VII secolo a.C., vi fondarono una città chiamata Zyz. I greci tentarono più 
                        volte di appropriarsi di quel luogo magico, ma nell'intento ci riuscirono solo i Romani durante la I Guerra Punica. Con la caduta dell’Impero Romano, Palermo fu soggetta alle invasioni barbariche per mano dei Vandali fino a che, nel 535 d.C. le 
                        flotte bizantine di Belisario dell'Impero Romano d’Oriente conquistarono la città, rendendola capitale del loro regno nell’Italia del sud.
                    </p>
                    <p>
                        Ai Bizantini dobbiamo l'arte del decoro con intarsi marmorei e mosaici dorati che impreziosiscono Palermo. Nell’827 d.C. arrivarono gli <b>Arabi in Sicilia</b> che costruirono moschee e grandi palazzi. Ad essi, dal 1070, subentratrono i Normanni 
                        che però non li cacciarono dalla città. I re Normanni, infatti, crearono uno stato all’avanguardia in cui convivevano pacificamente religioni ed etnie diverse. Un clima che piacque a Federico II, Imperatore del Sacro Romano Impero e nipote di 
                        Federico Barbarossa. Nella Palermo medievale imperò lo stile architettonico arabo-normanno che ancora oggi possiamo ammirare e annoverare nella World Heritage List dell'UNesco insieme ad altri monumenti delle vicine Monreale e Cefalù.
                    </p>
                    <p>
                        Nel XIII secolo Carlo d’Angiò sconfisse il figlio di Federico II. Poco dopo però gli Aragonesi si impadronirono di Palermo, come richiesto dalla cittadinanza insorta contro gli Angioini. Dal 1494 al 1759 Palermo fu governata dai Vicerè, nobili 
                        eletti dai loro pari per governare l'isola in rappresentanza del sovrano poi aboliti dai Borbone. Se in un primo momento il re di Napoli veniva incoronato anche re di Sicilia, dopo il Congresso di Vienna nacque il <b>Regno delle due Sicilie</b> che 
                        durò fino all'arrivo di Garibaldi  e all’annessione al Regno d’Italia.Quello a cavallo tra il 1800 e il 1900  fu il periodo delle grandi costruzioni Liberty dal fascino, ancor oggi, insuperabile.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Cosa vedere a Palermo: i 3 luoghi imperdibili</h2>
                    <p>
                        Il mare, l'intreccio di culture fatto arte, il tripudio del barocco nelle in chiese, piazze e palazzi, l'allegra confusione nei mercati storici della <b>Vuccirìa</b> e del <b>Ballarò</b>: cosa vedere a Palermo? Le alternative sono tante, ma noi ve ne 
                        suggeriamo 3.
                    </p>
                    <ul className="lista">
                        <li>
                            <p>
                                Abbandonatevi al <b>lato spirituale di Palermo</b>, con la sua cattedrale: un immenso edificio consacrato alla Vergine Assunta che nasce su una precedente basilica cristiana, trasformata dai Saraceni in moschea e riconvertita al culto 
                                cristiano dai Normanni. Oltre alla sua storia curiosa, conserva le spoglie dei reali di Sicilia Federico II e Ruggero II e quelle di Santa Rosalia, patrona di Palermo.
                            </p>
                        </li>
                        <li>
                            <p>
                                Ammirate la magnificenza di uno dei monumenti iconici di Palermo: <Link href='/visite/sicilia/palermo/palazzo_dei_normanni' className='text-decoration-none color_link'>Palazzo dei Normanni</Link>, fortificazione eretta dagli arabi nel IX secolo poi 
                                ampliata dai Normanni. Gli appartamenti sono abbelliti da mosaici ed affreschi realizzati in epoche diverse e la <b>cappella Palatina</b>cappella Palatina , al suo interno, è decorata con i più bei mosaici bizantini di tutta la Sicilia. Non 
                                dimenticate di alzare lo sguardo per ammirare quelli di matrice islamica icastonati tra le muqarnas, stalattiti intagliate nel legno. 
                            </p>
                        </li>
                        <li>
                            <p>
                                Sognate in uno dei templi della <b>Palermo della musica</b>: il <Link href='/visite/sicilia/palermo/teatro_massimo_di_palermo' className='text-decoration-none color_link'>Teatro Massimo di Palermo</Link>, costruito nel 1887 in un punto in cui si 
                                trovavano tre chiese e altrettanti monasteri, è oggetto di una curiosa leggenda: pare che una delle suore di cui fu distrutta la tomba si aggiri ancora lì. 
                            </p>
                        </li>
                    </ul>
                </div>
                <div className='row d-flex justify-content-center mx-0 mb-4'>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Palermo'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/sicilia/palermo/palazzo_dei_normanni'
                            onMouseEnter={() => setIsHoveredPalazzodeiNormanni(true)}
                            onMouseLeave={() => setIsHoveredPalazzodeiNormanni(false)}
                            >Palazzo dei Normanni {isHoveredPalazzodeiNormanni && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Palermo'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/sicilia/palermo/teatro_massimo'
                            onMouseEnter={() => setIsHoveredTeatroMassimo(true)}
                            onMouseLeave={() => setIsHoveredTeatroMassimo(false)}
                            >Teatro Massimo {isHoveredTeatroMassimo && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Palermo'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/sicilia/palermo/cattedrale_di_palermo'
                            onMouseEnter={() => setIsHoveredCattedralediPalermo(true)}
                            onMouseLeave={() => setIsHoveredCattedralediPalermo(false)}
                            >Cattedrale di Palermo {isHoveredCattedralediPalermo && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Palermo'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/sicilia/palermo/santa_maria_dell_ammiraglio'
                            onMouseEnter={() => setIsHoveredSantaMariadellAmmiraglio(true)}
                            onMouseLeave={() => setIsHoveredSantaMariadellAmmiraglio(false)}
                            >Santa Maria dell'Ammiraglio {isHoveredSantaMariadellAmmiraglio && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Palermo'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/sicilia/palermo/duomo_di_monreale'
                            onMouseEnter={() => setIsHoveredDuomodiMonreale(true)}
                            onMouseLeave={() => setIsHoveredDuomodiMonreale(false)}
                            >Duomo di Monreale {isHoveredDuomodiMonreale && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                </div>
            </main>
            <Footer/>
        </AuthenticatedLayout>
    )
}
