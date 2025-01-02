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
                <div className='cinque_terre' style={{ position: 'relative' }}>
                    <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Cinque Terre</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Localizzate in un frastagliato tratto di costa della Riviera Ligure di Levante, tra Punta Mesco e Punta di Montenero, dal XVI
                        secolo le <Link href='/borghi/liguria/cinque_terre' className='text-decoration-none color_link'>Cinque Terre</Link> la loro fortuna alla Repubblica di Genova
                        che ha trasformato i piccoli insediamenti agricoli di <Link href='/borghi/liguria/cinque_terre/monterosso_al_mare' 
                        className='text-decoration-none color_link'>Monterosso al Mare</Link>, <Link href='/borghi/liguria/cinque_terre/vernazza' 
                        className='text-decoration-none color_link'>Vernazza</Link>, <Link href='/borghi/liguria/cinque_terre/corniglia' 
                        className='text-decoration-none color_link'>Corniglia</Link>, <Link href='/borghi/liguria/cinque-terre/manarola'
                        className='text-decoration-none color_link'>Manarola</Link> e <Link href='/borghi/liguria/cinque_terre/riomaggiore' 
                        className='text-decoration-none color_link'>Riomaggiore</Link> in borghi marinari.
                    </p>
                    <p>
                        Incastonati in 18 chilometri di litorale, i cique paesi sono ancora oggi difficilmente raggiungibili se non con la ferrovia. Meta ideale per gli appassionati
                        di <b>tekking</b>, tra i paesi degni di nota spiccano il <b>Sentiero Azzurro</b>, <b>Monte Vè</b> o <b>Focolare</b>, che ancora oggi custodiscono le tracce 
                        del passato rulare della zona.
                    </p>
                    <p>
                        Sovrastate da una catena montuosa che corre parallela al litorale, sono celebri per le loro <b>bellezze naturalistiche</b> e, in particolare, per le loro 
                        spiagge, ricche di baie e insenature.<br/>
                        A <b>Fegina</b>, la parte nuova di Monterosso, la spiaggia è a tratti ghiaiosa, a tratti più fine, intervallata da scogli suggestivi, come quello di Mapassu 
                        o di Quarto.
                    </p>
                    <p>
                        Dichiarata Patrimonio Mondiale dell'Umanità dell'<b>UNESCO</b> nel 1997, l'area ha molti siti di interesse anche per gli amanti delle <b>immersioni</b>, che
                        a <b>Franata di Corniglia</b> possono assistere a un autentico miracolo della natura, tra cernie, murene, gronghi, aragoste, donzelle e spugne.
                    </p>
                    <div className='row d-flex justify-content-center mx-0 mb-4'>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_cinque_terre'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/borghi/liguria/cinque_terre/monterosso_al_mare'
                                onMouseEnter={() => setIsHoveredMonterossoalMare(true)}
                                onMouseLeave={() => setIsHoveredMonterossoalMare(false)}
                                >Monterosso al Mare {isHoveredMonterossoalMare && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_cinque_terre'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/borghi/liguria/cinque_terre/vernazza'
                                onMouseEnter={() => setIsHoveredVernazza(true)}
                                onMouseLeave={() => setIsHoveredVernazza(false)}
                                >Vernazza {isHoveredVernazza && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_cinque_terre'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/borghi/liguria/cinque_terre/corniglia'
                                onMouseEnter={() => setIsHoveredCorniglia(true)}
                                onMouseLeave={() => setIsHoveredCorniglia(false)}
                                >Corniglia {isHoveredCorniglia && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_cinque_terre'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/borghi/liguria/cinque_terre/manarola'
                                onMouseEnter={() => setIsHoveredManarola(true)}
                                onMouseLeave={() => setIsHoveredManarola(false)}
                                >Manarola {isHoveredManarola && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_cinque_terre'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/borghi/liguria/cinque_terre/riomaggiore'
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
