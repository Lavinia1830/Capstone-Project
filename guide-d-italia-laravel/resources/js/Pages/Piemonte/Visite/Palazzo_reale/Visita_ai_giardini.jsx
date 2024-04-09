import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { CardText, CardImg, Image, CardBody, CardTitle } from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import Giardini_Reali from '../../../../../assets/Piemonte/Giardini_Reali_Torino_Piemonte.jpg';
import Vasi_de_Giardino_Ducale from '../../../../../assets/Piemonte/Vasi_de_Giardino_Ducale_Torino_Piemonte.jpg';
import Ulisse_di_Giuliano_Vangi from '../../../../../assets/Piemonte/Ulisse_di_Giuliano_Vangi_Torino_Piemonte.jpg';
import Pietre_Preziose_di_Giulio_Paolini from '../../../../../assets/Piemonte/Pietre_Preziose_di_Giulio_Paolini_Torino_Piemonte.jpg';
import Fontana_dei_Tritoni from '../../../../../assets/Piemonte/Fontana_dei_Tritoni_Torino_Piemonte.jpg';
import Giardini_della_Cavallerizza from '../../../../../assets/Piemonte/Giardini_della_Cavallerizza_Torino_Piemonte.jpg';

export default function Visita_ai_giardini(props) {
  return (
    <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
    >
        <main>
        <h1 className='color-title text-center'>Museo di Antichità</h1>
            <Image src={Giardini_Reali} className='mb-3 mx-auto'></Image>
            <p className='margin fst-italic mb-3'>
                I Giardini Reali si estendono su una superficie di oltre sette ettari e sono liberamente accessibili. Il percorso comprende il Giardino Ducale, nucleo più antico di matrice cinquecentesca, il Boschetto e i Giardini Bassi, di impianto ottocentesco, il Giardino di 
                Levante, con la fontana di Simone Martinez, e i Giardini della Cavallerizza, risalenti al Settecento. Numerose specie arboree e floreali arricchiscono l’area: un faggio pendulo e platani centenari, un grande ginkgo biloba e le rose Bar-Pey, create appositamente 
                per i Giardini Reali. Le sculture contemporanee di Giuliano Vangi e Giulio Paolini valorizzano l’area del Giardino Ducale e del Boschetto.
            </p>
            <div className='margin'>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className=" d-flex align-items-center">
                            <CardBody>
                                <CardTitle><h2 className='color-subtitle'>Giardino Ducale</h2></CardTitle>
                                <hr className='border-3'/>
                                <CardText className='fst-italic'>
                                    Il Giardino Ducale costituisce la parte più antica dei Giardini, come ricorda ancora oggi il nome: l’impianto primitivo risale al secondo Cinquecento e si deve al duca Emanuele Filiberto, che lo realizzò secondo i canoni del giardino 
                                    all’italiana, con giochi d’acqua, grotte, fontane e peschiere ornate di sculture.
                                </CardText>
                                <CardText>
                                    Nel Seicento venne modificato assumendo una forma geometrica, suddivisa in quattro parti uguali con al centro la Fontana del Rondò, circondata da statue. Attualmente, il Giardino Ducale ripropone l’assetto voluto dal re Umberto I nel 1886, 
                                    di gusto neobarocco, con le aiuole spartite in tre zone dai viali. Una moderna fontana a zampilli è stata aggiunta di recente al centro dell’area mentre all’interno di alcune delle aiuole che disegnano il profilo del giardino sono state piantate 
                                    delle specie arboree che rimandano idealmente quelle originariamente qui presenti.
                                </CardText>
                            </CardBody>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="col-lg-4">
                            <CardImg src={Vasi_de_Giardino_Ducale} alt="Vasi del Giardino Ducale" style={{height: '500px'}}/>
                        </div>
                        <div className="col-lg-8 d-flex align-items-center">
                            <CardBody>
                                <CardTitle><h3 className='color-subtitle'>1 Vasi del Giardino Ducale</h3></CardTitle>
                                <hr className='border-3'/>
                                <CardText className='fst-italic'>
                                    I vasi in ghisa che decorano i perimetri dei parterre del Giardino Ducale sono copie ottocentesche di vasi più antichi, in origine fusi in bronzo.
                                </CardText>
                                <CardText>
                                    Si distinguono dai modelli (ora in gran parte conservati all’interno dei Musei Reali) per il diverso materiale, per il disegno semplificato delle anse e per la presenza dello stemma reale in sostituzione di quello ducale.
                                </CardText>
                            </CardBody>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="col-lg-4">
                            <CardImg src={Ulisse_di_Giuliano_Vangi} alt="Ulisse di Giuliano Vangi" style={{height: '500px'}}/>
                        </div>
                        <div className="col-lg-8 d-flex align-items-center">
                            <CardBody>
                                <CardTitle><h3 className='color-subtitle'>2 Ulisse di Giuliano Vangi</h3></CardTitle>
                                <hr className='border-3'/>
                                <CardText className='fst-italic'>
                                    L’opera appartiene alla produzione di Giuliano Vangi, nato nel 1931 e ad oggi uno dei più importanti scultori viventi. Raffigurante Ulisse e realizzata nel 2008 in granito nayarian brown con dimensioni imponenti, la scultura 
                                    si colloca nel solco di una produzione dal forte impatto visivo e simbolico. 
                                </CardText>
                                <CardText>
                                    È un’opera figurativamente complessa, per la quale Vangi ha utilizzato due grossi blocchi di granito uniti insieme, come emerge dalla fessura centrale che crea un sorta di luce interna. Ogni lato della scultura dona allo spettatore un diverso 
                                    punto di osservazione e un significato specifico: frontalmente le mani giunte dell’uomo indicano la forza e la tenacia con cui Ulisse combatte contro le avversità della vita, sul retro il ritratto femminile, identificato in Penelope, rappresenta 
                                    la dolcezza della donna che attende il ritorno dello sposo, da un lato la scultura presenta delle ondulazioni che ricordano il mare, mentre dall’altro i volumi granitici si incastrano tra di loro creando delle studiate articolazioni scultoree. 
                                    Il granito scelto da Vangi è un materiale duro, monolitico, resistente, freddo e possente, che rimane intatto in eterno e si presta a suscitare emozioni forti. Ulisse rappresenta l’eroe che lotta con tenacia per raggiungere i propri obiettivi: 
                                    stringe i pugni per non fermarsi e per superare tutti gli ostacoli e le avversità. Giuliano Vangi riesce a infondere alle sue sculture, ispirate ai grandi modelli del passato, una manifesta forza espressiva, in quanto interessato a sondare 
                                    l’uomo con le sue passioni e i suoi sentimenti più profondi. Un linguaggio contemporaneo, accompagnato da una grande ricercatezza formale, crea in Vangi un intimo rapporto tra l’uomo di un tempo e quello attuale, in un ripetersi di problematiche 
                                    esistenziali che da sempre coinvolgono il genere umano. come ha dichiarato lo stesso scultore: “L’uomo di oggi e la sua lotta contro un mondo ostile resta comunque il tema fondamentale della mia opera, tutto il resto m’interessa poco. Voglio 
                                    raccontare i suoi conflitti interiori e i problemi che affronta a livello sociale, solo così sento di essere a posto con la mia coscienza: aver ‘raccontato’ qualcosa che riguarda tutti gli uomini e non essermi limitato alle mie piccole gioie o 
                                    dolori personali”.
                                </CardText>
                            </CardBody>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className=" d-flex align-items-center">
                            <CardBody>
                                <CardTitle><h2 className='color-subtitle'>Giardino Bassi e le Mura</h2></CardTitle>
                                <hr className='border-3'/>
                                <CardText className='fst-italic'>
                                    Il circuito delle mura dei Musei Reali, conservato per circa un chilometro nei Giardini, costituisce l’unico tratto delle antiche fortificazioni torinesi risparmiato dalle demolizioni napoleoniche.
                                </CardText>
                                <CardText>
                                    Il Bastion Verde è uno dei primi quattro baluardi angolari, realizzati già a metà del Cinquecento, in sostituzione dell’antica cinta romano-medievale, divenuta vulnerabile ai tiri dell’artiglieria. A questa prima sezione, si salda nel corso del 
                                    Seicento l’ampliamento delle mura verso levante, consentendo così l’estensione dei Giardini fino alla grande terrazza con bastione detta di San Maurizio, costruita nei Giardini della Cavallerizza. Quando nell’anno 1800 si decreta la demolizione 
                                    delle fortificazioni, il tratto di mura a ridosso dei Giardini Bassi viene risparmiato insieme ai relativi spalti sottostanti, delimitati da nuovi viali alberati, riservati all’ampliamento del Jardin Imperial. Gli appezzamenti sotto le mura per 
                                    alcuni anni ospitano il Real Giardino Zoologico, tra il 1861 e il 1886, molto amato da Vittorio Emanuele II e dai torinesi, ma nel 1914 vengono ceduti alla Città di Torino per farne un parco pubblico. Alla Real Casa rimane così solo il tratto 
                                    corrispondente al Bastion Verde: è qui che vengono realizzate le monumentali serre vetrate per il ricovero delle piante ornamentali, che nel dopoguerra sono infine convertite a sede museale. 
                                </CardText>
                            </CardBody>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className=" d-flex align-items-center">
                            <CardBody>
                                <CardTitle><h3 className='color-subtitle'>3 Le serre Reali</h3></CardTitle>
                                <hr className='border-3'/>
                                <CardText className='fst-italic'>
                                    Le serre dei Giardini Reali, spesso citate come Orangerie o Citroniere, dominano i Giardini Bassi con la vasta struttura dotata di grandi finestre.
                                </CardText>
                                <CardText>
                                    Qui venivano ricoverate durante l’inverno le casse con le piante di agrumi. Gli spazi interni erano riscaldati in maniera differenziata, secondo le diverse esigenze delle piante, con un sistema termico a vapore. L’attuale edificio fu costruito 
                                    agli inizi del Novecento in sostituzione della serra preesistente, distrutta nell’ambito dei lavori di trasformazione urbanistica dell’area, per consentire l’apertura di viale Primo Maggio come collegamento tra Piazza Castello e Corso San Maurizio. 
                                    Negli anni settanta del Novecento le Serre Reali furono restaurate per accogliere le collezioni archeologiche del Museo di Antichità. Un progetto di rinnovamento prevede nei prossimi anni di assegnare a questi ambienti una nuova funzione, con la 
                                    realizzazione di depositi museali accessibili, laboratori e spazi dedicati ai servizi di accoglienza dei Musei Reali.
                                </CardText>
                            </CardBody>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className=" d-flex align-items-center">
                            <CardBody>
                                <CardTitle><h2 className='color-subtitle'>Boschetto</h2></CardTitle>
                                <hr className='border-3'/>
                                <CardText className='fst-italic'>
                                    Nell’area compresa tra il Bastion Verde e il Giardino Ducale, nel Seicento viene impiantato il Giardino dei fiori, con aiuole quadrate arricchite da fontane.
                                </CardText>
                                <CardText>
                                    Negli anni Trenta dell’Ottocento, Carlo Alberto incarica l’architetto di corte Pelagio Palagi di apportare alcune modifiche ai giardini per aggiornare il loro aspetto al gusto del tempo, per poi aprirli al pubblico, a partire dal 1838, nella 
                                    bella stagione. È in questo periodo che il Giardino dei fiori viene sostituito dal Boschetto, visibile ancora oggi. Questo settore dei giardini si presenta ora nell’assetto ricreato nel 2017 dall’architetto paesaggista piemontese Paolo Pejrone, che 
                                    ha riproposto l’impianto ottocentesco a filari di alberi, arricchito da un rigoglioso sottobosco organizzato in aiuole geometriche. Nelle aiuole rivolte a est è stato piantato un roseto con esemplari di una nuova varietà, selezionata dai prestigiosi 
                                    vivai Barni in collaborazione con Anna Peyron, grande esperta del mondo delle rose. Le rose Bar-Pey, di color crema, sono molto rustiche e rifiorenti, capaci di adattarsi alle diverse condizioni ambientali.
                                </CardText>
                            </CardBody>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className=" d-flex align-items-center">
                            <CardBody>
                                <CardTitle><h3 className='color-subtitle'>4 Ginko biloba</h3></CardTitle>
                                <hr className='border-3'/>
                                <CardText className='fst-italic'>
                                    Il Ginkgo biloba è una delle più antiche specie arboree viventi sulla Terra, dove è comparso oltre 250 milioni di anni fa.
                                </CardText>
                                <CardText>
                                    L’esemplare piantato nel Bastion Verde oltre 100 anni fa è alto 23 metri. Il termine biloba fa riferimento alla particolare forma a due lobi delle foglie, simili a ventagli, che in autunno si colorano di giallo vivo. Originario della Cina, il Ginkgo 
                                    Biloba è da tempo apprezzato per le qualità terapeutiche dei suoi estratti.
                                </CardText>
                            </CardBody>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className=" d-flex align-items-center">
                            <CardBody>
                                <CardTitle><h3 className='color-subtitle'>5 Bastion Verde</h3></CardTitle>
                                <hr className='border-3'/>
                                <CardText className='fst-italic'>
                                    Sul punto in cui il profilo delle mura si piega a formare il baluardo fortificato, sorge il Bastion Verde, un piccolo padiglione dal tetto spiovente alla francese, eretto alla fine del Cinquecento dall’architetto Ascanio Vitozzi e successivamente 
                                    ampliato.
                                </CardText>
                                <CardText>
                                    Questa suggestiva casetta, come uscita da una fiaba nordica, era nata con una funzione militare: doveva infatti fornire un punto di osservazione verso il territorio oltre le mura, dove un tempo si apriva la campagna e si estendeva il Regio Parco. 
                                    Tuttavia, per la sua posizione panoramica, impreziosita da una raffinata loggia rivolta a est, dove sorge il sole, venne presto utilizzata come belvedere e fu apprezzata specialmente dalle principesse. Si racconta che il luogo era molto amato da 
                                    Francesca di Valois, cugina del Re Sole e prima moglie di Carlo Emanuele II, purtroppo deceduta prematuramente nel 1664. Sembra che la duchessa fosse amante del verde e un giorno, in omaggio al colore prediletto dalla moglie, il duca fece tinteggiare il 
                                    padiglione di verde e lo ricoprì di edera, donando così all’edificio il nome di Bastion Verde, con cui ancora oggi viene chiamato. Immersa nella natura e circondata da aiuole e prati, la zona servì nel tempo per l’educazione e l’intrattenimento dei 
                                    piccoli principi, con aree dedicate al gioco del pallone, alle discipline militari e alle esercitazioni a cavallo.
                                </CardText>
                            </CardBody>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="col-lg-4">
                            <CardImg src={Pietre_Preziose_di_Giulio_Paolini} alt="Pietre Preziose di Giulio Paolini" style={{height: '500px'}}/>
                        </div>
                        <div className="col-lg-8 d-flex align-items-center">
                            <CardBody>
                                <CardTitle><h3 className='color-subtitle'>6 Pietre Preziose di Giulio Paolini</h3></CardTitle>
                                <hr className='border-3'/>
                                <CardText className='fst-italic'>
                                    Al centro del Boschetto, l’artista Giulio Paolini ha realizzato nel 2017 l’istallazione Pietre preziose, a ricordo dell’incendio che venti anni prima aveva gravemente danneggiato la Cappella della Sindone, capolavoro seicentesco dell’architetto Guarino 
                                    Guarini.
                                </CardText>
                                <CardText>
                                    Alcuni dei frammenti marmorei che non è stato possibile recuperare nel corso del restauro della Cappella sono stati conservati ed esposti in questa installazione, adagiati su una piattaforma circolare che rievoca la struttura della cupola barocca ad archi 
                                    intrecciati. Al centro si trova la candida scultura in resina che raffigura un personaggio seduto, vestito con abiti di foggia antica, intento a scrivere e ad osservare i resti dell’opera di Guarino Guarini. In questa figura enigmatica si può forse 
                                    riconoscere lo stesso architetto che contempla il destino della sua creazione. 
                                </CardText>
                            </CardBody>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className=" d-flex align-items-center">
                            <CardBody>
                                <CardTitle><h3 className='color-subtitle'>7 Albero delle lanterne cinesi</h3></CardTitle>
                                <hr className='border-3'/>
                                <CardText className='fst-italic'>
                                    L’Albero delle lanterne cinesi, originario dell’estremo Oriente, produce una festosa fioritura, con piccoli fiori gialli che cadendo ricoprono il suolo del Bastion Verde come una pioggia dorata.
                                </CardText>
                                <CardText>
                                    In autunno anche le foglie si colorano di uno splendido giallo dorato e infine cadono lasciando in vista delle capsule marroni a forma di lanterna, da cui deriva il poetico nome della pianta.
                                </CardText>
                            </CardBody>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className=" d-flex align-items-center">
                            <CardBody>
                                <CardTitle><h2 className='color-subtitle'>Giardino di Levante</h2></CardTitle>
                                <hr className='border-3'/>
                                <CardText className='fst-italic'>
                                    La storia del Giardino di Levante ha inizio a partire dal 1673, quando l’area dei giardini annessi alla reggia viene coinvolta nel processo di espansione e rinnovamento che investe la città di Torino per volontà del duca Carlo Emanuele II.
                                </CardText>
                                <CardText>
                                    Il perimetro delle fortificazioni adiacenti al Bastion Verde viene ampliato, creando un nuovo spazio in cui sorgerà il giardino esteso oltre l’ala orientale del Palazzo. Il progetto per la nuova sistemazione del complesso viene affidato nel 1697 da Vittorio 
                                    Amedeo II all’architetto paesaggista francese André Le Nôtre, il geniale creatore dei giardini di Versailles. Il disegno di Le Nôtre è ancora riconoscibile nei giardini attuali, malgrado le trasformazioni successive ne abbiano alterato in parte l’assetto. 
                                    L’impianto prevede un sistema di viali che creano prospettive scenografiche, chiuse da quinte arboree costituite da siepi e graticci che celavano al loro interno sorprese e luoghi appartati. L’asse centrale genera una spettacolare fuga prospettica verso la 
                                    Fontana dei Tritoni. L’arredo sei-settecentesco comprendeva anche gruppi scultorei e vasi in metallo, statue e panchine in marmo.
                                </CardText>
                            </CardBody>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="col-lg-4">
                            <CardImg src={Fontana_dei_Tritoni} alt="Fontana dei Tritoni" style={{height: '500px'}}/>
                        </div>
                        <div className="col-lg-8 d-flex align-items-center">
                            <CardBody>
                                <CardTitle><h3 className='color-subtitle'>8 Fontana dei Tritoni</h3></CardTitle>
                                <hr className='border-3'/>
                                <CardText className='fst-italic'>
                                    Realizzata intorno alla metà del Settecento dal Regio Studio di scultura diretto da Simone Martinez, nipote del celebre architetto Filippo Juvarra.
                                </CardText>
                                <CardText>
                                    La grande fontana accoglie nella vasca circolare un gruppo di statue in marmo raffiguranti alcuni tritoni e una nereide, creature marine dotate di un corpo umano terminante in code di pesce, che nella mitologia greca componevano il corteo del dio del mare 
                                    Poseidone. Le figure sono impegnate a soffiare in grandi conchiglie e a giocare con pesci, delfini, tartarughe e uccelli acquatici tra i festosi zampilli della fontana. Il gruppo scultoreo venne collocato al centro della grande vasca progettata in precedenza 
                                    da André Le Nôtre come amplia superficie specchiante che, grazie ad un fondale ricoperto di bitume, rifletteva la luce del cielo, gli alberi del giardino e la monumentale facciata del Palazzo rivolta a est.
                                </CardText>
                            </CardBody>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className=" d-flex align-items-center">
                            <CardBody>
                                <CardTitle><h3 className='color-subtitle'>9 Faggio pendulo</h3></CardTitle>
                                <hr className='border-3'/>
                                <CardText className='fst-italic'>
                                    Nel parterre meridionale del Giardino di Levante è presente un raro esemplare di faggio pendulo (fagus sylvatica pendula).
                                </CardText>
                                <CardText>
                                    La sua caratteristica forma è dovuta ai rami che pendono sino a terra, dove spesso creano radici, generando nuovi fusti. Il faggio pendulo fu inserito nel giardino nella seconda metà dell’Ottocento ed è considerato uno dei più vecchi e maestosi esemplari 
                                    presenti in Piemonte.
                                </CardText>
                            </CardBody>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="col-lg-4">
                            <CardImg src={Giardini_della_Cavallerizza} alt="Giargini della Cavallerizza" style={{height: '500px'}}/>
                        </div>
                        <div className="col-lg-8 d-flex align-items-center">
                            <CardBody>
                                <CardTitle><h2 className='color-subtitle'>Giargini della Cavallerizza</h2></CardTitle>
                                <hr className='border-3'/>
                                <CardText className='fst-italic'>
                                    L’antica Zona di comando dei Savoia era composta da diversi corpi architettonici, ciascuno con una funziona specifica. Alla residenza principale della famiglia erano infatti uniti senza soluzione di continuità anche i luoghi di culto, gli Archivi di Stato, 
                                    le Segreterie, il Teatro e infine la Cavallerizza.
                                </CardText>
                                <CardText>
                                    Verso la fine del Seicento questo spazio fu destinato ad ospitare le scuderie della corte e gli appartamenti dei Paggi, finché tra il 1740 e il 1742, l’architetto Benedetto Alfieri progettò la sua riorganizzazione. Il disegno dell’Alfieri, modulato sulle 
                                    fabbriche del predecessore Filippo Juvarra, prevedeva una grande galleria, destinata agli spettacoli equestri e alle esercitazioni a cavallo. A ridosso di questa manica lunga, che insieme alla Cavallerizza ospitava le Segreterie del Regno, si apre un grande 
                                    giardino, prosecuzione ideale del seicentesco Giardino di Levante. Il giardino della Cavallerizza presenta un impianto pentagonale, costruito sui bastioni cinquecenteschi della città di Torino: la sua geometria rigorosa è scandita da viali rettilinei, 
                                    circondanti da alberi e siepi, che convergono verso un’antica vasca, da cui si irraggiano le diverse sezioni dell’area. L’accesso a questo giardino spazio avviene dall’area di Levante, attraverso il ponte pedonale costruito su Viale dei Partigiani. Il ponte, 
                                    realizzato nell’Ottocento durante i lavori urbanistici di adeguamento delle strade, servì a garantire il passeggio lungo tutta l’estensione dei giardini, nonostante la realizzazione di una nuova via tra la Piazza Castello e Corso San Maurizio.
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
