import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';

export default function Aosta(props) {

    const [isHoveredFortediBard, setIsHoveredFortediBard] = useState(false);
    const [isHoveredArcodiAugusto, setIsHoveredArcodiAugusto] = useState(false);
    const [isHoveredViaFrancigena, setIsHoveredViaFrancigena] = useState(false);
    const [isHoveredParcoNazionaledelGranParadiso, setIsHoveredParcoNazionaledelGranParadiso] = useState(false);
    const [isHoveredTorrediBramafam, setIsHoveredTorrediBramafam] = useState(false);
    const [isHoveredChiesaPaleocristianadiSanLorenzo, setIsHoveredChiesaPaleocristianadiSanLorenzo] = useState(false);
    const [isHoveredMonumentiRomaniadAosta, setIsHoveredMonumentiRomaniadAosta] = useState(false);
    const [isHoveredPortaPretoria, setIsHoveredPortaPretoria] = useState(false);
    const [isHoveredPiazzaChanoux, setIsHoveredPiazzaChanoux] = useState(false);
    const [isHoveredCattedralediAosta, setIsHoveredCattedralediAosta] = useState(false);
    const [isHoveredCastellodiAymavilles, setIsHoveredCastellodiAymavilles] = useState(false);
    const [isHoveredCastellodiRealediSarre, setIsHoveredCastellodiRealediSarre] = useState(false);



    return (
        <>
            <Head title="Aosta"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='aosta' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Aosta</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Città</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Tra borghi, paesaggi incontaminati, chiese e castelli di bellezza impareggiabile, <strong>Aosta</strong> permette di tuffarsi a capofitto nel suo passato ripercorrendo le tappe dell’antica <b>presenza romana</b> e delle testimonianze del <b>periodo medioevale</b>.
                        </p>
                        <p>
                            La sua ricchezza archeologica e monumentale la rende una delle più amate città d’arte italiane, oltre che una delle mete d'elezione per i praticanti degli <b>sport invernali</b>. 
                        </p>
                        <p>
                            Le sue <b>montagne</b> sono infatti uno scenario naturale che richiama persone da tutto il mondo, dall'estate all'inverno.<br/>
                            Aosta è una città a misura d’uomo che stupisce piacevolmente, una meravigliosa destinazione che conquista anche grazie alla grande tradizione di accoglienza dei valdostani.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className='color-subtitle'>Storia e curiosità su Aosta</h2>
                        <p>
                            La <b>storia di Aosta</b> risale all’età Neolitica, quando fu occupata dai Celti che si fusero con le popolazioni locali e dando origine ai Salassi. Questi difesero le terre fino all'arrivo dei Romani che, durante il loro dominio, costruirono un’ampia strada e alcune 
                            fortezze come Augusta Praetoria di cui rimangono strade, acquedotti, ponti e il <b>Criptoportico Forense</b>, che anticamente circondava l'area sacra del <b>foro romano</b>. Proprio per la quantità di <Link href='/visite/valle_d_aosta/aosta/monumenti_romani_ad_aosta'
                            className='text-decoration-none color_link'>monumenti romani ad Aosta</Link> conservati con cura, la città è annoverata come secondo luogo in Italia per numero di siti dell’epoca dell’impero.
                        </p>
                        <p>
                            Cristianizzazione e barbarizzazione furono 2 fasi storiche che non risparmiarono nemmeno la Valle d’Aosta, fino a quando, per porre fine alle guerre intestine tra signorotti delle terre circostanti Aosta, a fronte della prevalenza della Contea di Savoia, venne firmato 
                            un patto bilaterale.
                        </p>
                        <p>
                            Questo diede il via al percorso di creazione dell’<b>Autonomia della Valle d’Aosta</b>, ancora oggi viva e riconoscibile anche nel patois, idioma ufficiale della zona, misto di borgognone e provenzale, testimonianza di una cultura condivisa da un’ampia area di vallate 
                            alpine francesi e svizzere.<br/>
                            Su tutta la Valle sorgono affascinanti Castelli e rocche lasciate in eredità dalla stirpe dei Savoia.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Cosa vedere ad Aosta: 3 tappe da non perdere</h2>
                        <p>
                            La città, con la sua bellezza travolgente, è una meta ricca di punti di interesse di grande importanza, a partire dai suoi siti archeologici perfettamente conservati. Tra le tante, vi mostriamo 4 tappe da non perdere e le attrattive principali di Aosta.
                        </p>
                        <ul className="lista">
                            <li>
                                <p>
                                    <b>Aosta e i suoi monumenti simbolo</b>: l’<Link href='/visite/valle_d_aosta/aosta/arco_di_augusto' className='text-decoration-none color_link'>Arco di Augusto</Link> è un monumento posto lungo la strada che conduceva all’ingresso principale della città romana, 
                                    la <Link href='/visite/valle_d_aosta/aosta/porta_pretoria' className='text-decoration-none color_link'>Porta Praetoria</Link>. Come suggerisce il nome, l’arco fu dedicato all'imperatore Augusto come segno della potenza di Roma. La Porta Pretoria, seconda tappa 
                                    poco lontana, aveva tre aperture ancora presenti: due laterali per i pedoni e una centrale per i carri. Era interamente ricoperta di marmo, oggi visibile in parte sulla facciata orientale.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <b>Aosta e il suo cuore pulsante</b>: Una visita a <Link href='/visite/valle_d_aosta/aosta/piazza_chanoux' className='text-decoration-none color_link'>Piazza Chanoux</Link> ad Aosta è imprescindibile. Posta nel centro della città, è una piazza rettangolare chiusa 
                                    al traffico e dedicata al martire della resistenza Émile Chanoux, ucciso dai nazisti. Circondata da palazzi storici sullo sfondo delle Alpi, è il salotto buono della città da cui si diramano le vie principali in cui fare shopping e ammirare il centro storico. A 
                                    pochi passi dalla piazza troverete la <Link href='/visite/valle_d_aosta/aosta/cattedrale_di_aosta' className='text-decoration-none color_link'>Cattedrale di Aosta</Link>. 
                                </p>
                            </li>
                            <li>
                                <p>
                                    <b>Aosta e l’archeologia</b>: il <Link href='/visite/valle_d_aosta/aosta/criptoportico_forense' className='text-decoration-none color_link'>Criptoportico Forense di Aosta</Link> è la quarta tappa, ideale per gli amanti della storia. Monumento nazionale, è uno 
                                    dei siti archeologici che più rappresenta il passato romano della città: è una galleria di marmo che serviva a regolarizzare il dislivello dell’area e congiungeva due templi, uno dedicato all’Imperatore Augusto e l’altro a Giove, Giunone e Minerva.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="margin mt-3">
                        <h2 className='color-subtitle'>3 idee su cosa fare ad Aosta e dintorni</h2>
                        <p>
                            Oltre a perdersi tra le sue montagne, la natura incontaminata e le tante testimonianze storiche, la città offre tantissime attrattive per tutta la famiglia. 3 sono i suggerimenti per chi vuole vivere una vacanza piena:
                        </p>
                        <p>
                            La <Link href='/eventi/valle_d_aosta/aosta/fiera_di_sant_orso' className='text-decoration-none color_link'>Fiera di Sant’Orso</Link>, che si tiene il 30 e il 31 di gennaio, è un evento che vede artisti e artigiani valdostani esporre sculture e intagli su legno, oggetti in 
                            ferro e in cuoio e tanto altro.
                        </p>
                        <p>
                            La visita alle bellissime <b>mostre al Forte di Bard</b>, uno dei simboli della regione posto lungo la <Link href='/visite/valle_d_aosta/aosta/via_francigena' className='text-decoration-none color_link'>Via Francigena</Link>. Le sue prigioni ospitano un percorso che racconta la 
                            storia del Forte, ma racchiude anche il <b>Museo delle Alpi</b> con numerose esposizioni e laboratori multimediali per i più piccoli.
                        </p>
                    </div>
                    <div className='row d-flex justify-content-center mx-0 mb-4'>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Aosta'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/visite/valle_d_aosta/castelli_medievali/forte_di_bard'
                                onMouseEnter={() => setIsHoveredFortediBard(true)}
                                onMouseLeave={() => setIsHoveredFortediBard(false)}
                                >Forte di Bard {isHoveredFortediBard && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Aosta'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/visite/valle_d_aosta/aosta/arco_di_augusto'
                                onMouseEnter={() => setIsHoveredArcodiAugusto(true)}
                                onMouseLeave={() => setIsHoveredArcodiAugusto(false)}
                                >Arco di Augusto {isHoveredArcodiAugusto && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Aosta'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/visite/valle_d_aosta/aosta/via_francigena'
                                onMouseEnter={() => setIsHoveredViaFrancigena(true)}
                                onMouseLeave={() => setIsHoveredViaFrancigena(false)}
                                >Via Francigena {isHoveredViaFrancigena && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Aosta'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/visite/valle_d_aosta/parco_nazionale_del_gran_paradiso'
                                onMouseEnter={() => setIsHoveredParcoNazionaledelGranParadiso(true)}
                                onMouseLeave={() => setIsHoveredParcoNazionaledelGranParadiso(false)}
                                >Parco Nazionale del Gran Paradiso {isHoveredParcoNazionaledelGranParadiso && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Aosta'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/visite/valle_d_aosta/aosta/torre_di_bramafam'
                                onMouseEnter={() => setIsHoveredTorrediBramafam(true)}
                                onMouseLeave={() => setIsHoveredTorrediBramafam(false)}
                                >Torre di Bramafam {isHoveredTorrediBramafam && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Aosta'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/visite/valle_d_aosta/aosta/chiesa_paleocristiana_di_san_lorenzo'
                                onMouseEnter={() => setIsHoveredChiesaPaleocristianadiSanLorenzo(true)}
                                onMouseLeave={() => setIsHoveredChiesaPaleocristianadiSanLorenzo(false)}
                                >Chiesa Paleocristiana di San Lorenzo {isHoveredChiesaPaleocristianadiSanLorenzo && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Aosta'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/visite/valle_d_aosta/aosta/monumenti_romani_ad_aosta'
                                onMouseEnter={() => setIsHoveredMonumentiRomaniadAosta(true)}
                                onMouseLeave={() => setIsHoveredMonumentiRomaniadAosta(false)}
                                >Monumenti Romani ad Aosta {isHoveredMonumentiRomaniadAosta && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Aosta'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/visite/valle_d_aosta/aosta/porta_praetoria'
                                onMouseEnter={() => setIsHoveredPortaPretoria(true)}
                                onMouseLeave={() => setIsHoveredPortaPretoria(false)}
                                >Porta Pretoria {isHoveredPortaPretoria && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Aosta'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/visite/valle_d_aosta/aosta/piazza_chanoux'
                                onMouseEnter={() => setIsHoveredPiazzaChanoux(true)}
                                onMouseLeave={() => setIsHoveredPiazzaChanoux(false)}
                                >Piazza Chanoux {isHoveredPiazzaChanoux && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Aosta'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/visite/valle_d_aosta/aosta/cattedrale_di_aosta'
                                onMouseEnter={() => setIsHoveredCattedralediAosta(true)}
                                onMouseLeave={() => setIsHoveredCattedralediAosta(false)}
                                >Cattedrale di Aosta {isHoveredCattedralediAosta && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Aosta'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/visite/valle_d_aosta/castelli_medievali/castello_di_aymavilles'
                                onMouseEnter={() => setIsHoveredCastellodiAymavilles(true)}
                                onMouseLeave={() => setIsHoveredCastellodiAymavilles(false)}
                                >Castello di Aymavilles {isHoveredCastellodiAymavilles && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Aosta'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/visite/valle_d_aosta/castelli_medievali/castello_reale_di_sarre'
                                onMouseEnter={() => setIsHoveredCastellodiRealediSarre(true)}
                                onMouseLeave={() => setIsHoveredCastellodiRealediSarre(false)}
                                >Castello di Reale di Sarre {isHoveredCastellodiRealediSarre && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
        
    )
}
