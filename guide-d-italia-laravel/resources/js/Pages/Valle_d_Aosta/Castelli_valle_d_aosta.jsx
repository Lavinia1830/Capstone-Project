import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';
import {Card} from 'react-bootstrap';
import Castello_di_Aymavilles from '../../../assets/Valle_d_Aosta/Castello_di_Aymavilles_Valle_d_Aosta.jpg';
import Castello_di_saint_pierre from '../../../assets/Valle_d_Aosta/Castello_di_saint_pierre_Valle_d_Aosta.jpg';
import Castel_Savoia from '../../../assets/Valle_d_Aosta/Castel_Savoia_Valle_d_Aosta.jpg';
import Castello_di_fenis from '../../../assets/Valle_d_Aosta/Castello_di_fenis_1_Valle_d_Aosta.jpg';
import Castello_di_issogne from '../../../assets/Valle_d_Aosta/Castello_di_issogne_Valle_d_Aosta.jpg';
import Castello_di_verres from '../../../assets/Valle_d_Aosta/Castello_di_verres_Valle_d_Aosta.jpg';
import Castello_di_sarre from '../../../assets/Valle_d_Aosta/Castello_di_sarre_Valle_d_Aosta.jpg';
import Castello_sarriod_de_la_tour from '../../../assets/Valle_d_Aosta/Castello_sarriod_de_la_tour_1_Valle_d_Aosta.jpg';
import Castello_Gamba from '../../../assets/Valle_d_Aosta/Castello_Gamba_Valle_d_Aosta.jpg';
import Castello_di_Graines from '../../../assets/Valle_d_Aosta/Castello_di_Graines_Valle_d_Aosta.jpg';
import Footer from '@/Components/Footer';



export default function Castelli_valle_d_aosta(props) {

  return (
    <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
    >
        <main>
            <div className='castello_fenis'>
                <h1 className='text-center'>Castelli della Valle d'Aosta</h1>
            </div>
            <div className='mt-3'>
                <div className='margin'>
                    <p>
                        Visista i <b>castelli della Valle d'Aosta</b>, castelli medievali ed eleganti dimore intrisi di soria e di leggende.
                    </p>
                </div>
                <div className='margin'>
                    <p>
                        Una <b>guida turistica</b> ti accompagnerà alla scoperta dei più bei castelli della Valle d'Aosta. Potrai visitare i castelli medievali di maggior
                        fascino, come il <Link to='/castello_di_fenis' className='text-decoration-none color_link'>Castello di Fénis</Link> ed il 
                        <Link to='/castello_di_issogne' className='text-decoration-none color_link'> Castello di Issogne</Link>; ma anche magnifiche dimore sabaude come il 
                        <Link to='/castel_savoia_gressoney' className='text-decoration-none color_link'> Castel Savoia</Link> di Gressoney-Saint-Jean oppuere eleganti residenze come 
                        il <Link to='/visite/costello_di_aymavilles' className='text-decoration-none color_link'>Castello di Aymavilles</Link>. 
                    </p>
                    <p>
                        La visita dei castelli è rivolta anche alle <Link to='/viaggi_d_istruzione_valle_d_aosta' className='text-decoration-none color_link'>scuole</Link> per le quali 
                        stati studiati dei <b>laboratori didattici</b>. 
                    </p>
                    <p>
                        il servizio di visita guidata ai castelli con una guida turistica della Valle d'Aosta conserte di avere i <b>turni di vista riservati</b> e garantiti
                        evitando inutili attese.
                    </p>
                </div>
                <div className='margin'>
                    <h2 className='color-subtitle'>Le origini dei castelli della Valle d'Aosta</h2>
                    <p>
                        La Valle d'Aosta ha da sempre costituito un passaggio obbligato per raggiungere i valichi alpini ed in un territotio aspro, privo di un potente forte 
                        che esercitasse un controllo diretto diretto in cui era facile elevarsi al rango di signori. Per questa regione la Valle d'Aosta è costellata di numerosi
                        <b>catelli</b>, <b>torri</b> e <b>caseforti</b>.
                    </p>
                </div>
                <div className='margin'>
                    <h2 className='color-subtitle'>I castelli, edievali in Valle d'Aosta</h2>
                    <p>
                        I primi castelli sorsero tra XI e XII secolo ed erano costruiti da mastio, cappella castrense e cinta muraria, a questo genere di castelli recinto appartengono 
                        il <Link to='/castello_di_graines' className='text-decoration-none color_link'>Castello di Graines</Link>, Castello di Châtel-Arget e il Castello di Cly. Nei secoli 
                        successivi il castello da baluardo difensivo assume una funzione residenziale e nascono nuovi tipi di catelli detti "monoblocco" (Castello di Ussel, 
                        <Link to='/castello_di_verres' className='text-decoration-none color_link'> Castello di Verrès</Link>). Coeva è la costruzione del castello di Fénis che unisce l'apparato
                        difensivo fatto da torri, cinte e feritoie a dimora signorile con tanto di cortile e cappella affrescate. <br/>
                        Sarà nel XV secolo che si assiste alla realizzazione dei veri e propri palazzi signorili come il castello di Issogne, vera e proprio residenza priva di prerogative 
                        difensive.
                    </p>
                </div>
                <div className='margin'>
                    <h2 className='color-subtitle'>I castelli dei Savoia in Valle d'Aosta</h2>
                    <p>
                        Il <Link to='/castello_sisarre' className='text-decoration-none color_link'>Casteeelo Reale di Sarre</Link> Fu acquistato nel 1868 da Re Vittorio Emanuele II, detto il Re 
                        Cacciatore per farne la sua residenza durante i periodi di caccia nelle valli del Gran Paradiso. Il <Link to='/calstel_savoia_gressoney' className='text-decoration-none color_link'>Castel Savoia </Link>
                        a Gressoney-Sanit-Jean è invece indissolubilmente legato alla figura della Regina Margherita e alle sue imprese alpinistiche nel massiccio del Monte Rosa all'inizio 
                        del XX secolo.
                    </p>
                </div>
                <div className='v-guidate margin'>
                    <h2 className='color-subtitle'>Visite guidate:</h2>
                </div>
                <div className='bordo-superiore mb-3'>
                    <div className='blog'>
                        <div className='container d-flex justify-content-center flex-wrap'>
                            <Card className='me-2 mb-2 carta_castelli mt-4'>
                                <Link to="/visite/castello_di_aymavilles" className='text-decoration-none'>
                                    <Card.Img variant="top" 
                                        className={'img_card'} 
                                        src={Castello_di_Aymavilles}
                                    />
                                    <Card.Body>
                                        <Card.Title className=' border-bottom text-black'>Castello di Aymavilles</Card.Title>
                                        <Card.Text className='mb-5 text-black'>
                                            <p className='fw-normal'>
                                                Elegante residenza Settecentesca situata su una collina morenica circondatada lussureggianti vigneti, ospita la ricca collezione d'arte della prestigiosa 
                                                Academie de Saint Anselme.
                                            </p>
                                        </Card.Text> 
                                    </Card.Body>
                                </Link>
                            </Card>
                            <Card className='me-2 mb-2 carta_castelli mt-4'>
                                <Link to="/visite/castello_di_saint_pierre" className='text-decoration-none'>
                                    <Card.Img variant="top" 
                                        className={'img_card'} 
                                        src={Castello_di_saint_pierre} 
                                    />
                                    <Card.Body>
                                        <Card.Title className=' border-bottom text-black'>Castello di Saint Pierre</Card.Title>
                                        <Card.Text className='mb-5 text-black'>
                                            <p className='fw-normal'>
                                                Castello più ammirato ed iconico della Valle d'Aosta, il Castello di Sant-Pierre ospita il rinnovato allestimaneto del Museo Regionale di Scienze Naturali
                                                Efisio Noussan.
                                            </p>
                                        </Card.Text> 
                                    </Card.Body>
                                </Link>
                            </Card>
                            <Card className='me-2 mb-2 carta_castelli mt-4' >
                                <Link to="/visite/castel_savoia_greesooney" className='text-decoration-none'>
                                    <Card.Img variant="top" 
                                        className={'img_card'} 
                                        src={Castel_Savoia} 
                                    />
                                    <Card.Body>
                                        <Card.Title className=' border-bottom text-black'>Castel Savoia di Greessoney-Santy-Jean</Card.Title>
                                        <Card.Text className='mb-5 text-black'>
                                            <p className='fw-normal'>
                                                Fiebesca residenza estiva della Regina Margheria di Savoia costruita in posizione panoramica per godere di una meravigliosa vista sul Monte Rosa.
                                            </p>
                                        </Card.Text> 
                                    </Card.Body>
                                </Link>
                            </Card>
                            <Card className='me-2 mb-2 carta_castelli mt-4' >
                                <Link to="/visite/castello_di_fenis" className='text-decoration-none'>
                                    <Card.Img variant="top" 
                                        className={'img_card'} 
                                        src={Castello_di_fenis} 
                                    />
                                    <Card.Body>
                                        <Card.Title className=' border-bottom text-black'>Castello di Fénis</Card.Title>
                                        <Card.Text className='mb-5 text-black'>
                                            <p className='fw-normal'>
                                                Sede di rappresentanza della potente famiglia Challant, il castello di Fénis unisce gli elementi difensivi medievali con l'eleganza della residenza 
                                                signorile rendendolo il castello più famoso della Valle d'Aosta.
                                            </p>
                                        </Card.Text> 
                                    </Card.Body>
                                </Link>
                            </Card>
                            <Card className='me-2 mb-2 carta_castelli mt-4' >
                                <Link to="/visite/castello_di_issogne" className='text-decoration-none'>
                                    <Card.Img variant="top" 
                                        className={'img_card'} 
                                        src={Castello_di_issogne} 
                                    />
                                    <Card.Body>
                                        <Card.Title className=' border-bottom text-black'>Castello di Fénis</Card.Title>
                                        <Card.Text className='mb-5 text-black'>
                                            <p className='fw-normal'>
                                                Sontuosa residenza signorile del XV secolo riccamente affrescata dal colto mecenate Giorgio di Challant divenne nel XIX secolo il "Castello dei Sogni".
                                            </p>
                                        </Card.Text> 
                                    </Card.Body>
                                </Link>
                            </Card>
                            <Card className='me-2 mb-2 carta_castelli mt-4' >
                                <Link to="/visite/castello_di_verres" className='text-decoration-none'>
                                    <Card.Img variant="top" 
                                        className={'img_card'} 
                                        src={Castello_di_verres} 
                                    />
                                    <Card.Body>
                                        <Card.Title className=' border-bottom text-black'>Castello di Verrès</Card.Title>
                                        <Card.Text className='mb-5 text-black'>
                                            <p className='fw-normal'>
                                                Costruito per volere di Ibleto di Challant su un promontorio roccioso dominante il borgo di Verrès fu testimone delle intrepide gesta della corraggiosa 
                                                Caterina di Challant.
                                            </p>
                                        </Card.Text> 
                                    </Card.Body>
                                </Link>
                            </Card>
                            <Card className='me-2 mb-2 carta_castelli mt-4' >
                                <Link to="/visite/castello_di_sarre" className='text-decoration-none'>
                                    <Card.Img variant="top" 
                                        className={'img_card'} 
                                        src={Castello_di_sarre} 
                                    />
                                    <Card.Body>
                                        <Card.Title className=' border-bottom text-black'>Castello di Sarre</Card.Title>
                                        <Card.Text className='mb-5 text-black'>
                                            <p className='fw-normal'>
                                                Castello madievale radicalmente trasformato nel Settecento da Jean Francois Ferrod venne acquistato nel 1869 dal Re Vittorio Emanuele II che ne fece il 
                                                suo quartier generale per le battute di caccia nelle Valli del Gran Paradiso. 
                                            </p>
                                        </Card.Text> 
                                    </Card.Body>
                                </Link>
                            </Card>
                            <Card className='me-2 mb-2 carta_castelli mt-4' >
                                <Link to="/visite/castello_sarriod_de_la_tour" className='text-decoration-none'>
                                    <Card.Img variant="top" 
                                        className={'img_card'} 
                                        src={Castello_sarriod_de_la_tour} 
                                    />
                                    <Card.Body>
                                        <Card.Title className=' border-bottom text-black'>Castello Sarriod de la Tour</Card.Title>
                                        <Card.Text className='mb-5 text-black'>
                                            <p className='fw-normal'>
                                                Situato su un pianoro pianeggiante nel comune di Saint-Pierre e circondato da rigogliosi meleti, il castello è frutto di diverse campagne costruttive che 
                                                gli hanno conferito l'attuale aspetto irregolare che lo contraddistingue.
                                            </p>
                                        </Card.Text> 
                                    </Card.Body>
                                </Link>
                            </Card>
                            <Card className='me-2 mb-2 carta_castelli mt-4' >
                                <Link to="/visite/castello_gamba" className='text-decoration-none'>
                                    <Card.Img variant="top" 
                                        className={'img_card'} 
                                        src={Castello_Gamba} 
                                    />
                                    <Card.Body>
                                        <Card.Title className=' border-bottom text-black'>Castello Gamba</Card.Title>
                                        <Card.Text className='mb-5 text-black'>
                                            <p className='fw-normal'>
                                                Ciorcondato da un ampio parco all'inglese e costruito all'inizio del XX secolo per volere di Carlo Maurizio Gmaba per la moglie Angélique d'Entrèves, ospita
                                                oggi una ricca pinacoteca di arte moderna e contemporanea.
                                            </p>
                                        </Card.Text> 
                                    </Card.Body>
                                </Link>
                            </Card>
                            <Card className='me-2 mb-2 carta_castelli mt-4' >
                                <Link to="/visite/castello_sarriod_de_la_tour" className='text-decoration-none'>
                                    <Card.Img variant="top" 
                                        className={'img_card'} 
                                        src={Castello_di_Graines} 
                                    />
                                    <Card.Body>
                                        <Card.Title className=' border-bottom text-black'>Castello di Graines</Card.Title>
                                        <Card.Text className='mb-5 text-black'>
                                            <p className='fw-normal'>
                                                Circondato da un magnifico paesaggio e situato su un promontorio roccioso nel comune di Brusson, nel cuore della Val d'Ayas, l'antico castello di Graines è
                                                uno dei castelli più antichi della Valle d'Aosta.
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
