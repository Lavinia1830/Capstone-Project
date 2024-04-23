import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';
import {Card, Button} from 'react-bootstrap';
import Footer from '@/Components/Footer';



export default function Valle_d_Aosta(props) {

    const [isHoveredAosta, setIsHoveredAosta] = useState(false);
    const [isHoveredCourmayeur, setIsHoveredCourmayeur] = useState(false);
    /* const [isHoveredImageGressoney , setIsImageGressoney] = useState(false); */


  return (
    <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
    >
        <main>
            <div className='text-center valle_d_aosta'>
                <h1>Valle d'Aosta</h1>
            </div>
            <div className='text-center margin mt-3'>
                <p>
                    La più piccola Regione d'Italia, al confine con Francia e Svizzera, è costellata dalle più alte vette delle Alpi come <b>il Cervino</b>, <b>il Monte Rosa</b>, <b>il Gran Paradiso</b> e sua maestà <b>il Monte Bianco</b>. <br/>
                    Destinazione ideale per gli amanti degli sport invernali, con gli sci ai piedi qui non ci si può che divertire, con le sue verdi valli e i castelli fiabeschi la <strong>Valle d’Aosta</strong> è un luogo incantevole da vivere tutto l’anno.
                </p>
            </div>
            <div className="margin mt-3">
                <h2 className='color-subtitle'>Origini e cenni storici sulla Valle d'Aosta</h2>
                <p>
                    Abitato fin dal IV secolo a.C. dal <b>popolo dei Salassi</b>, il territorio della Valle d'Aosta fu conquistato dai Romani nel 25 a.C. che fondarono Augusta Prætoria Salassorum, l'attuale <Link href='/destinazioni/valle_d_aosta/aosta' 
                    className='text-decoration-none color_link'>Aosta</Link>, dove si erge ancora l'imponente <Link href='/visite/valle_d_aosta/aosta/arco_di_augusto' className='text-decoration-none color_link'>Arco di Augusto</Link> in ricordo di quella 
                    vittoria.
                </p>
                <p>
                    Le strade costruite dai Romani, come la <Link href='/visite/valle_d_aosta/aosta/via_francigena' className='text-decoration-none color_link'>Via Francigena</Link> che parte da qui, favorirono il passaggio dei Goti, dei Franchi e dei Longobardi 
                    fino all'arrivo di <b>Umberto I Biancamano</b> che, nel 1302, la trasformò in ducato concedendo alla popolazione ampia autonomia.
                </p>
                <p>
                    Entrata a far parte del <b>Regno di Sardegna</b> nel 1847, la Valle d'Aosta ottenne lo statuto speciale della Repubblica Italiana nel 1948.
                </p>
            </div>
            <div className="margin mt-3">
                <h2 className='color-subtitle'>Città principali in Valle d'Aosta</h2>
                <p>
                    <b>Aosta</b> conserva ancora diverse testimonianze della sua lunga dominazione da parte degli antichi romani, come la <b>Porta Praetoria</b> e le rovine del <b>teatro romano</b>. Il <b>Criptoportico forense</b>, parte dell’antico foro ancora 
                    perfettamente conservato, si trova sotto la Cattedrale che sorge a pochi passi dalla grande <b>piazza Émile Chanoux</b>.
                </p>
                <p>
                    A nord del <Link href='/visite/valle_d_aosta/parco_nazionale_del_gran_paradiso' className='text-decoration-none color_link'>Parco Nazionale del Gran Paradiso</Link>, che include parte del territorio valdostano intorno all'omonimo massiccio, si 
                    susseguono le altre città della regione. <Link href='/destinazioni/valle_d_aosta/courmayeur' className='text-decoration-none color_link'>Courmayeur</Link>, sulle pendici del <Link href='/montagna/valle_d_aosta/monte_bianco' 
                    className='text-decoration-none color_link'>Monte Bianco</Link>, è un gioiello molto amato per le sue piste da sci e i suggestivi ghiacciai.
                </p>
                <p>
                    <b>Saint-Vincent </b> e <b>Châtillon</b>, molto vicine tra loro, offrono stupendi castelli, rilassanti terme e centri benessere all'avanguardia e il <b>Casino de la Vallée</b>, uno dei quattro presenti in Italia.
                </p>
            </div>
            <div className="margin mt-3">
                <h2 className='color-subtitle'>Cosa vedere in Valle d'Aosta</h2>
                <p>
                    Nel paradiso naturale della Valle d’Aosta., tra le vette più alte d'Europa come il <Link href='/montagna/valle_d_aosta/monte_rosa' className='text-decoration-none color_link'>Monte Rosa</Link> e il <Link href='/montagna/valle_d_aosta/monte_cervinio' 
                    className='text-decoration-none color_link'>Cervino</Link>, e bagnato dalla Dora Baltea, c'è l'imbarazzo della scelta quando si tratta di decidere cosa vedere.
                </p>
                <p>
                    Nell'area alle pendici delle due montagne potete mettervi alla prova nella stazione turistica di <Link href='/destinazioni/valle_d_aosta/cervinia_valtounernche' className='text-decoration-none color_link'>Cervinia - Valtournenche</Link>, sia d'inverno 
                    che d'estate, e farvi incantare dalle magiche acque del <Link href='/laghi/valle_d_aosta/lago_blu_di_cervinia' className='text-decoration-none color_link'>Lago Blu di Cervinia</Link> a 1981 metri di altezza o dalla fiabesca Valle d'Ayas in cui 
                    sorge <Link href='/destinazioni/valle_d_aosta/aosta/champoluc' className='text-decoration-none color_link'>Champoluc</Link>.
                </p>
                <p>
                    Più a sud il <b>Gran Paradiso</b> si lascia scoprire pian piano tra natura incontaminata, castelli, valli, impianti sciistici e tracce dell'antica Roma come il <b>ponte-acquedotto di Pont d'Ael</b>.
                </p>
                <p>
                    Verso il confine con la Francia, dominato dai 4.807 metri del <b>Monte Bianco</b>, potete godere delle bellezze paesaggistiche e naturali de <b>La Thuile</b> tra ghiacciai, passeggiate e giri in mountain bike sul <b>colle del Piccolo San Bernardo</b>.
                </p>
                <p>
                    Poco più a nord, nei pressi di <b>Courmayeur</b>, d'estate immergetevi nella splendida <b>Val Veny</b> coi suoi maestosi ghiacciai o in Val Ferret con le sue verdi passeggiate, il magico bosco del Peuterey, i laghi di Miage e Combal e l'antico 
                    santuario di Notre-Dame de Guérison.
                </p>
            </div>
            <div className="margin mt-3">
                <h2 className='color-subtitle'>Luoghi insoliti in Valle d’Aosta</h2>
                <p>
                    Se vi trovate in Valle d’Aosta. alla ricerca di luoghi insoliti dovete partire dal capoluogo, Aosta, con la <Link href='/visite/valle_d_aosta/aosta/torre_di_bramafam' className='text-decoration-none color_link'>Torre di Bramafam</Link> del XII secolo, 
                    eretta lungo l’antica cinta muraria, e la <Link href='/visite/valle_d_aosta/aosta/chiesa_paleocristiana_di_san_lorenzo' className='text-decoration-none color_link'>Chiesa paleocristiana di San Lorenzo</Link> nascosta sotto la chiesa parrocchiale del 
                    Borgo. Qui si trovano i sepolcri dei 3 vescovi vissuti tra il V e il VI secolo.
                </p>
                <p>
                    La <Link href='/borghi/valle_d_aosta/valpelline' className='text-decoration-none color_link'>Valpelline</Link>, la più lunga valle laterale della regione, è un luogo incontaminato in cui passeggiare tra valloni, laghetti alpini e rifugi lontani dalle 
                    solite rotte turistiche.
                </p>
                <p>
                    Nel cuore della <b>Valle del Lys</b>, scoprite l'incantevole cittadina di <b>Fontainemore</b> con l’antico ponte medievale, la chiesa di Sant’Antonio Abate e un parco avventura immerso in fitti boschi.
                </p>
            </div>
            <div className='row d-flex justify-content-center mx-0 mb-4'>
                <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Valle_d_Aosta'>
                    <Card.Body className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/valle_d_aosta/aosta'
                            onMouseEnter={() => setIsHoveredAosta(true)}
                            onMouseLeave={() => setIsHoveredAosta(false)}
                            >Aosta {isHoveredAosta && <i className="bi bi-chevron-right"></i>}
                        </Link>
                    </Card.Body>
                </Card>
                <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Valle_d_Aosta'>
                    <Card.Body className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/valle_d_aosta/courmayeur'
                            onMouseEnter={() => setIsHoveredCourmayeur(true)}
                            onMouseLeave={() => setIsHoveredCourmayeur(false)}
                            >Courmayeur {isHoveredCourmayeur && <i className="bi bi-chevron-right"></i>}
                        </Link>
                    </Card.Body>
                </Card>
            </div>
            {/* <div className='bordo-superiore'>
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
                    </div>
                    <div className='d-flex justify-content-center my-3'>
                        <Button variant="primary" className='btn-card articoli'>
                            <Link className='link-card text-decoration-none' 
                                to="/articoli" 
                                onMouseEnter={() => setIsHoveredArticoli(true)}
                                onMouseLeave={() => setIsHoveredArticoli(false)}>Vedi tutti gli articoli {isHoveredArticoli && <i className="bi bi-chevron-right"></i>}
                            </Link>
                        </Button>
                    </div>
                </div>
            </div> */}
        </main>
        <Footer/>
    </AuthenticatedLayout>
  )
}
