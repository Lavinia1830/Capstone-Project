import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';
import Footer from '@/Components/Footer';
import {Card} from 'react-bootstrap';
import Lago_gover_di_gressoney from '../../../assets/Valle_d_Aosta/Lago_gover_di_gressoney_Valle_d_Aosta.jpg'
import Val_di_cogne from '../../../assets/Valle_d_Aosta/Val_di_cogne_Valle_d_Aosta.jpg';
import Antagnod_Val_Ayas from '../../../assets/Valle_d_Aosta/Antagnod_Val_Ayas_Valle_d_Aosta.jpg';
import Breuil_cervinia from '../../../assets/Valle_d_Aosta/Breuil_cervinia_Valle_d_Aosta.jpg';
import Chamois from '../../../assets/Valle_d_Aosta/Chamois_Valle_d_Aosta.jpg';
import Saint_Vincent from '../../../assets/Valle_d_Aosta/Saint_Vincent_Valle_d_Aosta.jpg';
import Valgrisenche_cosa_vedere from '../../../assets/Valle_d_Aosta/Valgrisenche_cosa_vedere_Valle_d_Aosta.jpg';
import Borgo_di_etroubles from '../../../assets/Valle_d_Aosta/Borgo_di_etroubles_Valle_d_Aosta.jpg';
import Borgo_di_Donnas from '../../../assets/Valle_d_Aosta/Borgo_di_Donnas_Valle_d_Aosta.jpg';
import Borgo_di_Montjovet from '../../../assets/Valle_d_Aosta/Borgo_di_Montjovet_Valle_d_Aosta.jpg';
import Borgo_di_avise from '../../../assets/Valle_d_Aosta/Borgo_di_avise_Valle_d_Aosta.jpg';



export default function Localita_turistiche(props) {
  return (
    <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
    >
        <main>
            <div className='l_turistiche'></div>
            <div className='mt-3'>
                <h1 className='color-title text-center'>Località Turistiche della Valle d'Aosta</h1>
                <div className='margin'>
                    <p>
                        Le <b>località turistiche della Valle d'Aosta</b> sono tutte situate ai piedi delle più alte montagne dell'arco alpino e sono note per richiedere ogni anno molti turisti 
                        ed escursionisti appassionati di montagna.
                    </p>
                    <p>
                        Una <b>guida turistica</b> ti accompagnerà alla scoperta dei borghi e delle località della Valle d'Aosta per scoprire non solo i paesi più famosi ma anche piccoli borghi
                        e villaggi ciascuno con la propria storia, le sue tradizioni e le proprie usanze. Protrai scoprire i luoghi di maggior fascino, approfondendo la storia, la tradizione e 
                        la cultura locale.
                    </p>
                </div>
                <div className="margin">
                    <h2 className='color-subtitle'>Località turistiche famose</h2>
                    <p>
                        Le località turistiche della Valle d'Aosta sono tutte diverse e tutte caratteristiche come <b>Cogne</b> situata nel cuore del Parco Nazioanle del Gan Pardiso, <b>Gressoney</b>
                        terra del popolo Walser, Curmayeur ai piedi del Monte Bianco e la mondana <Link to='/visite/breuil_cervinia' className='text-decoration-none color_link'>Breuil-Cervinia</Link>.
                    </p>
                </div>
                <div className="margin">
                    <h2 className='color-subtitle'>Borghi pittoreschi</h2>
                    <p>
                        Vi sono inoltre numerosi <b>borghi pittoreschi</b> come <b>Etroubles</b>, un interessante museo a cielo aperto nella Valle di Gran San Bernardo, oppure incantevoli villaggi 
                        montani dove il tempo sembra essersi fermato come Antagnod, mentre altri sono delle vere e proprie oasi di pace come <b>Chamois, il paese sanz'auto</b>.
                    </p>
                    <p>
                        Una varietà e una moltitudine di insediamaneti, tutti diversi e tutti caratteristici che meritano di essere scoperti!
                    </p>
                </div>
                <div className='v-guidate margin'>
                    <h2 className='color-subtitle'>Visite guidate:</h2>
                </div>
                <div className='bordo-superiore mb-3'>
                    <div className='blog'>
                        <div className='container d-flex justify-content-center flex-wrap'>
                            <Card className='me-2 mb-2 carta_l_turistiche mt-4'>
                                <Link to="/visite/castello_di_aymavilles" className='text-decoration-none'>
                                    <Card.Img variant="top" 
                                        className={'img_card'} 
                                        src={Lago_gover_di_gressoney} 
                                    />
                                    <Card.Body>
                                        <Card.Title className=' border-bottom text-black'>Gressoney Saint Jean e i Walser</Card.Title>
                                        <Card.Text className='mb-5 text-black'>
                                            <p className='fw-normal'>
                                                Apprezzato dalla Regina Margherita per la sua posizione ai piedi del Monte Rosa, Gressoney è un bellissimo paese Walser la cui cultura si riflette 
                                                nei costumi e nei tradizionali stadel.
                                            </p>
                                        </Card.Text> 
                                    </Card.Body>
                                </Link>
                            </Card>
                            <Card className='me-2 mb-2 carta_l_turistiche mt-4'>
                                <Link to="/val_di_cogne" className='text-decoration-none'>
                                    <Card.Img variant="top" 
                                        className={'img_card'} 
                                        src={Val_di_cogne} 
                                    />
                                    <Card.Body>
                                        <Card.Title className=' border-bottom text-black'>Cogne e la sua valle</Card.Title>
                                        <Card.Text className='mb-5 text-black'>
                                            <p className='fw-normal'>
                                                Da antico centro minerario Cogne è diventata oggi una rinomata località turistica nel cuore del Parco Nazionale del Gran Paradiso.
                                            </p>
                                        </Card.Text> 
                                    </Card.Body>
                                </Link>
                            </Card>
                            <Card className='me-2 mb-2 carta_l_turistiche mt-4'>
                                <Link to="/visite/val_dayas_antagnod_e_champoluc" className='text-decoration-none'>
                                    <Card.Img variant="top" 
                                        className={'img_card'} 
                                        src={Antagnod_Val_Ayas} 
                                    />
                                    <Card.Body>
                                        <Card.Title className=' border-bottom text-black'>Val d'Ayas - Antagnod e Champoluc</Card.Title>
                                        <Card.Text className='mb-5 text-black'>
                                            <p className='fw-normal'>
                                                Ayas è una meravigliosa località alpina ai miedi del Monte Rosa costituita da numerosi villaggi montani dove si respira un'atmosfera autentica.
                                            </p>
                                        </Card.Text> 
                                    </Card.Body>
                                </Link>
                            </Card>
                            <Card className='me-2 mb-2 carta_l_turistiche mt-4'>
                                <Link to="/visite/val_dayas_antagnod_e_champoluc" className='text-decoration-none'>
                                    <Card.Img variant="top" 
                                        className={'img_card'} 
                                        src={Breuil_cervinia} 
                                    />
                                    <Card.Body>
                                        <Card.Title className=' border-bottom text-black'>Breuil Cervinia</Card.Title>
                                        <Card.Text className='mb-5 text-black'>
                                            <p className='fw-normal'>
                                                Situata in fondo alla Valtournanche a 2000 metri di quota e dominata dell'inconfondibile profilo del Cervino, Cervinia è una località di 
                                                fama internazionale.
                                            </p>
                                        </Card.Text> 
                                    </Card.Body>
                                </Link>
                            </Card>
                            <Card className='me-2 mb-2 carta_l_turistiche mt-4'>
                                <Link to="/visite/chamois_aosta" className='text-decoration-none'>
                                    <Card.Img variant="top" 
                                        className={'img_card'} 
                                        src={Chamois} 
                                    />
                                    <Card.Body>
                                        <Card.Title className=' border-bottom text-black'>Chamois - la Perla delle Alpi</Card.Title>
                                        <Card.Text className='mb-5 text-black'>
                                            <p className='fw-normal'>
                                                Unico paese della Valle d'Aosta senz'auto e raggiungibile solo in funifia dove poter viviere momenti unici nella quiete più assoluta.
                                            </p>
                                        </Card.Text> 
                                    </Card.Body>
                                </Link>
                            </Card>
                            <Card className='me-2 mb-2 carta_l_turistiche mt-4'>
                                <Link to="/visite/saint_vincent" className='text-decoration-none'>
                                    <Card.Img variant="top" 
                                        className={'img_card'} 
                                        src={Saint_Vincent} 
                                    />
                                    <Card.Body>
                                        <Card.Title className=' border-bottom text-black'>Saint Vicent</Card.Title>
                                        <Card.Text className='mb-5 text-black'>
                                            <p className='fw-normal'>
                                                Adagiata su una conca solleggita vanta l'appellativo di Riviera delle Alpi per il clima mite che la caratterizza.
                                            </p>
                                        </Card.Text> 
                                    </Card.Body>
                                </Link>
                            </Card>
                            <Card className='me-2 mb-2 carta_l_turistiche mt-4'>
                                <Link to="/visite/valgrisenche" className='text-decoration-none'>
                                    <Card.Img variant="top" 
                                        className={'img_card'} 
                                        src={Valgrisenche_cosa_vedere} 
                                    />
                                    <Card.Body>
                                        <Card.Title className=' border-bottom text-black'>Valsrisenche</Card.Title>
                                        <Card.Text className='mb-5 text-black'>
                                            <p className='fw-normal'>
                                                Situata a 1600 metri di altitudine Valgrisenche è celebre per la sua produzione artigianale dei locali drap.
                                            </p>
                                        </Card.Text> 
                                    </Card.Body>
                                </Link>
                            </Card>
                            <Card className='me-2 mb-2 carta_l_turistiche mt-4'>
                                <Link to="/visite/etroubles" className='text-decoration-none'>
                                    <Card.Img variant="top" 
                                        className={'img_card'} 
                                        src={Borgo_di_etroubles} 
                                    />
                                    <Card.Body>
                                        <Card.Title className=' border-bottom text-black'>Borgo di Etroubles</Card.Title>
                                        <Card.Text className='mb-5 text-black'>
                                            <p className='fw-normal'>
                                                Sorto lungo la via Francigena oggi il borgo è un museo a cielo aperto, una galleria d'arte permanante con le opere di artisti di fama mondiale.
                                            </p>
                                        </Card.Text> 
                                    </Card.Body>
                                </Link>
                            </Card>
                            <Card className='me-2 mb-2 carta_l_turistiche mt-4'>
                                <Link to="/visite/donnas_aosta" className='text-decoration-none'>
                                    <Card.Img variant="top" 
                                        className={'img_card'} 
                                        src={Borgo_di_Donnas} 
                                    />
                                    <Card.Body>
                                        <Card.Title className=' border-bottom text-black'>Borgo di Donnas</Card.Title>
                                        <Card.Text className='mb-5 text-black'>
                                            <p className='fw-normal'>
                                                Situato lungo la Via Franchigena e circonadato da rogogliosi vigneti ospita oggi la tradizionale fiera di San'Orso di Donnas.
                                            </p>
                                        </Card.Text> 
                                    </Card.Body>
                                </Link>
                            </Card>
                            <Card className='me-2 mb-2 carta_l_turistiche mt-4'>
                                <Link to="/visite/donnas_aosta" className='text-decoration-none'>
                                    <Card.Img variant="top" 
                                        className={'img_card'} 
                                        src={Borgo_di_Montjovet} 
                                    />
                                    <Card.Body>
                                        <Card.Title className=' border-bottom text-black'>Borgo di Montjovet</Card.Title>
                                        <Card.Text className='mb-5 text-black'>
                                            <p className='fw-normal'>
                                                Il borgo di Montjovet per l'insieme di particolari architettonici e artisti è uno dei più ricchi luoghi del medioevo valdostano oltre che ad aver da sempre 
                                                rivestito grande imprtanza strategica per la riscossione di dazi.
                                            </p>
                                        </Card.Text> 
                                    </Card.Body>
                                </Link>
                            </Card>
                            <Card className='me-2 mb-2 carta_l_turistiche mt-4'>
                                <Link to="/visite/donnas_aosta" className='text-decoration-none'>
                                    <Card.Img variant="top" 
                                        className={'img_card'} 
                                        src={Borgo_di_avise} 
                                    />
                                    <Card.Body>
                                        <Card.Title className=' border-bottom text-black'>Borgo di Avise</Card.Title>
                                        <Card.Text className='mb-5 text-black'>
                                            <p className='fw-normal'>
                                                Fuori dalle zone turistiche più battute si trova il piccolo ma grazioso borgo di Avise, scrigno di piccoli tesori nascosti, deve il suo nome ai Signori 
                                                di Avise, una delle famiglie nobili più antiche e importanti della Valle d'Aosta.
                                            </p>
                                        </Card.Text> 
                                    </Card.Body>
                                </Link>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer/>
    </AuthenticatedLayout>
  )
}
