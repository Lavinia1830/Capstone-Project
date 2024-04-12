import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';

export default function Le_5_Terre(props) {

    const [isHoveredMonterossoalMare, setIsHoveredMonterossoalMare] = useState(false);
    const [isHoveredVernazza, setIsHoveredVernazza] = useState(false);
    const [isHoveredCorniglia, setIsHoveredCorniglia] = useState(false);
    const [isHoveredManarola, setIsHoveredManarola] = useState(false);
    const [isHoveredRiomaggiore, setIsHoveredRiomaggiore] = useState(false);

  return (
    <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        >
            <main>
                <div className='le_5_terre' style={{ position: 'relative' }}>
                    <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Le 5 Terre</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Città</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Frastagliato tratto di costa della Riviera ligure di levante, le <strong>Cinque Terre</strong> sono gioielli incastonati tra Punta Mesco e Punta di Montenero, in provincia di La Spezia. <Link href='/destinazioni/le_5_terre/monterosso_al_mare' className='text-decoration-none color_link'>Monterosso al 
                        Mare</Link>, <Link href='/destinazioni/le_5_terre_/vernazza' className='text-decoration-none color_link'>Vernazza</Link>, <Link href='/destinazioni/le_5_terre/corniglia' className='text-decoration-none color_link'>Corniglia</Link>, <Link href='/destinazioni/le_5_terre/manarola' className='text-decoration-none 
                        color_link'>Manarola</Link> e <Link href='/destinazioni/le_5_terre/riomaggiore' className='text-decoration-none color_link'>Riomaggiore</Link>, partendo da est, sono gli incantevoli paesi che godono di questa posizione privilegiata sul Mar Mediterraneo.
                    </p>
                    <p>
                        Piccole e legate a ogni borgo della zona, le <b>spiagge delle Cinque Terre</b> sono rinomate per essere <b>strette e ciottolose</b>, ma se i sassi non fanno per voi non preoccupatevi: potete optare per <b>Monterosso</b>, dove troverete un arenile di soffice sabbia. Il litorale è un susseguirsi di speroni di 
                        pietra a picco sul mare, minuscoli lidi e anfratti meravigliosi.
                    </p>
                    <p>
                        Gli sportivi saranno più interessati ai rinomati <b>sentieri delle Cinque Terre</b>, per secoli unico collegamento tra un paese e l'altro, che si sviluppano per più di 120 chilometri e permettono di visitare tutto il territorio. 
                    </p>
                    <p>
                        Il borgo dedito inizialmente alle <b>attività marittime</b> e <b>commerciali</b> nel corso degli anni ha sviluppato alcune caratteristiche <b>attività artigianali</b> come la filatura, la tessitura e la tintura dei tessuti.
                    </p>
                    <div className='row d-flex justify-content-center mx-0 mb-4'>
                        <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_5_terre'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/destinazioni/le_5_terre/monterosso_al_mare'
                                onMouseEnter={() => setIsHoveredMonterossoalMare(true)}
                                onMouseLeave={() => setIsHoveredMonterossoalMare(false)}
                                >Monterosso al Mare {isHoveredMonterossoalMare && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_5_terre'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/destinazioni/le_5_terre/vernazza'
                                onMouseEnter={() => setIsHoveredVernazza(true)}
                                onMouseLeave={() => setIsHoveredVernazza(false)}
                                >Vernazza {isHoveredVernazza && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_5_terre'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/destinazioni/le_5_terre/corniglia'
                                onMouseEnter={() => setIsHoveredCorniglia(true)}
                                onMouseLeave={() => setIsHoveredCorniglia(false)}
                                >Corniglia {isHoveredCorniglia && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_5_terre'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/destinazioni/le_5_terre/manarola'
                                onMouseEnter={() => setIsHoveredManarola(true)}
                                onMouseLeave={() => setIsHoveredManarola(false)}
                                >Manarola {isHoveredManarola && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_5_terre'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/destinazioni/le_5_terre/riomaggiore'
                                onMouseEnter={() => setIsHoveredRiomaggiore(true)}
                                onMouseLeave={() => setIsHoveredRiomaggiore(false)}
                                >Riomaggiore {isHoveredRiomaggiore && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </main>
            <Footer/>
        </AuthenticatedLayout>
  )
}
