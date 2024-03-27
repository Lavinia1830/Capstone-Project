import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';
import Footer from '@/Components/Footer';
import {Card} from 'react-bootstrap';
import Ponte_Romano_Aosta from '../../../../assets/Valle_d_Aosta/Ponte_romano_Aosta_Valle_d_Aosta.jpg';
import Arco_Augusto_Aosta from '../../../../assets/Valle_d_Aosta/Arco_di_Augusto_Aosta_Valle_d_Aosta.jpg';
import Porta_Praetoria from '../../../../assets/Valle_d_Aosta/Porta_praetoria_Aosta_Valle_d_Aosta.jpg';
import Teatro_Romano from '../../../../assets/Valle_d_Aosta/Teatro_romano_aosta_Valle_d_Aosta.jpg';
import Criptoportico from '../../../../assets/Valle_d_Aosta/Criptoportico_Aosta_Valle_d_Aosta.jpg';
import Cinta_Muraria from '../../../../assets/Valle_d_Aosta/Cinta_muraria_Valle_d_Aosta.jpg';
import S_Orso from '../../../../assets/Valle_d_Aosta/S_Orso_Valle_d_Aosta.jpg';
import Cattedrale_S_Maria from '../../../../assets/Valle_d_Aosta/Cattedrale_di_Aosta_Valle_d_Aosta.jpg';
import Basilica_S_Lorenzo from '../../../../assets/Valle_d_Aosta/Chiesa_san_lorenzo_Valle_d_Aosta.jpg';
import Affresci from '../../../../assets/Valle_d_Aosta/Affreschi_ottoniani_Aosta_Valle_d_Aosta.jpg'

export default function Aosta_romana_e_medievale(props) {
  return (
    <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Aosta romana e Aosta medievale</h2>}
    >
        <main>
            <div className='aosta' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Aosta romana e Aosta madievale</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Aosta romana e medievale</p>
            </div>
            <div className='margin mt-3'>
                <div>
                    <p>
                        La città di <b>Augusta Praetoria</b> fu dai Romani nel 25 a.C. e fu così chiamata in onore dell'imperatore Austo. Si tratta di una delle città romane 
                        meglio conservate e per questo detta "<b>La piccola Roma delle Alpi</b>".
                    </p>
                </div>
                <div>
                    <h2 className='color-subtitle'>Informazioni su aosta romana</h2>
                    <p>
                        Il <b>centro storico di Aosta</b> conserva pregevoli resti archelogici di epoca romana e l'impianto urbano stesso della città ricalca l'impianto del 
                        <b>castrum romano</b>. Forndata in una zona ampia e pianeggiante alla confluenza di due torrenti (il Buthier e la Dora Baltea), <b>Augusta Praetoria
                        Salassorum</b> doveva esssere una testa di ponte di collegamento con i due valichi alpini principali della Valle d'Aosta.
                    </p>
                    <p>
                        Dell'epoca romana oggi si può ammirare il <Link href='/luoghi_visite/il_ponte_romano' className='text-decoration-none color_link'>ponte roamo sul torrente Buthier </Link> 
                        che faceva parte della <Link href='/visite/strada_romana_gallie' className='text-decoration-none color_link'>Strada romana delle Gallie</Link>. <br/>
                        L'<Link href='/luoghi_visite/arco_d_augusto' className='text-decoration-none color_link'>Arco d'Augusto</Link> eretto in ordine dell'imperatore accoglie il visitatore prima di entrare 
                        nel centro cittadino. La <Link href='/luoghi_visite/porta_praetoria' className='text-decoration-none color_link'>Porta Praetoria</Link> costituita l'ingesso monumentale 
                        della città ed è l'unica porta ancora conservatasi fino ad oggi.<br/>
                        Il <Link href='/luoghi_visite/teatro_romano_di_aosta' className='text-decoration-none color_link'>teatro</Link> è il luogo più affascinante, conala sua maestosa faccia 
                        alta ben 22 metri ed i resti della cavea, dellórchestra e del proscenio consente di immaginare gli attori recitare tragedie e commedie per gli oltre 2500 
                        spettatori presenti. Poco distante si trova un anfiteatro, oggi parzialmente inglobato in un convento.
                    </p>
                    <p>
                        Il <b>Foro romano</b>, si tuato allínterno del Decumano Massimo e del Cardo Massimo, era la zona maggiormente trafficata della città dove si concludevano 
                        affari e si adoravano gli dèi. Del <b>Foro romano di Aosta</b> oggi è visibile il <Link to='/luoghi_visite/criptoportico_forense' className='text-decoration-none color_link'>criptoportico forense</Link>,
                        ovvero il porticato nascosto, un luogo ricco di fascino che circondava i due templi dell'area sacra. <br/>
                        Passeggiando lungo il perimetro del centro storico è possibile inoltre ammirare parte della <Link to='/luoghi_visite/cinta_muraria' className='text-decoration-none color_link'>cinta muraria </Link>
                        e dalle tori difensive.
                    </p>
                </div>
                <div>
                    <h2 className='color-subtitle'>Informazioni su Aosta medievale</h2>
                    <p>
                        Il centro storico di Aosta conserva inoltre numerosi monumenti di epoca medievaleed in particolare le chiese più importanti della diocesi.
                    </p>
                    <p>
                        Insieme visiteremo gli scavi della <b>chiesa peleocristiana di San Lorenzo</b>, sorta nel IV secolo come luogo di sepoltura dei primi vescovi valdostani. 
                        Nel Medioevo la chiesa diventerà poi sede della parocchia per poi essere sconsacrata. Oggi ospita regolarmente alune mostre temporanee.
                    </p>
                    <p>
                        Visiteremo poi la <Link to='/luoghi_visite/collegiata_di_sant_orso' className='text-decoration-none color_link'>Collegita di Sant'Orso</Link>, un vero e proprio 
                        gioiello tardogotico che merita assolutamente di essere visto! Il complesso è costituito dalla torre campanaria, la <b>chiesa di Snt'Orso</b> con la crpta 
                        romanica ed il <b>celebre mosaico del coro</b>, il meraviglioso <b>chiostro romanico</b> coi suoi capitelli istoriati ed il Priorato unico edificio in cotto 
                        della Valle dÁosta. 
                    </p>
                    <p>
                        Il <Link to='luoghi_visite/cattedrale_di_santa_maria_assunta' className='text-decoration-none color_link'>Cattedrale</Link>, sede vescovile, sorge a ridosso del <b>criptoportico
                        romano</b> e sui resti di una domus che dalla età del IV secolo accole le assemblee di primi fedeli creistiano a cui veniva impartito il sacramento del Battesimo.
                        La Cattedrale costutuisce ancora oggi il polo spirituale principale della diocesi. <br/>
                        Al suo interno si possono ammirare gli <Link to='/luoghi_visite/affreschi_ottoniani' className='text-decoration-none color_link'>affresci ottoniani</Link>, la cripta romanica, i pregevoli mosaici e stalli del 
                        coro e le numerose cappelle.
                    </p>
                </div>
                <div>
                    <h2 className='color-subtitle'>Visita guidata della città di Aosta</h2>
                    <p>
                        Una città di 2000 anni fa che merita di essere scoperta! Una piacevole <b>visita guidata con una guida turistica della Valle d'Aosta</b> consentirà di 
                        scoprire tutti i luoghi del passato per vivere tutto il fascino di Aosta romana e di Aosta medievale.
                    </p>
                </div>
                <div>
                    <h2 className='color-subtitle'>Gita scolastica ed Aosta</h2>
                    <p>
                        La vivita di Aosta romana con i suoi monumenti è particolarmente adatta per le scuole primarie per le quali sono stati studiati dei laboratori didattici.
                        Visita l'apposita senzione dedicata ad <Link to='/gite_scolastiche_scuola_primaria' className='text-decoration-none color_link'>Aosta romana per la scuola primaria</Link>
                    </p>
                </div>
                <div>
                    <h2 className='color-subtitle'>Luoghi visitati</h2>
                    <div className="container d-flex justify-content-center flex-wrap">
                        <Card className='my-card'>
                            <Link href="/luoghi_visite/il_ponte_romano" className='d-flex text-decoration-none color_link'>
                                <Card.Img src={Ponte_Romano_Aosta} style={{width: "150px", height: "80px"}}/>
                                <Card.Body>
                                    <Card.Title className='fs-6'>Ponte Romano Aosta</Card.Title>
                                </Card.Body>
                            </Link>
                        </Card>
                        <Card className='my-card'>
                            <Link href="/luoghi_visite/arco_d_augusto" className='d-flex text-decoration-none color_link'>
                                <Card.Img  src={Arco_Augusto_Aosta} style={{width: "150px", height: "80px", backgroundSize: "cover", backgroundPosition: "center"}}/>
                                <Card.Body>
                                    <Card.Title className='fs-6'>Arco d'Augusto Aosta</Card.Title>
                                </Card.Body>
                            </Link>
                        </Card>
                        <Card className='my-card'>
                            <Link href="/luoghi_visite/porta_praetoria" className='d-flex text-decoration-none color_link'>
                                <Card.Img  src={Porta_Praetoria} style={{width: "150px", height: "80px", backgroundSize: "cover", backgroundPosition: "center"}}/>
                                <Card.Body>
                                    <Card.Title className='fs-6'>Porta Praetoria Aosta</Card.Title>
                                </Card.Body>
                            </Link>
                        </Card>
                        <Card className='my-card'>
                            <Link href='/luoghi_visite/teatro_romano_di_aosta' className='d-flex text-decoration-none color_link'>
                                <Card.Img  src={Teatro_Romano} style={{width: "150px", height: "80px", backgroundSize: "cover", backgroundPosition: "center"}}/>
                                <Card.Body>
                                    <Card.Title className='fs-6'>Teatro Romano di Aosta</Card.Title>
                                </Card.Body>
                            </Link>
                        </Card>
                        <Card className='my-card'>
                            <Link to="/criptoportici-forense" className='d-flex text-decoration-none color_link'>
                                <Card.Img  src={Criptoportico} style={{width: "150px", height: "80px", backgroundSize: "cover", backgroundPosition: "center"}}/>
                                <Card.Body>
                                    <Card.Title className='fs-6'>Criptoportico Forense</Card.Title>
                                </Card.Body>
                            </Link>
                        </Card>
                        <Card className='my-card'>
                            <Link to="/cinta_muraria" className='d-flex text-decoration-none color_link'>
                                <Card.Img  src={Cinta_Muraria} style={{width: "150px", height: "80px", backgroundSize: "cover", backgroundPosition: "center"}}/>
                                <Card.Body>
                                    <Card.Title className='fs-6'>Cinta muraria Aosta</Card.Title>
                                </Card.Body>
                            </Link>
                        </Card>
                        <Card className='my-card'>
                            <Link to="/collegiata_di_santarso" className='d-flex text-decoration-none color_link'>
                                <Card.Img  src={S_Orso} style={{width: "150px", height: "80px", backgroundSize: "cover", backgroundPosition: "center"}}/>
                                <Card.Body>
                                    <Card.Title className='fs-6'>Calleggiata di Sant'Orso</Card.Title>
                                </Card.Body>
                            </Link>
                        </Card>
                        <Card className='my-card'>
                            <Link to="/cattedrale_di_santa_maria_assunta" className='d-flex text-decoration-none color_link'>
                                <Card.Img  src={Cattedrale_S_Maria} style={{width: "150px", height: "80px", backgroundSize: "cover", backgroundPosition: "center"}}/>
                                <Card.Body>
                                    <Card.Title className='fs-6'>Cattedrale di Santa Maria Assunta</Card.Title>
                                </Card.Body>
                            </Link>
                        </Card>
                        <Card className='my-card'>
                            <Link to="/basilica_paleocristiana_di_san_lorenzo" className='d-flex text-decoration-none color_link'>
                                <Card.Img  src={Basilica_S_Lorenzo} style={{width: "150px", height: "80px", backgroundSize: "cover", backgroundPosition: "center"}}/>
                                <Card.Body>
                                    <Card.Title className='fs-6'>Basilica Paleocristiana di San Lorenzo</Card.Title>
                                </Card.Body>
                            </Link>
                        </Card>
                        <Card className='my-card'>
                            <Link to="/affreschi_ottoniani" className='d-flex text-decoration-none color_link'>
                                <Card.Img  src={Affresci} style={{width: "150px", height: "80px", backgroundSize: "cover", backgroundPosition: "center"}}/>
                                <Card.Body>
                                    <Card.Title className='fs-6'>Affreschi ottoniani</Card.Title>
                                </Card.Body>
                            </Link>
                        </Card>
                    </div>
                </div>
                <div>
                    <h3 className='color-subtitle'>Biglietti</h3>
                    <h3>Prezzi dei siti archelogici</h3>
                    <p>
                        Il biglietto è comulativo e valido sei mesi dalla data di emissione per un ingresso in ognuno dei seguienti siti: <br/>
                        Teatro romano, Criptoportico forense, Chiesa paleocristiana di San Lorenzo, Museo Archeologico Regionale.
                    </p>
                    <p>
                        Intero: € 10,00 <br/>
                        Ridotto: € 8,00 (coloro accompagnati da guida turistica; comitive di almeno 25 persone paganti, convenzioni specifiche) <br/>
                        Ridotto giovani: € 3,00 per tutti i giovani dai 19 ai 25 anni compresi <br/>
                        Gratutito: bambini e ragazzi fino ai 18 anni compiuti, scolaresche, soggetti portatori di handicap in possesso della certificazione di cui alla legge 104/92 e loro
                        accompagnatori, insegnati e accompagnatori di scolaresche, abbonati circuito Musei Piemonte/Lombardia (muniti di card in corso di validità)
                    </p>
                    <h3 className='color-subtitle'>Tariffe del complesso di S. Orso</h3>
                    <p>
                        <b>Tariffe ridotte per persone accompagnate da guida turistica della Valle d'Aosta</b>:
                    </p>
                    <p>
                        Chiostro romanico € 1,00 <br/>
                        Chiostro + affreschi € 3,50 <br/>
                        Chiostro + affreschi + cappella € 5,00 <br/>
                    </p>
                    <p>
                        Gratuito per i minori di 6 anni, sogetti portatori di handicap in possesso della ceritificazione di cui alla legge 104/92 e loro accompagnatori; per le scolaresche gli
                        alunni pagano e i docenti hanno la gratuità
                    </p>
                    <p>
                        Alcuni stiti di pregevole valore artistico sono visibili solo su richiesta come gli affreschi ottoniati risalenti al XI secolo e la Cappella del Priorato.
                    </p>
                </div>
                <div>
                    <h3 className='color-subtitle'>Orari</h3>
                    <h3 className='color-subtitle'>Orari dei siti archeologici</h3>
                    <p>
                        Orario estivo valido da aprile e settembre aperti tutti i giorni dalle 9 alle 19. <br/>
                        Orario invernali valido tutti i giorni da ottobre e marzo dalle 10 alle 13 e dalle 14 alle 17 (Il Museo Archeologico chiude alle ore 18)
                    </p>
                    <p>
                        Chiuso il 25 dicembre ed il 1º gennaio. <br/>
                        <b>Il Teatro romano sarà chiuso per lavori dal 7 novembre 2023 a maggio 2025</b>
                    </p>
                    <p>
                        Orari oaggiornati <Link to='/architettura_roamana/aosta/teatro_romano/736' className='text-decoration-none color_link'>QUI</Link>
                    </p>  
                </div>
                <div>
                    <h3 className='color-subtitle'>Orari di apertura del Chiostro di S. Orso</h3>
                    <p>
                        Orario del chiostro da aprile a settembre - aperto tutti i giorni dalle 9 alle 19 <br/>
                        Orario del chiostro da novembre a febbraio - aperto tutti i giorni dalle 9 alle 17 <br/>
                        Orario del chiostro a marzo e a ottobre - aperto tutti i giorni dalle 9 alle 18 
                    </p>
                </div>
                <div className='margin mb-4'>
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.6522377817105!2d7.32078977661239!3d45.738068615123545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478920b0321891bd%3A0x3c1e741698148df2!2sVia%20Sant%27Anselmo%2C%203%2C%2011100%20Aosta%20AO%2C%20Italia!5e0!3m2!1sit!2sus!4v1711461826816!5m2!1sit!2sus"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className='mx-auto'
                    >
                    </iframe>
                </div>
                <div className='margin'>
                    <h3 className='color-subtitle'>Articoli</h3>
                    <ul className='lista'>
                        <li>
                            <Link to='/cosa_vedere_ad_aosta_in_un_giorno' className='text-decoration-none color_link'>Cosa vedere ad Aosta in un giorno</Link>
                        </li>
                        <li>
                            <Link to='/cosa_vedere_aosta_romana' className='text-decoration-none color_link'>Augusta Preatoria, visite alla scoperta di Aosta romana</Link>
                        </li>
                        <li>
                            <Link to='/aosta_medievale_tra_spiritualita_e_arte' className='text-decoration-none color_link'>Aosta Medievale tra spiritualità e arte</Link>
                        </li>
                        <li>
                            <Link to='/orari_siti_romani_aosta' className='text-decoration-none color_link'>Orari e Tariffe Siti archeologici Valle d'Aosta</Link>
                        </li>
                    </ul>
                </div>
                
            </div>
        </main>
        <Footer/>
    </AuthenticatedLayout>
  )
}
