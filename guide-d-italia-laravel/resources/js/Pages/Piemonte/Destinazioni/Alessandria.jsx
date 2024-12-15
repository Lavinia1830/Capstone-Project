import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';

export default function Alessandria(props) {

    const [isHoveredCastellodiGiarole, setIsHoveredCastellodiGiarole] = useState(false);
    const [isHoveredMuseodiMarengo, setIsHoveredMuseodiMarengo] = useState(false);
    const [isHoveredPiazzadellaLibertà, setIsHoveredPiazzadellaLibertà] = useState(false);
    const [isHoveredDuomodiAlessandria, setIsHoveredDuomodiAlessandria] = useState(false);
    const [isHoveredCittadelladiAlessandria, setIsHoveredCittadelladiAlessandria] = useState(false);
    
    return (
        <>
            <Head title="Alessadria"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='alessandria' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Alessandria</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Città</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Nota ai tempi di Federico Barbarossa come Civitas Nova, dopo l’adesione alla Lega Lombarda nel 1168, venne offerta a Papa Alessandro III, 
                            che accettò di farla diventare un feudo della Chiesa. In suo onore fu ribattezzata <a href='https://visitalessandria.it/' 
                            className='text-decoration-none color_link'>Alessandria</a>.
                        </p>
                        <p>
                            Tra le fortezze che sorgono nel contado alessandrino, merita una visita il <Link href='/visite/piemonte/alessandria/castello_sannazzaro_di_giarole' 
                            className='text-decoration-none color_link'>Castello di Giarole</Link> del XII secolo della famiglia Sannazzaro con i suoi saloni affrescati, 
                            la sua torre, le suggestive segrete e l’imponente parco di impianto ottocentesco. Per gli amanti delle campagne napoleoniche, 
                            il <Link href='/visite/piemonte/alessandria/museo_dei_marengo' className='text-decoration-none color_link'>Museo di Marengo</Link> è una tappa 
                            obbligata per ricostruire le imprese di Bonaparte nonché cause, sviluppi e conseguenze dell’omonima battaglia.
                        </p>
                    </div>
                    <div className='row d-flex justify-content-center mx-0 mb-4'>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Alessandria'>
                            <CardBody className='bottone'>
                            <Link 
                            className="bottone_link" 
                            href='/visite/piemonte/alessandria/castello_sannazzaro_di_giarole'
                            onMouseEnter={() => setIsHoveredCastellodiGiarole(true)}
                            onMouseLeave={() => setIsHoveredCastellodiGiarole(false)}
                            >Castello di Giarole {isHoveredCastellodiGiarole && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Alessandria'>
                            <CardBody className='bottone'>
                            <Link 
                            className="bottone_link" 
                            href='/visite/piemonte/alessandria/museo_di_marengo'
                            onMouseEnter={() => setIsHoveredMuseodiMarengo(true)}
                            onMouseLeave={() => setIsHoveredMuseodiMarengo(false)}
                            >Museo di Marengo {isHoveredMuseodiMarengo && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Alessandria'>
                            <CardBody className='bottone'>
                            <Link 
                            className="bottone_link" 
                            href='/visite/piemonte/alessandria/piazza_della_libertà'
                            onMouseEnter={() => setIsHoveredPiazzadellaLibertà(true)}
                            onMouseLeave={() => setIsHoveredPiazzadellaLibertà(false)}
                            >Piazza della Libertà {isHoveredPiazzadellaLibertà && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Alessandria'>
                            <CardBody className='bottone'>
                            <Link 
                            className="bottone_link" 
                            href='/visite/piemonte/alessandria/duomo_di_alessandria'
                            onMouseEnter={() => setIsHoveredDuomodiAlessandria(true)}
                            onMouseLeave={() => setIsHoveredDuomodiAlessandria(false)}
                            >Duomo di Alessandria {isHoveredDuomodiAlessandria && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Alessandria'>
                            <CardBody className='bottone'>
                            <Link 
                            className="bottone_link" 
                            href='/visite/piemonte/alessandria/cittadella_di_alessandria'
                            onMouseEnter={() => setIsHoveredCittadelladiAlessandria(true)}
                            onMouseLeave={() => setIsHoveredCittadelladiAlessandria(false)}
                            >Cittadella di Alessandria {isHoveredCittadelladiAlessandria && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
