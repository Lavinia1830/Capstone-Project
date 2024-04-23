import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';

export default function Cervinia_Valtournanche(props) {

    const [isHoveredLagoBlu, setIsHoveredLagoBlu] = useState(false);
    const [isHoveredMarmittedeiGiganti, setIsHoveredMarmittedeiGiganti] = useState(false);
    const [isHoveredGrottedelleBusserailles, setIsHoveredGrottedelleBusserailles] = useState(false);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='cervinia_valtournanche' style={{ position: 'relative' }}>
                    <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Cervinia Valtournanche</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Città</p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Un luogo da sogno per gli amanti dello sci alle falde del Cervino</h2>
                    <p>
                        È uno dei principali punti di riferimento in Italia per gli amanti dello sci: <b>Breuil-Cervinia</b>, frazione del comune valdostano di <strong>Valtournenche</strong>, sorge alle falde del Cervino a 2000 metri sul livello del mare e vanta uno dei comprensori sciistici più 
                        emozionanti di tutte le Alpi, il <b>Cervino Ski Paradise</b>.
                    </p>
                    <p>
                        La stagione invernale scatta già all'inizio di ottobre e si protrae fino a maggio, offrendo a grandi e piccini la possibilità di trascorrere vacanze e brevi soggiorni tra 322 chilometri di piste per sci e snowboard e 51 impianti di risalita che vanno dai 1.500 
                        ai 3.899 metri di altitudine. 
                    </p>
                    <p>
                        <strong>Valtournenche</strong> rimane un paradiso da scoprire anche durante la stagione estiva, con infinite possibilità di escursioni alla scoperta di borghi come <b>La Magdeleine</b> e gioielli naturalistici come il <Link href='/laghi/valle_d_aosta/lago_blu' 
                        className='text-decoration-none color_link'>Lago Blu</Link> alle porte di Cervinia, le <Link href='/visite/valle_d_aosta/cervinia_valtournanche/marmitte_dei_giganti' className='text-decoration-none color_link'>Marmitte dei Giganti</Link> e 
                        le <Link href='/visite/valle_d_asota/cervinia_valtournanche/grotte_delle_busserailles' className='text-decoration-none color_link'>Grotte delle Busserailles</Link>, ma anche il lago di Maen e il lago Lod. Chi ama lo shopping e l'alta moda non può non farsi tentare dalle vie del centro 
                        storico di Breuil-Cervinia e Valtournenche, concedendosi qualche pausa per scoprire i cibi e i vini della Valle d'Aosta.
                    </p>
                    <p>
                        Non dimenticate di passare da Motta di Pleté per scattare una foto seduti sulla <b>panchina gigante</b> più alta del mondo, a 2.860 metri di altitudine.
                    </p>
                </div>
                <div className='row d-flex justify-content-center mx-0 mb-4'>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Cervinia_Valtournenche'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/laghi/valle_d_aosta/lago_blu'
                            onMouseEnter={() => setIsHoveredLagoBlu(true)}
                            onMouseLeave={() => setIsHoveredLagoBlu(false)}
                            >Lago Blu {isHoveredLagoBlu && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Cervinia_Valtournenche'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/valle_d_aosta/cervinia_valtournanche/marmitte_dei_giganti'
                            onMouseEnter={() => setIsHoveredMarmittedeiGiganti(true)}
                            onMouseLeave={() => setIsHoveredMarmittedeiGiganti(false)}
                            >Marmitte dei Giganti {isHoveredMarmittedeiGiganti && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Cervinia_Valtournenche'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/valle_d_asota/cervinia_valtournanche/grotte_delle_busserailles'
                            onMouseEnter={() => setIsHoveredGrottedelleBusserailles(true)}
                            onMouseLeave={() => setIsHoveredGrottedelleBusserailles(false)}
                            >Grotte delle Busserailles {isHoveredGrottedelleBusserailles && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                </div>
            </main>
            <Footer/>
        </AuthenticatedLayout>
    )
}
