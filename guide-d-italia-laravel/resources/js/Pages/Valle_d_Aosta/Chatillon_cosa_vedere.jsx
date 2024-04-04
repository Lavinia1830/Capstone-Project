import React from 'react';
import CercaComponent from '@/Components/CercaComponent';
import Footer from '@/Components/Footer';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';
import { Card, CardText, CardBody, CardTitle, CardImg } from 'react-bootstrap';
import Chatillon_cosa_vedere_img from '../../../assets/Valle_d_Aosta/Chatillon_cosa_vedere_Valle_d_Aosta.jpg';
import Chiesa_parrocchiale_Chatillon from '../../../assets/Valle_d_Aosta/Chiesa_parrocchiale_Chatillon_Valle_d_Aosta.jpg';
import Interni_chiesa_di_Chatillo from '../../../assets/Valle_d_Aosta/Interni_chiesa_di_Chatillo_Valle_d_Aosta.jpg';
import Castello_di_Ussel from '../../../assets/Valle_d_Aosta/Castello_di_Ussel_Valle_d_Aosta1.jpg';
import Castello_Gamba from '../../../assets/Valle_d_Aosta/Castello_Gamba_Valle_d_Aosta1.jpg';
import Miele from '../../../assets/Valle_d_Aosta/Miele_Valle_d_Aosta.jpg';
import Bancarella_miele from '../../../assets/Valle_d_Aosta/Bancarella_miele_Valle_d_Aosta.jpg';

export default function Chatillon_cosa_vedere(props) {
  return (
    <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
    >
        <main className='row'>
            <div className='col-lg-8'>
                <div className='margin'>
                    <img src={Chatillon_cosa_vedere_img} alt="Chatillon" className='mx-auto my-4' style={{width: 'auto', height: 'auto'}}/>
                    <h1 className='color-title text-center mb-3'>Châtillon cosa vedere nel paese dei castelli</h1>
                    <hr className='w-25 border-3'/>
                </div>
                <div className="margin">
                    <p>
                       Nota durante il periodo fascista col nome <b>Castiglione Dora</b>, Chatillon si trova nel cuore della Valle d'Aosta, all'interno della Valtournenche. <br/>
                       Il nome stesso nome <b>Châtillon</b> consente di presumere che il luogo di un importante presidio militare lungo la <Link href='/visite/strada_romana_gallie' 
                       className='text-decoration-none color_link'>strada che conduceva alle Gallie</Link>. Ne sono testimonianza i resti ancora visibili dell'antico ponte romano pultroppo gravemente danneggiato a seguito del passaggio delle truppe 
                       francesi nel 1691. <br/>
                       Si sa inoltre che in epoca medievale il territorio era sotto il controllo della potente famiglia Cahllant che possedeva qui ben due castelli che possono essere ammirati ancora oggi. <br/>
                       Tutto questo lo troverete in questo articolo su <b>Châtillon cosa vedere</b> tra castelli e sagre:
                    </p>
                    <ul className='lista'>
                        <span>Contenuti</span>
                        <li>
                            <Link href='#First_Point_Header' className='text-decoration-none color_link'>1 Centro storico di Châtillon</Link>
                        </li>
                        <li>
                            <Link href='#Second_Point_Header' className='text-decoration-none color_link'>2 Chiesa parrochiale di San Pietro</Link>
                        </li>
                        <li>
                            <Link href='#Third_Point_Header' className='text-decoration-none color_link'>3 Castello Passerin dì'Entréves</Link>
                        </li>
                        <li>
                            <Link href='#Fourth_Point_Header' className='text-decoration-none color_link'>4 Castello di Ussel</Link>
                        </li>
                        <li>
                            <Link href='#Fifth_Point_Header' className='text-decoration-none color_link'>5 Castello Gamba</Link>
                        </li>
                        <li>
                            <Link href='#Sixth_Point_Header' className='text-decoration-none color_link'>6 Eventi e Sagre</Link>
                        </li>
                        <li>
                            <Link href='#Seventh_Point_Header' className='text-decoration-none color_link'>7 Cosa vedere nei dintorni</Link>
                        </li>
                    </ul>
                </div>
                <Card className="mb-3 margin">
                    <div className="d-flex align-items-center">
                        <CardBody>
                            <CardTitle><h2 className="card-title color-subtitle" id='First_Point_Header'>Centro storico Châtillon</h2></CardTitle>
                            <CardText>
                                L'impianto urbanistico del centro storico di Châtillon ricalca quello del borgo medievale il quale epoche lontane aveva un ruolo economico importantissimo, ma di cui rimangono poche testimonianze architettoniche 
                                fatte di finestre gotiche, faritoie o contrafforti.
                                Rimangono però tracce di epoche più recenti come il <b>settecentesco ex Palazzo Gervasone</b>, il cui nome deriva da quello di una famiglia di origine bergamasca che fece fortuna con lo sfruttamento delle 
                                miniere, delle fonderie e delle fabbriche di ferro della zona. <br/>
                                Lungo la via principale del paese si trovano inoltre le residenze do notabili e nobili come gli Scalaz e i Bich, originari della Valtournenche. Celebre fu Pantaleon Bich il quale fu il primo a sfruttare le miniere 
                                di ferro di Ussel diventando un personaggio ricco e benestante. Tra i suoi discendenti si annovera <b>Marcel Bich</b>, titolare in Francia del famoso marchio BIC.
                            </CardText>
                        </CardBody>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="d-flex align-items-center">
                        <CardBody>
                            <CardTitle><h2 className="card-title color-subtitle" id='Second_Point_Header'>Chiesa parrochiale di San Pietro</h2></CardTitle>
                            <CardText>
                                A monte del borgo si trova l'imponente chiesa parrochiale di San Pietro. Il primo documento attestante l'esistenza della <strong>Parrochia di Châtillon</strong> risale al XII° secolo chiesa parrocchiale si desumono 
                                da una visita pastorale del 1576 quando la chiesa era orientata verso est e aveva una sola navata e oltre all'altare maggiore luogo le pareti laterali erano addossati 5 altari minori. <br/>
                                Nel 1633 il Barone Paul Emanuele de Challant dona un edificio situato al centro del borgo di Châtillon per ospitare "les Frère de St-François" provenienti dalla Savoia. In sseguito la chiesa parrocchiale viene 
                                ampliata a 3 navate. <br/>
                                Nel 1841 la chiesa è oggetto di un nuovo intervento di ampliamento tuttavia la capienza della chiesa era sempre insufficiente rispetto al progressivo crescere della popolazione pertanto si procederà nel 1901 con la 
                                costruzione di una chiesa nuova. Il progettista è l'insegnate <b>Carlo Saroldi</b> di Torino, lo stesso che aveva progettato il Castello di Barone Gamba.<br/>
                                Dopo soli tre anni di intenso lavoro il 27 agosto 1905 viene consacrata la nuova chiesa del vescovo Mons. Duc; l'edificio si presenta orientato a nord e le pitture della volta nella navata centrale rappresentano Maria 
                                Assunta in cielo e San Pietro: sono opera dei fratelli Alessandro e Augusto Artati di Verrès.
                            </CardText>
                        </CardBody>
                    </div>
                    <div className="d-flex flex-row justify-content-center">
                        <div className='mx-2'>
                            <CardImg src={Chiesa_parrocchiale_Chatillon} className="mb-2"  alt="Chiesa parrochiale di Châtillon" title='Chiesa parrochiale di Châtillon'/>
                            <p className='text-center'>
                                Chiesa parrochiale di Châtillon
                            </p>
                        </div>
                        <div className='mx-2'>
                            <CardImg src={Interni_chiesa_di_Chatillo} className="mb-2"  alt="Interni della chiesa di Châtillon" title='Interni della chiesa di Châtillon'/>
                            <p className='text-center'>
                                Interni della chiesa di Châtillon
                            </p>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="d-flex align-items-center">
                        <CardBody>
                            <CardTitle><h2 className="card-title color-subtitle" id='Third_Point_Header'>Castello Passerin d'Entrèves</h2></CardTitle>
                            <CardText>
                                Tra i castelli di Châtillon, il più antico è il <strong>Castello Passerin d'Entrèves</strong>. Il castello è situato alle spalle della chiesa parrocchiale ed è immerso in un bel parco. <br/>
                                Il maniero, noto anche come il <b>castello di Châtillon</b>, risale al XII secolo ed era di proprietà dei potenti Signori di Challant di cui fu una delle residenze preferite fino al 1802 quando vi morì, all'età di 7 
                                anni, l'ultimo erede Giulio Giacinto. All'inizio dell'Ottocento la dimora passò quindi alla famiglia Passerin d'Entrèves che ne è tuttora la proprietà. <br/>
                                Tra gli interventi strutturali subuti dal castello vi sono quelli quattrocenteschi voluti da Jean de Challant che dopo averlo ereditato dal padre iblet lo fece ricostruire e ampliare. Tale ricostruzione sembrerebbe 
                                confermata dal ciclo di affreschi che decorano la sala della biblioteca databile tra il primo e terzo decennio del XV secolo. <br/>
                                Nel corso del XV secolo il castello di Châtillon divenne la roccaforte di Catherine de Challant ed il suo sposo Pierre d'Introd durante la lotta intestina alla famiglia.
                            </CardText>
                            <CardText>
                                Nel corso del Settecento Paolina Solaro di Govone, moglie di Georges-François, intraprese la terza ricostruzione del castello. Modificanto e ampliato, non solo cambiò il suo aspetto esterno ma divenne anche molto più 
                                confrotevole. È proprio in questo periodo che il castello assunse l'aspetto attuale. <br/>
                                A Paolina Solaro di Govono si deve anche la relizzazione del viale dei tigli e del giardino alla francese. <br/>
                                Nal 1802 quando l'ultimo discendente della famigli, all'età di sette anni morì, la madre Gabriella Canalis di Cumiana sposò Aimé Passserin d'Entrèves il quale nel 1841, dopo la morte della moglie, ereditò tutto il 
                                patrimonio degli Challant. <br/>
                                Infine sempre nell'Ottocento il conte Crispino Passerin d'Entrèves fece costruire accanto al castello un ristico, demolendo l'antica torre esagonale che serviva per manovrare il ponte levatorio già smantellato in precedenza.
                            </CardText>
                            <CardText>
                                Oggli il coastello di Châtillon si presenta come una struttura di pietra rettangolare, con due torri a ponente ed una torre a levante per la foresteria e la cappella. Al suo interno si trova inoltre una ricca biblioteca ed 
                                un magnifico salone. <br/>
                                Il castello non è visibile in quanro è oggi una <b>dimora privata</b>. È però possibile visitare l'ampio parco che si estende per 3 ettari e che conserva al suo interno 30 alberi monumentali. <br/>
                                Il parco è aperto da marzo a novembre.
                            </CardText>
                        </CardBody>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="d-flex align-items-center">
                        <CardBody>
                            <CardTitle><h2 className="card-title color-subtitle" id='Fourth_Point_Header'>Castello di Ussel</h2></CardTitle>
                            <CardText>
                                Il <Link href='/castello_di_ussel' className='text-decoration-none color_link'>Castello di Ussel</Link> risale alla metà del Trecento ed è stato il primo castello valdostano a forma di parallelepipedo segnando il passaggio tra 
                                il contemporaneo castello di fénis e le rigide forme del castello di Verrès. Costruito su un sperone roccioco sulla destra orografica della Dora Baltea, doveva controllare sia il fondovalle che l'imbocco della Valtournenche. <br/>
                                Dopo essere passato più volte dagli Challant ai Savoia e viceversa, il castello venne utilizzato come prigione, fino al completo abbandono. Nel 1983 il barone Marcel Bich, dopo aver acquistato il castello dalla famiglia Passerin 
                                d'Entrèves, lo donò alla Regione autonoma Valle d'Aosta. <br/>
                                Visibile solamente esternamente, il castello di Ussel si presenta come un edificio massiccio decorato da una fascia commitale di archetti ciechi e da bellissime bifore con decorazioni floreali e geometriche. Il lato nord, che guarda 
                                verso Châtillon, si caratterizza da due torri quadrangolari leggermente sporgenti, tra le quali, al centro, si eleva il mastio, elemento simbolico della potenza del feudatario. <br/>
                                All'interno il castello è spoglio dei suoi arredi, rimangono solo i monumentali camini con grandi mesole, nonché tracce delle scale e delle divisioni in piani.<br/>
                                <b>Il castello è visibile solamente esternamente</b>.
                            </CardText> 
                        </CardBody>
                    </div>
                    <div className="d-flex flex-row justify-content-center">
                        <div className='mx-2'>
                            <CardImg src={Castello_di_Ussel} className="mb-2"  alt="Castello di Ussel" title='Castello di Ussel'/>
                            <p className='text-center'>
                                Castello di Ussel
                            </p>
                        </div>
                        <div className='mx-2'>
                            <CardImg src={Castello_Gamba} className="mb-2"  alt="Castello Gamba" title='Castello Gamba'/>
                            <p className='text-center'>
                                Castello Gamba
                            </p>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="d-flex align-items-center">
                        <CardBody>
                            <CardTitle><h2 className="card-title color-subtitle" id='Fifth_Point_Header'>Castello di Ussel</h2></CardTitle>
                            <CardText>
                                Il <Link href='/visite/castello_gamba' className='text-decoration-none color_link'>Castello di Gamba</Link> risale al 1901 e si trova su un poggio nella parte occidentale di Châtillon, località Cret de Breil. <br/>
                                Edificato per volere di Carlo Maurizio Gamba, marito di Angélique d'Entrèves, originaria del paese e figlia del conte Christian d'Entrèves, fu progettato dell'Ingegner Carlo Saroldi. Il castello dal 1982 è di proprietà della Regione autonoma 
                                Valle Aosta che dopo un importante intervento di restuaro, ha adibito la dimora a nmuseo. Il castello oggi ospita un <b>percorso espositivo</b> che si snoda attraverso 13 sale, in cui espone oltre 150 opere tra dipinti, sculture, installazioni, 
                                raccolte grafiche e fotografiche di <Link to='/visite/castello_baron_gamba' className='text-decoration-none color_link'>arte moderna e contemporanea</Link> che va dalla fine dell'ottocento fino ai nostri giorni, <br/>
                                Il castello è circondato da un ampio <b>parco all'inglese</b> visitabile tutto l'anno e nel quale si trovano tre alberi monumentali: la Sequoia gigante della California, il Cipresso calvo e lo Spino di Guida.
                            </CardText> 
                        </CardBody>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="d-flex align-items-center">
                        <CardBody>
                            <CardTitle><h2 className="card-title color-subtitle" id='Sixth_Point_Header'>Eventi e sagre</h2></CardTitle>
                            <CardText>
                                Tra i più interessanti eventi locali vi è la <b>Sacra del miele</b> in scena ogni ultima domenica di ottobre tra le vie del borgo di Châtillon e che ospita ogni anno decine di produzioni locali. In occasione della 
                                manifestazione vengono esposti gli attrezzi usati dagli apicoltori e sono organizzate conferenze e laboratori sul tema.
                            </CardText> 
                        </CardBody>
                    </div>
                    <div className="d-flex flex-row justify-content-center">
                        <div className='mx-2'>
                            <CardImg src={Miele} className="mb-2"  alt="Miele" title='Il miele: prodotto principalmente dalla sagra omonima'/>
                            <p className='text-center'>
                                Il miele: prodotto principalmente dalla sagra omonima
                            </p>
                        </div>
                        <div className='mx-2'>
                            <CardImg src={Bancarella_miele} className="mb-2"  alt="Bancarella di miele" title='Bancarella di miele'/>
                            <p className='text-center'>
                                Bancarella di miele
                            </p>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="d-flex align-items-center">
                        <CardBody>
                            <CardTitle><h2 className="card-title color-subtitle" id='Seventh_Point_Header'>Cosa vedere nei dintorni</h2></CardTitle>
                            <CardText>
                                Châtillon è posizionata al centro della Valle d'Aosta e adatta come luogo di soggiorno per visitare in giornata diverse località della Valle d'Aosta. Situata vicino alla famosa <Link href='/vivite/saint_vincent'
                                className='text-decoration-none color_link'>Saint Vincent</Link>, Châtillon consente anche di raggiungere agevolmente la <Link to='/vivite/breuil_cervinia' className='text-decoration-none color_link'>Valtournenche</Link> dove
                                si trova il famoso Cervino. 
                            </CardText> 
                        </CardBody>
                    </div>
                </Card>
                <div className="margin">
                    <p className='fw-bold'>
                        Contattami per visitare Châtillon, i suoi castelli e isuoi dintorni.
                    </p>
                </div>
                <div className='margin'>
                    <h3 className='color-subtitle'>Leggi</h3>
                    <ul className='lista'>
                        <li>
                            <Link to='/via_francigena_valle_d_aosta' className='text-decoration-none color_link'>La Via Francigena Valle d'Aosta: l'itinerario lungo il primo tratto italiano</Link>
                        </li>
                        <li>
                            <Link href='/castello_di_ussel' className='text-decoration-none color_link'>Castello di Ussel e l'inventore della penna Bic</Link>
                        </li>
                        <li>
                            <Link to='/sacre_valle_d_aosta' className='text-decoration-none color_link'>Sapori d'autonno tra le sacre della Valle d'Aosta</Link>
                        </li>
                        <li>
                            <Link href='/le_piu_belle_passeggiate_lungo_i_ru_della_valle_daosta' className='text-decoration-none color_link'>Le più belle passeggiate lungo i ruscelli della Valle d’Aosta</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <CercaComponent/>
        </main>
        <Footer/>
    </AuthenticatedLayout>
  )
}
