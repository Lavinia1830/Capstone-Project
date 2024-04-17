import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';
import Footer from '@/Components/Footer';

export default function Campania(props) {

    const [isHoveredNapoli, setIsHoveredNapoli] = useState(false);
    const [isHoveredPompei, setIsHoveredPompei] = useState(false);
    const [isHoveredSalerno, setIsHoveredSalerno] = useState(false);
    const [isHoveredCaserta, setIsHoveredCaserta] = useState(false);
    const [isHoveredCilento, setIsHoveredCilento] = useState(false);
    const [isHoveredIschia, setIsHoveredIschia] = useState(false);
    const [isHoveredCapri, setIsHoveredCapri] = useState(false);
    const [isHoveredCostieraAmalfitana, setIsHoveredCostieraAmalfitana] = useState(false);
    const [isHoveredAmalfi, setIsHoveredAmalfi] = useState(false);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='text-center campania'>
                <h1>Campania</h1>
                </div>
                <div className='text-center margin mt-3'>
                    <p>
                        Ricca di arte e storia, caratterizzata da clima dolce tutto l'anno e da un mare da cartolina, invidiata in tutto il mondo per la sua eccezionale cucina tradizionale e amata per la sua ospitalità: <b>lasciatevi sedurre dalla Campania</b>, terra dai colori intensi e dalle 
                        coste punteggiate di baie, insenature e pareti rocciose, che vi riempirà gli occhi e il cuore.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className='color-subtitle'>Origini e cenni storici sulla Campania</h2>
                    <p>
                        Le prime presenze dell’uomo in Campania risalgono al Paleolitico medio, ovvero all'epoca dell'uomo di Neanderthal, poi – era il I millennio a.C. - fu abitata da alcune popolazioni di ceppo indoeuropeo come gli Osci, gli Aurunci, gli Ausoni, i Sidicini e i Sanniti, infine 
                        arrivarono gli Etruschi, a occupare l'Agro campano, e i Greci, che fecero della fascia costiera una colonia.<br/>
                        Il principale centro etrusco fu Capua, mentre i primi insediamenti greci fecero nascere centri come Pithecusa (Ischia), Kyme (Cuma), Parthenope prima e Neapolis poi (Napoli), Dikaiarcheia (Pozzuoli) e Poseidonia (Paestum).<br/>
                        Così la Campania divenne <b>un centro culturale tra i più importanti della Magna Grecia</b>.
                    </p>
                    <p>
                        Nella storia della regione le eruzioni del vulcano Vesuvio furono frequenti: la più violenta fu quella del 79 d.C., che provocò la distruzione delle città di Ercolano, Pompei, Stabia e Oplontis le cui rovine, rimaste sepolte sotto strati di pomici, costituiscono oggi 
                        un'<b>area archeologica</b> di grandissimo valore.
                    </p>
                    <p>
                        Fu di particolare importanza anche l'ascesa della dinastia normanna, durante la quale la Campania visse un periodo di unità politica sotto il Regno di Sicilia. Successivamente, con il susseguirsi delle dinastie degli Angioini, degli Aragona e soprattutto dei <b>Borboni</b>, 
                        il <b>Regno di Napoli</b> divenne uno dei principali poli economici, culturali e artistici d'Europa.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className='color-subtitle'>Le città principali della Campania</h2>
                    <p>
                        Non è facile scegliere da dove cominciare a scoprire le numerose meraviglie di questa regione, anche se partire da <Link href='/destinazioni/campania/napoli' className='text-decoration-none color_link'>Napoli</Link> è quasi un obbligo: sorta all’ombra del <Link 
                        href='/visite/campania/napoli/vesuvio' className='text-decoration-none color_link'>Vesuvio</Link>, che merita almeno un’escursione, e bagnata dalle acque dell'omonimo golfo, è una delle città più visitate e amate al mondo.
                    </p>
                    <p>
                        Impossibile stare qui e non vedere le sue aree archeologiche - <Link href='/destinazioni/campania/pompei' className='text-decoration-none color_link'>Pompei</Link>, <Link href='/destinazioni/campania/ercolano' className='text-decoration-none color_link'>Ercolano</Link> e <Link 
                        href='/visite/campania/napoli/campi_flegrei' className='text-decoration-none color_link'>Campi Flegrei</Link> - o non fare una visita al <Link href='/visite/campagnia/napoli/museo_archeologico_nazionale_di_napoli' className='text-decoration-none color_link'>Museo Archeologico 
                        Nazionale di Napoli</Link>, che custodisce parte dei più preziosi reperti del suo passato.<br/>
                        Terza città più popolosa d’Italia, caratterizzata da una grandissima varietà paesaggistica, <b>Napoli</b> ha un centro storico che è stato dichiarato Patrimonio dell’Umanità UNESCO grazie alla grande quantità di edifici di valore inestimabile, a partire dal <Link 
                        href='/visite/campania/napoli/palazzo_reale' className='text-decoration-none color_link'>Palazzo Reale</Link> che per secoli è stato il centro del potere di tutta l'Italia meridionale, e dal <Link href='/visite/campania/napoli/castel_dell_ovo' className='text-decoration-none 
                        color_link'>Castel dell'Ovo</Link>, il più antico forte della città.
                    </p>
                    <p>
                        Non dovreste perdere neppure <Link href='/destinazioni/campania/salerno' className='text-decoration-none color_link'>Salerno</Link>, porta d’ingresso alla stupefacente <Link href='mare/campagnia/costiera_amalfitana' className='text-decoration-none color_link'>Costiera Amalfitana</Link>. 
                        Nota nel mondo per aver dato origine alla Scuola Medica Salernitana, prima istituzione medica d’Europa, ha un ricco centro storico e una lunga passeggiata sul mare. Nel suo golfo troverete la stupefacente <Link href='/destinazioni/campania/peastum' className='text-decoration-none 
                        color_link'>Paestum</Link> che, con i suoi templi, è oggi Patrimonio dell’UNESCO poiché sito archeologico meglio conservato.
                    </p>
                    <p>
                        <Link href='/destinazioni/campania/caserta' className='text-decoration-none color_link'>Caserta</Link> è un altro importantissimo punto di interesse, meta di un turismo attirato dal suo notevole patrimonio artistico, storico e culturale: qui vedrete magnifiche chiese, palazzi e 
                        abbazie, ma soprattutto vedrete la <Link href='/visite/campania/caserta/reggia_di_caserta' className='text-decoration-none color_link'>Reggia di Caserta</Link>.<br/>
                        Patrimonio UNESCO, fu edificata per volontà di Carlo Borbone che affidò il compito all'architetto Luigi Vanvitelli ed è uno dei complessi architettonici più grandi in Europa.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className='color-subtitle'>Cosa vedere in Campania: 6 tappe imperdibilia</h2>
                    <p>
                        Partite dal <Link href='/destinazioni/campania/salerno/cilento' className='tex-decoration-none color_link'>Cilento</Link>, nella provincia di Salerno, che vi conquisterà sia per la costa che per il panorama. Il suo territorio rientra in buona parte nel <Link 
                        href='/visite/campania/salerno/cilento/parco_nazionale_del_cilento' className='text-decoration-none color_link'>Parco nazionale del Cilento</Link>, <Link href='/visite/campania/salerno/cilento/vallo_di_diano' className='text-decoration-none color_link'>Vallo di Diano</Link> e <Link 
                        href='/montagna/campania/salerno/monti_albuni' className='text-decoration-none color_link'>Alburni</Link> che tutela il ricco patrimonio naturalistico della zona.
                    </p>
                    <p>
                        Non perdete l'<Link href='/destinazioni/campania/napoli/ischia' className='text-decoration-none color_link'>Isola di Ischia</Link>, diventata celebre negli Anni 50 grazie all’imprenditore Angelo Rizzoli e amatissima a livello internazionale per le sue bellissime spiagge e le 
                        sue acque termali.
                    </p>
                    <p>
                        A proposito di luoghi esclusivi, dovreste certamente visitare <Link href='/destinazioni/campania/napoli/capri' className='text-decoration-none color_link'>Capri</Link>, la destinazione più ricercata dai vip che amano fare bagni di folla nei bar della famosa piazzetta.<br/>
                        Tra negozi di grandi brand e costosi ristoranti, locande e artigiani, Capri offre una visuale mozzafiato sui Faraglioni, sul Golfo di Napoli e su quello di Salerno.
                    </p>
                    <p>
                        Tappa irrinunciabile è l’intera <b>Costiera Amalfitana</b>, che si estende tra il Golfo di Napoli e il Golfo di Salerno e comprende 15 comuni della provincia di Salerno, tra i quali la meravigliosa <Link href='/destinazioni/campania/salerno/borghi/amalfi' className='text-decoration-none 
                        color_link'>Amalfi</Link>.<br/>
                        Un vero e proprio balcone naturale che si affaccia sul mare blu e le pendici dei monti Lattari, tra spiagge e terrazze coltivate ad agrumi, viti e ulivi.
                    </p>
                    <p>
                    Gli amanti della storia non resteranno certo delusi dalla Campania e potranno mettersi sulle tracce dell'antica civiltà romana, visitando la vasta area archeologica dei <b>Campi Flegrei</b>, nel golfo di Pozzuoli, o quelle magnifiche di <b>Pompei ed Ercolano</b> a Napoli.
                    </p>
                </div>
                <div className='row d-flex justify-content-center mx-0 mb-4'>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Campania'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/campania/napoli'
                            onMouseEnter={() => setIsHoveredNapoli(true)}
                            onMouseLeave={() => setIsHoveredNapoli(false)}
                            >Napoli {isHoveredNapoli && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Campania'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/campania/pompei'
                            onMouseEnter={() => setIsHoveredPompei(true)}
                            onMouseLeave={() => setIsHoveredPompei(false)}
                            >Pompei {isHoveredPompei && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Campania'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/campania/salerno'
                            onMouseEnter={() => setIsHoveredSalerno(true)}
                            onMouseLeave={() => setIsHoveredSalerno(false)}
                            >Salerno {isHoveredSalerno && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Campania'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/campania/caserta'
                            onMouseEnter={() => setIsHoveredCaserta(true)}
                            onMouseLeave={() => setIsHoveredCaserta(false)}
                            >Caserta {isHoveredCaserta && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Campania'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/campania/salerno/cilento'
                            onMouseEnter={() => setIsHoveredCilento(true)}
                            onMouseLeave={() => setIsHoveredCilento(false)}
                            >Cilento {isHoveredCilento && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Campania'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/campania/napoli/ischia'
                            onMouseEnter={() => setIsHoveredIschia(true)}
                            onMouseLeave={() => setIsHoveredIschia(false)}
                            >Ischia {isHoveredIschia && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Campania'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/campania/napoli/capri'
                            onMouseEnter={() => setIsHoveredCapri(true)}
                            onMouseLeave={() => setIsHoveredCapri(false)}
                            >Capri {isHoveredCapri && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Campania'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='mare/campagnia/costiera_amalfitana'
                            onMouseEnter={() => setIsHoveredCostieraAmalfitana(true)}
                            onMouseLeave={() => setIsHoveredCostieraAmalfitana(false)}
                            >Costiera Amalfitana {isHoveredCostieraAmalfitana && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Campania'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/campania/salerno/borghi/amalfi'
                            onMouseEnter={() => setIsHoveredAmalfi(true)}
                            onMouseLeave={() => setIsHoveredAmalfi(false)}
                            >Amalfi {isHoveredAmalfi && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                </div>
            </main>
            <Footer/>
        </AuthenticatedLayout>
    )
}
