import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import CercaComponent from '@/Components/CercaComponent';
import { Link } from '@inertiajs/react';
import { Image } from 'react-bootstrap';
import Fiera_di_Sant_Orso_Aosta from '../../../assets/Valle_d_Aosta/Fiera_di_Sant_Orso_Aosta_Valle_d_Aosta.jpg';
import Fiori_di_Legno from '../../../assets/Valle_d_Aosta/Fiori_di_Legno_Valle_d_Aosta.jpg';
import Fiera_di_so_foto from '../../../assets/Valle_d_Aosta/Galletti_di_legno_Valle_d_Aosta.jpg';








export default function Fiera_di_Sant_Orso(props) {
  return (
    <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
    >
        <main className='row'>
            <div className='col-lg-8'>
                <div className='margin'>
                    <img src={Fiera_di_Sant_Orso_Aosta} alt="Ponte Romano d'Aosta" className='mx-auto my-4' style={{width: 'auto', height: 'auto'}}/>
                    <h1 className='color-title text-center mb-3'>La Millenaria Fiera di Sant'Orso Aosta</h1>
                    <hr className='w-25 border-3'/>
                </div>
                <div className="margin">
                    <p>
                        La <strong>Fiera di Sant'Orso Aosta</strong> secondo la tradizione sarebbe nata grazie a Sant'Orso, il quale intorno all'anno mille era solito distinguere, proprio davanti alla chiesa aostana a lui titolata, della calzature in legno
                        ai povere: i sabot. Da allora <b>ogni anno il 30 e 31 gennaio</b> si svolge la tradizionale <strong>Fiera di Sant'Orso</strong>, un evento che coinvolge tutto il <b>centro storico di Aosta</b> e muove migliaia di visitatori ogni anno.
                    </p>
                    <ul className='lista'>
                        <span>Contenuti</span>
                        <li>
                            <Link href='#First_Point_Header' className='text-decoration-none color_link'>1 Fiera di Sant'Orso Aosta: le origini</Link>
                        </li>
                        <li>
                            <Link href='#Second_Point_Header' className='text-decoration-none color_link'>2 La Fiera di Sant'Orso oggi</Link>
                        </li>
                        <li>
                            <Link href='#Third_Point_Header' className='text-decoration-none color_link'>3 I Simboli e i ciondoli</Link>
                        </li>
                        <li>
                            <Link href='#Fourth_Point_Header' className='text-decoration-none color_link'>4 La Veillà</Link>
                        </li>
                        <li>
                            <Link href='#Fifth_Point_Header' className='text-decoration-none color_link'>5 Come arrivare ad Aosta durante la Fiera</Link>
                        </li>
                        <li>
                            <Link href='#Sixth_Point_Header' className='text-decoration-none color_link'>6 Il MAV: Museo dell'Artigianato Valdostano</Link>
                        </li>
                        <li>
                            <Link href='#Seventh_Point_Header' className='text-decoration-none color_link'>6 Visita guidata durante la Fiera di Sant'Orso</Link>
                        </li>
                    </ul>
                </div>
                <div className="card margin mb-3 px-3 pt-3">
                    <div className="row g-0 ">
                        <div className="d-flex align-items-center">
                            <div className="card-body ">
                                <h2 className='color-subtitle' id='First_Point_Header'>La Fiera di Sant'Orso Aosta: le origini</h2>
                                <p className="card-text">
                                    Le poche informazioni si <b>Sant'Orso</b> ci sono pervenute dalla "<b>Vita Beati Ursi</b>" oltre che dalla tradizione orale. Sappiamo che Sant'Orso era un presbitero vissuto tra V e VIII secolo e che celebrava alla chiesa cimiteriale 
                                    fuori le mura della città di Aosta.
                                </p>
                                <p className="card-text">
                                    Uomo semplice, umile e caritatevole dava da mangiare agli uccelli e aiutare i poveri offrendo loro dei calzari in legno, <b>i sabots</b>, affinché potessero proteggersi dal freddo.
                                </p>
                                <p className="card-text">
                                    Sant'Orso viene raffigurato con il bastone priorale ed un uccellino sulla spalla. Secondo la tradizione egli sarebbe stato il fondale della <Link href='/luoghi_visite/collegiata_di_sant_orso' 
                                    className='text-decoration-none color_link'>Collegiata</Link> che porta il suo nome. <br/>
                                    Sant'Orso è il protettore contro le calamità naturali, le alluvioni, i Parti difficili e contro molte malattie, tra cui i reumatismi e il mal di schiena ed è celebrato il 1º febbraio.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card margin mb-3 px-3 pt-3">
                    <div className="row g-0 ">
                        <div className="d-flex align-items-center">
                            <div className="card-body ">
                                <h2 className='color-subtitle' id='Second_Point_Header'>La Fiera di Sant'Orso Aosta oggi</h2>
                                <p className="card-text">
                                    La fiera di Sant'Orso propone il meglio della produzione articianale valdostana dove è possibile trovare cesti in vimini, opere di intaglio, sculture, fiori in lagno, ma anche <b>i pizzi a tombolo di Cogne</b>, <b>i draps di Valgrisenche</b> 
                                    o la <b>biancheria in canapa della Cooperativa Lou Dzeut di Champorcher</b>. <br/>
                                    Nelle strade del centro abili <b>artigiani valdostani</b>  espongono le loro opere fatte in legno, ferro, rame, ceramica e tessuto.
                                </p>
                                <p className="card-text">
                                    La Fiera è l'occasione anche per vedere dimostrazioni dal vivio, dove gli artigiani accompagnati dalla musica e dai cori dei numerosi gruppi folkloristici della regione, fanno conoscere la loro arte e trasformano un pezzo di legno in un capolavoro. 
                                    La Fiera consente agli artigiani di farsi conoscere ed apprezzare diventando molti noti: nomi come Giangiuseppe Barmasse, Giuseppe Binel o Pino Bettoni sono ormai nomi noti nel panorama artistico valdostano.
                                </p>
                            </div>
                        </div>
                        <div className="d-flex flex-row justify-content-center">
                            <div className='mx-2'>
                                <Image src={Fiera_di_so_foto} className="mb-2"  alt="Cattedrale Santa Maria Assunta Aosta" title='Cattedrale Santa Maria Assunta Aosta'/>
                                <p className='text-center'>
                                    Cattedrale Santa Maria Assunta Aosta
                                </p>
                            </div>
                            <div className='mx-2'>
                                <Image src={Fiori_di_Legno} className="mb-2"  alt="Affreschi della facciata Cattedrale di Aosta" title='Affreschi della facciata Cattedrale di Aosta'/>
                                <p className='text-center'>
                                    Affreschi della facciata Cattedrale di Aosta
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card margin mb-3 px-3 pt-3">
                    <div className="row g-0 ">
                        <div className="card-body ">
                            <h2 className='color-subtitle' id='Third_Point_Header'>I Simboli e i ciondoli</h2>
                            <p className="card-text">
                                Il simbolo della manifestazione è il <b>galletto</b>. Perché il gallo? Perché la Fiera di Sant'Orso cade a fine inverno quando sta pr ricominciare il nuoco ciclo vitale della natura e da sempre il gallo simboleggia la rinascita e il risveglio oltre 
                                che essere un talismano contro gli spiriti malvagi. <br/>
                                Tra gli altri oggetti di artigianato tradizionale vi sono i sabot, la grolla, <Link to='/grolla_vbaldostana' className='text-decoration-none color_link'>la coppa dell'amicizia</Link> o i giocattoli "Tatà" che sono tra gli oggetti maggiormente apprezzati
                                della millenaria Fiera di Sant'Orso. <br/>
                                Ogni anno viene inoltre realizzato un ciondolo, souvenir della Fiera di Sant'Orso e diverso ogni anno. Esso può essere acquistato al banchetto situato alla <Link href='/luoghi_visite/porta_praetoria' className='text-decoration-none color_link'>Porta praetoria</Link>,
                                diverso in ogni edizione, normalmente rappresenta un attrezzo o uno strimento usato da allevatori o agricoltori per sottolineare il legame che ha la Fiera con le antiche tradizioni. Nei tempi passati la Fiera era infatti l'occasione per incontrarsi e fare affari in 
                                un periodo di riposo della vita agro-pastorale.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card margin mb-3 px-3 pt-3">
                    <div className="row g-0 ">
                        <div className="card-body ">
                            <h2 className='color-subtitle' id='Fourth_Point_Header'>La Viellà</h2>
                            <p className="card-text">
                                La Fiera di Sant'Orso ad Aosta è anche incontro, condivisione e festa. Nella notte tra il 30 e 31 gennaio il centro di Aosta si anima per <strong>la Viellà</strong>, la veglia in patois. Dalle ore 19 in poi nelle vie della città gruppi folkloristici si esibiscono in 
                                canti e balli ed è possibile entrare nelle crotte, ovvero nelle cantine del borgo aperto dai residenti, dove gustare salumi e altri prodotti tipici della regione.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card margin mb-3 px-3 pt-3">
                    <div className="row g-0 ">
                        <div className="card-body ">
                            <h2 className='color-subtitle' id='Fifth_Point_Header'>Come arrivare ad Aosta durante la Fiera</h2>
                            <p className="card-text">
                                La Fiera di Sant'Orso si svolge nel <b>centro di Aosta</b> ed è raggiungibile sia in auto che in treno. <br/>
                                <b>In auto</b>: pargheggi gratuiti situati nella periferia e collegati alla città medievale un servizio navetta gratuito con corse continue verso la fiera. <br/>
                                <b>In treno e in bus</b>: la stazione ferroviaria e l'autostazione dei pulman sono a due passi dalla fiera.
                            </p>
                            <p className="card-text">
                                Per maggiori informazioni consltare qui il <a href='https://www.lasaintours.it/' className='text-decoration-none color_link'>sito ufficiale della Fiera</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card margin mb-3 px-3 pt-3">
                    <div className="row g-0 ">
                        <div className="card-body ">
                            <h2 className='color-subtitle' id='Sixth_Point_Header'>MAV: Museo dell'artigianato valdostano</h2>
                            <p className="card-text">
                                Uno scrigno che custodisce una tradizione millenaria quello del museo dell'artigianato di tradizione, situato a Fénis. <br/>
                                Il <Link to='/visite/museo_artigianato_valdostano' className='text-decoration-none color_link'>MAV</Link> infatti con il suo allestimento propone uno spaccato della tradizione, artigianale valdostana aspnendo il meglio della produzione locale. Il museo consente di 
                                approfondire le assenze lignee, i materiali, le tecniche usate nell'artigianato di tradizione, ma consente anche di conoscere gli oggetti che vengono normalmente realizzati dalle abili mani degli sculturi valdostani.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card margin mb-3 px-3 pt-3">
                    <div className="row g-0 ">
                        <div className="card-body ">
                            <h2 className='color-subtitle' id='Seventh_Point_Header'>Visita guidata durante la Fiera di Sant'Orso Aosta</h2>
                            <p className="card-text">
                                La Fiera di Sant'Orso Aosta è un'occasione unica per visitare la città in una veste del tutto inusuale tra bancarelle e allegri gruppi folkloristici.
                            </p>
                            <p className="card-text">
                                La vostra visita alla Fiera può essere abbinata alla <b>visita guidata della città con guida tirustica.</b> <br/>
                                Scoprirete le <Link href='/visite/aosta_romana_e_madievale' className='text-decoration-none color_link fw-bold'>vestigia romane di Aosta</Link> cone l'<b>Arco di Augusto</b>, la <b>Porta Praetoria</b>, il <b>Teatro romano</b> ed il <b>Criptoportico</b>, oltre 
                                mirabili monumenti medivali come la <b>Colleggiata di Sant'Orso</b> col suo chiostro istoriato e la <b>Cattedrale</b> decicata a Santa Maria Assunta. <br/>
                                La visita guidata della città può essere abbinata alla <b>degustazione dei prodotti tipici valdostani</b>.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="margin">
                    <p>
                        <b>Contattami per visitare Aosta durante i giorni della Fiera</b>
                    </p>
                </div>
                <div className='margin'>
                    <h3 className='color-subtitle'>Leggi anche</h3>
                    <ul className='lista'>
                    <li>
                        <Link href='/artigianato_in_valle_d_aosta_una_tradizione_millenaria' className='text-decoration-none color_link'>Artigianato in Valle d'Aosta, una tradizione millenaria</Link>
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
