import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import {Card, Button} from 'react-bootstrap';
import { Link } from '@inertiajs/react';
import Val_Formazza from '../../assets/Piemonte/Val_Formazza_Piemonte.jpg';
import Martini from '../../assets/Piemonte/Martini_Piemonte.jpg';
import Parco_dei_Sibillini from '../../assets/Marche/Parco_dei_sibillini_Marche_e_Umbria.jpg';
import Altopiano_delle_Murge from '../../assets/Puglia/Altopiano_delle_Murge_Puglia.jpg'
import Valle_Elvo_e_Mucrone from '../../assets/Piemonte/Valle_Elvo_e_Mucrone_Piemonte.jpg';

export default function Piemonte(props) {


    const [isHoveredTorino, setIsHoveredTorino] = useState(false);
    const [isHoveredLaghinord, setIsHoveredLaghinord] = useState(false);
    const [isHoveredNovara, setIsHoveredNovara] = useState(false);
    const [isHoveredBiella, setIsHoveredBiella] = useState(false);
    const [isHoveredVercelli, setIsHoveredVercelli] = useState(false);
    const [isHoveredCanavese, setIsHoveredCanavese] = useState(false);
    const [isHoveredIvrea, setIsHoveredIvrea] = useState(false);
    const [isHoveredCuneo, setIsHoveredCuneo] = useState(false);
    const [isHoveredSaluzzo, setIsHoveredSaluzzo] = useState(false);
    const [isHoveredAsti, setIsHoveredAsti] = useState(false);
    const [isHoveredLangheeRoero, setIsHoveredLangheeRoero] = useState(false);
    const [isHoveredImageValFormazza, setIsHoveredImageValFormazza] = useState(false);
    const [isHoveredImageMartini, setIsHoveredImageMartini] = useState(false);
    const [isHoveredImageSibillini, setIsHoveredImageSibillini] = useState(false);
    const [isHoveredImageMurge, setIsHoveredImageMurge] = useState(false);
    const [isHoveredImageMucrone, setIsHoveredImageMucrone] = useState(false);
    const [isHoveredArticoli, setIsHoveredArticoli] = useState(false);






  return (
    <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
    >
        <main>
            <div className='text-center piemonte'>
                <h1>Piemonte</h1>
            </div>
            <div className='text-center margin mt-3'>
                <p>
                    Connubio perfetto tra storia, arte, cultura e natura, dietro l'elganza e l'apparenza austera il Piemonte nasconde un animo vitale e sorprendente, da 
                    scoprire a passo lento.< br/>
                    Regione dal fascino antico e raffinato, e a tratti anche un po' ingombrante, di <b>posti da vedere in Piemonte</b> ce ne sono a bizzeffe. La regione 
                    appassionerà anche i viaggiatori più compassati con il suo internazionale abbia da tempo raggiunto luoghi come Torino, la Reggia di Venezia o le 
                    Langhe, sarà sufficente qualche giorno di viaggio per rendersi conto di quanti luoghi straordinati ci sono ancora da scoprire. Basta lasciare per un 
                    attimo le confrortevoli aree cittadine, con il loro corredo di tesori, per incappare in piccole chiese campestri, imponenti monasteri, coinvolgenti 
                    musei e paesaggi punteggiati da piccoli borghi senza tempo. Le montagne piemontesi da visitare, in particolare, sono meta imprescindibile di chi ama 
                    le vette innevate al Sestriere o a Bardonecchia cerca la neve e gli inpienti più moderni
                </p>
            </div>
            <div className='row d-flex justify-content-center mx-0 mb-4'>
                <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_Piemonte'>
                    <Card.Body className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/torino'
                            onMouseEnter={() => setIsHoveredTorino(true)}
                            onMouseLeave={() => setIsHoveredTorino(false)}
                            >Torino {isHoveredTorino && <i className="bi bi-chevron-right"></i>}
                            
                        </Link>
                    </Card.Body>
                </Card>
                <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_Piemonte'>
                    <Card.Body className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/il_nord_e_i_laghi_maggiore_e_d_orta'
                            onMouseEnter={() => setIsHoveredLaghinord(true)}
                            onMouseLeave={() => setIsHoveredLaghinord(false)}
                            >Il nord e i Laghi maggiore... {isHoveredLaghinord && <i className="bi bi-chevron-right"></i>}
                            
                        </Link>
                    </Card.Body>
                </Card>
                <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_Piemonte'>
                    <Card.Body className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/novara'
                            onMouseEnter={() => setIsHoveredNovara(true)}
                            onMouseLeave={() => setIsHoveredNovara(false)}
                            >Novara {isHoveredNovara && <i className="bi bi-chevron-right"></i>}
                            
                        </Link>
                    </Card.Body>
                </Card>
                <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_Piemonte'>
                    <Card.Body className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/biella'
                            onMouseEnter={() => setIsHoveredBiella(true)}
                            onMouseLeave={() => setIsHoveredBiella(false)}
                            >Biella {isHoveredBiella && <i className="bi bi-chevron-right"></i>}
                            
                        </Link>
                    </Card.Body>
                </Card>
                <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_Piemonte'>
                    <Card.Body className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/vercelli'
                            onMouseEnter={() => setIsHoveredVercelli(true)}
                            onMouseLeave={() => setIsHoveredVercelli(false)}
                            >Vercelli {isHoveredVercelli && <i className="bi bi-chevron-right"></i>}
                            
                        </Link>
                    </Card.Body>
                </Card>
                <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_Piemonte'>
                    <Card.Body className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/canadese_gran_paradiso_e_valli_di_lanzo'
                            onMouseEnter={() => setIsHoveredCanavese(true)}
                            onMouseLeave={() => setIsHoveredCanavese(false)}
                            >Canavese, Gran paradiso... {isHoveredCanavese && <i className="bi bi-chevron-right"></i>}
                            
                        </Link>
                    </Card.Body>
                </Card>
                <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_Piemonte'>
                    <Card.Body className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/ivrea'
                            onMouseEnter={() => setIsHoveredIvrea(true)}
                            onMouseLeave={() => setIsHoveredIvrea(false)}
                            >Ivrea {isHoveredIvrea && <i className="bi bi-chevron-right"></i>}
                            
                        </Link>
                    </Card.Body>
                </Card>
                <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_Piemonte'>
                    <Card.Body className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/cuneo'
                            onMouseEnter={() => setIsHoveredCuneo(true)}
                            onMouseLeave={() => setIsHoveredCuneo(false)}
                            >Cuneo {isHoveredCuneo && <i className="bi bi-chevron-right"></i>}
                            
                        </Link>
                    </Card.Body>
                </Card>
                <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_Piemonte'>
                    <Card.Body className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/Saluzzo'
                            onMouseEnter={() => setIsHoveredSaluzzo(true)}
                            onMouseLeave={() => setIsHoveredSaluzzo(false)}
                            >Saluzzo {isHoveredSaluzzo && <i className="bi bi-chevron-right"></i>}
                            
                        </Link>
                    </Card.Body>
                </Card>
                <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_Piemonte'>
                    <Card.Body className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/asti_alessandra_e_il_monderrato'
                            onMouseEnter={() => setIsHoveredAsti(true)}
                            onMouseLeave={() => setIsHoveredAsti(false)}
                            >Asti, Alessandria e il Monferrato{isHoveredAsti && <i className="bi bi-chevron-right"></i>}
                            
                        </Link>
                    </Card.Body>
                </Card>
                <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_Piemonte'>
                    <Card.Body className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/langhe_e_roero'
                            onMouseEnter={() => setIsHoveredLangheeRoero(true)}
                            onMouseLeave={() => setIsHoveredLangheeRoero(false)}
                            >Langhe e Roero {isHoveredLangheeRoero && <i className="bi bi-chevron-right"></i>}
                        </Link>
                    </Card.Body>
                </Card>
            </div>
            <div className='bordo-superiore'>
                <div className="blog">
                    <h2 className='text-center mb-4 pt-5'>Ultime del blog</h2>
                    <div className='container d-flex justify-content-center flex-wrap'>
                        <Card className='me-2 mb-2 carta'
                            onMouseEnter={() => setIsHoveredImageValFormazza(true)}
                            onMouseLeave={() => setIsHoveredImageValFormazza(false)}>
                            <Link to="/cosa_fare_e_vedere_in_val_formazza" className='text-decoration-none'>
                                <Card.Img variant="top" 
                                className={`img_card ${isHoveredImageValFormazza ? 'image-hovered' : 'image-normal'}`} 
                                    src={Val_Formazza} 
                                />
                            </Link>
                            <Card.Body>
                            <Link to="/cosa_fare_e_vedere_in_val_formazza" className='text-decoration-none'><Card.Title className='title-card'>Tutte le forme dell'acqua: cosa fare e vedere in Val Formazza</Card.Title></Link>
                                <Card.Text className='mb-5'>
                                    <span className='text-body-tertiary'>Avventure outdoor</span><br/>
                                    <p>
                                        La Val Formazza è un cuneo di Piemonte infilato nella Svizzera. Qui le montagne non son solo mura che abbracciano e difendono, ma sono le vie di passeggio...
                                    </p>
                                </Card.Text> 
                                <Link className='text-decoration-none'to="/cosa_fare_e_vedere_in_val_formazza"><Button variant="primary" className='btn-card position-absolute bottom-0 end-0 me-2 mb-1'>leggi tutto</Button></Link>
                            </Card.Body>
                        </Card>
                        <Card className='me-2 mb-2 carta'
                            onMouseEnter={() => setIsHoveredImageMartini(true)}
                            onMouseLeave={() => setIsHoveredImageMartini(false)}>
                            <Link to="/viaggio_a_casa_martini_a_tu_per_tu_con_un_mito_che_gira_im_mondo" className='text-decoration-none'>
                                <Card.Img variant="top" 
                                className={`img_card ${isHoveredImageMartini ? 'image-hovered' : 'image-normal'}`} 
                                    src={Martini} 
                                />
                            </Link>
                            <Card.Body>
                            <Link to="/viaggio_a_casa_martini_a_tu_per_tu_con_un_mito_che_gira_im_mondo" className='text-decoration-none'><Card.Title className='title-card'>Viaggio a Casa Martini: a tu per tu con un mito che gira il modo</Card.Title></Link>
                                <Card.Text className='mb-5'>
                                    <span className='text-body-tertiary'>Costume e società</span><br/>
                                    <p>
                                        Che sapore ha trovarsi a tu per tu con una leggenda? Che cosa si prova a visitare il luogo in cui nasce un prodotto iconico, potentemente inscritto nel nostro immaginario...
                                    </p>
                                </Card.Text> 
                                <Link className='text-decoration-none'to="/viaggio_a_casa_martini_a_tu_per_tu_con_un_mito_che_gira_im_mondo"><Button variant="primary" className='btn-card position-absolute bottom-0 end-0 me-2 mb-1'>leggi tutto</Button></Link>
                            </Card.Body>
                        </Card>
                        <Card className='me-2 mb-2 carta'
                            onMouseEnter={() => setIsHoveredImageSibillini(true)}
                            onMouseLeave={() => setIsHoveredImageSibillini(false)}>
                            <Link to="/viaggio_a_casa_martini_a_tu_per_tu_con_un_mito_che_gira_im_mondo" className='text-decoration-none'>
                                <Card.Img variant="top" 
                                className={`img_card ${isHoveredImageSibillini ? 'image-hovered' : 'image-normal'}`} 
                                    src={Parco_dei_Sibillini} 
                                />
                            </Link>
                            <Card.Body>
                            <Link to="/viaggio_a_casa_martini_a_tu_per_tu_con_un_mito_che_gira_im_mondo" className='text-decoration-none'><Card.Title className='title-card'>6 esperienze da non perdere tra le montagne d'Italia</Card.Title></Link>
                                <Card.Text className='mb-5'>
                                    <span className='text-body-tertiary'>Avventure outdoor</span><br/>
                                    <p>
                                        Se anche voi siete tra chi, d'estate, preferisce il fresco della montagna all'afa della pianura e alla folla del mare, queste esperienze ad alta quota sono pensate per farvi vivere avventure...
                                    </p>
                                </Card.Text> 
                                <Link className='text-decoration-none'to="/viaggio_a_casa_martini_a_tu_per_tu_con_un_mito_che_gira_im_mondo"><Button variant="primary" className='btn-card position-absolute bottom-0 end-0 me-2 mb-1'>leggi tutto</Button></Link>
                            </Card.Body>
                        </Card>
                        <Card className='me-2 mb-2 carta'
                            onMouseEnter={() => setIsHoveredImageMurge(true)}
                            onMouseLeave={() => setIsHoveredImageMurge(false)}>
                            <Link to="/viaggio_a_casa_martini_a_tu_per_tu_con_un_mito_che_gira_im_mondo" className='text-decoration-none'>
                                <Card.Img variant="top" 
                                className={`img_card ${isHoveredImageMurge ? 'image-hovered' : 'image-normal'}`} 
                                    src={Altopiano_delle_Murge} 
                                />
                            </Link>
                            <Card.Body>
                            <Link to="/viaggio_a_casa_martini_a_tu_per_tu_con_un_mito_che_gira_im_mondo" className='text-decoration-none'><Card.Title className='title-card'>Sei esperienze per essere a contatto con la natura nella campagna italiana</Card.Title></Link>
                                <Card.Text className='mb-5'>
                                    <span className='text-body-tertiary'>Avventure outdoor</span><br/>
                                    <p>
                                        Viaggiare, evadere, rigenerarsi, divertirsi all'<b>aria aperta</b>. Sempre più forte si fa sentire il bisogno di allontanarsi dalla quotinianità per riannodare un legame...
                                    </p>
                                </Card.Text> 
                                <Link className='text-decoration-none'to="/viaggio_a_casa_martini_a_tu_per_tu_con_un_mito_che_gira_im_mondo"><Button variant="primary" className='btn-card position-absolute bottom-0 end-0 me-2 mb-1'>leggi tutto</Button></Link>
                            </Card.Body>
                        </Card>
                        <Card className='me-2 mb-2 carta'
                            onMouseEnter={() => setIsHoveredImageMucrone(true)}
                            onMouseLeave={() => setIsHoveredImageMucrone(false)}>
                            <Link to="/viaggio_a_casa_martini_a_tu_per_tu_con_un_mito_che_gira_im_mondo" className='text-decoration-none'>
                                <Card.Img variant="top" 
                                className={`img_card ${isHoveredImageMucrone ? 'image-hovered' : 'image-normal'}`} 
                                    src={Valle_Elvo_e_Mucrone} 
                                />
                            </Link>
                            <Card.Body>
                            <Link to="/viaggio_a_casa_martini_a_tu_per_tu_con_un_mito_che_gira_im_mondo" className='text-decoration-none'><Card.Title className='title-card'>Sulle strade della Passione di Sordevolo. Esperienze da vivvere nel Biellase tra sacro e profano.</Card.Title></Link>
                                <Card.Text className='mb-5'>
                                    <span className='text-body-tertiary'>Fastival e Grandi eventi</span><br/>
                                    <p>
                                        Vi è mai capitato di assistere a uno spettacolo teatrale portato in scena dalla dedizione di un intero paese? A pochi chilometri da Biella...
                                    </p>
                                </Card.Text> 
                                <Link className='text-decoration-none'to="/viaggio_a_casa_martini_a_tu_per_tu_con_un_mito_che_gira_im_mondo"><Button variant="primary" className='btn-card position-absolute bottom-0 end-0 me-2 mb-1'>leggi tutto</Button></Link>
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
            </div>
        </main>
        <Footer/>
    </AuthenticatedLayout>
  )
}
