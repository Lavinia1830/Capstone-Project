import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { CardText, CardImg, Image, CardBody, CardTitle } from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import { Link } from '@inertiajs/react';
import Pianta from '../../../../../assets/Piemonte/Palazzo_reale_armeria_reale_e_cappella_della_sindone.jpg';
import Salone_delle_guardie_svizzere from '../../../../../assets/Piemonte/Salone_delle_guardie_svizzere_Torino_Piemonte.jpg';
import Sala_del_Consiglio from '../../../../../assets/Piemonte/Sala_del_Consiglio_Torino_Piemonte.jpg';
import Gabinetto_Cinese from '../../../../../assets/Piemonte/Gabinetto_Cinese_Torino_Piemonte.jpg';
import Armeria_Reale from '../../../../../assets/Piemonte/Armeria_Reale_Torino_Piemonte.jpg';







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
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="col-lg-4">
                            <CardImg src={Salone_delle_guardie_svizzere} className="rounded-start photo-pianta" alt="Salone delle Guardie Svizzere"/>
                        </div>
                        <div className="col-lg-8 d-flex align-items-center">
                            <CardBody>
                                <CardTitle><h2 className='color-subtitle'>1. Salone delle Guardie Svizzere</h2></CardTitle>
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
                                <CardTitle><h2 className='color-subtitle'>2. Sala del Trono</h2></CardTitle>
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
                            <CardImg src={Sala_del_Consiglio} className="rounded-start photo-pianta" alt="Sala del Consiglio"/>
                        </div>
                        <div className="col-lg-8 d-flex align-items-center">
                            <CardBody>
                                <CardTitle><h2 className='color-subtitle'>3. Sala del Consiglio</h2></CardTitle>
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
                            <CardImg src={Gabinetto_Cinese} className="rounded-start photo-pianta" alt="Gabinetto Cinese"/>
                        </div>
                        <div className="col-lg-8 d-flex align-items-center">
                            <CardBody>
                                <CardTitle><h2 className='color-subtitle'>4. Gabinetto Cinese</h2></CardTitle>
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
                            <CardImg src={Armeria_Reale} className="rounded-start photo-pianta" alt="Armeria Reale"/>
                        </div>
                        <div className="col-lg-8 d-flex align-items-center">
                            <CardBody>
                                <CardTitle><h2 className='color-subtitle'>Armeria Reale</h2></CardTitle>
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
                                <CardTitle><h2 className='color-subtitle'>5. Armeria Reale - Galleria Beaumont</h2></CardTitle>
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
            </div>
            
        </main>
        <Footer/>
    </AuthenticatedLayout>
  )
}
