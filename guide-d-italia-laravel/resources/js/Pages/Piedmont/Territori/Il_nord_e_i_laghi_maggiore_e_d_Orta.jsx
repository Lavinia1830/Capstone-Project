import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import {Card, CardBody, Button} from 'react-bootstrap';
import { Link } from '@inertiajs/react';

export default function Il_nord_e_i_laghi_maggiore_e_d_Orta(props) {7
    const [isHoveredNovara, setIsHoveredNovara] = useState(false);
    const [isHoveredBiella, setIsHoveredBiella] = useState(false);
    const [isHoveredVercelli, setIsHoveredVercelli] = useState(false);
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
        <main>
            <div className='il_nord_e_i_laghi_maggiore_e_d_orta' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Il nord e i laghi Maggiore e d'Orta</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Territori</p>
            </div>
            <div className="margin mt-3">
                <p>
                    Come in una miniatura perfettamente identica al reale, in quest’area della regione che si estende dalle pianure del Novarese e del Vercellese fino alle vette maestose del Monte Rosa sono condensate le più riconoscibili caratteristiche identitarie del Piemonte, ma in uno spazio tutto sommato ristretto. C’è la raffinata eleganza 
                    di piccoli capoluoghi di provincia in cui il Medioevo e il Rinascimento hanno lasciato preziose testimonianze d’arte e architettura. C’è l’aristocratica raffinatezza dei borghi stesi lungo le sponde del Lago Maggiore, tempestate di ville e di profumati giardini che fioriscono in ogni stagione dell’anno, e la placida tranquillità 
                    del Lago d’Orta, attorno al quale immaginare fantastici combattimenti tra uomini e draghi. Ci sono tavole imbandite, vigneti a perdita d’occhio che rigano le dolci colline pedemontane, e risaie che trasformano la terra in un mare a scacchi. E ci sono le montagne della Valsesia e della Val d’Ossola, naturalmente, che offrono un’inedita 
                    mescolanza di natura incontaminata e quasi selvaggia, intensa religiosità e storia con pochi eguali persino in altre – più rinomate – parti della regione. <br/>
                    Data l’ampiezza e la varietà del territorio, ogni momento dell’anno è buono per venire da queste parti. Certo, da fine novembre a febbraio le temperature rigide mal si conciliano con le passeggiate nei centri storici, ma se siete appassionati di sport sulla neve questo è il periodo obbligato per sfruttare le tante opportunità offerte 
                    dagli impianti sciistici. La primavera, quando il clima è più dolce e si sciolgono le asprezze dell’inverno, invita alla scoperta delle città, mentre l’estate – che in pianura rischia di essere soffocante – è il momento degli escursionisti che si arrampicano lungo i fianchi delle montagne e della frizzante frenesia attorno ai laghi. 
                    L’arrivo dell’autunno è segnalato dalle giornate che si accorciano, dai colori che si incupiscono e dai comignoli che ricominciano a fumare: il clima perfetto per abbandonarsi ai piaceri della tavola.
                </p>
            </div>
            <div className='row d-flex justify-content-center mx-0 mb-4'>
                <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_ortona'>
                    <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/novara'
                            onMouseEnter={() => setIsHoveredNovara(true)}
                            onMouseLeave={() => setIsHoveredNovara(false)}
                            >Novara {isHoveredNovara && <i className="bi bi-chevron-right"></i>}
                            
                        </Link>
                    </CardBody>
                </Card>
                <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_ortona'>
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
                <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_ortona'>
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
            </div>
        </main>
        <Footer/>
    </AuthenticatedLayout>
  )
}
