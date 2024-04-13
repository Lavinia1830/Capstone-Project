import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { CardText, CardImg, Image, CardBody, CardTitle } from 'react-bootstrap';
import {Card} from 'react-bootstrap';
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


export default function Capolavori_della_pittura(props) {
  return (
    <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
    >
        <main>
            <h1 className='color-title text-center'>Galleria Sabauda</h1>
            <Image src={Galleria_Sabauda} className='mb-3 mx-auto'></Image>
            <p className='margin fst-italic'>
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
                                <CardTitle><h2 className='color-subtitle'>1 Gli antichi Maestri piemontesi</h2></CardTitle>
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
                                <CardTitle><h2 className='color-subtitle'>2 Arte italiana dalla fine del Trecento al Rinascimento</h2></CardTitle>
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
                                <CardTitle><h2 className='color-subtitle'>3 La pittura manierista</h2></CardTitle>
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
                                <CardTitle><h2 className='color-subtitle'>4 I pittori caravaggeschi</h2></CardTitle>
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
                                <CardTitle><h2 className='color-subtitle'>5 I maestri lombardi del Seicento</h2></CardTitle>
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
                                <CardTitle><h2 className='color-subtitle'>6 Ritratti dinastici</h2></CardTitle>
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
                                <CardTitle><h2 className='color-subtitle'>7 Il classicismo seicentesco</h2></CardTitle>
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
                                <CardTitle><h2 className='color-subtitle'>8 La grande pittura fiamminga del Seicento: </h2></CardTitle>
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
                                <CardTitle><h2 className='color-subtitle'>9 Giovanni Francesco Barbieri detto il Guercino</h2></CardTitle>
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
                                <CardTitle><h2 className='color-subtitle'>8 Vetrine, corridoio verso nord</h2></CardTitle>
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
                                <CardTitle><h2 className='color-subtitle'>11 Collezione fiamminga e olandese</h2></CardTitle>
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
                                <CardTitle><h2 className='color-subtitle'>12 Il Settecento tra Barocco e Rococò</h2></CardTitle>
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
                                <CardTitle><h2 className='color-subtitle'>13 La pittura veneziana a Torino</h2></CardTitle>
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
                                <CardTitle><h2 className='color-subtitle'>14 L’arte italiana del ‘700</h2></CardTitle>
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
                                <CardTitle><h2 className='color-subtitle'>15 La Collezione Gualino</h2></CardTitle>
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
        </main>
        <Footer/>
    </AuthenticatedLayout>
  )
}
