import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { CardText, CardImg, Image, CardBody, CardTitle } from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import { Head } from '@inertiajs/react';
import Visita_completa_img from '../../../../../assets/Piemonte/Visita_completa_Torino_Piemonte.jpg';
import Pianta from '../../../../../assets/Piemonte/Palazzo_reale_armeria_reale_e_cappella_della_sindone.jpg';
import Salone_delle_guardie_svizzere from '../../../../../assets/Piemonte/Salone_delle_guardie_svizzere_Torino_Piemonte.jpg';
import Sala_del_Consiglio from '../../../../../assets/Piemonte/Sala_del_Consiglio_Torino_Piemonte.jpg';
import Gabinetto_Cinese from '../../../../../assets/Piemonte/Gabinetto_Cinese_Torino_Piemonte.jpg';
import Armeria_Reale from '../../../../../assets/Piemonte/Armeria_Reale_Torino_Piemonte.jpg';
import Le_armature_dei_Samurai from '../../../../../assets/Piemonte/Le_armature_dei_Samurai_Torino_Piemonte.jpg';
import Sala_da_Ballo from '../../../../../assets/Piemonte/Sala_da_Ballo_Torino_Piemonte.jpg';
import Cappella_della_Sindone from '../../../../../assets/Piemonte/Cappella_della_Sindone_Torino_Piemonte.jpg';
import Biblioteca_reale_Mappa from '../../../../../assets/Piemonte/Mappa_Biblioteca_reale_Torino_Piemonte.jpg';
import Biblioteca_reale from '../../../../../assets/Piemonte/Biblioteca_Reale_Torino_Piemonte.jpg';
import Galleria_Sabauda from '../../../../../assets/Piemonte/Galleria_Sabauda_Torino_Piemonte.jpg';
import Galleria_Sabauda_pt from '../../../../../assets/Piemonte/Galleria_Sabauda_Torino_Piemonte_pt.jpg';
import Gli_antichi_Maestri_piemontesi from '../../../../../assets/Piemonte/Gli_antichi_Maestri_piemontesi_Torino_Piemonte.jpg'
import Galleria_Sabauda_p1 from '../../../../../assets/Piemonte/Galleria_Sabauda_Torino_Piemonte_p1.jpg';
import I_pittori_caravaggeschi from '../../../../../assets/Piemonte/I_pittori_caravaggeschi_Torino_Piemonte.jpg';
import La_grande_pittura from '../../../../../assets/Piemonte/La_grande_pittura_Torino_Piemonte.jpg';
import Vetrine_nord from '../../../../../assets/Piemonte/Vetrine_nord_Torino_Piemonte.jpg';
import Galleria_Sabauda_p2 from '../../../../../assets/Piemonte/Galleria_Sabauda_Torino_Piemonte_p2.jpg';
import Collezione_Fiamminga_e_Olandese from '../../../../../assets/Piemonte/Collezione_Fiamminga_e_Olandese_Torino_Piemonte.jpg';
import La_Collezione_Gualino from '../../../../../assets/Piemonte/La_Collezione_Gualino_Torino_Piemonte.jpg';
import Museo_di_Antichita from '../../../../../assets/Piemonte/Museo_di_Antichita_Torino_Piemonte.jpg';
import Scultura_in_bronzo from '../../../../../assets/Piemonte/Scultura_in_bronzo_Torino_Piemonte.jpg';
import Tesoro_di_Marengo from '../../../../../assets/Piemonte/Tesoro_di_Marengo_Torino_Piemonte.jpg';
import Gli_Etruschi from '../../../../../assets/Piemonte/Gli_Etruschi_Torino_Piemonte.jpg';
import Teatro_Romano from '../../../../../assets/Piemonte/Teatro_Romano_Torino_Piemonte.jpg';
import Galleria_Archeoligica from '../../../../../assets/Piemonte/Galleria_Archeologica_Torino_Piemonte.jpg';
import Giardini_Reali from '../../../../../assets/Piemonte/Giardini_Reali_Torino_Piemonte.jpg';
import Vasi_de_Giardino_Ducale from '../../../../../assets/Piemonte/Vasi_de_Giardino_Ducale_Torino_Piemonte.jpg';
import Ulisse_di_Giuliano_Vangi from '../../../../../assets/Piemonte/Ulisse_di_Giuliano_Vangi_Torino_Piemonte.jpg';
import Pietre_Preziose_di_Giulio_Paolini from '../../../../../assets/Piemonte/Pietre_Preziose_di_Giulio_Paolini_Torino_Piemonte.jpg';
import Fontana_dei_Tritoni from '../../../../../assets/Piemonte/Fontana_dei_Tritoni_Torino_Piemonte.jpg';
import Giardini_della_Cavallerizza from '../../../../../assets/Piemonte/Giardini_della_Cavallerizza_Torino_Piemonte.jpg';

export default function Visita_completa(props) {
  return (
    <>
        <Head title="Visita Completa"/>
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <h1 className='color-title text-center'>Visita completa</h1>
                <Image src={Visita_completa_img} className='mb-3 mx-auto'></Image>
                <div className='margin mt-3'>
                    <p className='sft-italic'>
                        I Musei Reali propongono un affascinante itinerario di storia, arte e natura, con testimonianze che datano dalla Preistoria all’età moderna. Il <strong>Palazzo Reale</strong>, centro di comando dei Savoia, conserva ambienti, arredi e opere d’arte realizzati tra Seicento e Novecento.
                    </p>
                    <p>
                        La facciata cela interni sfarzosi, progettati e decorati da grandi artisti come Daniel Seiter, Claudio Francesco Beaumont, Francesco De Mura, e da noti architetti come Filippo Juvarra e Benedetto Alfieri. <b>L’Armeria Reale</b>, aperta al pubblico nel 1837, accoglie una ricchissima collezione di armi e armature che datano dall’antichità all’Ottocento. 
                        Dopo un lungo restauro, è visitabile anche la <b>Cappella della Sindone</b>, mirabile architettura barocca progettata da Guarino Guarini nella seconda metà del Seicento.
                    </p>
                    <p>
                        La <b>Galleria Sabauda</b> conserva grandi capolavori delle principali scuole europee, da van Eyck a Rubens e van Dyck, da Mantegna, a Paolo Veronese, a Orazio Gentileschi, a Guido Reni. La Galleria ha sede nella Manica Nuova di Palazzo Reale e accoglie anche due importanti collezioni: quella di pittura fiamminga e olandese del Principe Eugenio di 
                        Savoia-Soissons, e quella del finanziere Riccardo Gualino. Il piano terreno è arricchito dalla sezione tematica dedicata alla pittura del Rinascimento in Piemonte. Sull’area archeologica del <b>Teatro Romano</b> si affaccia il <b>Museo di Antichità</b>, fondato nel 1724, che ospita la raccolta nata nel Cinquecento come collezione dinastica e i reperti 
                        provenienti da scavi condotti sul territorio piemontese, tra i quali il Tesoro di Marengo. 
                    </p>
                    <p>
                        La <b>Galleria Archeologica</b> arricchisce il percorso, esponendo importanti collezioni del Mediterraneo antico. Infine i <b>Giardini Reali</b>, realizzati dal Duparc e ampliati a fine Seicento da André le Nôtre, sono liberamente accessibili. Con un’estensione di sette ettari, rappresentano il cuore verde del complesso museale.
                    </p>
                </div>
                <h2 className='color-title text-center'>Palazzo Reale, Armeria reale e cappella della Sindone</h2>
                <Image src={Pianta} className='mb-3 mx-auto'></Image>
                <div className='margin'>
                    <p className='fst-italic'>
                        Sede principale della famiglia Savoia, il Palazzo Reale conserva opere d’arte, arredi e decorazioni che datano dal Seicento fino al Novecento. Le sale comprese nella visita ordinaria ripercorrono 
                        l’antico cerimoniale di corte, passando attraverso l’aulica Sala del Trono, la sfarzosa Sala da Pranzo e l’elegante Sala da Ballo. Armeria Reale e Cappella della Sindone arricchiscono il percorso, 
                        restituendo l’immagine di grandiosità perseguita nei secoli dalla dinastia.
                    </p>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="col-lg-4">
                                <CardImg src={Salone_delle_guardie_svizzere} alt="Salone delle Guardie Svizzere" style={{height: '400px'}}/>
                            </div>
                            <div className="col-lg-8 d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h3 className='color-subtitle'>1. Salone delle Guardie Svizzere</h3></CardTitle>
                                    <hr className='border-3'/>
                                    <CardText className='fst-italic'>
                                        Il Salone delle Guardie Svizzere, primo ambiente del piano nobile di Palazzo Reale, prende il nome dal corpo militare che lo presidiava.
                                    </CardText>
                                    <CardText>
                                        Alta quasi 13 metri, la grande sala fu adibita allo svolgimento di diverse funzioni: cerimonie, festeggiamenti, alta rappresentanza. L’ambiente conserva il fregio seicentesco,
                                        dipinto dai Fratelli Fea, che rappresenta le Glorie Sassoni: all’interno di un’architettura a trompe-l’œil, condottieri e battaglie si alternano con lo scopo di collegare 
                                        idealmente la dinastia sabauda ai fasti del Sacro Romano Impero. Durante il cantiere di rinnovo del Palazzo voluto nell’Ottocento da Carlo Alberto e diretto dal bolognese Pelagio 
                                        Palagi la sala venne in gran parte modificata. Il soffitto a cassettoni presenta al centro un dipinto di Carlo Bellosio, raffigurante Amedeo VI, il Conte Verde, nell’atto di 
                                        fondare l’Ordine della Santissima Annunziata, la più alta onorificenza concessa dai Savoia. Le pareti decorate in stucco verde furono progettate da Palagi e arricchite con imponenti 
                                        torcere in ghisa, disposte su due ordini e in origine alimentate a gas. La grande tela che campeggia sulla parete ovest è opera del veneziano Jacopo Negretti detto Palma il Giovane: 
                                        dipinta nel 1582 rappresenta la Battaglia di San Quintino, combattuta nel 1557 dal duca Emanuele Filiberto, raffigurato sulla destra a cavallo con in mano il bastone del comando. 
                                        Firmata la Pace di Cateau-Cambrésis nel 1559, fu proprio lui a trasferire la capitale del ducato da Chambéry a Torino, dando inizio alla storia di Palazzo Reale, all’epoca
                                        Ducale.
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h3 className='color-subtitle'>2. Sala del Trono</h3></CardTitle>
                                    <hr className='border-3'/>
                                    <CardText className='fst-italic'>
                                        Situata al termine delle tre anticamere di rappresentanza, la Sala del Trono è il fulcro simbolico degli ambienti cerimoniali di Palazzo Reale.
                                    </CardText>
                                    <CardText>
                                        L’attuale allestimento è il risultato dell’intervento ottocentesco coordinato da Pelagio Palagi, che si servì di arredi e opere in parte di epoche precedenti. Il trono, sopraelevato e 
                                        incorniciato da uno sfarzoso baldacchino, è circondato da una balaustra in legno intagliato, scolpito e dorato, realizzata da Francesco Bolgié nel 1789. Quest’opera, ornata da putti, girali 
                                        d’acanto, vasi, fiaccole e colombe, trovò la sua prima collocazione al secondo piano dell’edificio, per essere poi trasferita nella Sala del Trono su indicazione di Palagi. Nella sala si 
                                        conserva il soffitto di epoca barocca, dove un prezioso intaglio ricoperto con foglia d’oro incornicia la tela raffigurante il Trionfo della Pace, dipinta nel 1662 dal fiammingo Jan Miel. 
                                        Il parquet è un vero capolavoro di ebanisteria ottocentesca, opera dell’artista Gabriele Capello detto il Moncalvo, che realizzò per il Palazzo numerosi arredi.
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="col-lg-4">
                                <CardImg src={Sala_del_Consiglio} alt="Sala del Consiglio" style={{height: '400px'}}/>
                            </div>
                            <div className="col-lg-8 d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h3 className='color-subtitle'>3. Sala del Consiglio</h3></CardTitle>
                                    <hr className='border-3'/>
                                    <CardText className='fst-italic'>
                                        Adibita nella seconda metà del Seicento a Camera da Letto della Duchessa, la sala deve il proprio nome al Consiglio dei Ministri, che Carlo Alberto volle qui riunire a partire dai primi 
                                        decenni dell'Ottocento.
                                    </CardText>
                                    <CardText>
                                        I Preziosi arredi in stile eclettico, disegnati da Pelagio Palagi, restituiscono appieno la grande creatività dell’artista bolognese, che progettò il riallestimento di Palazzo Reale. <br/>
                                        Sul tavolo è esposta una riproduzione dello Statuto Albertino, la celebre costituzione sottoscritta dal sovrano in questa stanza il 4 marzo 1848 e rimasta formalmente in vigore fino al 1946, 
                                        quando, dopo la caduta della Monarchia e la nascita della Repubblica, fu varata l’attuale costituzione dello Stato Italiano. Grazie a questo importante evento storico l’ambiente è noto anche 
                                        come Sala dello Statuto. Alle pareti alcuni dipinti ottocenteschi raffigurano beati e beate di Casa Savoia, ricordati nella storia dinastica per essere «morti in odore di santità» e celebrati 
                                        come illustri antenati. Sulla parete est è visibile un busto in marmo scolpito nel 1881 da Benedetto Cacciatori per celebrare la memoria di Carlo Alberto, ritratto nelle vesti di un imperatore 
                                        romano.
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="col-lg-4">
                                <CardImg src={Gabinetto_Cinese} alt="Gabinetto Cinese" style={{height: '400px'}}/>
                            </div>
                            <div className="col-lg-8 d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h3 className='color-subtitle'>4. Gabinetto Cinese</h3></CardTitle>
                                    <hr className='border-3'/>
                                    <CardText className='fst-italic'>
                                        La sala conserva intatto l’assetto settecentesco, progettato dal messinese Filippo Juvarra e portato a termine dal successore Benedetto Alfieri. 
                                    </CardText>
                                    <CardText>
                                        Le pareti sono rivestite da una raffinata boiserie in stile rococò, che incornicia alcune lacche orientali acquistate sul mercato romano nel 1732. Durante la posa dei pannelli ci si rese conto 
                                        che la quantità di lacche a disposizione non sarebbe stata sufficiente a ricoprire l’intera superficie, e si decise dunque di integrare gli originali cinesi con alcune riproduzioni realizzate 
                                        dal piemontese Pietro Massa. Sulla volta, realizzata a olio su muro dal pittore di corte Claudio Francesco Beaumont negli anni trenta del Settecento, la decorazione principale raffigura il 
                                        Giudizio di Paride.
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="col-lg-4">
                                <CardImg src={Armeria_Reale} alt="Armeria Reale" style={{height: '400px'}}/>
                            </div>
                            <div className="col-lg-8 d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h3 className='color-subtitle'>Armeria Reale</h3></CardTitle>
                                    <hr className='border-5'/>
                                    <CardText className='fst-italic'>
                                        L’Armeria Reale fu aperta al pubblico nel 1832 per volontà di Carlo Alberto e conserva ancora oggi la scenograficità del suo primo allestimento.
                                    </CardText>
                                    <CardText>
                                        Espone le opere più preziose provenienti dalla vasta collezione di armi e armature antiche possedute dai Savoia.
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h3 className='color-subtitle'>5. Armeria Reale - Galleria Beaumont</h3></CardTitle>
                                    <hr className='border-3'/>
                                    <CardText className='fst-italic'>
                                        Questa stupefacente galleria espone le opere più preziose provenienti dalle collezioni di armi e armature antiche raccolte dai Savoia lungo i secoli. <br/>
                                        Progettato a inizio Settecento da Filippo Juvarra e successivamente rimaneggiato da Benedetto Alfieri, l’ambiente ospitava anticamente i dipinti delle collezioni d’arte oggi esposti nelle sale 
                                        della Galleria Sabauda.
                                    </CardText>
                                    <CardText>
                                        I riquadri della volta, realizzata nel 1738 dal pittore di corte Claudio Francesco Beaumont, rappresentano Le Storie di Enea mentre le sculture allegoriche alle estremità della galleria sono 
                                        opera dei fratelli Ignazio e Filippo Collino. L’Armeria Reale fu aperta al pubblico nel 1832 per volontà di Carlo Alberto e conserva ancora oggi la scenograficità del suo primo allestimento. 
                                        Al fondo della galleria la Rotonda Palagiana espone armi ottocentesche, come la spada cinta da Napoleone Bonaparte durante la campagna d’Egitto e nella battaglia di Marengo, nonché una selezione
                                        di armi orientali, tra cui le due armature giapponesi donate dall’imperatore Meiji. Da qui si apre la loggia dalla quale Carlo Alberto annunciò l’inizio della prima guerra d’Indipendenza, che gode 
                                        di un affaccio privilegiato su Piazza Castello.
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h2 className='color-subtitle'>5.1 Armeria Reale</h2></CardTitle>
                                    <hr className='border-3'/>
                                    <CardTitle><h3 className='color-subtitle'>Resti di una guarnitura detta dei Soli</h3></CardTitle>
                                    <CardText className='fst-italic'>
                                        Al centro dell’Armeria è esposta un’elegante armatura decorata con un motivo a soli in oro che ricoprono ogni elemento della guarnitura. 
                                    </CardText>
                                    <CardText>
                                        Questa, realizzata all’inizio del Seicento per il Principe Emanuele Filiberto di Savoia, ha subito nel corso del tempo alcune integrazioni, tra le quali ricordiamo l’intervento del 1876, durante il quale 
                                        numerosi soli sono stati aggiunti sulla superficie. La guarnitura delle collezioni sabaude si inserisce tra le più raffinate opere realizzate nella bottega dell’armoraro Orazio Calino.
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h2 className='color-subtitle'>5.2 Armeria Reale </h2></CardTitle>
                                    <hr className='border-3'/>
                                    <CardTitle><h3 className='color-subtitle'>Parure di fucili intarsiati di Ferdinando Maria di Wittelsbach</h3></CardTitle>
                                    <CardText className='fst-italic'>
                                        Questa parure di fucili venne realizzata nel 1650 dagli artisti delle botteghe tedesche di Monaco, in occasione delle nozze celebrate tra Ferdinando Maria di Wittelsbach, figlio del duca di Baviera 
                                        Massimiliano I, e Enrichetta Adelaide di Savoia, sorella del duca Carlo Emanuele II.
                                    </CardText>
                                    <CardText>
                                        Le armi, decorate con materiali molto preziosi quali oro, argento, madreperla e avorio, presentano una decorazione ispirata alla mitologia antica. Il nucleo è considerato uno degli oggetti più preziosi esposti 
                                        in Armeria Reale e mostra la raffinatezza con la quale le manifatture europee erano solite impreziosire le armi da cerimonia.
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="col-lg-4">
                                <CardImg src={Le_armature_dei_Samurai} alt="Le armature dei Samurai" style={{height: '400px'}}/>
                            </div>
                            <div className="col-lg-8 d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h3 className='color-subtitle'>5.3 Armeria Reale</h3></CardTitle>
                                    <hr className='border-3'/>
                                    <CardTitle><h3 className='color-subtitle'>Le armature dei samurai</h3></CardTitle>
                                    <CardText className='fst-italic'>
                                        Le armature B. 53 e B. 54 vennero donate a Vittorio Emanuele II dall’imperatore del Giappone Meiji nel 1869 e nel 1871, a pochi anni di distanza dalla firma del trattato di amicizia e commercio tra il Regno d’Italia 
                                        e l’Impero giapponese.
                                    </CardText>
                                    <CardText>
                                        Si trattava di doni prestigiosi, destinati a personaggi di rango elevato, come testimoniano i materiali preziosi con cui le armature sono state realizzate a la cura nell’esecuzione delle due opere.
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h3 className='color-subtitle'>6. Galleria del Daniel</h3></CardTitle>
                                    <hr className='border-3'/>
                                    <CardText className='fst-italic'>
                                        La Galleria nacque durante il grande cantiere di rifacimento degli appartamenti nuziali di Vittorio Amedeo II e Anna d’Orléans, diretto dall’architetto Carlo Emanuele Lanfranchi sul finire del Seicento.
                                    </CardText>
                                    <CardText>
                                        Progettata come collegamento scenografico tra le camere da letto del duca e della duchessa, deve il suo nome al pittore viennese Daniel Seiter, che ne decorò la volta. Nei cinque scomparti in cui è diviso lo spazio, campeggia 
                                        al centro L’apoteosi dell’Eroe, ossia Vittorio Amedeo II, accolto da Giove tra le divinità dell’Olimpo. Le pareti furono rivestite di specchi da Benedetto Alfieri nel Settecento, sul modello delle auliche galeries francesi. 
                                        Le finestre si affacciano sul Giardino di Levante, grandioso ampliamento del parco del Palazzo progettato da André Le Nôtre, geniale architetto paesaggista dei giardini di Versailles. La Galleria del Daniel venne utilizzata 
                                        dalla corte per ricevimenti e balli fino alla prima metà dell’Ottocento, quando Carlo Alberto modificò la funzione degli ambienti del Palazzo.
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h3 className='color-subtitle'>7. Sala da Pranzo</h3></CardTitle>
                                    <hr className='border-3'/>
                                    <CardText className='fst-italic'>
                                        La sala risulta dall’unione di due ambienti avvenuta durante i lavori diretti da Pelagio Palagi nella prima metà dell’Ottocento.
                                    </CardText>
                                    <CardText>
                                        La grande tavola, apparecchiata con un servizio in raffinata porcellana appartenente alle collezioni del museo, è decorata al centro con dei candelieri di gusto neobarocco realizzati in bronzo dorato, mentre le sedute 
                                        settecentesche provengono dal Palazzo Reale di Genova. Sulla volta una tela della scuola di Claudio Francesco Beaumont ritrae a cavallo Umberto I Biancamano, capostipite della dinastia. Il raffinato parquet, con intarsi a stella 
                                        e a volute, venne integrato dall’ebanista Gabriele Capello durante il cantiere carloalbertino, omogeneizzando le assi con la più antica sezione settecentesca visibile al fondo della sala.
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="col-lg-4">
                                <CardImg src={Sala_da_Ballo}  alt="Sala da Ballo" style={{height: '400px'}}/>
                            </div>
                            <div className="col-lg-8 d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h3 className='color-subtitle'>8. Sala da Ballo</h3></CardTitle>
                                    <hr className='border-3'/>
                                    <CardText className='fst-italic'>
                                        Al termine del percorso di visita, come un tempio neoclassico nel cuore dell’edificio barocco, la Sala da Ballo fu progettata negli anni quaranta dell’Ottocento da Pelagio Palagi per ospitare i ricevimenti della corte.
                                    </CardText>
                                    <CardText>
                                        Lungo le pareti 22 colonne in marmo bianco di carrara sorreggono il grandioso soffitto a cassettoni, impreziosito da dorature e intagli. Al centro della volta una tela dello stesso Palagi raffigura La Danza delle Ore mentre il 
                                        fregio è ispirato agli affreschi delle domus pompeiane. L’orchestra era ospitata sul palco della piccola loggia sul lato ovest della sala, sostenuta da esili colonne in ghisa, mentre l’illuminazione proveniva dagli eleganti lampadari 
                                        in cristallo di Boemia. Il parquet è opera dell’ebanista di corte Gabriele Capello, artista attivo in numerosi altri ambienti della residenza.
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="col-lg-4">
                                <CardImg src={Cappella_della_Sindone}  alt="Cappella_del_Sindone" style={{height: '700px'}}/>
                            </div>
                            <div className="col-lg-8 d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h3 className='color-subtitle'>9. Cappella della Sindone</h3></CardTitle>
                                    <hr className='border-3'/>
                                    <CardText className='fst-italic'>
                                        Considerata universalmente uno dei capolavori del Barocco, la Cappella della Sindone è opera del matematico e architetto Guarino Guarini, che negli anni Sessanta del Seicento assunse la direzione dei lavori del preesistente
                                        cantiere per la costruzione di una monumentale Cappella Palatina.
                                    </CardText>
                                    <CardText>
                                        La cupola è concepita come un’ardita torre-reliquiario, spettacolare architettura con sei livelli di archi sovrapposti, ruotati gli uni rispetto agli altri, che si riducono man mano che salgono convergendo nella stella del cupolino 
                                        in pietra, su cui spicca la colomba dello Spirito Santo. Per l’intreccio dei suoi diversi elementi e la cura raffinata dei dettagli la Cappella della Sindone non ha termini di paragone nelle esperienze dell’architettura occidentale. 
                                        All’interno dell’aula si dispiega una fitta trama di simboli: le stelle si alternano agli esagoni, forma ispiratrice della cupola e richiamo all’empireo; le croci alludono alla redenzione dell’umanità. Sui capitelli scolpiti alla 
                                        sommità dei pilastri, compaiono i fiori della passiflora (o fiore della passione), mentre ai rami di ulivo si intrecciano corone di spine. Nel 1694 la Sindone viene trasferita nella cassa dell’altare posto al centro della Cappella e 
                                        progettato dall’ingegnere Antonio Bertola.
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                </div>
                <h2 className='color-title text-center'>Biblioteca Reale</h2>
                <Image src={Biblioteca_reale_Mappa} className='mb-3 mx-auto' alt='Bibblioteca reale Torino'></Image>
                <div className='margin'>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="col-lg-4">
                            <CardImg src={Biblioteca_reale} className='mb-3 mx-auto' alt='Bibblioteca reale Torino'></CardImg>
                            </div>
                            <div className="col-lg-8 d-flex align-items-center">
                                <CardBody>
                                    <CardText className='fst-italic'>
                                        Nella Biblioteca Reale è conservata una ricca collezioni di volumi a stampa, incunaboli, manoscritti, carte antiche, incisioni e disegni, che compongono un patrimonio di oltre 200.000 beni.
                                    </CardText>
                                    <CardText>
                                        L’attuale sede, inaugurata nel 1842 durante il regno di Carlo Alberto, trovò spazio nel monumentale salone costruito al di sotto dell’Armeria Reale, riallestito per l’occasione da Pelagio Palagi, che ne disegnò i raffinati arredi e ideò 
                                        il soggetto della volta, dedicata alle Arti e alle Scienze e decorata a grisaglie con soggetti allegorici e busti di personaggi illustri della cultura europea. Le raccolte della Biblioteca Reale vantano un prezioso nucleo di disegni 
                                        realizzati da Leonardo Da Vinci, tra i quali il celebre Autoritratto e il Codice sul volo degli uccelli, oltre a numerosi fogli disegnati da importanti artisti: Michelangelo, Giulio Romano, Perin del Vaga, Perugino e Girolamo da Carpi. 
                                        Il patrimonio della Biblioteca Reale vanta inoltre codici di primario interesse, che testimoniano l’amore dei primi duchi di casa Savoia per i manoscritti miniati e i libri d’ore, con oltre 4.000 esemplari. A questi si aggiungono stampe, 
                                        incisioni e trattati di carattere militare e geografico, come le carte nautiche del Cinquecento o le incisioni del Theatrum Sabaudiae, strumento di propaganda, pubblicato per la prima volta nel 1682, che illustra monumenti, castelli, 
                                        possedimenti e località del Piemonte. Alla Biblioteca Reale di Torino appartengono anche collezioni di rilegature, trattati scientifici, raccolte di araldica, album naturalistici e volumi splendidamente decorati destinati a doni di nozze.
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                </div>
                <h2 className='color-title text-center'>Galleria Sabauda</h2>
                <Image src={Galleria_Sabauda} className='mb-3 mx-auto'></Image>
                <p className='margin fst-italic mb-3'>
                    Fondata nel 1832, la Galleria Sabauda ripercorre la storia della pittura europea dal Tardogotico al Novecento, testimoniando il gusto collezionistico dei Savoia lungo i secoli. Arricchita con importanti acquisizioni, conserva opere di maestri italiani del 
                    Rinascimento, di primitivi fiamminghi e, a partire dal 1930, la raccolta dell’industriale Riccardo Gualino. La pinacoteca espone oggi oltre 800 opere: al piano terreno la sezione dedicata ai maestri del Rinascimento in Piemonte, al primo piano le collezioni 
                    italiane e straniere dal Quattrocento al primo Seicento e, al secondo piano, le opere del Settecento e la collezione Gualino. Di grande interesse il nucleo di dipinti fiamminghi e olandesi provenienti dalla collezione del principe Eugenio di Savoia-Soissons.
                </p>
                <Image src={Galleria_Sabauda_pt} className='mb-3 mx-auto'></Image>
                <div className='margin'>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="col-lg-4">
                                <CardImg src={Gli_antichi_Maestri_piemontesi} alt="La grande scultura in bronzo" style={{height: '500px'}}/>
                            </div>
                            <div className="col-lg-8 d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h3 className='color-subtitle'>1. Gli antichi Maestri piemontesi</h3></CardTitle>
                                    <hr className='border-3'/>
                                    <CardText className='fst-italic'>
                                        In questo settore sono raccolte le opere di artisti piemontesi o comunque attivi nella regione tra la fine del Trecento e il tardo Cinquecento.
                                    </CardText>
                                    <CardText>
                                        Di particolare interesse, tra le altre, la Madonna con il Bambino di Barnaba da Modena, le opere di Giovanni Martino Spanzotti, di Defendente Ferrari e quelle di Gaudenzio Ferrari e della sua scuola.
                                    </CardText>
                                    <CardText>
                                        1.1 Barnaba da Modena, Madonna con Bambino
                                        1.2 Spanzotti, Madonna in trono con il Bambino e i santi Ubaldo e Sebastiano
                                        1.3 Gaudenzio Ferrari, Crocifissione
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                </div>
                <Image src={Galleria_Sabauda_p1} className='mb-3 mx-auto'></Image>
                <div className='margin'>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h3 className='color-subtitle'>2. Arte italiana dalla fine del Trecento al Rinascimento</h3></CardTitle>
                                    <hr className='border-3'/>
                                    <CardText className='fst-italic'>
                                        In queste sale sono esposte opere che documentano alcuni momenti chiave nella storia della pittura italiana dal Tardo gotico al Rinascimento.
                                    </CardText>
                                    <CardText>
                                        Soprattutto lo slancio con cui i direttori ottocenteschi della Galleria cercarono di aggiudicarsi opere di importanti artisti che non erano presenti nelle collezioni storiche di casa Savoia. Tra questi 
                                        spiccano Beato Angelico, il Pollaiolo, la tavola di Andrea Mantegna che fin dal XVI secolo era nelle collezioni sabaude, e le adorazioni del Bambino di Giovanni Gerolamo Savoldo.
                                    </CardText>
                                    <CardText>
                                        2.1 Beato Angelico, Madonna con Bambino
                                        2.2 Piero e Antonio Benci detti del Pollaiolo, L’Arcangelo Raffaele e Tobiolo
                                        2.3 Andrea Mantegna, Madonna con Bambino e santi
                                        2.4 Giovanni Gerolamo Savoldo, L’adorazione dei pastori
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h3 className='color-subtitle'>3. La pittura manierista</h3></CardTitle>
                                    <hr className='border-3'/>
                                    <CardText className='fst-italic'>
                                        Queste sale sono dedicate alla pittura del secondo ‘500: tra le correnti meglio rappresentate nelle collezioni della Galleria Sabauda, emerge senz’altro il Manierismo Veneto
                                    </CardText>
                                    <CardText>
                                        Amato già da Emanuele Filiberto di Savoia e da Carlo Emanuele I: a lui si deve la presenza delle opere di Jacopo Bassano 10 e dei suoi figli, ma anche di due delle tre grandi tele di Veronese; la più 
                                        importante tra le opere di questo artista, la Cena a casa di Simone Fariseo 8 arrivò però a Torino attraverso l’acquisizione della collezione Durazzo. Da quella stessa raccolta arriva anche il magnifico 
                                        Ritratto di Cassandra Cavalcanti Bandini di Bronzino 9. 
                                    </CardText>
                                    <CardText>
                                        3.1 Paolo Veronese, La cena in casa di Simone Fariseo
                                        3.2 Bronzino, Ritratto di Cassandra Cavalcanti Bandini 
                                        3.3 Jacopo Bassano, Il grande mercato
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="col-lg-4">
                                <CardImg src={I_pittori_caravaggeschi} alt="Suonatore di liuto" style={{height: '500px'}}/>
                            </div>
                            <div className="col-lg-8 d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h3 className='color-subtitle'>4. I pittori caravaggeschi</h3></CardTitle>
                                    <hr className='border-3'/>
                                    <CardText className='fst-italic'>
                                        Una delle correnti presenti nelle collezioni di casa Savoia è quella della pittura caravaggesca. 
                                    </CardText>
                                    <CardText>
                                        Alle opere già raccolte da Carlo Emanuele I, tra le quali spiccano l’Annunciazione di Orazio Gentileschi 13 e il San Gerolamo di Valentin de Boulogne 12, si sono nel tempo aggiunte opere provenienti dal 
                                        territorio piemontese e da grandi collezioni private, come è il caso del Suonatore di Antiveduto Gramatica 11, che fu per un certo periodo attribuito a Caravaggio stesso.
                                    </CardText>
                                    <CardText>
                                        4.1 Valentin de Boulogne, San Gerolamo
                                        4.2 Antiveduto Gramatica, Il suonatore di tiorba
                                        4.3 Orazio Gentileschi, Annunciazione
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h3 className='color-subtitle'>5. I maestri lombardi del Seicento</h3></CardTitle>
                                    <hr className='border-3'/>
                                    <CardText className='fst-italic'>
                                        Capolavori dei maestri che si erano affermati nella Lombardia dei Borromeo, come Cerano, Procaccini, Morazzone e Cairo, formatisi nella cultura manierista ma attenti alla modernità.
                                    </CardText>
                                    <CardText>
                                        Hanno una certa fortuna presso la corte di Carlo Emanuele I, di suo figlio Vittorio Amedeo I e poi di Cristina di Francia. Alcune opere erano impiegate nella decorazione di chiese cittadine, altre come il San 
                                        Francesco e il beato Carlo Borromeo in preghiera davanti alla statua della Madonna presso San Celso a Milano del Cerano 14 e il Cristo nell’Orto di Getsemani del Cairo 15, che fu anche pittore di corte, sono già 
                                        ricordate nell’inventario della collezione stilato nel 1635. 
                                    </CardText>
                                    <CardText>
                                        5.1 Giovanni Battista Crespi detto il Cerano, San Francesco e il beato Carlo Borromeo in preghiera davanti alla statua della Madonna presso San Celso a Milano
                                        5.2 Francesco Cairo, Cristo nell’Orto di Getsemani
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h3 className='color-subtitle'>6. Ritratti dinastici</h3></CardTitle>
                                    <hr className='border-3'/>
                                    <CardText className='fst-italic'>
                                        Nelle collezioni della Galleria ha un ruolo importantissimo il genere del ritratto, dipinto e scolpito.
                                    </CardText>
                                    <CardText>
                                        Dei vari dipinti esposti in questa sala vale la pena di ricordare il Ritratto equestre di Carlo Alberto, di Horace Vernet, che nel 1834 impaginava questo imponente ritratto ufficiale del re di Sardegna secondo un 
                                        modello che aveva già adoperato con successo per alcuni dei più importanti monarchi europei. Tra le sculture spicca per la qualità straordinaria della lavorazione del marmo il Ritratto del Cardinale Maurizio di Savoia 
                                        François Duquesnoy (1635). 
                                    </CardText>
                                    <CardText>
                                        6.1 Horace Vernet, Ritratto equestre di Carlo Alberto
                                        6.2 François Duquesnoy, Ritratto del Cardinale Maurizio di Savoia
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h3 className='color-subtitle'>7. Il classicismo seicentesco</h3></CardTitle>
                                    <hr className='border-3'/>
                                    <CardText className='fst-italic'>
                                        Importanti opere del classicismo seicentesco presenti soprattutto grazie all’arrivo in collezione di due importantissimi nuclei di opere: la raccolta del Cardinale Maurizio e la quadreria del Principe Eugenio.
                                    </CardText>
                                    <CardText>
                                        Insieme alle altre allegorie degli elementi naturali, proviene L’elemento dell’acqua di Francesco Albani dalla quadreria del Principe Eugenio, giunta a Torino dopo il 1741, proviene tra gli altri il San Giovanni Battista di Guido Reni.
                                    </CardText>
                                    <CardText>
                                        7.1 Guido Reni, San Giovanni Battista
                                        6.2 Francesco Albani, L’elemento dell’Acqua
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="col-lg-4">
                                <CardImg src={La_grande_pittura} alt="Il Principe Tommaso di Savoia Carignano" style={{height: '500px'}}/>
                            </div>
                            <div className="col-lg-8 d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h2 className='color-subtitle'>8. La grande pittura fiamminga del Seicento: </h2></CardTitle>
                                    <hr className='border-3'/>
                                    <CardTitle><h3 className='color-subtitle'>Pieter Paul Rubens e Antoon van Dyck</h3></CardTitle>
                                    <CardText className='fst-italic'>
                                        La Galleria vanta alcuni capolavori di maestri della pittura fiamminga del Seicento.
                                    </CardText>
                                    <CardText>
                                        Per ragioni dinastiche e di rapporti con alcune delle principali corti europee, la Galleria può vantare alcuni capolavori di maestri della pittura fiamminga del Seicento, come il Ritratto del principe Tomaso di Savoia Carignano a cavallo 
                                        di Van Dyck e I tre figli di Carlo I d’Inghilterra, dello stesso autore. Questi ritratti, insieme ad altri dipinti religiosi e profani dell’ambito di Rubens e Van Dyck, sono stati raggiunti in anni relativamente recenti dalla grande tela di 
                                        Rubens con Ercole nel giardino delle Esperidi, originariamente a Genova con Deianira tentata dalla Furia, che gli fa da pendant.
                                    </CardText>
                                    <CardText>
                                        8.1 Rubens, Ercole nel giardino delle Esperidi
                                        8.2 Van Dyck, I tre figli di Carlo I di Inghilterra
                                        8.3 Van Dyck, Il ritratto del principe Tomaso di Savoia Carignano a cavallo
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h3 className='color-subtitle'>9. Giovanni Francesco Barbieri detto il Guercino</h3></CardTitle>
                                    <hr className='border-3'/>
                                    <CardText className='fst-italic'>
                                        Un importante nucleo di opere di Giovan Francesco Barbieri, detto il Guercino, copre alcune stagioni della carriera di questo importantissimo pittore barocco.
                                    </CardText>
                                    <CardText>
                                        Il ritorno del figliol prodigo, caratterizzato dal taglio drammatico e forti accenti naturalistici esplicitamente caravaggeschi, è documentato nelle collezioni di casa Savoia già nel 1631. 
                                    </CardText>
                                    <CardText>
                                        9.1 Guercino, Il ritorno del figliol prodigo
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="col-lg-4">
                                <CardImg src={Vetrine_nord} alt="Ritratto di vecchio dormiente" style={{height: '500px'}}/>
                            </div>
                            <div className="col-lg-8 d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h3 className='color-subtitle'>10. Vetrine, corridoio verso nord</h3></CardTitle>
                                    <hr className='border-3'/>
                                    <CardText className='fst-italic'>
                                        Nelle vetrine del corridoio sono ospitate alcune opere preziose di piccolo e piccolissimo formato fiamminghe e olandesi.
                                    </CardText>
                                    <CardText>
                                        La tavoletta con le Stimmate di san Francesco di Jan van Eyck è un prodigio di pittura minuziosa e cristallina, e fu acquistata nel 1866 a Casale Monferrato. Le tavole con la Visitazione di 
                                        Rogier van der Weyden facevano invece originariamente parte di un trittico dipinto per Chieri e sono già descritte nell’inventario del 1635 delle collezioni sabaude. È esposto qui anche Il 
                                        Vecchio dormiente di Rembrandt, che con le sue ombre fonde stipate di dettagli sfida lo sguardo del visitatore.
                                    </CardText>
                                    <CardText>
                                        10.1 Jan van Eyck, Stimmate di san Francesco
                                        10.2 Rogier van der Weyden, Visitazione
                                        10.3 Rembrandt van Rijn, Vecchio dormiente
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                </div>
                <Image src={Galleria_Sabauda_p2} className='mb-3 mx-auto'></Image>
                <div className='margin'>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="col-lg-4">
                                <CardImg src={Collezione_Fiamminga_e_Olandese} alt="L'inferno" style={{height: '500px'}}/>
                            </div>
                            <div className="col-lg-8 d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h2 className='color-subtitle'>11. Collezione fiamminga e olandese</h2></CardTitle>
                                    <hr className='border-3'/>
                                    <CardTitle><h3 className='color-subtitle'>del principe Eugenio di Savoia-Soissons</h3></CardTitle>
                                    <CardText className='fst-italic'>
                                        La collezione del Principe Eugenio di Savoia-Soissons, giunta a Torino da Vienna a partire dal 1741, ha un punto di forza nei dipinti fiamminghi e olandesi, soprattutto dal tardo 500 alla fine 
                                        del 600.
                                    </CardText>
                                    <CardText>
                                        Di David Teniers il giovane, artista di Anversa che diventerà pittore di corte e curatore delle collezioni dell’arciduca Leopoldo Guglielmo d’Austria è esposto il Ritratto della moglie Anna 
                                        Brueghel che suona il liuto e del figlio David che fa le bolle di sapone. La Giovane olandese alla finestra di Gerrit Dou, già apprendista, per tre anni, nella bottega di Rembrandt, ci invita ad 
                                        andare oltre l’estrema precisione con cui sono descritti i dettagli della sua persona e dello spazio che abita. Tra i moltissimi paesaggi che fanno parte di questo nucleo collezionistico, spicca 
                                        per la vivacità delle scene e gli effetti metereologici L’inverno di Jan Griffier. 
                                    </CardText>
                                    <CardText>
                                        11.1 David Teniers, Ritratto della moglie Anna Brueghel che suona il liuto e del figlio David che fa le bolle di sapone
                                        11.2 Gerard Dou, Giovane olandese alla finestra
                                        11.3 Jan Griffier, L’inverno
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h3 className='color-subtitle'>12. Il Settecento tra Barocco e Rococò</h3></CardTitle>
                                    <hr className='border-3'/>
                                    <CardText className='fst-italic'>
                                        In questa sala dominano la scena quattro dipinti di Francesco Solimena, protagonista della transizione dal Barocco al Rococò.
                                    </CardText>
                                    <CardText>
                                        Ne La cacciata di Eliodoro dal Tempio la cultura architettonica e scenografica si fonde con un impeto drammatico che raccoglie l’eredità delle diverse stagioni del ‘600 napoletano. I quattro dipinti 
                                        furono commissionati da Vittorio Amedeo II intorno al 1720. In quegli anni, il sovrano, re di Sicilia prima, re di Sardegna poi, stava dando una nuova forma alla città con la direzione artistica 
                                        dell’architetto Filippo Juvarra.
                                    </CardText>
                                    <CardText>
                                        12.1 Francesco Solimena, La cacciata di Eliodoro dal tempio
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h3 className='color-subtitle'>13. La pittura veneziana a Torino</h3></CardTitle>
                                    <hr className='border-3'/>
                                    <CardText className='fst-italic'>
                                        In questa sala sono esposte le grandi tele commissionate intorno al 1725 da Vittorio Amedeo II al pittore veneto Sebastiano Ricci.
                                    </CardText>
                                    <CardText>
                                        Attraverso la mediazione di Filippo Juvarra. Il Mosé fa scaturire l’acqua dalla roccia, dall’impianto corale e spettacolare è realizzato molto verosimilmente con l’aiuto del nipote Marco, paesaggista 
                                        e scenografo, incaricato tra l’altro dallo stesso Juvarra di un lavoro di decorazione al castello di Rivoli. È esposta in questa stessa sala anche la grande tela giovanile del Tiepolo, con Il trionfo 
                                        di Aureliano, a sua volta intrisa di cultura scenografica e melodrammatica.
                                    </CardText>
                                    <CardText>
                                        13.1 Sebastiano Ricci, Mosè fa scaturire l’acqua dalla roccia
                                        13.2 Giovanni Battista Tiepolo, Il trionfo di Aureliano
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h3 className='color-subtitle'>14. L’arte italiana del ‘700</h3></CardTitle>
                                    <hr className='border-3'/>
                                    <CardText className='fst-italic'>
                                        In queste sale si può seguire l’evoluzione degli stili e dei generi della pittura in Italia nel corso del XVIII secolo.
                                    </CardText>
                                    <CardText>
                                        Si comincia con le vedute di Gaspar van Wittel dal soggetto immediatamente riconoscibile, come Il Colosseo, chiudiamo con le vedute di Bernardo Bellotto, realizzate nel 1745 a Torino per la corte di Carlo 
                                        Emanuele III: ci riguarda da vicino la Veduta di Torino dal lato dei Giardini Reali. Il re aveva acquistato a Bologna la tela di Giuseppe Maria Crespi con San Giovanni Nepomuceno confessa la regina di Boemia, 
                                        che sembra recuperare le ombre del Seicento. È invece un acquisto recentissimo Il ritratto dell’abate Felice Ramelli di Pierre Subleyras, uno dei ritrattisti più celebrati del Settecento. 
                                    </CardText>
                                    <CardText>
                                        14.1 Gaspar van Wittel, Il Colosseo
                                        14.2 Pierre Subleyras, Il ritratto dell’abate Felice Ramell
                                        14.3 Giuseppe Maria Crespi, San Giovanni Nepomuceno confessa la regina di Boemia
                                        14.4 Bernardo Bellotto, Veduta di Torino dal lato dei Giardini Reali
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="col-lg-4">
                                <CardImg src={La_Collezione_Gualino} alt="Madonna col bambino" style={{height: '500px'}}/>
                            </div>
                            <div className="col-lg-8 d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h3 className='color-subtitle'>15. La Collezione Gualino</h3></CardTitle>
                                    <hr className='border-3'/>
                                    <CardText className='fst-italic'>
                                        In queste sale è presente la raccolta di opere d’arte che Riccardo Gualino, industriale, finanziere, mecenate e collezionista piemontese, cedette allo Stato Italiano nel 1930.
                                    </CardText>
                                    <CardText>
                                        Se tra le opere di pittura vanno ricordate la Madonna con il Bambino di Duccio di Buoninsegna (1280-1285) e la Venere (1485-1490) del Botticelli, tra le opere di oreficeria spiccano gli orecchini con pendente a forma di volatile, risalenti al III-II sec. a.C, provenienti probabilmente dalle colonie greche sul Mar Nero. 
                                    </CardText>
                                    <CardText>
                                        15.1 Duccio, Madonna con Bambino
                                        15.2 Orecchini con pendente a forma di volatile, III-II sec. a.C.
                                        15.3 Sandro Botticelli, Venere
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                </div>
                <h2 className='color-title text-center'>Museo di Antichità</h2>
                <Image src={Museo_di_Antichita} className='mb-3 mx-auto'></Image>
                <div className='margin'>
                    <Card className="mb-3 margin">
                        <div className="row g-0">
                            <div className="col-lg-4">
                                <CardImg src={Scultura_in_bronzo} alt="La grande scultura in bronzo" style={{height: '500px'}}/>
                            </div>
                            <div className="col-lg-8 d-flex align-items-center">
                                <CardBody>
                                    <CardTitle><h3 className='color-subtitle'>1. Torino romana: la grande scultura in bronzo</h3></CardTitle>
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
                                    <CardTitle><h3 className='color-subtitle'>2. Preistoria di Torino</h3></CardTitle>
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
                                    <CardTitle><h3 className='color-subtitle'>3. La città romana: discariche e rito di fondazione</h3></CardTitle>
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
                                    <CardTitle><h3 className='color-subtitle'>4. La I personaggi pubblici</h3></CardTitle>
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
                                    <CardTitle><h3 className='color-subtitle'>5. La vita privata</h3></CardTitle>
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
                                    <CardTitle><h3 className='color-subtitle'>6. Le nocropoli e i riti per i defunti</h3></CardTitle>
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
                                    <CardTitle><h3 className='color-subtitle'>7. Le Longobardi</h3></CardTitle>
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
                                    <CardTitle><h3 className='color-subtitle'>8. Tra Medioevo ed Età Moderna</h3></CardTitle>
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
                                    <CardTitle><h3 className='color-subtitle'>9. Tesoro di Marengo</h3></CardTitle>
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
                                    <CardTitle><h3 className='color-subtitle'>10. I bronzi da Industria</h3></CardTitle>
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
                                    <CardTitle><h3 className='color-subtitle'>11. Età moderna e Medioevo in Piemonte</h3></CardTitle>
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
                                    <CardTitle><h3 className='color-subtitle'>12. Età romana in Piemonte</h3></CardTitle>
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
                                    <CardTitle><h3 className='color-subtitle'>13. Preistoria in Piemonte</h3></CardTitle>
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
                                    <CardTitle><h3 className='color-subtitle'>Galleria Archeologica</h3></CardTitle>
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
                                    <CardTitle><h3 className='color-subtitle'>1. Galleria delle sculture</h3></CardTitle>
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
                                    <CardTitle><h3 className='color-subtitle'>2. Vicino Oriente Antico</h3></CardTitle>
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
                                    <CardTitle><h3 className='color-subtitle'>3. I Greci</h3></CardTitle>
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
                                    <CardTitle><h3 className='color-subtitle'>4. Gli Etruschi</h3></CardTitle>
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
                                    <CardTitle><h3 className='color-subtitle'>5. Cipro</h3></CardTitle>
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
                                    <CardTitle><h3 className='color-subtitle'>Teatro Romano</h3></CardTitle>
                                    <hr className='border-3'/>
                                    <CardText className='fst-italic'>
                                        Una grande vetrata consente l’affaccio sul Teatro Romano (I-III sec. d.C), ritrovato nel 1899 durante i lavori per la costruzione della Manica Nuova di Palazzo Reale, visibile all’aperto per poco più della sua metà.
                                    </CardText>
                                    <CardText>
                                        La cavea semicircolare, dove sedevano gli spettatori, si conserva nella sua parte inferiore, insieme all’orchestra e alla scena. Dietro al muro di scena, dotato di dispositivi funzionali alle scenografie, si conservano le tracce del portico 
                                        quadrangolare dove gli spettatori potevano muoversi nei momenti di pausa o ripararsi in caso di pioggia.
                                    </CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                </div>
                <h2 className='color-title text-center'>Museo di Antichità</h2>
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
                                    <CardTitle><h3 className='color-subtitle'>Giardino Ducale</h3></CardTitle>
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
                                    <CardTitle><h3 className='color-subtitle'>1. Vasi del Giardino Ducale</h3></CardTitle>
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
                                    <CardTitle><h3 className='color-subtitle'>2. Ulisse di Giuliano Vangi</h3></CardTitle>
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
                                    <CardTitle><h3 className='color-subtitle'>Giardino Bassi e le Mura</h3></CardTitle>
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
                                    <CardTitle><h3 className='color-subtitle'>3. Le serre Reali</h3></CardTitle>
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
                                    <CardTitle><h3 className='color-subtitle'>4. Ginko biloba</h3></CardTitle>
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
                                    <CardTitle><h3 className='color-subtitle'>5. Bastion Verde</h3></CardTitle>
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
                                    <CardTitle><h3 className='color-subtitle'>6. Pietre Preziose di Giulio Paolini</h3></CardTitle>
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
                                    <CardTitle><h3 className='color-subtitle'>7. Albero delle lanterne cinesi</h3></CardTitle>
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
                                    <CardTitle><h3 className='color-subtitle'>8. Fontana dei Tritoni</h3></CardTitle>
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
                                    <CardTitle><h2 className='color-subtitle'>9. Faggio pendulo</h2></CardTitle>
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
                                    <CardTitle><h3 className='color-subtitle'>Giargini della Cavallerizza</h3></CardTitle>
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
    </>
    
  )
}
