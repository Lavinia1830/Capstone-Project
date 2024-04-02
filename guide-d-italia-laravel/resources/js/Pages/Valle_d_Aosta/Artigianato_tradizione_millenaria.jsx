import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import CercaComponent from '@/Components/CercaComponent';
import Footer from '@/Components/Footer';
import Artigianato from '../../../assets/Valle_d_Aosta/Artigianato_in_Valle_d_Aosta.jpg';
import Coppa_dell_amicizia from '../../../assets/Valle_d_Aosta/Coppa_dell_amicizia_Valle_d_Aosta.jpg';
import Galletti_tradizionali_valdstani from '../../../assets/Valle_d_Aosta/Galletti_tradizionali_valdstani_Valle_d_Aosta.jpg';
import Scultura_fiera_di_sant_orso from '../../../assets/Valle_d_Aosta/Scultura_fiera_di_sant_orso_Valle_d_Aosta.jpg';
import Scultura_in_legno_fiera_sant_orso from '../../../assets/Valle_d_Aosta/Scultura_in_legno_fiera_sant_orso_Valle_d_Aosta.jpg';
import Scultura_legno_fiera_di_sant_orso from '../../../assets/Valle_d_Aosta/Scultura_legno_fiera_di_sant_orso_Valle_d_Aosta.jpg';
import { Link } from '@inertiajs/react';
import { Image } from 'react-bootstrap';






export default function Artigianato_tradizione_millenaria(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
      
    >
        <main className='row'>
            <div className='col-lg-8'>
                <div className='margin'>
                    <img src={Artigianato} alt="Ponte Romano d'Aosta" className='mx-auto my-4' style={{width: 'auto', height: 'auto'}}/>
                    <h1 className='color-title text-center mb-3'>Artigianato in Valle d'Aosta, una tradizione millenaria</h1>
                    <hr className='w-25 border-3'/>
                </div>
                <div className='margin'>
                    <p>
                        <strong>L'artigianato in Valle d'Aosta</strong> costituisce un'importante realtà legata al territorio da cui trae non solo i materiali, legno e piatra su tutti, ma anche ispirazione. <br/>
                        Una produzione artigianle molto diversificata che raggiunge anche punte artistiche di eccellenza.
                    </p>
                    <ul className='lista'>
                        <span>Contenuti</span>
                        <li>
                            <Link href='#First_Point_Header' className='text-decoration-none color_link'>1 Artigianato e meteriali usati</Link>
                        </li>
                        <li>
                            <Link href='#Second_Point_Header' className='text-decoration-none color_link'>2 Fiere dell'artigianato Valle d'Aosta</Link>
                        </li>
                        <li>
                            <Link href='#Third_Point_Header' className='text-decoration-none color_link'>3 Sourvenir tipici della Valle d'Aosta</Link>
                        </li>
                    </ul>
                </div>
                <div className="card margin mb-3 px-3 pt-3">
                    <div className="row g-0">
                        <div className="card-body">
                            <h2 className='color-subtitle' id='Fifth_Point_Header'>Artigianato e materiali usati</h2>
                            <p className="card-text">
                                Un tempo la produzione artigianele era un'attività invernale, quando l'attività agricola era molto ridotta e gli uomini si riunivano intorno al focolare per chiachhierare e produrre 
                                oggetti agricoli e oggetti di uso quotidiano o giocattoli, mentre le donne tessevano e cucivano abiti ed i bambini giocavano. <br/>
                                <b>Il legno era il materiale principale</b> con cui si facevano rastrelli, gerle, scodelle, giocattoli, calzature, campanacci per le capre molto altro., Spesso questi oggetti erano 
                                abbelliti con intagli geometrici e con colori.<br/>
                                La pietra era invece usata per fare stufe, mortai o pentole. Si usava la pietra ollare, una pietra morbida diffusa sopratutto nella Cltournenche e in Val d'Ayas che opportunamente tornita
                                consentita di realizzare sono entrati nella scena dell'artigianato valdostano come il rame, il ferro battuto, la ceramica...
                            </p>
                            <p className="card-text">
                                Se una volta la produzione artigianale era volta a produrre oggetti di uso agricolo o quotidiano, oggi si realizzano delle vere e prioprie opere d'arte con sculture e bassotilievi che 
                                raffigurano solitamente momenti di vita agicola e montanara. Accanto a queste grandi opere si trovano anche galletti, grolle, coppe dell'amicizia e fiori di legno. <br/>
                                Molti gli artigiani che usano anche materiale di minor pregio come le cortecce degli alberi o le pigne.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card margin mb-3 px-3 pt-3">
                    <div className="row g-0">
                        <div className="card-body">
                            <h2 className='color-subtitle' id='Second_Point_Header'>Fiere dell'artigianato Valle d'Aosta</h2>
                            <p className="card-text">
                                Per chi volesse ammirare il meglio della produzione artigianale valdostana cosiglio la visita della <Link href='/visite/fiera_sant_orso' className='text-decoration-none color_link'>Fiera si Sant'Orso di Aosta</Link> che
                                si svolge ogni anno il 30 e 31 gennaio. Se non potete in quelle due giornate, nessun problema, perché due domeniche prima si svolge nel borgo medievale di Donnas <Link to='/visite/fiera_sant_orso_donnas' 
                                className='text-decoration-none color_link'>la Fiera del legno</Link>, una sorta di antirima della grande Foire aostana.<br/>
                                Vi è inoltre un'edizione astiva con <b>la Foire d'été</b>  che si svolge il primo sabato di agosto ad Aosta ed è nata con lo scopo di far conoscere l'artigianato locale ai numerosi 
                                turisti che trascorrono le loro vacanze in Valle d'Aosta.
                            </p>
                            <p className="card-text">
                                Tutto l'anno poi l'artisanà, <b>Istituto Valdostano per Artigianato Tipico</b>, offre nei quattropunti vendita sistuati ad Aosta, Coumayeur, Champoluc e Cogne la possibilità di acquistare 
                                il meglio della produzione artigianale in comodi negozi. <br/>
                                A Fénis, a due passi dal celebre castello, è inoltre visibile il <Link to='/visite/museo_artigianato_valdostano' className='text-decoration-none color_link'>Museo dell'artigianato Valdostano</Link> che
                                espne oltre 800 pezzi di artigianato locale.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card margin mb-3 px-3 pt-3">
                    <div className="row g-0 ">
                        <div className="card-body">
                            <h2 className='color-subtitle' id='Third_Point_Header'>La Fiera di Sant'Orso Aosta oggi</h2>
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
                        <div className="d-flex flex-row justify-content-center">
                            <div className='mx-2'>
                                <Image src={Coppa_dell_amicizia} className="mb-2"  alt="Coppa dell'amicizia" title="Coppa dell'amicizia"/>
                            </div>
                        </div>
                        <div className="card-body">
                            <p className="card-text">
                                Se cercate dei prodotti più particolari e portare a casa dei veri e propri capolavori artigianali potete rivolgerci alle cooperative presenti sul territorio:
                            </p>
                            <p className="card-text">
                                A <b>Valgrisenche</b> da secoli si tramanda l'arte di lavorare artigianalmente la lana grezza di pecora, <b>i drap</b> con cui si producono sciarpe, coperte, borse... oggi questa antica tradizione è mantenuta viva grazie alla <a href='https://www.lestisserands.it/' 
                                className='text-decoration-none color_link'>Cooperativa "Les Tisserands"</a>. 
                            </p>
                            <p className="card-text">
                                A <b>Gressoney-Saint-Jean</b> la <a href='https://www.dsocka.com/' className='text-decoration-none color_link'>Cooperativa "D'Socka"</a> realizza le tradizioni <b>pantofole in panno</b>, ma anche borse, cuscini e tanto altro.
                            </p>
                            <p className='card-text'>
                                A <b>Champorcher</b> la piccola cooperativa femminile "<a href='https://www.loudzeut.it/' className='text-decoration-none color_link'>Lou Dzeut</a>" usando dei vecchi telai manuali in legno <b>fila e tesse la tela di canapa</b>.
                            </p>
                            <p className='card-text'>
                                La <b>Cooperativa Li Tsacolé di Ayas</b> realizza a mano i "sabots", ovvero i tradizionali zoccoli in legno, veri e prorpio capolavori artigianali nati della abili mani i sabotier.
                            </p>
                            <p className='card-text'>
                                Infine all'interno della Maison de Pitz di Cogne si trova la <b>Cooperativa Las Dentelliéres</b>, dove abili merlettaie portano avanti la tradizione della <b>lavorazione del pizzo a tombolo</b>.
                            </p>
                        </div>
                        <div className="d-flex flex-row justify-content-center">
                            <div className='mx-2'>
                                <Image src={Galletti_tradizionali_valdstani} className="mb-2"  alt="Galletti tradizionali valdostani" title="Galletti tradizionali valdostani"/>
                                <Image src={Scultura_in_legno_fiera_sant_orso} className="mb-2"  alt="Galletti tradizionali valdostani" title="Galletti tradizionali valdostani"/>
                            </div>
                            <div className="mx-2">
                                <Image src={Scultura_fiera_di_sant_orso} className="mb-2"  alt="Scultura fiera di sant orso Aosta" title="Scultura fiera di sant orso Aosta"/>
                                <Image src={Scultura_legno_fiera_di_sant_orso} className="mb-2"  alt="Scultura fiera di sant orso Aosta" title="Scultura fiera di sant orso Aosta"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CercaComponent/>
        </main>
        <Footer/>
    </AuthenticatedLayout>
  )
}
