import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';
import Footer from '@/Components/Footer';

export default function Calabria(props) {

    const [isHoveredCatanzaro, setIsHoveredCatanzaro] = useState(false);
    const [isHoveredReggioCalabria, setIsHoveredReggioCalabria] = useState(false);
    const [isHoveredCosenza, setIsHoveredCosenza] = useState(false);
    const [isHoveredCrotone, setIsHoveredCrotone] = useState(false);
    const [isHoveredTropea, setIsHoveredTropea] = useState(false);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='text-center calabria'>
                    <h1>Calabria</h1>
                </div>
                <div className='text-center margin mt-3'>
                    <p>
                        Chi pensa della <strong>Calabria</strong> che sia solo un bellissimo ma ripetitivo mix di spiagge e rive, dovrà ricredersi: con i suoi tre parchi nazionali, tra cui quello del <b>Pollino</b> e <b>della Sila</b>, che accompagnano da nord a sud lo sviluppo della 
                        regione per più di 250.000 ettari di superficie, la regione è anche meta ideale per chi ama la montagna, in tutte le sue declinazioni. Migliaia di chilometri di sentieri e una biodiversità strabiliante rendono la Calabria un territorio unico nel suo genere. E 
                        quando lo sguardo si rivolge agli antichi monasteri e santuari, mete di pellegrinaggio e chiese intrise di esotismo, ecco che la sua anima intrisa di misticismo viene fuori. Castelli sospesi sull’acqua, antichi presidi di epoca normanna, siti archeologici battuti 
                        dal sole e, infine, chilometri di spiagge, dalla costa tirrenica a quelle più selvagge della costa ionica, fanno di questa terra un luogo unico, archetipico e mitologico, in cui trovare riparo, sollievo, divertimento e relax in ogni stagione dell’anno.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className='color-subtitle'>Itinerario tra i borghi della Calabria</h2>
                    <p>
                        Da nord a sud la Calabria è anche terra di parchi naturali, ma non per questo di sola natura e paesaggi. <Link href='/destinazioni/calabria/cosenza/castrovillari' className='text-decoration-none color_link'>Castrovillari</Link>, <Link 
                        href='/destinazioni/calabria/cosenza/morano_calabro' className='text-decoration-none color_link'>Morano Calabro</Link> o <Link href='/destinazione/calabria/cosenza/mormanno' className='text-decoration-none color_link'>Mormanno</Link> sono punti di partenza 
                        eccellenti per visitare il <Link href='/visite/calabria/cosenza/parco_nazionale_del_pollino' className='text-decoration-none color_link'>Parco nazionale del Pollino</Link>, luogo di natura incontaminata, alberi rarissimi e monumentali (il pino loricato si trova 
                        solo qui e nei Balcani), orografie impensabili e magnifiche. Visitare e dormire a Civita è un’esperienza da fare, così come addentrarsi nell’esplorazione dei paesi di lingua arberëshë. L’itinerario tra i borghi calabresi prosegue ad <Link 
                        href='/destinazioni/calabria/borghi/cosenza/altomonte' className='text-decoration-none color_link'>Altomonte</Link>; ci si immerge poi nello sterminato altopiano della Sila, dove le montange ammantate di boschi sapranno alimentare il desiderio di natura e ossigere 
                        i polmoni. Si riparte poi da Acri, una delle porte di accesso del parco, e ci si sposta a Longobucco, paese dell’accoglienza e antico covo di briganti. Si risale poi fino alle sponde del Lago Cecita per ammirare i Giganti della Sila e per scoprire Camigliatello 
                        Silano, dove le strutture ricettive e le attività non mancano. Qui si abbandona la strada principale e ci si inerpica sulla panoramica Strada delle Vette che regala panorami che spaziano su tutta la Calabria. Infine, si arriva al Lago Arvo, uno dei centri meglio 
                        organizzati per le attività outodoor; immancabile un passaggio al Lago Ampollino e lìapprodo a Stilo, tappa d’eccezione perché la Cattolica è uno dei più incredibili monumenti che questa regione pur così prodiga di bellezza possa sfoggiare. A Mongiana ci si immerge 
                        nella storia industriale del borgo e, al contempo, nella meravigliosa natura del Parco delle Serre; poi si va fino a Mammola per un pranzo a base di stoccafisso e la visita al MuSaBa. Il viaggio si chiude nell Parco Nazionale dell’Aspromonte.
                    </p>
                </div>
                <div className='margin mt-3'>
                    <p>
                        Nonostante la principale attrazione sia il mare, la regione è caratterizzata anche da scenari dolomitici grazie alle <b>vette</b> e ai <b>laghi della Sila</b>: il ricco territorio che ospita i Bronzi di Riace è una meta perfetta per un mix di relax, storia, sport 
                        e buon cibo.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Origini e cenni storici sulla Calabria</h2>
                    <p>
                        La <b>storia della Calabria</b> ha origine in una lontana antichità, come dimostra anche la <b>Necropoli di Torre Mordillo</b>, sito di grande interesse archeologico che ha restituito importanti corredi dell’età del Ferro conservati oggi nel Museo Archeologico di 
                        Cosenza.
                    </p>
                    <p>
                        Il territorio è stato abitato da diversi popoli antichi: tra i primi gli Aschenazi, gli Ausoni e gli <b>Enotri</b>, quest'ultimi di origine greca stanziatisi in un territorio di gradi dimensioni, l'Enotria, che comprendeva le attuali Campania meridionale, parte della 
                        Basilicata e la Calabria. Dalla felice commistione di culture appartenenti a questi popoli nacque la civiltà dei Greci d'Occidente, passata alla storia come <b>Magna Grecia</b>.
                    </p>
                    <p>
                        Al declino degli Enotri seguì l’avvento dei <b>Bruzi</b>, stabilitisi nell’attuale Calabria che aveva assunto la forma di confederazione di città, ma con la guerra di Pirro dovettero cedere il territorio ai Romani a seguito della sconfitta di Annibale di cui erano 
                        alleati.
                    </p>
                    <p>
                        All'epoca di splendore dell'<b>Impero Romano</b> risalgono le grandi opere infrastrutturali, tra le quali la <b>Via Popilia</b>, edificata su ordine di Publio Popilio Lenate per unire Reggio a Capua.<br/>
                        Con la caduta dell'Impero Romano fu la volta di Bizantini, Normanni e, sotto il regno di Napoli, di Angioini e Aragonesi.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Le città principali della Calabria</h2>
                    <p>
                        Posta tra Tirreno e Jonio, la Calabria, terra del sole e dei sapori decisi, è ricca di destinazioni di valore.<br/>
                        Tra le città più importanti, <Link href='/destinazioni/calabria/reggio_calabria' className='text-decoration-none color_link'></Link>Reggio Calabria è alle pendici dell'<Link href='/montagna/calabria/reggio_calabria/aspromonte' className='text-decoration-none color_link'>Aspromonte</Link> 
                        e <b>di fronte allo Stretto di Messina</b>. La sua posizione privilegiata le ha permesso di intrecciare intensi rapporti commerciali con la Sicilia.<br/>
                        Ha origini greche, ma un aspetto moderno modellato dai rovinosi terremoti che l'hanno colpita. La città custodisce nel Museo Archeologico di Reggio Calabria i celeberrimi <b>Bronzi di Riace</b>.
                    </p>
                    <p>
                        <Link href='/destinazione/caabria/crotone' className='text-decoration-none color_link'>Crotone</Link> è una delle province più recenti. Affacciata sulla costa ionica, è stata un fondamentale centro culturale e di commercio ai tempi della Magna Grecia. A oggi resta il centro 
                        più industrializzato della regione. Qui si trova <b>Capo Colonna</b>, uno dei siti archeologici calabresi più famosi.
                    </p>
                    <p>
                        È ricca di fascino anche <Link href='/destinazione/calabria/cosenza' className='text-decoration-none color_link'>Cosenza</Link>, città nel centro di una delle valli più fertili della zona che l’ha resa un’importante area agricola. Nata come capitale dell'antica popolazione dei Bruzi, 
                        conserva ancora oggi, nella parte più antica in collina, un aspetto medievale. Il <Link href='/visite/calabri/cosenza/duomo_di_cosenza' className='text-decoration-none color_link'>Duomo di Cosenza</Link> è una tappa interessante: in pieno stile romanico, troneggia nel centro storico 
                        della città.
                    </p>
                    <p>
                        Di grande importanza per la regione c’è anche <Link href='/destinazioni/calabria/catanzaro' className='text-decoration-none color_link'>Catanzaro</Link>, posta su una cresta collinare. Fondata dai Bizantini in posizione elevata per ragioni difensive, nel corso della storia è stata a lungo 
                        isolata, ma nel Novecento si è sviluppata allargandosi verso il mare.<br/>
                        Gli amanti della natura si lasceranno ammaliare dal <Link href='/visite/calabria/catanzaro/parco_della_biodiversita_di_catanzato' className='text-decoration-none color_link'>Parco della Biodiversità di Catanzaro</Link> dedicato alla flora e fauna dell'area mediterranea.
                    </p>
                </div>
                <div className="margin">
                    <h2 className="color-subtitle">Cosa vedere in Calabria: 4 mete imperdibili</h2>
                    <p>
                        Oltre alle sue città più importanti, la Calabria offre numerosi punti di interesse come <Link href='/mare/calabria/vibo_valentina/capo_vaticano' className='text-decoration-none color_link'>Capo Vaticano</Link>, tra Pizzo Calabro e Nicotera, 7 chilometri di acque limpidissime, con panorami 
                        da cartolina tra lisce scogliere di tufo, rupi a picco sul mare e calette dai fondali sabbiosi e cristallini.
                    </p>
                    <p>
                        L’<b>Isola di Capo Rizzuto</b> si trova su un promontorio nel cuore dell'<b>area marina di Capo Rizzuto</b>, per l’appunto, la zona protetta più estesa d’Europa e racchiude interessanti siti archeologici e spiagge incontaminate. Gli amanti del mare non possono fare a meno di prendere il sole 
                        sulle <b>spiagge di</b> <Link href='/destinazione/calabria/borghi/tropea' className='text-decoration-none color_link'>Tropea</Link>, un angolo di paradiso dalla sabbia bianca e dal mare cristallino. 
                    </p>
                    <p>
                        Tra le più belle della regione spicca anche la <Link href='/mare/calabria/cosenza/spiaggia_dell_arcomagno' className='text-decoration-none color_link'>Spiaggia dell’Arcomagno</Link>, meta caratteristica che si trova a San Nicola Arcella: è una piccola laguna composta da piccoli ciottoli e ghiaia 
                        e deve il suo nome al grande arco di roccia che la protegge dal mare. 
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">I luoghi insoliti della Calabria: 2 mete per i curiosi</h2>
                    <p>
                        Nella bella <Link href='/mare/calabria/cosenza/riviera_dei_cedri' className='text-decoration-none color_link'>Riviera dei Cedri</Link>, gioiello nel panorama calabrese, spicca l’<b>Isola di Dino</b>, teatro di numerose battaglie storiche e utilizzata per avvistare le navi dei pirati. Ha ereditato 
                        il nome dall’antica parola greca “dina”, che significa tempesta.
                    </p>
                    <p>
                        Un imperdibile luogo insolito è anche <Link href='/destinazioni/calabria/borghi/regiocalabria/pantidattilo' className='text-decoration-none color_link'>Pentedattilo</Link>, un misterioso borgo antico delle “cinque dita”, così chiamato perché prende il nome dalla forma della rupe del Monte Calvario, 
                        a forma di una gigantesca mano. A lungo abbandonato, è diventato uno dei luoghi fantasma tra i più suggestivi d'Italia.
                    </p>
                </div>
                <div className='row d-flex justify-content-center mx-0 mb-4'>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Calabria'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/calabria/catanzaro'
                            onMouseEnter={() => setIsHoveredCatanzaro(true)}
                            onMouseLeave={() => setIsHoveredCatanzaro(false)}
                            >Catanzaro {isHoveredCatanzaro && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Calabria'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/calabria/reggio_calabria'
                            onMouseEnter={() => setIsHoveredReggioCalabria(true)}
                            onMouseLeave={() => setIsHoveredReggioCalabria(false)}
                            >Reggio Calabria {isHoveredReggioCalabria && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Calabria'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/calabria/cosenza'
                            onMouseEnter={() => setIsHoveredCosenza(true)}
                            onMouseLeave={() => setIsHoveredCosenza(false)}
                            >Cosenza {isHoveredCosenza && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Calabria'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/calabria/crotone'
                            onMouseEnter={() => setIsHoveredCrotone(true)}
                            onMouseLeave={() => setIsHoveredCrotone(false)}
                            >Crotone {isHoveredCrotone && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Calabria'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazione/calabria/borghi/tropea'
                            onMouseEnter={() => setIsHoveredTropea(true)}
                            onMouseLeave={() => setIsHoveredTropea(false)}
                            >Tropea {isHoveredTropea && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                </div>
            </main>
            <Footer/>
        </AuthenticatedLayout>
    )
}
