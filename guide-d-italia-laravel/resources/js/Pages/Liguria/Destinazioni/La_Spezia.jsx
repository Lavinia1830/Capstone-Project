import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';

export default function La_Spezia(props) {

    const [isHoveredCSanGiorgio, setIsHoveredCSanGiorgio] = useState(false);
    const [isHoveredMNnavaleSpezia, setIsHoveredMNnavaleSpezia] = useState(false);
    const [isHoveredMuseoAmedeoLia, setIsHoveredMuseoAmedeoLia] = useState(false);
    const [isHoveredPortoMirabello, setIsHoveredPortoMirabello] = useState(false);
    const [isHoveredViadelPrione, setIsHoveredViadelPrione] = useState(false);
    const [isHoveredPonteThaonRevel, setIsHoveredPonteThaonRevel] = useState(false);

  return (
    <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        >
        <main>
            <div className='la_spezia' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>La Spezia</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Città</p>
            </div>
            <div className="margin mt-3">
                <p>
                    In mezzo alle <b>Cinque Terre</b>, a Portovenere, Lerici e Tellaro, luoghi meravigliosi e a ragion veduta bersaglio del turismo, <b>La Spezia</b> è spesso vista come punto partenza o di transito verso le più piccole e pittoresche località che le stanno intorno, eppure offre 
                    piacevoli sorprese: i musei, la vivace <b>via del Prione</b>, la rinnovata <b>piazza Giuseppe Verdi</b>, <b>la passeggiata Costantino Morin</b> con gli spettacolari panorami sul golfo e sulle Alpi Apuane. Ottocentesca in parte, ma anche industriale e moderna, fu meta elettiva del 
                    Gran Tour tra il XVIII e il XIX secolo e residenza dei poeti George Byron e Percy Bysshe Shelley. All’epoca la città altro non era che un incantevole borgo di 3000 anime. Non c’era Arsenale, nessuna fabbrica né infrastrutture portuali, nessuna diga a rompere la magia di un seno di 
                    mare ampio 9 chilometri e profondo 13. Napoleone, che definiva il golfo spezzino come “il più bello dell’universo”, vi vedeva il luogo ideale per costruire un porto militare. Il Conte di Cavour raccolse questo sogno e trasferì da Genova a La Spezia l'arsenale della Marina militare 
                    del regno di Sardegna (1853), trasformando l’assetto urbanistico della città, che da piccola cittadina murata divenne grande piazzaforte
                </p>
            </div>
            <div className='row d-flex justify-content-center mx-0 mb-4'>
                <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_La_Spezia'>
                    <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/la_spezia/castello_san_giorgio'
                            onMouseEnter={() => setIsHoveredCSanGiorgio(true)}
                            onMouseLeave={() => setIsHoveredCSanGiorgio(false)}
                            >Castello di San Giorgio {isHoveredCSanGiorgio && <i className="bi bi-chevron-right"></i>}
                        </Link>
                    </CardBody>
                </Card>
                <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_La_Spezia'>
                    <CardBody className='bottone'>
                    <Link 
                        className="bottone_link" 
                        href='/visite/la_spezia/museo_nazionale_navale_della_spezia'
                        onMouseEnter={() => setIsHoveredMNnavaleSpezia(true)}
                        onMouseLeave={() => setIsHoveredMNnavaleSpezia(false)}
                        >Museo Nazionale Navale della Spezia {isHoveredMNnavaleSpezia && <i className="bi bi-chevron-right"></i>}
                    </Link>
                    </CardBody>
                </Card>
                <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_La_Spezia'>
                    <CardBody className='bottone'>
                    <Link 
                        className="bottone_link" 
                        href='/visite/la_spezia/museo_amedeo_lia'
                        onMouseEnter={() => setIsHoveredMuseoAmedeoLia(true)}
                        onMouseLeave={() => setIsHoveredMuseoAmedeoLia(false)}
                        >Museo Amedeo Lia {isHoveredMuseoAmedeoLia && <i className="bi bi-chevron-right"></i>}
                    </Link>
                    </CardBody>
                </Card>
                <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_La_Spezia'>
                    <CardBody className='bottone'>
                    <Link 
                        className="bottone_link" 
                        href='/visite/la_spezia/via_del_prione'
                        onMouseEnter={() => setIsHoveredViadelPrione(true)}
                        onMouseLeave={() => setIsHoveredViadelPrione(false)}
                        >Via del Prione {isHoveredViadelPrione && <i className="bi bi-chevron-right"></i>}
                    </Link>
                    </CardBody>
                </Card>
                <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_La_Spezia'>
                    <CardBody className='bottone'>
                    <Link 
                        className="bottone_link" 
                        href='/visite/la_spezia/porto_mirabello'
                        onMouseEnter={() => setIsHoveredPortoMirabello(true)}
                        onMouseLeave={() => setIsHoveredPortoMirabello(false)}
                        >Porto Mirabello {isHoveredPortoMirabello && <i className="bi bi-chevron-right"></i>}
                    </Link>
                    </CardBody>
                </Card>
                <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_La_Spezia'>
                    <CardBody className='bottone'>
                    <Link 
                        className="bottone_link" 
                        href='/visite/la_spezia/ponte_thaon_de_revel'
                        onMouseEnter={() => setIsHoveredPonteThaonRevel(true)}
                        onMouseLeave={() => setIsHoveredPonteThaonRevel(false)}
                        >Ponte Thaon de Revel {isHoveredPonteThaonRevel && <i className="bi bi-chevron-right"></i>}
                    </Link>
                    </CardBody>
                </Card>
            </div>
        </main>
        <Footer/>
        </AuthenticatedLayout>
  )
}
