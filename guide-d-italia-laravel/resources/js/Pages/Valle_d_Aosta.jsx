import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';
import {Card, Button} from 'react-bootstrap';
import Footer from '@/Components/Footer';
import Lago_Gover_Gressoney_Saint_Jean from '../../assets/Valle_d_Aosta/Lago_Gover_Gressoney_Saint_Jean_Valle_d_Aosta.jpg';
import Chemp from '../../assets/Valle_d_Aosta/Chemp_Valle_d_Aosta.jpg';
import Forte_di_Bard from '../../assets/Valle_d_Aosta/Forte_di_Bard_1_Valle_d_Aosta.jpg';
import Fontina_valdostana from '../../assets/Valle_d_Aosta/Fontina_valdostana_Valle_d_Aosta.jpg';
import Borghi from '../../assets/Valle_d_Aosta/Borghi_della_Valle_d_Aosta.jpg';
import Valdigne_e_Veduta_del_Monte_Bianco from '../../assets/Valle_d_Aosta/Valdigne_e_Veduta_del_Monte-Bianco_Valle_d_Aosta.jpg';



export default function Valle_d_Aosta(props) {

    const [isHoveredAosta, setIsHoveredAosta] = useState(false);
    const [isHoveredCastelli, setIsHoverdCastelli] = useState(false);
    const [isHoveredForteBard, setIsHoverdForteBard] = useState(false);
    const [isHoveredLTuristiche, setIsHoverdLTuristiche] = useState(false);
    const [isHoveredTerritorio, setIsHoverdTerritorio] = useState(false);
    const [isHoveredImageGressoney, setIsHoveredImageGressoney] = useState(false);
    const [isHoveredImageChemp, setIsHoveredImageChemp] = useState(false);
    const [isHoveredImageFortediBard, setIsHoveredImageFortediBard] = useState(false);
    const [isHoveredImageFontinaValdostana, setIsHoveredImageFontinaValdostana] = useState(false);
    const [isHoveredImageBorghi, setIsHoveredImageBorghi] = useState(false);
    const [isHoveredImageValdigne, setIsHoveredImageValdigne] = useState(false);
    const [isHoveredArticoli, setIsHoverdArticoli] = useState(false);


  return (
    <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Valle d'Aosta</h2>}
    >
        <main>
            <div className='text-center valle_d_aosta'>
                <h1>Vieni a scoprire la Valle d’Aosta</h1>
            </div>
            <div className='text-center margin mt-3'>
                <p>
                    Insiame visiteremo <b>Aosta</b>, La Roma delle Alpi co i suoi pregevoli resti archeologici, la <b>Cattedrale</b> e la <b>Collegiata di Sant'Orso</b>, passando per 
                    <b>l'Area Megalitica di Saint Martin de Corléans</b>, un unicum nel suo genre in Europa. Ovviamente non tralasceremo i numerosi <b>castelli</b> (Fénis, Issogne, Verrès
                    Savoia... e molti altri) che costellano il fondovalle ed il maestoso <b>Forte di Bard</b>, principale polo espositivo della regione.
                    <br/>
                    Le numerose vallette della regione offrono paesaggi unici incorniciati dalle montagne più alte d'Europa come il <b>Cervino</b>, il <b>Monte Bianco</b> ed il <b>Monte Rosa</b>.
                    Insieme potremo visitare le famose <b>Gressoney</b>, <b>Cervinia</b>, <b>Cogne</b> o <b>Curmayeur</b> oppure godere della pace dei villaggi alpini.
                        <br/>
                    La Valle d'Aosta non è solo sultura ma anche artigianato di tradizione che trova la sua massima espressione nella millenaria <b>Fiera di Sant'Orso</b>. Inoltre la Valle d'Aosta 
                    offre molte attrazioni quali <b>Skyway Monte Bianco</b>, Mercatini di Natale o variopinti Carnevali.
                </p>
            </div>
            <div className='row d-flex justify-content-center mx-0 mb-4'>
                <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_Valle_d_Aosta'>
                    <Card.Body className='bottone_Valle_d_Aosta'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/aosta_romana_e_medievale'
                            onMouseEnter={() => setIsHoveredAosta(true)}
                            onMouseLeave={() => setIsHoveredAosta(false)}
                            >Aosta {isHoveredAosta && <i className="bi bi-chevron-right"></i>}
                            
                        </Link>
                    </Card.Body>
                </Card>
                <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_Valle_d_Aosta '>
                    <Card.Body className='bottone_Valle_d_Aosta'>
                        <Link 
                            className="bottone_link" 
                            href='/castelli_valle_d_aosta'
                            onMouseEnter={() => setIsHoverdCastelli(true)}
                            onMouseLeave={() => setIsHoverdCastelli(false)}
                        >Castelli {isHoveredCastelli && <i className="bi bi-chevron-right"></i>}</Link>
                    </Card.Body>
                </Card>
                <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_Valle_d_Aosta '>
                    <Card.Body className='bottone_Valle_d_Aosta'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/forte_di_bard'
                            onMouseEnter={() => setIsHoverdForteBard(true)}
                            onMouseLeave={() => setIsHoverdForteBard(false)}
                        >Forte di Bard {isHoveredForteBard && <i className="bi bi-chevron-right"></i>}</Link>
                    </Card.Body>
                </Card>
                <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_Valle_d_Aosta '>
                    <Card.Body className='bottone_Valle_d_Aosta'>
                        <Link 
                            className="bottone_link" 
                            href='/localita_turistiche'
                            onMouseEnter={() => setIsHoverdLTuristiche(true)}
                            onMouseLeave={() => setIsHoverdLTuristiche(false)}
                        >Località {isHoveredLTuristiche && <i className="bi bi-chevron-right"></i>}</Link>
                    </Card.Body>
                </Card>
                <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_Valle_d_Aosta '>
                    <Card.Body className='bottone_Valle_d_Aosta'>
                        <Link 
                            className="bottone_link" 
                            href='/territorio'
                            onMouseEnter={() => setIsHoverdTerritorio(true)}
                            onMouseLeave={() => setIsHoverdTerritorio(false)} 
                        >Territorio {isHoveredTerritorio && <i className="bi bi-chevron-right"></i>}</Link>
                    </Card.Body>
                </Card>
            </div>
            <div className='bordo-superiore'>
                <div className="blog">
                    <h2 className='text-center mb-4 pt-5'>Ultime del blog</h2>
                    <div className='container d-flex justify-content-center flex-wrap'>
                        <Card className='me-2 mb-2 carta'
                            onMouseEnter={() => setIsHoveredImageGressoney(true)}
                            onMouseLeave={() => setIsHoveredImageGressoney(false)}>
                            <Link to="/gressoney_cosa_vedere" className='text-decoration-none'>
                                <Card.Img variant="top" 
                                className={`img_card ${isHoveredImageGressoney ? 'image-hovered' : 'image-normal'}`} 
                                    src={Lago_Gover_Gressoney_Saint_Jean} 
                                />
                            </Link>
                            <Card.Body>
                            <Link to="/gressoney_cosa_vedere" className='text-decoration-none'><Card.Title className='title-card'>Gressoney Saint Jean cosa vedere a piedi dal Monte Rosa</Card.Title></Link>
                                <Card.Text className='mb-5'>
                                    <span className='text-body-tertiary'>A Spasso per la Valle</span><br/>
                                    <p>
                                        Gressoney-Saint-Jean è un grazioso villaggio montano, luogo di villeggiatura delle lontane origini Walser. 
                                        Il Caratteristico centro storico è lo specchio delle origini di questo luogo, gli edifici mescolano 
                                        l'artitettura tradizionale locale fatte di edifici in pietra e legno a grandi ville ottocentesche dal richiamo bavarese.
                                    </p>
                                </Card.Text> 
                                <Link className='text-decoration-none'to="/gressoney_cosa_vedere"><Button variant="primary" className='btn-card position-absolute bottom-0 end-0 me-2 mb-1'>leggi tutto</Button></Link>
                            </Card.Body>
                        </Card>
                        <Card className='me-2 mb-2 carta' 
                            onMouseEnter={() => setIsHoveredImageChemp(true)}
                            onMouseLeave={() => setIsHoveredImageChemp(false)}>
                            <Link to="/chemp_museo_a_cielo_aperto" className='text-decoration-none'>
                                <Card.Img variant="top" 
                                    className={`img_card ${isHoveredImageChemp ? 'image-hovered' : 'image-normal'}`} 
                                    src={Chemp} 
                                />
                            </Link>
                            <Card.Body>
                            <Link to="/chemp_museo_a_cielo_aperto" className='text-decoration-none'><Card.Title className='title-card'>Chemp museo a cielo aperto</Card.Title></Link>
                                <Card.Text>
                                    <span className='text-body-tertiary'>Territorio</span><br/>
                                    <p>
                                        Su in piccolo promontorio nella bassa Valle di Gressoney si trova Chemp, museo a cielo aperto, un luogo estremamente
                                        suggestivo, tutto da scoprire ma mi raccomado... andateci in punta di piedi!
                                    </p>
                                </Card.Text>
                                <Link className='text-decoration-none'to="/chemp_museo_a_cielo_aperto"><Button variant="primary" className='btn-card position-absolute bottom-0 end-0 me-2 mb-1'>leggi tutto</Button></Link>
                            </Card.Body>
                        </Card>
                        <Card className='me-2 mb-2 carta' 
                            onMouseEnter={() => setIsHoveredImageFortediBard(true)}
                            onMouseLeave={() => setIsHoveredImageFortediBard(false)}>
                            <Link to="/cosa_vedere_forte_di_bard_borgo" className='text-decoration-none'>
                                <Card.Img variant="top" 
                                    className={`img_card ${isHoveredImageFortediBard ? 'image-hovered' : 'image-normal'}`} 
                                    src={Forte_di_Bard} 
                                />
                            </Link>
                            <Card.Body>
                            <Link to="/cosa_vedere_forte_di_bard_borgo" className='text-decoration-none'><Card.Title className='title-card'>Forte di Bard cosa vedere nei dintorini tra borghi e resti romani</Card.Title></Link>
                                <Card.Text>
                                    <span className='text-body-tertiary'>Itinerati</span><br/>
                                    <p>
                                        Se vi chiedete con la visita al Forte di Bard cosa vedere nei dintorni, questo articolo è per voi. La zona ciecostante, definita Bassa Valle, è un'area 
                                        ricca di storia e tradizioni oltre che famosa per la produzione di un ottimo vino rosso apprezzato anche da Napoleone Bonaparte!
                                    </p>
                                </Card.Text>
                                <Link className='text-decoration-none'to="/chemp_museo_a_cielo_aperto"><Button variant="primary" className='btn-card position-absolute bottom-0 end-0 me-2 mb-1'>leggi tutto</Button></Link>
                            </Card.Body>
                        </Card>
                        <Card className='me-2 mb-2 carta' 
                            onMouseEnter={() => setIsHoveredImageFontinaValdostana(true)}
                            onMouseLeave={() => setIsHoveredImageFontinaValdostana(false)}>
                            <Link to="/la_fontina_valdostana_la_regina_dei_formaggi" className='text-decoration-none'>
                                <Card.Img variant="top" 
                                    className={`img_card ${isHoveredImageFontinaValdostana ? 'image-hovered' : 'image-normal'}`} 
                                    src={Fontina_valdostana} 
                                />
                            </Link>
                            <Card.Body>
                            <Link to="/la_fontina_valdostana_la_regina_dei_formaggi" className='text-decoration-none'><Card.Title className='title-card'>Forte di Bard cosa vedere nei dintorini tra borghi e resti romani</Card.Title></Link>
                                <Card.Text>
                                    <span className='text-body-tertiary'>Cucina Valdostana</span><br/>
                                    <p>
                                        Se vi chiedete con la visita al Forte di Bard cosa vedere nei dintorni, questo articolo è per voi. La zona ciecostante, definita Bassa Valle, è un'area 
                                        ricca di storia e tradizioni oltre che famosa per la produzione di un ottimo vino rosso apprezzato anche da Napoleone Bonaparte!
                                    </p>
                                </Card.Text>
                                <Link className='text-decoration-none'to="/chemp_museo_a_cielo_aperto"><Button variant="primary" className='btn-card position-absolute bottom-0 end-0 me-2 mb-1'>leggi tutto</Button></Link>
                            </Card.Body>
                        </Card>
                        <Card className='me-2 mb-2 carta' 
                            onMouseEnter={() => setIsHoveredImageBorghi(true)}
                            onMouseLeave={() => setIsHoveredImageBorghi(false)}>
                            <Link to="/borghi_della_valle_d_aosta" className='text-decoration-none'>
                                <Card.Img variant="top" 
                                    className={`img_card ${isHoveredImageBorghi ? 'image-hovered' : 'image-normal'}`} 
                                    src={Borghi} 
                                />
                            </Link>
                            <Card.Body>
                            <Link to="/borghi_della_valle_d_aosta" className='text-decoration-none'><Card.Title className='title-card'>I Borghi della Valle d'Aosta: i più belli da visitare</Card.Title></Link>
                                <Card.Text>
                                    <span className='text-body-tertiary'>Territorio</span><br/>
                                    <p>
                                        I borghi della Valle d'Aosta, in gran parte sorti in epoca medievale o luogo la Via Franchigena, sono piccoli gioelli perlopiù sconosciuti, ma assolutamente da visitare e viviere tutto l'anno.
                                    </p>
                                </Card.Text>
                                <Link className='text-decoration-none'to="/chemp_museo_a_cielo_aperto"><Button variant="primary" className='btn-card position-absolute bottom-0 end-0 me-2 mb-1'>leggi tutto</Button></Link>
                            </Card.Body>
                        </Card>
                        <Card className='me-2 mb-2 carta' 
                            onMouseEnter={() => setIsHoveredImageValdigne(true)}
                            onMouseLeave={() => setIsHoveredImageValdigne(false)}>
                            <Link to="/borghi_della_valle_d_aosta" className='text-decoration-none'>
                                <Card.Img variant="top" 
                                    className={`img_card ${isHoveredImageValdigne ? 'image-hovered' : 'image-normal'}`} 
                                    src={Valdigne_e_Veduta_del_Monte_Bianco} 
                                />
                            </Link>
                            <Card.Body>
                            <Link to="/borghi_della_valle_d_aosta" className='text-decoration-none'><Card.Title className='title-card'>La Valdigne, cosa vedere vicino a Courmayeur</Card.Title></Link>
                                <Card.Text>
                                    <span className='text-body-tertiary'>A Spasso per la Valle</span><br/>
                                    <p>
                                        L'alta valle vvero la Valdigne, con i suoi incantevoli paesi situata ai piedi del Monte Bianoco è la meta perfetta visitare i dintorni di Cormayeur.
                                    </p>
                                </Card.Text>
                                <Link className='text-decoration-none'to="/chemp_museo_a_cielo_aperto"><Button variant="primary" className='btn-card position-absolute bottom-0 end-0 me-2 mb-1'>leggi tutto</Button></Link>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='d-flex justify-content-center my-3'>
                        <Button variant="primary" className='btn-card articoli'>
                            <Link className='link-card text-decoration-none' 
                                to="/articoli" 
                                onMouseEnter={() => setIsHoverdArticoli(true)}
                                onMouseLeave={() => setIsHoverdArticoli(false)}>Vedi tutti gli articoli {isHoveredArticoli && <i className="bi bi-chevron-right"></i>}
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </main>
        <Footer/>
    </AuthenticatedLayout>
  )
}
