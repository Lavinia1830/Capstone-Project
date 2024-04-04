import React from 'react';
import CercaComponent from '@/Components/CercaComponent';
import Footer from '@/Components/Footer';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';
import { Card } from 'react-bootstrap';
import Castelli_piu_belli from '../../../assets/Valle_d_Aosta/Castelli_piu_belli_della_Valle_d_Aosta.jpg';
import Castello_di_Fenis from '../../../assets/Valle_d_Aosta/Castello_di_Fenis_Valle_d_Aosta.jpg';
import Porticato_afffrescato_del_Castello_di_Issogne from '../../../assets/Valle_d_Aosta/Porticato_afffrescato_del_Castello_di_Issogne_Valle_d_Aosta.jpg';
import Castello_di_Verres from '../../../assets/Valle_d_Aosta/Castello_di_verres_Valle_d_Aosta1.jpg';
import Castel_Savoia from '../../../assets/Valle_d_Aosta/Castel_Savoia_a_Gressoney_Valle_d_Aosta.jpg';
import Castello_reale_di_serre from '../../../assets/Valle_d_Aosta/Castello_di_Sarre_Valle_d_Aosta1.jpg';
import Castello_sarriod_de_la_tour from '../../../assets/Valle_d_Aosta/Castello_sarriod_de_la_tour_Valle_d_Aosta.jpg';
import Castello_Gamba from '../../../assets/Valle_d_Aosta/Castello_Gamba_Valle_d_Aosta.jpg';
import Castello_di_Introd from '../../../assets/Valle_d_Aosta/Castello_di_Introd_Valle_d_Aosta.jpg';
import Castello_di_Aymavilles from '../../../assets/Valle_d_Aosta/Castello_di_Aymavilles_Valle_d_Aosta1.jpg';
import Castello_di_Saint_Pierre from '../../../assets/Valle_d_Aosta/Castello_di_Saint_pierre_Valle_d_Aosta1.jpg';
import Forte_di_Bard from '../../../assets/Valle_d_Aosta/Forte-di-Bard_Valle_d_Aosta.jpg';
import Chateau_Vallaise from '../../../assets/Valle_d_Aosta/Chateau_Vallaise_a_Arnad_Valle_d_Aosta.jpg';














export default function I_Castelli_piu_belli_Valle_d_Aosta(props) {
  return (
    <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
    >
        <main className='row'>
            <div className='col-lg-8'>
                <div className='margin'>
                    <img src={Castelli_piu_belli} alt="" className='mx-auto my-4' style={{width: 'auto', height: 'auto'}}/>
                    <h1 className='color-title text-center mb-3'>I castelli della Valle d'Aosta più belli da visitare</h1>
                    <hr className='w-25 border-3'/>
                </div>
                <div className="margin">
                    <p>
                       Il nostro itinerario, fruibile in ogni momento dell'anno, si snoda tra i <strong>castelli della Valle d'Aosta più belli</strong>. <br/>
                       La Valle d'Aosta infatti è famosa per i suoi numerosi castelli che spuntano qua e là lungo la valle principale. Una terra ricca di fortificazioni, castelli e torri che caratterizzano il paesaggio e non sono ormai
                       parte integrante. <br/>
                       Un itinerario tra i <b>castelli Valle d'Aosta da visitare</b>, tutti bellissimi e affascinati.
                    </p>
                    <ul className='lista'>
                        <span>Contenuti</span>
                        <li>
                            <Link href='#First_Point_Header' className='text-decoration-none color_link'>1 Castello di Fénis</Link>
                        </li>
                        <li>
                            <Link href='#Second_Point_Header' className='text-decoration-none color_link'>2 Castello di Issogne</Link>
                        </li>
                        <li>
                            <Link href='#Third_Point_Header' className='text-decoration-none color_link'>3 Castello di Verrès</Link>
                        </li>
                        <li>
                            <Link href='#Fourth_Point_Header' className='text-decoration-none color_link'>4 Castel Savoia</Link>
                        </li>
                        <li>
                            <Link href='#Fifth_Point_Header' className='text-decoration-none color_link'>5 Castello Reale di Sarre</Link>
                        </li>
                        <li>
                            <Link href='#Sixth_Point_Header' className='text-decoration-none color_link'>6 Castello Sarriod de la Tour</Link>
                        </li>
                        <li>
                            <Link href='#Seventh_Point_Header' className='text-decoration-none color_link'>7 Castello Gamba</Link>
                        </li>
                        <li>
                            <Link href='#Eighth_Point_Header' className='text-decoration-none color_link'>8 Castello di Introd</Link>
                        </li>
                        <li>
                            <Link href='#Ninth_Point_Header' className='text-decoration-none color_link'>9 Castello di Aymavilles</Link>
                        </li>
                        <li>
                            <Link href='#Tenth_Point_Header' className='text-decoration-none color_link'>10 Castello di Saint-Pierre</Link>
                        </li>
                        <li>
                            <Link href='#Eleventh_Point_Header' className='text-decoration-none color_link'>11 Forte di Bard</Link>
                        </li>
                        <li>
                            <Link href='#Twelfth_Point_Header' className='text-decoration-none color_link'>12 Château Vallaise</Link>
                        </li>
                    </ul>
                </div>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <Card.Img src={Castello_di_Fenis} className="rounded-start photo-card-city" alt="Castello di Fénis"/>
                        </div>
                        <div className="col-md-8 d-flex align-items-center">
                            <Card.Body>
                                <Card.Title><h2 className="card-title color-subtitle" id='First_Point_Header'>Castello di Fénis</h2></Card.Title>
                                <Card.Text>
                                    Iniziamo l'itineriario tra i castelli della Valle d'Aosta piò belli del più famoso castello valdostano: il <Link to='/visite/castello_di_fenis' className='text-decoration-none color_link'>Castello di Fénis</Link>.
                                    Situato su un piccolo poggio controllava un vasto feudo e costituiva la <b>residenza di prestigio della famiflia Challant</b>. <br/>
                                    Una volta varcato il portone di ingresso il cortile ingentilito da affreschi quattrocenteschi ed uno scalone semicircolare ci riportano ai fasti del passato quando il castello era di propiretà del pontente Bonifacio
                                    di Challan. Il ricco signore parò la bottega di uno dei più impoertanti pittori del tempo, Giacomo Jaquerio, per decorare il cortile e la cappelladel maniero scegliendo un appsarto iconografico ricco di significato. <br/>
                                    Degli antichi mobili purtroppo oggi rimane ben poco, possiamo godere però dei bei affrschi jaqueriani e dell'imponente struttura castrense fatta di torri, cinte merlate, caditoie e feritoie.
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <Card.Img src={Porticato_afffrescato_del_Castello_di_Issogne} className="rounded-start photo-card-city" alt="Castello di Issogne"/>
                        </div>
                        <div className="col-md-8 d-flex align-items-center">
                            <Card.Body>
                                <Card.Title><h2 className="card-title color-subtitle" id='Second_Point_Header'>Castello di Issogne</h2></Card.Title>
                                <Card.Text>
                                    Lussuosa residenza rinascimentale, il <Link to='/visite/castello_di_issogne' className='text-decoration-none color_link'>Castello di Issogne</Link> è uno dei castelli meglio conservati e ricchi di storia della Valle d'Aosta.
                                    Abbellito e decorato dal raffinato priore Giorgio di Challant alla fine del XV secolo, verrà ulteriomente valozzato alla fine dell'Ottocento del pittore <b>Vittorio Avondo</b>, fine artista piamontese. Un maniaro che tyrasuda
                                    di storia dove affreschi e molti antichi consentono di fare davvero un tuffo nelle residenze medievali. Gli afreschi del cortile, le lunette, la celebre <b>fontana del melograno</b> sono tutti frutto della fine commttenza del 
                                    Priore. Le sontouse stanze tutte decorate e arredete, sono state in parte valorizzate anche dell'abile Vittorio Avondo che nel 1872 acquistò il castello.<br/>
                                    Il "<b>Castello dei Sogni</b>" come ra soprennominato il castello di Issogne, prende oggi vita n un nuovissimo allestimento dedicato proprio al pittore torinese.
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <Card.Img src={Castello_di_Verres} className="rounded-start photo-card-city" alt="Castello di Verrès"/>
                        </div>
                        <div className="col-md-8 d-flex align-items-center">
                            <Card.Body>
                                <Card.Title><h2 className="card-title color-subtitle" id='Third_Point_Header'>Castello di Verrès</h2></Card.Title>
                                <Card.Text>
                                    Poderoso monoblocco situato su una rocca, il <Link to='/visite/castello_di_verres' className='text-decoration-none color_link'>Catello di Verrès</Link> colpisce l'osservatore per il suo sguardo austero. La struttura cubica 
                                    voluta da <b>Ibleto di Challant</b> nel XIV secolo risponde a esigenze militari ben a esigenze milirati ben precise, in quanto il castello controllava il borgo sottostante controllava il borgo sotto stante di Verrès con 
                                    l'asse viario principale e la vicina Val d'Ayas, terra di origine della potente famiglia Challant. Tra le personalità più importanti legati al castello si ricordano le gesta dell'intrepida <b>Caterina di Challant</b> e 
                                    del suo consorte Pierre Sarriod d'Introd, che per difendere l'eredità e i feudi lottarono duramente contro i cugini maschi ed in particolare il pretendente Giacomo di Challant. Caterina perse la sua guerra, ma la sua forza e 
                                    le sue gesta rimasero nella memoria e sono ancora oggi rievocate nel Carnevale storico di Verrès. <br/>
                                    Dal castello è inoltre possibile godere di un panorama mozzafiato sulla valle <b>Saint Gilles</b>. Annassa alla prevostura la chiesa di Sant'Egidio conserva al suo interno la bella cappella sepolcrale di Ibleto di Challant. <br/>
                                    Da castello di Verrès inoltre è possibile intravedere nel paese di fronte, aldilà della Dora Baltea, Il castello di Issogne.
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <Card.Img src={Castel_Savoia} className="rounded-start photo-card-city" alt="Castel Savoia"/>
                        </div>
                        <div className="col-md-8 d-flex align-items-center">
                            <Card.Body>
                                <Card.Title><h2 className="card-title color-subtitle" id='Fourth_Point_Header'>Castel Savoia</h2></Card.Title>
                                <Card.Text>
                                    La <Link to='/visite/castel_vavoia_gressoney' className='text-decoration-none color_link'>fiabesca residenza</Link> della <b>Regina Margheria di Savoia</b> a <b>Gressoney-Saint-Jean</b> stupisce per il suo aspetto fiabesco. 
                                    Circonato da un'ampia pineta e con vista mozzafiato sul <b>ghiaccio del Lyskamm</b>, massiccio del Monte Rosa è sicuramente tra i più belli della regione. Il Castel Savoia fu costruito della Regione nel 1904, ispirandosi ai 
                                    meravigliosi castelli medievali ma unendovi tutti i confort di una dimora moderna. La residenza estiva della regina aveva infatti riscaldamento con termosifoni, acqua calda e fredda corrente nei bagni e la luce elettrica. 
                                    La regina inoltre volle espressamente che le cucine fossero distaccate dalla sala da pranzo, in una decauville affinché i pasti non fossero disturbati da rumori molesti e da fastidiosi odori. <br/>
                                    Gli interni del castello sono stati tutti riccamente decorati dal decoratore Cussetti mentre il monumentale scalone in rovere è un vero e priprio gioello della boiserie opere dell'ebanista Dellera. Ovunque si posi lo sguardo 
                                    emarge il buongusto della Regina Margherita e maggi al nobile casato sabaudo.
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <Card.Img src={Castello_reale_di_serre} className="rounded-start photo-card-city" alt="Castello Reale di Sarre"/>
                        </div>
                        <div className="col-md-8 d-flex align-items-center">
                            <Card.Body>
                                <Card.Title><h2 className="card-title color-subtitle" id='Fifth_Point_Header'>Castello Reale di Sarre</h2></Card.Title>
                                <Card.Text>
                                    Tra i castelli più severi della regione, il <Link to='/visite/castello_di_serre' className='text-decoration-none color_link'>castello Reale di Serre</Link>, è anche tra i castelli più antichi della Valle d'Aosta. <br/>
                                    Situato su un poggio il castello guarda verso la <b>Valle di Cogne</b>. Acquistato da <b>Vittorio Emanuele II di Savoia</b>, divenne alla fine dell'Ottocentesco la sede estiva del Re per le sue battute di caccia allo stabecco 
                                    e al camosci nelle Valli del Gran Paradiso. <br/>
                                    Gli interni spiccano per la loro particolare decorazione voluta da Umberto I di Savoia. Nella galleria e nel salone dei trofei sono infatti esposti i trofei di caccia, migliaia di corna di stambecco e di camoscio fanno bella 
                                    mostra di sé incorniciati da omaggi pittorici alla famiglia sabauda. <br/>
                                    Il castello conserva inoltre mobili e cimeli appartenuti ai regnanti d’Italia tra Ottocento e Novecento.
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <Card.Img src={Castello_sarriod_de_la_tour} className="rounded-start photo-card-city" alt="Castello Sarriod de la Tour"/>
                        </div>
                        <div className="col-md-8 d-flex align-items-center">
                            <Card.Body>
                                <Card.Title><h2 className="card-title color-subtitle" id='Sixth_Point_Header'>Castello Sarriod de la Tour</h2></Card.Title>
                                <Card.Text>
                                    Frutto di diverse campagne costruttive, <Link to='/visite/castello-sarriod-de-la-tour' className='text-decoration-none color_link'>castello Sarriod de Le Tour</Link> a Saint-Pierre conserva al suo interno pregevoli affreschi 
                                    ed un monumentale soffitto ligneo. Il castello, situato in una zona pianeggiante, è difeso su un lato dallo scorrere della Dora Baltea mentre sugli altri lati è circondato da rigogliosi meleti. <br/>
                                    Il castello, facilmente accessibile, è ancora oggi abitato da esseri mostruosi e fantastici! Nella cappella tra santi e immagini sacre si possono scorgere sirene bifide e grilli, mentre nel salone di rappresentanza 171 mensole 
                                    scolpite ci riportano nel mondo del fantastico e del grottesco. La "<b>Sala delle teste</b>" propone un intero campionario di esseri mostruosi e animali fantastici, ma anche scene oscene! <br/>
                                    A pochi metri dal castello Sarriod, si trova il fiabesco <b>castello di Saint-Pierre</b>, attualmente ancora in fase di restauro.
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <Card.Img src={Castello_Gamba} className="rounded-start photo-card-city" alt="Castello Gamba"/>
                        </div>
                        <div className="col-md-8 d-flex align-items-center">
                            <Card.Body>
                                <Card.Title><h2 className="card-title color-subtitle" id='Seventh_Point_Header'>Castello Gamba</h2></Card.Title>
                                <Card.Text>
                                    Il <Link href='/visite/castello_gamba' className='text-decoration-none color_link'>Castello Gamba</Link> a Chattillon all'inizio del Novecento da Carlo Maurizio Gamba per la moglie Angelique Passerin d'Entrèves è oggi sede di 
                                    una pinacoteca che accoglie la <b>collezione di arte moderna e contemporanea</b> della Regione Autonoma Valle d'Aosta. <br/>
                                    Circondato da un ampio <b>parco all'inglese</b> che protegge anche alcune piante monumentali, il Castello Gamba conserva ancora un fascino austero. La dimora, già all'avanguardia ai tempi in quanto qui fu installato un ascendore 
                                    e fu realizzato il prima soffitto in cemento della regione, è un vero e priprio gioiello.
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </div>
                </Card>
                <Card className=" mb-3 margin">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <Card.Img src={Castello_di_Introd} className="rounded-start photo-card-city" alt="Castello di Introd"/>
                        </div>
                        <div className="col-md-8 d-flex align-items-center">
                            <Card.Body>
                                <Card.Title><h2 className="card-title color-subtitle" id='Eighth_Point_Header'>Castello di Introd</h2></Card.Title>
                                <Card.Text>
                                    Situato ai piedi delle Valli del Gran Paradiso, il <Link to='/castello_di_introd' className='text-decoration-none color_link'>castello di Introd</Link> è una residenza privata particolarmente aperta al pubblico. <br/>
                                    Il Castello si caretterizza dalla cinta poligonale e dalla maestosa torre centrale dalla quale la vista spazia delle mentagne cincostanti ad Aosta e L'inpinente <b>Monte Binaco</b>. Il maniero nel corso dell'Ottocento 
                                    stato vittima di furiosi incedi che hanno risparmiato la sola torre, la cucina e parte della cinta. Gli eleganti interni del meniero sono frutto di restauri novecenteschi che omaggiano i numerosi castelli della Valle 
                                    d'Aosta. <br/>
                                    Intorno al castello si trovano altri pregevoli edifici cme l'antico granaio e la Cascina Ola.
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <Card.Img src={Castello_di_Aymavilles} className="rounded-start photo-card-city" alt="Castello di Aymavilles"/>
                        </div>
                        <div className="col-md-8 d-flex align-items-center">
                            <Card.Body>
                                <Card.Title><h2 className="color-subtitle " id='Ninth_Point_Header'>Castello di Aymavilles</h2></Card.Title>
                                <Card.Text>
                                    <Link to='/visite/castello_di_ayamavilles' className='text-decoration-none color_link'>Castello di Aymavilles</Link>, con la sua partecipazione forma turrita è tra i castelli più ammirati della regione. Situato su un 
                                    poggio morenico e circondato da vigneti, il castello è stato aperto al pubblico nel maggio 2022. <br/>
                                    Risalente al XIII secolo e ampliato nel corso del Quattrocento della potente famiglia Challant, nel Settecento il castello subì forti lavori di restauro che lo strasformarono un'elegante dimora signorile con logge 
                                    barocche e ampio parco. <br/>
                                    Dopo l'ultimo discendente della famiglia, Vittorio Cacherano Osasco della Rocca-Challant, il castello Fu acquistato dalla famiglia Bombrini che lo vendette poi alla Regione Autonoma Valle d'Aosta nel 1970.
                                </Card.Text>
                                <Card.Text>
                                    Dopo un lungo e attento lavoro di recupero e restauro delle sale, il castello accoglie la collezione della Académie de Saint Anselme, dando ai reperti e alle opere d'arte della Académie una degna collocazione museale. <br/>
                                    La visita si sviluppa lungo tutti i piani del castello, nei sotterranei e anche nel sottotetto dove è possibile ammirare un'imponente carpenteria lignea alla metà del XV secolo.
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <Card.Img src={Castello_di_Saint_Pierre} className="rounded-start photo-card-city" alt="Castello di Saint-Pierre"/>
                        </div>
                        <div className="col-md-8 d-flex align-items-center">
                            <Card.Body>
                                <Card.Title><h2 className="color-subtitle " id='Tenth_Point_Header'>Castello di Saint-Pierre</h2></Card.Title>
                                <Card.Text>
                                    Collocatosu uno sperone roccioso, il <Link to='' className='text-decoration-none color_link'>Castello di Saint-Pierre</Link> è sicuramente il più iconico della Valle d'Aosta ed è assolutamente inconfondibile per via della
                                    sua foggia fiabesca che lo rende un unicum nel suo genere. <br/>
                                    Le famose quattro torrette laterali ottocentesche rendono quali disneyano quello che risulta essere uno tra i più antichi manieri della regione, la cui struttura primitiva dovrebbe risalire al XII secolo. Tra i proprietarii 
                                    che si Susseguirono meritano una citazione Pietro Filiberto Roncas, che ampliò il castello e Barone Emanuele Bollati che conferì maniero l'aspetto attuale. <br/>
                                    Divenuto di proprietà del Comune di Saint-Pierre ospita oggi il rinnovato allestimento del <Link to='/visite/museo_regionale_di_scienze_naturali' className='text-decoration-none color_link fw-bold'>Museo Regionale di Scienze Naturali 
                                    Efisio Noussan</Link>
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <Card.Img src={Forte_di_Bard} className="rounded-start photo-card-city" alt="Forte di Bard"/>
                        </div>
                        <div className="col-md-8 d-flex align-items-center">
                            <Card.Body>
                                <Card.Title><h2 className="color-subtitle " id='Eleventh_Point_Header'>Forte di Bard</h2></Card.Title>
                                <Card.Text>
                                    Fortezza militare ottocentesca, il <Link href='/visite/forte_di_bard' className='text-decoration-none color_link'>Forte di Bard</Link> costituisce la prima fortificazione che si incontra arrivando in Valle d'Aosta dal Piemonte. 
                                    Un luogo ricco di storia, già noto ai Romani e fortificato nel Medioevo uando sulla rocca sorgeva il castello dei potenti Signori di Bard. <br/>
                                    L'inespugnabile castello, ormai di proprità sabauda del Duecento, diventa protagonista nel maggio 1800 quando osò fermare l'avanzata delle truppe francesi guidate dal formidabile Napoleone Bonaparte. Il Console non digerì però lo 
                                    smacco di essere stato fermato per 15 giorni da una sparuta guarnigione e al suo ritorno della Battaglia di Marengo ne ordinò la completa distruzione. <br/>
                                    Il Forte di Bard oggi è una struttura milotare costruita tra 1830 e 1838 e dopo una lunga storia militare dal 2007 è stato convertito a polo culturale e museale.
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </div>
                </Card>
                <Card className="mb-3 margin">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <Card.Img src={Chateau_Vallaise} className="rounded-start photo-card-city" alt="Chateau Vallaise"/>
                        </div>
                        <div className="col-md-8 d-flex align-items-center">
                            <Card.Body>
                                <Card.Title><h2 className="color-subtitle " id='Twelfth_Point_Header'>Chateau Vallaise</h2></Card.Title>
                                <Card.Text>
                                    <strong>Château Vallaise di Arnad</strong>, situato nel paesino della bassa valle famoso per il <Link to='/visite/lardo_di_arnad' className='text-decoration-none color_link'>Lardo DOP</Link> e a poca distanza del <Link to='/sentuario_di_machaby' 
                                    className='text-decoration-none color_link'>Santuario di Machaby</Link>, è uno vero e proprio gioello ancora in fase di restauro. <br/>
                                    L'aspetto attuale e il suo arredamento risalgono all'inizio dell'Ottocento e i lavori furono promossi sa Alessandro Vallaise, il personaggio più illustre della potente famiglia. <br/>
                                    Alessandro Vallaise era ricco e potente, nonché ministro degli esteri del re Vittorio Emanuele I di Sardegna <br/>
                                    Gli interni del castello sono tutti riccamante decorati ed affrescati. Le pitture risalgono alla metà del Seicento e fu realizzata dal barone Félix-Charles-François Vallaise-Romagnano, finalizzata all'autocelebrazione dinastica e collegata alla 
                                    promozione sociale raggiunta attraverso le sue seconde nozze con la fglia di un altro funzionario sabaudo.
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </div>
                </Card>
                <div className="margin">
                    <p className='text-decoration-underline'>
                        Le persone accompagnate da una guida turistica hanno i turni di visita riservati e garantiti, evitando inutili attese, La prenotazione dell'ingresso è totalmente gratuita
                    </p>
                    <p className='fw-bold'>
                        Contattami per prenotare la tua visita guidata ai castelli valdostani
                    </p>
                </div>
                <div className='margin'>
                    <h3 className='color-subtitle'>Leggi</h3>
                    <ul className='lista'>
                        <li>
                            <Link to='/inquisizione_streghe_valle_d_aosta' className='text-decoration-none color_link'>Castelli della Valle d’Aosta: Stregoneria e roghi</Link>
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
