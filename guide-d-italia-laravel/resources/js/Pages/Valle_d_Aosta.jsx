import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import {Card} from 'react-bootstrap';
import Footer from '@/Components/Footer';
import { useTranslation } from 'react-i18next';


export default function Valle_d_Aosta(props) {

    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng); // Cambia la lingua in base al parametro
    };

    const [isHoveredAosta, setIsHoveredAosta] = useState(false);
    const [isHoveredCourmayeur, setIsHoveredCourmayeur] = useState(false);
    const [isHoveredCerviniaValtournanche, setIsHoveredCerviniaValtournanche] = useState(false);
    const [isHoveredChampoluc, setIsHoveredChampoluc] = useState(false);
    const [isHoveredValpelline, setIsHoveredValpelline] = useState(false);
    const [isHoveredCogne, setIsHoveredCogne] = useState(false);
    /* const [isHoveredImageGressoney , setIsImageGressoney] = useState(false); */


  return (
    <>
        <Head title={t('aosta valley')}/>
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='text-center valle_d_aosta'>
                    <h1>{t('aosta valley')}</h1>
                </div>
                <div className='text-center margin mt-3'>
                    <p>
                        {t("introduction aosta valley first part")} <b>{t("monte rosa")}</b>, <b>{t('the gran paradiso')}</b> {t('introduction aosta valley second part')} <b>{t('mont blanc')}</b>. <br/>
                        {t("introduction aosta valley third part")} <strong>{t('introduction aosta valley fourth part')}</strong>
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className='color-subtitle'>{t("origins and historical notes on the aosta valley")}</h2>
                    <p>
                        {t('origins and historical notes on the aosta valley first part')} <b>{t('people of the salassi')}</b>{t('origins and historical notes on the aosta valley second part')} 
                        <Link href='/destinazioni/valle_d_aosta/aosta' className='text-decoration-none color_link'>{t('aosta')}</Link> {t('origins and historical notes on the aosta valley third part')} 
                        <Link href='/visite/valle_d_aosta/aosta/arco_di_augusto' className='text-decoration-none color_link'>{t('arch of augustus')}</Link> 
                        {t('origins and historical notes on the aosta valley fourth part')}
                    </p>
                    <p>
                        {t('origins and historical notes on the aosta valley fifth part')} <Link href='/visite/valle_d_aosta/aosta/via_francigena' className='text-decoration-none color_link'>{t('via francigena')}</Link> {t('origins and historical notes on the aosta valley sixth past')}
                        <b>{t('umberto i biancamano')}</b> {t('origins and historical notes on the aosta valley seventh part')}
                    </p>
                    <p>
                        {t('origins and historical notes on the aosta valley eight part')} <b>{t('kingdom of sardinia')}</b> {t('origins and historical notes on the aosta valley ninth part')}
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className='color-subtitle'>{t('top cities in aosta valley')}</h2>
                    <p>
                        <b>{t('aosta')}</b> <b>{t('porta Praetoria')}</b> {t('top cities in aosta valley second part')} <b>{t('roman theatre')}</b>. {t('the')} <b>{t('forensic cryptoporticus')}</b>, 
                        {t('top cities in aosta valley third part')}, {t('top cities in aosta valley fourth part')} <b>{t('place émile chanoux')}</b>.
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
                        Nel paradiso naturale della Valle d’Aosta., tra le vette più alte d'Europa come il <Link href='/montagna/valle_d_aosta/monte_rosa' className='text-decoration-none color_link'>Monte Rosa</Link> e il <Link href='/montagna/valle_d_aosta/monte_cervino' 
                        className='text-decoration-none color_link'>Cervino</Link>, e bagnato dalla Dora Baltea, c'è l'imbarazzo della scelta quando si tratta di decidere cosa vedere.
                    </p>
                    <p>
                        Nell'area alle pendici delle due montagne potete mettervi alla prova nella stazione turistica di <Link href='/destinazioni/valle_d_aosta/cervinia_valtournanche' className='text-decoration-none color_link'>Cervinia - Valtournenche</Link>, sia d'inverno 
                        che d'estate, e farvi incantare dalle magiche acque del <Link href='/laghi/valle_d_aosta/lago_blu' className='text-decoration-none color_link'>Lago Blu di Cervinia</Link> a 1981 metri di altezza o dalla fiabesca Valle d'Ayas in cui 
                        sorge <Link href='/destinazioni/valle_d_aosta/champoluc' className='text-decoration-none color_link'>Champoluc</Link>.
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
                        La <Link href='/destinazioni/valle_d_aosta/valpelline' className='text-decoration-none color_link'>Valpelline</Link>, la più lunga valle laterale della regione, è un luogo incontaminato in cui passeggiare tra valloni, laghetti alpini e rifugi lontani dalle 
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
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Valle_d_Aosta'>
                        <Card.Body className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/destinazioni/valle_d_aosta/cervinia_valtournanche'
                                onMouseEnter={() => setIsHoveredCerviniaValtournanche(true)}
                                onMouseLeave={() => setIsHoveredCerviniaValtournanche(false)}
                                >Cervinia - Valtournanche {isHoveredCerviniaValtournanche && <i className="bi bi-chevron-right"></i>}
                            </Link>
                        </Card.Body>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Valle_d_Aosta'>
                        <Card.Body className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/destinazioni/valle_d_aosta/champoluc'
                                onMouseEnter={() => setIsHoveredChampoluc(true)}
                                onMouseLeave={() => setIsHoveredChampoluc(false)}
                                >Champoluc {isHoveredChampoluc && <i className="bi bi-chevron-right"></i>}
                            </Link>
                        </Card.Body>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Valle_d_Aosta'>
                        <Card.Body className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/destinazioni/valle_d_aosta/valpelline'
                                onMouseEnter={() => setIsHoveredValpelline(true)}
                                onMouseLeave={() => setIsHoveredValpelline(false)}
                                >Valpelline {isHoveredValpelline && <i className="bi bi-chevron-right"></i>}
                            </Link>
                        </Card.Body>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Valle_d_Aosta'>
                        <Card.Body className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/destinazioni/valle_d_aosta/cogne'
                                onMouseEnter={() => setIsHoveredCogne(true)}
                                onMouseLeave={() => setIsHoveredCogne(false)}
                                >Cogne {isHoveredCogne && <i className="bi bi-chevron-right"></i>}
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
    </>
    
  )
}
