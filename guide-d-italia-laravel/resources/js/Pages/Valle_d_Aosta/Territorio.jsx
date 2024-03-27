import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';
import {Card} from 'react-bootstrap';
import Footer from '@/Components/Footer';
import Skyway_Monte_Bianco from '../../../assets/Valle_d_Aosta/Skyway_Monte_Bianco_Valle_d_Aosta.jpg';
import Colle_del_gran_san_bernardo from '../../../assets/Valle_d_Aosta/Colle_del_gran_san_bernardo_Valle_d_Aosta.jpg';
import Colle_del_piccolo_san_bernardo from '../../../assets/Valle_d_Aosta/Colle_del_piccolo_san_bernardo_Valle_d_Aosta.jpg';
import Salita_plateau_rosa from '../../../assets/Valle_d_Aosta/Salita_plateau_rosa_Valle_d_Aosta.jpg';
import Orrido_pre_saint_didier from '../../../assets/Valle_d_Aosta/Orrido_pre_saint_didier_Valle_d_Aosta.jpg';
import Mercatini_di_natale_aosta from '../../../assets/Valle_d_Aosta/Mercatini_di_natale_aosta_Valle_d_Aosta.jpg';
import Mercatini_natale_bard from '../../../assets/Valle_d_Aosta/Mercatini_natale_bard_Valle_d_Aosta.jpg';
import Fiera_di_Sant_Orso from '../../../assets/Valle_d_Aosta/Fiera_di_Sant_Orso_Valle_d_Aosta.jpg'
import Fiera_sant_orso_donnas from '../../../assets/Valle_d_Aosta/Fiera_sant_orso_donnas_Valle_d_Aosta.jpg';

export default function Territorio(props) {
  return (
    <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Territorio della Valle d'Aosta</h2>}
    >
        <main>
            <div className='territorio'></div>
            <div className='mt-3'>
                <h1 className='color-title text-center'>Territorio della Valle d'Aosta</h1>
                <div className='margin'>
                    <p>
                        Vieni a scoprite la <b>Valle d'Aosta</b>, un territorio ricco di storia, eventi e tradizione
                    </p>
                    <p>
                        Una <b>guida turistica</b> ti accompagnerà alla scoperta del territorio valdostano. Potrai scoprire le bellezze locali del territorio attraverso esperinze uniche, come Skyway del Monte Bianco,
                        la passerella dell'orrido di Pré Saint Didier, fiere d'artigianato, mercatini natalizi e molto altro ancora.
                    </p>
                </div>
                <div className="margin">
                    <h2 className='color-subtitle'>L'estate in Valle d'Aosta</h2>
                    <p>
                        L'estate è la stagione ideale per scopriere il territorio valdostano e raggiungere luoghi altrimenti inacessibili per gran parte dell'anno come il <b>Colle del Piccolo San Bernardo</b> ed 
                        il <b>Colle del Gran San Bernardo</b>. In estate vi è un'altra impoertante fiera di artigianato locale: <b>la Foire d'Eté</b> che si svolge ad Agosto.
                    </p>
                </div>
                <div className="margin">
                    <h2 className='color-subtitle'>L'autonno in Valle d'Aosta</h2>
                    <p>
                        L'autonno con i cuoi colori è il periodo ideale per passeggiare e per scoprire <Link to='/prodotti_tipici_valdostani' className='text-decoration-none color_link'>sagre e tour enogastronomici</Link> legati al territorio.
                    </p>
                </div>
                <div className="margin">
                    <h2 className="color-subtitle">L'inverso in Valle d'Aosta</h2>
                    <p>
                        In inverno quando la cadida neve ricopre tutto il paesaggio diventa bianco ecco che si svolgono le manifestazioni più caratteristiche della regione valdostana. Dalla millenaria 
                        <b>Fiera di Sant'Orso</b>, importantissima fiera dell'artigianato locale che si svolge ad Aosta il 30 e 31 gennaio e a Donnas qualche settimana prima. <b>I Mecatini di Natale</b> ormai sono un
                        appuntamento fisso del periodo natalizio, da non perdere il <b>Marché Vert Noel</b> nella cornice del suggestivo <b>Teatro Romano</b> di Aosta oppure <b>Noel au Bourg</b> ai piedi del <b>Forte di Bard</b>.
                    </p>
                    <p>
                        Tutto l'anno è inoltre possibile fare un'esperienza unica: raggiungere il tetto delle Alpi con la nuovissima Funivia <b>Skyway Monte Bianco</b>.
                    </p>
                </div>
                <div className='v-guidate margin'>
                    <h2 className='color-subtitle'>Visite guidate:</h2>
                </div>
                <div className='bordo-superiore mb-3'>
                    <div className='blog'>
                        <div className='container d-flex justify-content-center flex-wrap'>
                            <Card className='me-2 mb-2 carta_terrirorio mt-4'>
                                <Link to="/visite/skyway_monte_bianco" className='text-decoration-none'>
                                    <Card.Img variant="top" 
                                        className={'img_card'} 
                                        src={Skyway_Monte_Bianco}
                                        style={{height: '90px'}}
                                    />
                                    <Card.Body>
                                        <Card.Title className=' border-bottom text-black'>Skyway Monte Bianco</Card.Title>
                                        <Card.Text className='mb-5 text-black'>
                                            <p className='fw-normal'>
                                                Già soprannominata l'ottava meraviglia del mondo, la nuovissima funivia Skyway Monte Bianco in pochi minuti vi porterà sul tetto d'Europa.
                                            </p>
                                        </Card.Text> 
                                    </Card.Body>
                                </Link>
                            </Card>
                            <Card className='me-2 mb-2 carta_terrirorio mt-4'>
                                <Link to="/visite/colle_del_gran_san_bernardo" className='text-decoration-none'>
                                    <Card.Img variant="top" 
                                        className={'img_card'} 
                                        src={Colle_del_gran_san_bernardo}
                                        style={{height: '90px'}}
                                    />
                                    <Card.Body>
                                        <Card.Title className=' border-bottom text-black'>Il Colle del Gran San Berardo</Card.Title>
                                        <Card.Text className='mb-5 text-black'>
                                            <p className='fw-normal'>
                                                Meta perfetta per il perioso estivo, il colle del Gran San Berdando ci stupirà per bellezza del paesaggio e la sua storia millenaria.
                                            </p>
                                        </Card.Text> 
                                    </Card.Body>
                                </Link>
                            </Card>
                            <Card className='me-2 mb-2 carta_terrirorio mt-4'>
                                <Link to="/visite/colle_del_piccolo_san_bernardo" className='text-decoration-none'>
                                    <Card.Img variant="top" 
                                        className={'img_card'} 
                                        src={Colle_del_piccolo_san_bernardo}
                                        style={{height: '90px'}}
                                    />
                                    <Card.Body>
                                        <Card.Title className=' border-bottom text-black'>Il Colle del Piccolo San Berardo</Card.Title>
                                        <Card.Text className='mb-5 text-black'>
                                            <p className='fw-normal'>
                                                Meta perfetta durante il periodo estivo, il colle conserva testimonianze storiche che vanno dell'epoca preromana al medioevo.
                                            </p>
                                        </Card.Text> 
                                    </Card.Body>
                                </Link>
                            </Card>
                            <Card className='me-2 mb-2 carta_terrirorio mt-4'>
                                <Link to="/visite/salita_plateau_rosa" className='text-decoration-none'>
                                    <Card.Img variant="top" 
                                        className={'img_card'} 
                                        src={Salita_plateau_rosa}
                                        style={{height: '90px'}}
                                    />
                                    <Card.Body>
                                        <Card.Title className=' border-bottom text-black'>Salita a Plateau Rosà</Card.Title>
                                        <Card.Text className='mb-5 text-black'>
                                            <p className='fw-normal'>
                                                Un'esperienza unica a 3480 m di altitudine che consente di ammirare da vicino i grandi quattromila della Alpi
                                            </p>
                                        </Card.Text> 
                                    </Card.Body>
                                </Link>
                            </Card>
                            <Card className='me-2 mb-2 carta_terrirorio mt-4'>
                                <Link to="/visite/orrido_pre_saint_didier" className='text-decoration-none'>
                                    <Card.Img variant="top" 
                                        className={'img_card'} 
                                        src={Orrido_pre_saint_didier}
                                        style={{height: '90px'}}
                                    />
                                    <Card.Body>
                                        <Card.Title className=' border-bottom text-black'>Passerella sull'orrido di Pré Saint Didier</Card.Title>
                                        <Card.Text className='mb-5 text-black'>
                                            <p className='fw-normal'>
                                                La visita alla passerella regala emozioni ed un panorama mozzafiato sulla catena del Monte Bianco e sulla conca di Pré-Saint-Didier.
                                            </p>
                                        </Card.Text> 
                                    </Card.Body>
                                </Link>
                            </Card>
                            <Card className='me-2 mb-2 carta_terrirorio mt-4'>
                                <Link to="/visite/mercatini_aosta" className='text-decoration-none'>
                                    <Card.Img variant="top" 
                                        className={'img_card'} 
                                        src={Mercatini_di_natale_aosta}
                                        style={{height: '90px'}}
                                    />
                                    <Card.Body>
                                        <Card.Title className=' border-bottom text-black'>Mercatini di Natale Aosta</Card.Title>
                                        <Card.Text className='mb-5 text-black'>
                                            <p className='fw-normal'>
                                                Nella strordinaria cornice del teatro romano i Mercatini di Natale trasformano il cuore della città in un suggerimento villaggio aplino.
                                            </p>
                                        </Card.Text> 
                                    </Card.Body>
                                </Link>
                            </Card>
                            <Card className='me-2 mb-2 carta_terrirorio mt-4'>
                                <Link to="/visite/mercatini__natale_bard" className='text-decoration-none'>
                                    <Card.Img variant="top" 
                                        className={'img_card'} 
                                        src={Mercatini_natale_bard}
                                        style={{height: '90px'}}
                                    />
                                    <Card.Body>
                                        <Card.Title className=' border-bottom text-black'>Mercatini di Natale Bard</Card.Title>
                                        <Card.Text className='mb-5 text-black'>
                                            <p className='fw-normal'>
                                                Durante il periodo natalizio nel bordo medievale di Bard si respira un'atmosfera magica fatta di colori e luci che vi immergeranno nella 
                                                suggestiva atmosfera del Natale.
                                            </p>
                                        </Card.Text> 
                                    </Card.Body>
                                </Link>
                            </Card>
                            <Card className='me-2 mb-2 carta_terrirorio mt-4'>
                                <Link to="/visite/fiera_san_orso" className='text-decoration-none'>
                                    <Card.Img variant="top" 
                                        className={'img_card'} 
                                        src={Fiera_di_Sant_Orso}
                                        style={{height: '90px'}}
                                    />
                                    <Card.Body>
                                        <Card.Title className=' border-bottom text-black'>Fiera di Sant'Orso ad Aosta</Card.Title>
                                        <Card.Text className='mb-5 text-black'>
                                            <p className='fw-normal'>
                                                La tradizionale fiera millenaria dell'asrtigianato è un'occasione per vivere e scoprire le tradizioni della Valle d'Aosta.
                                            </p>
                                        </Card.Text> 
                                    </Card.Body>
                                </Link>
                            </Card>
                            <Card className='me-2 mb-2 carta_terrirorio mt-4'>
                                <Link to="/visite/fiera_san_orso_donnas" className='text-decoration-none'>
                                    <Card.Img variant="top" 
                                        className={'img_card'} 
                                        src={Fiera_sant_orso_donnas}
                                        style={{height: '90px'}}
                                    />
                                    <Card.Body>
                                        <Card.Title className=' border-bottom text-black'>Fiera di Sant'Orso aa Donnas</Card.Title>
                                        <Card.Text className='mb-5 text-black'>
                                            <p className='fw-normal'>
                                                Ogni gennaio borgo medievale di Donnas si anima con la stradizionale fiera di artigianato, un evento imperdibile per 
                                                conoscere il meglio della produzione locale.
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
