import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';
import Footer from '@/Components/Footer';

export default function Rovereto(props) {

    const [isHoveredMart, setIsHoveredMart] = useState(false);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='rovereto' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Rovereto</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Città</p>
                </div>
                <div className='margin mt-3'>
                    <p>
                        A poco più di 15 chilometri dalla sponda trentina del Lago di Garda, <strong>Rovereto</strong>, antico centro di produzione della seta, propone una raffinata offerta culturale. Visitando il suo <b>Castello</b>, fortificazione di epoca tardo-medievale, preparatevi a rifarvi gli occhi 
                        ammirando il panorama e abbracciando con lo sguardo tutta la vallata che si stende ai vostri piedi. All’interno del maniero troverete inoltre il Museo della guerra, dedicato al primo conflitto mondiale. Rovereto è anche <b>Città della Pace</b>, come testimonia la Campana dei Caduti, 
                        che ogni sera, struggente e malinconica, suona 100 rintocchi in memoria dei caduti in guerra.
                    </p>
                    <p>
                        Non può poi mancare una visita al Palazzo Fedrigotti Alberti, al Palazzo dell’Annona (sede della Biblioteca Civica), al Museo Depero e al Teatro Zandonai. E, naturalmente, al Mart, il <Link href='/visite/rovereto/mart_museo_di_arte_moderna_e_contemporanea' className='text-decoration-none 
                        color_link'>Mart</Link> Museo d’arte moderna e contemporanea di Trento e Rovereto, aperto dal 2002 e oggi considerato una delle gallerie più importanti d’Europa. Il museo custodisce una collezione permanente di 20.000 opere, oltre ad allestimenti itineranti di scultura e pittura
                    </p>
                    <p>
                        Amate la bici, il trekking e lo sci? A soli 20 minuti in auto, o tre quarti d’ora in bus, potete andare a scatenarvi sulle vicine piste dell'<b>Altopiano di Brentonico</b>, il "Giardino d'Italia" nel cuore del Parco del Monte Baldo. 
                    </p>
                </div>
                <div className='row d-flex justify-content-center mx-0 mb-4'>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Rovereto'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/rovereto/mart_museo_di_arte_moderna_e_contemporanea'
                            onMouseEnter={() => setIsHoveredMart(true)}
                            onMouseLeave={() => setIsHoveredMart(false)}
                            >Mart - Museo di arte moderna... {isHoveredMart && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                </div>
            </main>
            <Footer/>
        /</AuthenticatedLayout>
    )
}
