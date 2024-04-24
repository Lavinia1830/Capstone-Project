import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';

export default function Valpelline(props) {

    const [isHoveredMaisonLaTourDeValpelline, setIsHoveredMaisonLaTourDeValpelline] = useState(false);
    const [isHoveredLaTornalla, setIsHoveredLaTornalla] = useState(false);
    const [isHoveredIlPontedellaBetenda, setIsHoveredIlPontedellaBetenda] = useState(false);
    const [isHoveredLaPortadelBouyoz, setIsHoveredLaPortadelBouyoz] = useState(false);
    const [isHoveredIlFaggioMonumentalediVoisinal, setIsHoveredIlFaggioMonumentalediVoisinal] = useState(false);
    const [isHoveredLaBrenvaFouladiGorzé, setIsHoveredLaBrenvaFouladiGorzé] = useState(false);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='valpelline' style={{ position: 'relative' }}>
                    <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Valpelline</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Città</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Seguendo la strada che da Aosta procede verso il Gran S. Bernardo si incontra dopo pochi chilometri una deviazione verso destra che conduce in <strong>Valpelline</strong>. Si tratta di una vallata inizialmente ampia che si fa man mano più angusta e pittoresca prima di interrompersi al 
                        confine tra Italia e Svizzera.
                    </p>
                    <p>
                        In mancanza di grandi comprensori per lo sci alpino, la Valpelline ha puntato tutto su un turismo sportivo alternativo. D’inverno la località è frequentata per lo sci di fondo e lo sci alpinismo; d’estate è un punto di partenza privilegiato per partire alla scoperta di alcune alte vette 
                        alpine, come le cime del <b>Grand Combin</b> e del <b>Dent d’Herens</b>.
                    </p>
                    <p>
                        In fondo alla valle merita un’intera giornata di esplorazione la <b>diga di Place Moulin</b>, con il suo spettacolare specchio d’acqua artificiale, bordato da foreste di larici secolari.
                    </p>
                    <p>
                        Non si può infine lasciare la Valpelline senza aver assaggiato la specialità locale: la <b>seupa à la valpellinentze</b>, a base di verze, pane bianco raffermo, pancetta burro e Fontina DOP.
                    </p>
                </div>
                <div className='row d-flex justify-content-center mx-0 mb-4'>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Valpelline'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/valle_d_aosta/valpelline/maison_la_tour_de_valpelline'
                            onMouseEnter={() => setIsHoveredMaisonLaTourDeValpelline(true)}
                            onMouseLeave={() => setIsHoveredMaisonLaTourDeValpelline(false)}
                            >Maison la tour de Valpelline {isHoveredMaisonLaTourDeValpelline && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Valpelline'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/valle_d_aosta/valpelline/la_tornalla'
                            onMouseEnter={() => setIsHoveredLaTornalla(true)}
                            onMouseLeave={() => setIsHoveredLaTornalla(false)}
                            >La Tornalla {isHoveredLaTornalla && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Valpelline'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/valle_d_aosta/valpelline/il_ponte_della_betenda'
                            onMouseEnter={() => setIsHoveredIlPontedellaBetenda(true)}
                            onMouseLeave={() => setIsHoveredIlPontedellaBetenda(false)}
                            >Il Ponte della Betenda {isHoveredIlPontedellaBetenda && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Valpelline'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/valle_d_aosta/valpelline/la_porta_del_bouyoz'
                            onMouseEnter={() => setIsHoveredLaPortadelBouyoz(true)}
                            onMouseLeave={() => setIsHoveredLaPortadelBouyoz(false)}
                            >La Porta del Bouyoz {isHoveredLaPortadelBouyoz && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Valpelline'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/valle_d_aosta/valpelline/il_faggio_monumentale_di_voisinal'
                            onMouseEnter={() => setIsHoveredIlFaggioMonumentalediVoisinal(true)}
                            onMouseLeave={() => setIsHoveredIlFaggioMonumentalediVoisinal(false)}
                            >Il Faggio Monumentale di Voisinal {isHoveredIlFaggioMonumentalediVoisinal && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Valpelline'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/valle_d_aosta/valpelline/la_brenva_foula_di_gorzé'
                            onMouseEnter={() => setIsHoveredLaBrenvaFouladiGorzé(true)}
                            onMouseLeave={() => setIsHoveredLaBrenvaFouladiGorzé(false)}
                            >La Brenva Foula di Gorzé  {isHoveredLaBrenvaFouladiGorzé && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                </div>
            </main>
            <Footer/>
        </AuthenticatedLayout>
    )
}
