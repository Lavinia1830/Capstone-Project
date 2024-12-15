import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';

export default function Savona(props) {

    const [isHoveredFortezzadelPriamar, setIsHoveredFortezzadelPriamar] = useState(false);
    const [isHoveredMuseoArcheologicodiSavona, setIsHoveredMuseoArcheologicodiSavona] = useState(false);
    const [isHoveredMuseodASPeRC, setIsHoveredMuseodASPeRC] = useState(false);
    const [isHoveredVecchiaDarsena, setIsHoveredVecchiaDarsena] = useState(false);
    const [isHoveredTorredelBrandale, setIsHoveredTorredelBrandale ] = useState(false);
    const [isHoveredCappellaSistinadiSavona, setIsHoveredCappellaSistinadiSavona] = useState(false);
    const [isHoveredPinacotecaCivica,setIsHoveredPinacotecaCivica] = useState(false);
    const [isHoveredMuseodellaCeramica, setIsHoveredMuseodellaCeramica] = useState(false);
    const [isHoveredAAA, setIsHoveredAAA] = useState(false);
    const [isHoveredTorreLeonPancaldo, setIsHoveredTorreLeonPancaldo] = useState(false);
    const [isHoveredVillaCambiaso, setIsHoveredVillaCambiaso] = useState(false);


  return (
    <>
        <Head title='Savona'/>
        <AuthenticatedLayout 
            auth={props.auth} 
            errors={props.errors}
        >
            <main>
                <div className='savona' style={{ position: 'relative'}}>
                    <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Savona</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Città</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Non è inusuale, anzi potremmo dire è emblematico, potersi a casa come souvenir di <strong>Savona</strong> un magnete da frigo con la sagoma di 
                        una nave da crociera.
                    </p>
                    <p>
                        Perché stupirsene? Il <Link href='/visite/liguria/savona/porto_di_savona' className='text-decoration-none color_link'>porto di Savona</Link> è uno dei 
                        più importanti scali crocieristici d'Europa.
                        Le navi approdano in pieno centro e i vacanzieri appena sbarcati vengono accolti da un ufficio turistico che dispensa informazioni utili e 
                        piantine con le <b>attrazioni da non perdere</b>.
                    </p>
                    <p>
                        Il centro è piccolo e si gira agevolmente a piedi, li che fa di Savona una città facile da visitare per chi ha poco tempo. M anon sarebbe il caso 
                        di dedicargliene di più? In quale altra città vi ricapita di trovare Madonne con tre mani, una Cappella Sistina al di fuori di Roma e l'unico 
                        museo Apple al mondo dotato di computer storici ancora funzionanti e utilizzabili?
                    </p>
                    <p>
                        La terza città della <Link href='/liguria' className='text-decoration-none color_link'>Liguria</Link> dopo <Link href='/liguria/genova' 
                        className='text-decoration-none color_link'>Genova</Link> e <Link href='/liguria/la_spezia' className='text-decoration-none color_link'>La 
                        Spezia</Link> è una città sorprendente. Adagiata lungo la <Link href='/mare/ligura/riviera_delle_palme' 
                        className='text-decoration-none color_link'>Riviera delle Palme</Link>, il tratto di costa nella Ligura occidentale che va 
                        da <Link href='/destinazioni/liguria/andona' className='text-decoration-none color_link'>Andona</Link> a <Link href='/destinazioni/liguria/varazze' 
                        className='text-decoration-none color_link'>Varazze</Link>, è una città tranquilla, molto meno costosa di altre località e caratterizzata da 
                        un'altra qalità della vita.
                    </p>
                    <p>
                        Viene chiamata <b>Citta dei Papi</b> perchè nei borchi dei dintorni nacquero il Papa Sisto IV (quello che commissionò 
                        la <Link href='/visite/lazio/roma/cappella_sistina' className='text-decoration-none color_link'>Cappella Sisitina</Link> di <Link href='/destinazioni/lazio/roma'
                        className='text-decoration-none color_link'>Roma</Link> e le sue sorelle meno notate) e Giulio II.<br/>
                        Dell'opulenza dei papi si passa al raccogliemto silenzioso per le vittime della guerra in un <b>rito</b> che prosegue initerrotto da oltre 80 anni.
                    </p>
                    <p>
                        Le <b>Spiagge</b> sono a portata di mano e le occasioni per assaggiare il buon cibo della Liguria non mancano. Specialità locale? Street food sa 
                        leccarsi i baffi: Il panino con le fette è un panino di pane bianco farcito con fette di panissa fritta (piatto ligure con farina di ceci, acqua e 
                        sale).
                    </p>
                    <div className='row d-flex justify-content-center mx-0 mb-4'>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Savona'>
                            <CardBody className='bottone'>
                                <Link 
                                    className="bottone_link" 
                                    href='/visite/liguria/savona/fortezza_del_priamar'
                                    onMouseEnter={() => setIsHoveredFortezzadelPriamar(true)}
                                    onMouseLeave={() => setIsHoveredFortezzadelPriamar(false)}
                                    >Fortezza del Priamar {isHoveredFortezzadelPriamar && <i className="bi bi-chevron-right"></i>}
                                </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Savona'>
                            <CardBody className='bottone'>
                                <Link 
                                    className="bottone_link" 
                                    href='/visite/liguria/savona/museo_archeologico_di_savona'
                                    onMouseEnter={() => setIsHoveredMuseoArcheologicodiSavona(true)}
                                    onMouseLeave={() => setIsHoveredMuseoArcheologicodiSavona(false)}
                                    >Museo Archeologico di Savona {isHoveredMuseoArcheologicodiSavona && <i className="bi bi-chevron-right"></i>}
                                </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Savona'>
                            <CardBody className='bottone'>
                                <Link 
                                    className="bottone_link" 
                                    href='/visite/liguria/savona/museo_d_arte_sandro_pertini_e_renata_cuneo'
                                    onMouseEnter={() => setIsHoveredMuseodASPeRC(true)}
                                    onMouseLeave={() => setIsHoveredMuseodASPeRC(false)}
                                    >Museo d'arte Sandro Pertini... {isHoveredMuseodASPeRC && <i className="bi bi-chevron-right"></i>}
                                </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Savona'>
                            <CardBody className='bottone'>
                                <Link 
                                className="bottone_link" 
                                href='/visite/liguria/savona/vecchia_darsena'
                                onMouseEnter={() => setIsHoveredVecchiaDarsena(true)}
                                onMouseLeave={() => setIsHoveredVecchiaDarsena(false)}
                                >Vecchia darsena {isHoveredVecchiaDarsena && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Savona'>
                            <CardBody className='bottone'>
                                <Link 
                                className="bottone_link" 
                                href='/visite/liguria/savona/torre_del_brandale'
                                onMouseEnter={() => setIsHoveredTorredelBrandale(true)}
                                onMouseLeave={() => setIsHoveredTorredelBrandale(false)}
                                >Torre del Brandale {isHoveredTorredelBrandale && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card> 
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Savona'>
                            <CardBody className='bottone'>
                                <Link 
                                className="bottone_link" 
                                href='/visite/liguris/savona/cappella_sistina_di_savona'
                                onMouseEnter={() => setIsHoveredCappellaSistinadiSavona(true)}
                                onMouseLeave={() => setIsHoveredCappellaSistinadiSavona(false)}
                                >Cappella Sisitina di Savona {isHoveredCappellaSistinadiSavona && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Savona'>
                            <CardBody className='bottone'>
                                <Link 
                                className="bottone_link" 
                                href='/visite/liguris/savona/pinacoteca_civica'
                                onMouseEnter={() => setIsHoveredPinacotecaCivica(true)}
                                onMouseLeave={() => setIsHoveredPinacotecaCivica(false)}
                                >Pinacoteca Civica {isHoveredPinacotecaCivica && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Savona'>
                            <CardBody className='bottone'>
                                <Link 
                                className="bottone_link" 
                                href='/visite/liguria/savona/museo_della_ceramica'
                                onMouseEnter={() => setIsHoveredMuseodellaCeramica(true)}
                                onMouseLeave={() => setIsHoveredMuseodellaCeramica(false)}
                                >Museo della Ceramica {isHoveredMuseodellaCeramica && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Savona'>
                            <CardBody className='bottone'>
                                <Link 
                                className="bottone_link" 
                                href='/visite/liguria/savona/aaa_museo_all_about_apple'
                                onMouseEnter={() => setIsHoveredAAA(true)}
                                onMouseLeave={() => setIsHoveredAAA(false)}
                                >AAA - Museo All About Apple {isHoveredAAA && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Savona'>
                            <CardBody className='bottone'>
                                <Link 
                                className="bottone_link" 
                                href='/visite/liguria/savona/torre_leon_pancaldo'
                                onMouseEnter={() => setIsHoveredTorreLeonPancaldo(true)}
                                onMouseLeave={() => setIsHoveredTorreLeonPancaldo(false)}
                                >Torre Leon Pancaldo {isHoveredTorreLeonPancaldo && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Savona'>
                            <CardBody className='bottone'>
                                <Link 
                                className="bottone_link" 
                                href='/visite/liguria/savona/villa_cambiaso'
                                onMouseEnter={() => setIsHoveredVillaCambiaso(true)}
                                onMouseLeave={() => setIsHoveredVillaCambiaso(false)}
                                >Villa Cambiaso {isHoveredVillaCambiaso && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                    </div>
                </div>
        </main>
        <Footer/>
        </AuthenticatedLayout>
    </>
  )
}
