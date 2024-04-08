import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { CardText, CardImg, Image, CardBody, CardTitle } from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import Pianta from '../../../../../assets/Piemonte/Palazzo_reale_armeria_reale_e_cappella_della_sindone.jpg';
import Salone_delle_guardie_svizzere from '../../../../../assets/Piemonte/Salone_delle_guardie_svizzere_Torino_Piemonte.jpg';
import Sala_del_Consiglio from '../../../../../assets/Piemonte/Sala_del_Consiglio_Torino_Piemonte.jpg';
import Gabinetto_Cinese from '../../../../../assets/Piemonte/Gabinetto_Cinese_Torino_Piemonte.jpg';
import Armeria_Reale from '../../../../../assets/Piemonte/Armeria_Reale_Torino_Piemonte.jpg';
import Le_armature_dei_Samurai from '../../../../../assets/Piemonte/Le_armature_dei_Samurai_Torino_Piemonte.jpg';
import Sala_da_Ballo from '../../../../../assets/Piemonte/Sala_da_Ballo_Torino_Piemonte.jpg';
import Cappella_della_Sindone from '../../../../../assets/Piemonte/Cappella_della_Sindone_Torino_Piemonte.jpg';




export default function Palazzo_reale_armeria_reale_e_cappella_della_sindone(props) {
  return (
    <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
    >
        <main>
            <h1 className='color-title text-center'>Palazzo Reale, Armeria reale e cappella della Sindone</h1>
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
                                <CardTitle><h2 className='color-subtitle'>1 Salone delle Guardie Svizzere</h2></CardTitle>
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
                                <CardTitle><h2 className='color-subtitle'>2 Sala del Trono</h2></CardTitle>
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
                                <CardTitle><h2 className='color-subtitle'>3 Sala del Consiglio</h2></CardTitle>
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
                                <CardTitle><h2 className='color-subtitle'>4 Gabinetto Cinese</h2></CardTitle>
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
                                <CardTitle><h2 className='color-subtitle'>Armeria Reale</h2></CardTitle>
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
                                <CardTitle><h2 className='color-subtitle'>5 Armeria Reale - Galleria Beaumont</h2></CardTitle>
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
                                <CardTitle><h2 className='color-subtitle'>5.3 Armeria Reale</h2></CardTitle>
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
                                <CardTitle><h2 className='color-subtitle'>6 Galleria del Daniel</h2></CardTitle>
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
                                <CardTitle><h2 className='color-subtitle'>7 Sala da Pranzo</h2></CardTitle>
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
                                <CardTitle><h2 className='color-subtitle'>8 Sala da Ballo</h2></CardTitle>
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
                                <CardTitle><h2 className='color-subtitle'>9 Cappella della Sindone</h2></CardTitle>
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
        </main>
        <Footer/>
    </AuthenticatedLayout>
  )
}
