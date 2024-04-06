import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { CardText, CardImg, Image, CardBody, CardTitle } from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import Museo_di_Antichita from '../../../../../assets/Piemonte/Museo_di_Antichita_Torino_Piemonte.jpg';
import Scultura_in_bronzo from '../../../../../assets/Piemonte/Scultura_in_bronzo_Torino_Piemonte.jpg';
import Tesoro_di_Marengo from '../../../../../assets/Piemonte/Tesoro_di_Marengo_Torino_Piemonte.jpg';
import Gli_Etruschi from '../../../../../assets/Piemonte/Gli_Etruschi_Torino_Piemonte.jpg';
import Teatro_Romano from '../../../../../assets/Piemonte/Teatro_Romano_Torino_Piemonte.jpg';
import Galleria_Archeoligica from '../../../../../assets/Piemonte/Galleria_Archeologica_Torino_Piemonte.jpg';




export default function Visita_Archeologica(props) {
  return (
    <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
    >
        <main>
            <h1 className='color-title text-center'>Museo di Antichità</h1>
            <Image src={Museo_di_Antichita} className='mb-3 mx-auto'></Image>
            <div className='margin'>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="col-lg-4">
                            <CardImg src={Scultura_in_bronzo} alt="La grande scultura in bronzo" style={{height: '500px'}}/>
                        </div>
                        <div className="col-lg-8 d-flex align-items-center">
                            <CardBody>
                                <CardTitle><h2 className='color-subtitle'>1 Torino romana: la grande scultura in bronzo</h2></CardTitle>
                                <hr className='border-3'/>
                                <CardText className='fst-italic'>
                                    Spicca al centro una testa rinvenuta il 23 agosto 1901 fra il materiale che riempiva un antico pozzo messo in luce durante la costruzione della sede dell’Istituto San Paolo, in 
                                    un’area centrale della città romana.
                                </CardText>
                                <CardText>
                                    Il giovane uomo raffigurato è acconciato secondo uno stile che suggerisce una datazione ad età augusteo-tiberiana (25 a.C.-35 d.C. circa). È probabile che raffiguri un membro dell’aristocrazia locale che imita aspetto e acconciatura degli 
                                    uomini della famiglia imperiale, non identificandosi con certezza con nessuno di loro. Altri frammenti di grandi statue in bronzo provengono dagli scavi del teatro romano e dal rinvenimento casuale del 1577, durante la costruzione
                                    della chiesa dei SS. Martiri, fra via Botero e via Garibaldi dei due soli frammenti di statua equestre recuperati a Torino. Gli scavi condotti nel 1991-1992 nell’area dei Giardini Reali hanno messo in luce un cospicuo scarico di frammenti di
                                    mantelli di fusione, cioè gli involucri in argilla impiegati per la realizzazione delle statue in bronzo: un rinvenimento senza confronti nel mondo romano per quantità e qualità dei reperti, prova che ad Augusta Taurinorum esistevano
                                    officine specializzate e fa ipotizzare che i resti di statue scoperti in città siano di produzione locale.
                                </CardText>
                            </CardBody>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="d-flex align-items-center">
                            <CardBody>
                                <CardTitle><h2 className='color-subtitle'>2 Preistoria di Torino</h2></CardTitle>
                                <hr className='border-3'/>
                                <CardText className='fst-italic'>
                                    Il territorio dove attualmente sorge la città metropolitana di Torino è stato popolato fin dal Neolitico (5.750-3.400 a.C.), come indicano pochi ma significativi reperti.
                                </CardText>
                                <CardText>
                                    Tra quelli che qui esponiamo, l’unica testimonianza per l’età del Rame è un vaso carenato, trovato nella zona dove attualmente sorge il Cimitero generale; per l’età del Ferro possiamo vantare un elmo di bronzo – proprio dal nostro esemplare questa 
                                    tipologia prende il nome di “tipo Torino” –: fu trovato in corso Belgio in corrispondenza di un’antica ansa della Dora. Sempre all’età del Ferro risale un gruppo di materiali provenienti dagli scavi del villaggio taurino del Bric San Vito di Pecetto.
                                </CardText>
                            </CardBody>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="d-flex align-items-center">
                            <CardBody>
                                <CardTitle><h2 className='color-subtitle'>3 La città romana: discariche e rito di fondazione</h2></CardTitle>
                                <hr className='border-3'/>
                                <CardText className='fst-italic'>
                                    Una scelta delle migliaia di reperti rinvenuti in recenti scavi nei pressi delle mura romane, studiati e restaurati, è raggruppata per diverse tipologie in due grandi vetrine scenografiche.
                                </CardText>
                                <CardText>
                                    Questi cumuli di vasellame da mensa e dispensa, lucerne, anfore, materiali da costruzione e per la produzione di grandi statue, resti di pasto, tra cui ossa di animali, ricostruiscono idealmente le grandi discariche organizzate che si trovavano ai lati 
                                    delle mura stesse. Inoltre sono forse proprio la traccia di un rito celebrato in occasione della fine della costruzione di queste strutture protettive le quattro anfore datate al 50-75 d.C., trovate nel 2000, infisse nel terreno negli scavi di Piazza Castello.
                                </CardText>
                            </CardBody>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="d-flex align-items-center">
                            <CardBody>
                                <CardTitle><h2 className='color-subtitle'>4 La I personaggi pubblici</h2></CardTitle>
                                <hr className='border-3'/>
                                <CardText className='fst-italic'>
                                    Le epigrafi esposte provengono da scavi e ritrovamenti casuali a Torino, occorsi fin dal Cinquecento.
                                </CardText>
                                <CardText>
                                    Ricordano il nome e il corso degli onori di alcune figure di spicco della città romana tra cui l’illustre famiglia torinese dei Glizi che ha in Quinto Glizio Atilio Agricola il più noto e documentato protagonista. Una di queste iscrizioni è dedicata a Gavio 
                                    Silvano che, originario di Augusta Taurinorum, aveva fatto una brillante carriera e si era trasferito a Roma dove aveva preso segretamente parte alla cosidetta congiura dei Pisoni contro l’imperatore Nerone.
                                </CardText>
                            </CardBody>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="d-flex align-items-center">
                            <CardBody>
                                <CardTitle><h2 className='color-subtitle'>5 La vita privata</h2></CardTitle>
                                <hr className='border-3'/>
                                <CardText className='fst-italic'>
                                    Da storici rinvenimenti e recenti indagini archeologiche i materiali esposti concorrono a raccontare le abitudini e i modi di vivere degli abitanti della città romana.
                                </CardText>
                                <CardText>
                                    Si va dalle abitazioni più ricche, come la domus di via Bonelli con il bel pavimento a mosaico, alle più comuni, come l’abitazione scoperta fuori le mura, nell’area dell’attuale Piazza San Carlo.
                                </CardText>
                            </CardBody>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="d-flex align-items-center">
                            <CardBody>
                                <CardTitle><h2 className='color-subtitle'>6 Le nocropoli e i riti per i defunti</h2></CardTitle>
                                <hr className='border-3'/>
                                <CardText className='fst-italic'>
                                    Reperti, ricostruzioni, rilievi e epigrafi documentano i monumenti funerari e le credenze oltre la vita dei cittadini di Augusta Taurinorum:
                                </CardText>
                                <CardText>
                                    A documentare usi e riti funerari per tutto il corso dell’età imperiale, sono esposte epigrafi, corredi funerari e le ricostruzioni di due grandi tombe: quella ipotetica di un imponente monumento funebre decorato a rilievo con un fregio di armi, probabilmente la 
                                    sepoltura di un importante personaggio di Augusta Taurinorum (40-55 d.C.) e quella, basata sulla documentazione di scavo, di due coniugi sepolti in una grande tomba a camera di via del Deposito (metà II sec. - primi decenni III sec. d.C.).
                                </CardText>
                            </CardBody>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="d-flex align-items-center">
                            <CardBody>
                                <CardTitle><h2 className='color-subtitle'>7 Le Longobardi</h2></CardTitle>
                                <hr className='border-3'/>
                                <CardText className='fst-italic'>
                                    Tra le testimonianze che risalgono al Ducato Longobardo di Torino (VIVIII sec. d.C.), spicca il corredo della cosiddetta Dama del Lingotto, ricco di una straordinaria parure di gioielli, e rinvenuto nel 1910 in quella che oggi è via Nizza.
                                </CardText>
                                <CardText>
                                    In questa sala si affianca ai recenti cospicui rinvenimenti di Collegno che hanno portato in luce alcune tombe di una famiglia aristocratica gota, una grande necropoli longobarda con più di 150 tombe e resti delle capanne di un villaggio dove è documentato l’avvicendamento 
                                    dei due popoli.
                                </CardText>
                            </CardBody>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="d-flex align-items-center">
                            <CardBody>
                                <CardTitle><h2 className='color-subtitle'>8 Tra Medioevo ed Età Moderna</h2></CardTitle>
                                <hr className='border-3'/>
                                <CardText className='fst-italic'>
                                    I marmi della cattedrale, il tardo medioevo e l’età moderna.
                                </CardText>
                                <CardText>
                                    Qui è esposto il gruppo di marmi del complesso episcopale, rinnovato tra la seconda metà dell’VIII secolo e la prima metà del IX; riutilizzati e dispersi dopo la ricostruzione delle chiese nell’XI secolo, sono stati recuperati in tempi diversi. Nelle vetrine sono presentati 
                                    i vetri e le ceramiche utilizzati sulle mense torinesi tra tardo medioevo e inizio età moderna. Eccezionale il rinvenimento durante lo scavo per la ripavimentazione della piazza san Giovanni, nell’area a nord del Duomo, di un tesoro di più di 7000 monete, occultato tra il 1536 
                                    e il 1538 nei tumultuosi primi anni dell’occupazione francese.
                                </CardText>
                            </CardBody>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="col-lg-4">
                            <CardImg src={Tesoro_di_Marengo} alt="Tesoro di Marengo" style={{height: '600px'}}/>
                        </div>
                        <div className="col-lg-8 d-flex align-items-center">
                            <CardBody>
                                <CardTitle><h2 className='color-subtitle'>9 Tesoro di Marengo</h2></CardTitle>
                                <hr className='border-3'/>
                                <CardText className='fst-italic'>
                                    Il Tesoro fu rinvenuto casualmente nel 1928 durante lavori agricoli presso la cascina Pederbona, a Marengo in provincia di Alessandria. Era stato probabilmente sepolto in seguito a un saccheggio.
                                </CardText>
                                <CardText>
                                    Oltre alla splendido busto dell’imperatore Lucio Vero (161-169), spiccano l’iscrizione con dedica alla Fortuna Melior, preziosi rivestimenti di arredo tra cui un capitello ornamentale, una fascia decorata con figure di divinità, il pulvino di un letto, una testina femminile di divinità, 
                                    un medaglione con busto maschile e laminette simboleggianti segni zodiacali.
                                </CardText>
                            </CardBody>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="d-flex align-items-center">
                            <CardBody>
                                <CardTitle><h2 className='color-subtitle'>10 I bronzi da Industria</h2></CardTitle>
                                <hr className='border-3'/>
                                <CardText className='fst-italic'>
                                    Dagli scavi della città romana di Industria, oggi Monteu da Po, nella città metropolitana di Torino, i più antichi in Piemonte, proviene una straordinaria quantità di bronzi di grande importanza.
                                </CardText>
                                <CardText>
                                    Tra questi, numerose statuine di Iside-Fortuna, di Arpocrate, di tori e altri animali sacri che richiamano al culto orientale di Iside e Serapide. Tra le opere più note e raffinate, un tripode pieghevole decorato da figure, due applique femminili di sacerdotessa e danzatrice velata, un 
                                    sistro (strumento sacro a Iside). La lastra bronzea che riporta la dedica al collegio dei pastophoroi (sacerdoti di Iside) ricorda il nome della città. Il noto Sileno, un originale greco di qualità straordinaria, attribuito a un’officina ellenistico-pergamena (II secolo a.C.) è ora esposto 
                                    nella Sezione di Archeologia a Torino. 
                                </CardText>
                            </CardBody>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="d-flex align-items-center">
                            <CardBody>
                                <CardTitle><h2 className='color-subtitle'>11 Età moderna e Medioevo in Piemonte</h2></CardTitle>
                                <hr className='border-3'/>
                                <CardText className='fst-italic'>
                                    In questo settore si possono ammirare, dall’alto a scendere, vasellame invetriato di età rinascimentale dagli scavi archeologici del Monastero della Visitazione di Vercelli e della Ministreria dei Poveri di Novara, armi e altri reperti che testimoniano la vita di luoghi fortificati come il 
                                    Bric San Vito di Pecetto e il Castello di Montaldo di Mondovì.
                                </CardText>
                                <CardText>
                                    Inoltre vi sono importanti ritrovamenti da luoghi sacri come l’abbazia di Fruttuaria, fondata nel 1003 da Guglielmo da Volpiano, da cui proviene un prezioso frammento di vetrata raffigurante un volto maschile barbato. Al periodo dell’occupazione longobarda (VI-VIII secolo) si data l’ingente 
                                    numero di oggetti provenienti dalla necropoli di Testona di Moncalieri, da cui provengono i ricchi corredi d’armi e il vasellame decorato “a stampiglia”; tra gli altri materiali longobardi spicca per importanza e unicità la croce aurea di Agilulfo, duca di Torino alla fine del VI secolo.
                                </CardText>
                            </CardBody>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="d-flex align-items-center">
                            <CardBody>
                                <CardTitle><h2 className='color-subtitle'>12 Età romana in Piemonte</h2></CardTitle>
                                <hr className='border-3'/>
                                <CardText className='fst-italic'>
                                    I reperti dai corredi tombali e dagli abitati forniscono un quadro della vita di alcune delle prime città romane del Piemonte, esito di precedenti centri indigeni (Vercelli) o nuove fondazioni (Ivrea).
                                </CardText>
                                <CardText>
                                    Il ruolo occupato nella società romana dalla religione è documentato dalle numerose iscrizioni e dai rilievi sulle are, spesso dedicate a divinità locali, come le “Matrone”. La prosperità dei municipi romani in età imperiale è testimoniata da vasellame di pregio e da prodotti di lusso importati: 
                                    coppe in vetro mosaicato policromo, bicchieri e tazze soffiati entro stampo bivalve, una straordinaria coppa in vetro verde con pernici sovradipinte. Degni di nota anche i prodotti delle manifatture vetrarie dell’Italia settentrionale come i balsamari a forma di colomba, tra cui la nota colombina 
                                    da Rovasenda (VC) ancora piena dell’originale contenuto.
                                </CardText>
                            </CardBody>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="d-flex align-items-center">
                            <CardBody>
                                <CardTitle><h2 className='color-subtitle'>13 Preistoria in Piemonte</h2></CardTitle>
                                <hr className='border-3'/>
                                <CardText className='fst-italic'>
                                    Per ciò che concerne i ritrovamenti di cultura celtica nel Piemonte dell’Età del Ferro (IX-II sec. a.C.), sono esposti prestigiosi reperti che attestano la presenza etrusca, come la stele di Busca, e i rapporti tra aristocrazie, come il grande bacile orientalizzante in bronzo da Castelletto Ticino.
                                </CardText>
                                <CardText>
                                    I siti dell’Età del Bronzo (2200-900 a.C.), tra cui gli insediamenti palafitticoli di Viverone e Mercurago, inseriti tra i siti Unesco, e del Neolitico, testimoni della più antica presenza umana stabile in Piemonte, e infine le tracce degli spostamenti stagionali di gruppi umani nel Mesolitico e 
                                    nel Paleolitico con tracce della presenza dell’uomo di Neanderthal sono esposti nella parte finale del Padiglione.
                                </CardText>
                            </CardBody>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="col-lg-4">
                            <CardImg src={Galleria_Archeoligica} alt="Galleria Archeologica" style={{height: '500px'}}/>
                        </div>
                        <div className="col-lg-8 d-flex align-items-center">
                            <CardBody>
                                <CardTitle><h2 className='color-subtitle'>Galleria Archeologica</h2></CardTitle>
                                <hr className='border-3'/>
                                <CardText className='fst-italic'>
                                    Le raccolte di antichità dei Musei Reali sono uno straordinario scrigno di opere uniche, accumulate in più di quattrocento anni grazie al collezionismo di Casa Savoia e alle donazioni di studiosi, esploratori e imprenditori, ma sono anche un viaggio, da Cipro a Khorsabad, tra le più importanti civiltà 
                                    del Mediterraneo antico.
                                </CardText>
                                <CardText>
                                    In questi spazi si comincia evocando la loro formazione per poi accedere attraverso la Galleria delle Sculture, alle sale dedicate alle diverse Civiltà: Greci, Etruschi, Fenici e Punici, Vicino Oriente, Cipro, Egitto ellenistico, Roma. La storia delle raccolte archeologiche torinesi inizia nel 
                                    Cinquecento, con Emanuele Filiberto e Carlo Emanuele I di Savoia. Mirando a rivaleggiare con le collezioni d’arte delle altre casate europee, i duchi acquistano intere e prestigiose raccolte antiquarie, provenienti per lo più da Roma, che confluiscono nella cosiddetta 
                                </CardText>
                                <CardText>
                                    Grande Galleria che un tempo univa il castello medievale, oggi Palazzo Madama, al nuovo palazzo ducale, attuale Palazzo Reale. Nel 1724, Vittorio Amedeo II le dona all’Università: nasce il Regio Museo di Antichità, uno dei più antichi d’Europa ospitato nel nuovo Palazzo dell’Università in via Po, la cui 
                                    sistemazione viene affidata al grande studioso veronese Scipione Maffei. La grande crescita avviene nell’Ottocento quando le raccolte di materiali classici continuano a essere incrementate e grazie alle sue vaste relazioni, il museo torinese si trova proiettato al centro della storia degli studi sulle 
                                    civiltà del passato.
                                </CardText>
                                <CardText>
                                    Nel 1828 è acquistata la collezione Moschini, di vasi greci e italioti, nel 1847, la donazione di Marcello Cerruti dà inizio alle collezioni cipriote; lo stesso anno Paolo Emilio Botta scopritore della civiltà assira, destina al Museo due grandi rilievi provenienti dai suoi scavi di Khorsabad (collezioni 
                                    orientali). Dal 1872 al 1893 è direttore un grande studioso, Ariodante Fabretti, al quale si devono nuove importanti acquisizioni e una intensa attività di riordino e riallestimento delle collezioni di antichità. Grazie a lui giungono in museo numerosi reperti etruschi: da Vulci (1871) vasi e bronzi 
                                    ritrovati negli scavi di Luciano Bonaparte, principe di Canino (collezione Canino), da Chiusi, urne cinerarie e parte del contenuto della tomba dei Matausni (1883).
                                </CardText>
                            </CardBody>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="d-flex align-items-center">
                            <CardBody>
                                <CardTitle><h2 className='color-subtitle'>1 Galleria delle sculture</h2></CardTitle>
                                <hr className='border-3'/>
                                <CardText className='fst-italic'>
                                    La galleria delle sculture richiama idealmente la Grande Galleria di Carlo Emanuele I.
                                </CardText>
                                <CardText>
                                    Vi sono esposte sculture di divinità e personificazioni, per lo più copie romane di originali greci, teste di dei, personaggi illustri e ritratti di ignoti cittadini romani, rilievi provenienti dal collezionismo sabaudo. I ritratti di imperatori sono riuniti nell’esedra, mentre al fondo spicca la statua 
                                    colossale di imperatore loricato proveniente da Susa.
                                </CardText>
                            </CardBody>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="d-flex align-items-center">
                            <CardBody>
                                <CardTitle><h2 className='color-subtitle'>2 Vicino Oriente Antico</h2></CardTitle>
                                <hr className='border-3'/>
                                <CardText className='fst-italic'>
                                    Su una grande parete è esposta una buona parte delle 800 tavolette cuneiformi che rappresentano la più importante collezione di questo tipo di oggetti in Italia.
                                </CardText>
                                <CardText>
                                    Nella stessa sale sono present mattoni dei sovrani UrNammu, Sennacherib e Nabucodonosor, mentre nella seconda sala, tra i rilievi dei grandi palazzi di Khorsabad e Ninive, spicca il ritratto di Sargon II donato insieme al ritratto di un dignitario da Paolo Emilio Botta, tra i primi scopritori della civiltà assira. 
                                </CardText>
                            </CardBody>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="d-flex align-items-center">
                            <CardBody>
                                <CardTitle><h2 className='color-subtitle'>3 I Greci</h2></CardTitle>
                                <hr className='border-3'/>
                                <CardText className='fst-italic'>
                                    Gli oggetti di ceramica sono uno strumento prezioso per comprendere la società, il costume e la religione dei greci.
                                </CardText>
                                <CardText>
                                    I vasi esposti documentano l’evoluzione tecnica e decorativa delle produzioni greche, e permettono di approfondire attraverso forme e immagini, il vivere quotidiano, usi e consuetudini. Particolare attenzione merita lo psykter, uno speciale vaso per raffreddare il vino, firmato da Euthymides, artista figlio dello 
                                    scultore Pollias, pioniere della tecnica a figure rosse e attivo nel tardo VI secolo a.C. Gli oggetti di ceramica sono uno strumento prezioso per comprendere la società, il costume e la religione dei greci. I vasi esposti documentano l’evoluzione tecnica e decorativa delle produzioni greche, e permettono di approfondire 
                                    attraverso forme e immagini, il vivere quotidiano, usi e consuetudini. Particolare attenzione merita lo psykter, uno speciale vaso per raffreddare il vino, firmato da Euthymides, artista figlio dello scultore Pollias, pioniere della tecnica a figure rosse e attivo nel tardo VI secolo a.C.
                                </CardText>
                            </CardBody>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="col-lg-4">
                            <CardImg src={Gli_Etruschi} alt="Gli Etrischi" style={{height: '600px'}}/>
                        </div>
                        <div className="col-lg-8 d-flex align-items-center">
                            <CardBody>
                                <CardTitle><h2 className='color-subtitle'>4 Gli Etruschi</h2></CardTitle>
                                <hr className='border-3'/>
                                <CardText className='fst-italic'>
                                    Queste sale sono esposti manufatti che ci consentono di conoscere meglio la civiltà etrusca fin dai suoi albori (X-IX secolo a.C.).
                                </CardText>
                                <CardText>
                                    Si tratta sostanzialmente di corredi funerari che permettono di ricostruire aspetti della vita quotidiana, ma anche le relazioni culturali, soprattutto con il mondo Greco. Queste ultime si riconoscono nelle caratteristiche di diverse tipologie di vasi, mentre il raffinatissimo bucchero, di cui abbiamo splendidi esemplari, 
                                    come il foculo corredato di vasellame in miniatura, è la più tipica produzione etrusca. Oltre a un’ampia selezione di urne cinerarie, rappresentativa, delle varie tipologie di raffigurazione policroma, la sezione si conclude con la sala dedicata alla Tomba della famiglia dei Matausni, con al centro il grande sarcofago della 
                                    capostipite. In queste sale sono esposti manufatti che ci consentono di conoscere meglio la civiltà etrusca fin dai suoi albori (X-IX secolo a.C.). Si tratta sostanzialmente di corredi funerari che permettono di ricostruire aspetti della vita quotidiana, ma anche le relazioni culturali, soprattutto con il mondo Greco.
                                </CardText>
                                <CardText>
                                    Queste ultime si riconoscono nelle caratteristiche di diverse tipologie di vasi, mentre il raffinatissimo bucchero, di cui abbiamo splendidi esemplari, come il foculo corredato di vasellame in miniatura, è la più tipica produzione etrusca. Oltre a un’ampia selezione di urne cinerarie, rappresentativa, delle varie tipologie di 
                                    raffigurazione policroma, la sezione si conclude con la sala dedicata alla Tomba della famiglia dei Matausni, con al centro il grande sarcofago della capostipite.
                                </CardText>
                            </CardBody>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="d-flex align-items-center">
                            <CardBody>
                                <CardTitle><h2 className='color-subtitle'>5 Cipro</h2></CardTitle>
                                <hr className='border-3'/>
                                <CardText className='fst-italic'>
                                    Reperti dai primi scavi a Cipro.
                                </CardText>
                                <CardText>
                                    Vasellame ceramico e vitreo, opere di statuaria in pietra e in argilla, iscrizioni e gioielli documentano la storia e la cultura multietnica dell’isola di Afrodite per più di tre millenni con approndimenti sui commerci, sui culti e la sfera femminile. La storia delle collezioni è raccontata insieme alle figure dei donatori, 
                                    tra cui spicca Luigi Palma di Cesnola, primo direttore del Metropolitan Museum di New York.
                                </CardText>
                            </CardBody>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="col-lg-4">
                            <CardImg src={Teatro_Romano} alt="Teatro Romano Torino" style={{height: '500px'}}/>
                        </div>
                        <div className="col-lg-8 d-flex align-items-center">
                            <CardBody>
                                <CardTitle><h2 className='color-subtitle'>Teatro Romano</h2></CardTitle>
                                <hr className='border-3'/>
                                <CardText className='fst-italic'>
                                    Una grande vetrata consente l’affaccio sul Teatro Romano (I-III sec. d.C), ritrovato nel 1899 durante i lavori per la costruzione della Manica Nuova di Palazzo Reale, visibile all’aperto per poco più della sua metà.
                                </CardText>
                                <CardText>
                                    La cavea semicircolare, dove sedevano gli spettatori, si conserva nella sua parte inferiore, insieme all’orchestra e alla scena. Dietro al muro di scena, dotato di dispositivi funzionali alle scenografie, si conservano le tracce del portico quadrangolare dove gli spettatori potevano muoversi nei momenti di pausa o ripararsi in caso di pioggia.
                                </CardText>
                            </CardBody>
                        </div>
                    </div>
                </Card>
            </div>
        </main>
        <Footer/>
    </AuthenticatedLayout>
  )
}
