import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';

export default function Vercelli(props) {

    const [isHoveredBasilicadiSantAndrea, setIsHoveredBasilicadiSantAndrea] = useState(false);
    const [isHoveredCattedralediSantEusebio, setIsHoveredCattedralediSantEusebio] = useState(false);
    const [isHoveredCastelloVisconteo, setIsHoveredCastelloVisconteo] = useState(false);
    const [isHoveredMuseoLeone, setIsHoveredMuseoLeone] = useState(false);

    return (
        <>
            <Head title="Vercelli"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='vercelli' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Vercelli</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Città</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            <strong>Vercelli</strong>, in Piemonte, è un gioiello da scoprire. Circondata dalle risaie, magnifiche da costeggiare in bici tra aprile e maggio, 
                            durante il loro periodo di allagamento, la città custodisce numerosi punti di interesse. Da vedere la <Link href='/visite/piemonte/vercelli/basilica_di_sant_andrea' 
                            className='text-decoration-none color_link'>Basilica di Sant’Andrea in stile gotico</Link>, la <Link href='/visite/piemonte/vercelli/cattedrale_di_sant_eusebio'
                            className='text-decoration-none color_link'>Cattedrale di Sant’Eusebio</Link>, il <Link href='/visite/piemonte/vercelli/castello_visconteo' 
                            className='text-decoration-none color_link'>Castello Visconteo</Link>, il <Link href='/visite/piemonte/vercelli/museo_leone'
                            className='text-decoration-none color_link'>Museo Leone</Link> e la <Link href='/visite/piemonte/vercelli/pinacoteca_francesco_borgogna' 
                            className='text-decoration-none color_link'>Pinacoteca Francesco Borgogna</Link>.
                        </p>
                        <p>
                            Il territorio della provincia riserva numerose altre sorprese. A <b>Buronzo</b> sorge il <Link href='/visite/piemonte/buronzo/castellone' 
                            className='text-decoration-none color_link'>Castellone</Link> e splendide fortezze si trovano anche a Balocco e Rovasenda. Sulle rive 
                            del <Link href='/fiumi/piemonte/vercelli/fiume_sesia' className='text-decoration-none color_link'>fiume Sesia</Link> c’è l’area protetta del <Link 
                            href='/visite/piemonte/vercelli/parco_naziole_delle_lame' className='text-decoration-none color_link'>Parco Naturale delle Lame del Sesia</Link> dove 
                            godersi splendide passeggiate. Non può mancare un giro in <b>Monferrato</b>, con le sue dolci colline ricoperte da vigneti.
                        </p>
                        <p>
                            Ma il cuore della provincia di <strong>Vercelli</strong> batte in Valsesia. Qui si trova il <b>Sacro Monte di Varallo</b>, un monumentale complesso 
                            religioso che insieme ad altri Sacri Monti italiani rientra nel patrimonio UNESCO. Ad <b>Alagna Valsesia</b> immergetevi nella cultura Walser, un 
                            popolo di origine tedesca insediatosi in questa valle nel Medioevo.
                        </p>
                        <p>
                            La Valsesia è tappa immancabile per chi ama gli sport invernali e quelli fluviali, dalla pesca al rafting. Qui si trova anche il rifugio alpino più 
                            alto d’Europa a 4554 metri, Capanna Margherita sul Monte Rosa.
                        </p>
                    </div>
                    <div className='row d-flex justify-content-center mx-0 mb-4'>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Vercelli'>
                            <CardBody className='bottone'>
                                <Link 
                                className="bottone_link" 
                                href='/visite/piemonte/vercelli/basilica_di_sant_andrea'
                                onMouseEnter={() => setIsHoveredBasilicadiSantAndrea(true)}
                                onMouseLeave={() => setIsHoveredBasilicadiSantAndrea(false)}
                                >Basilica di Sant'Andrea {isHoveredBasilicadiSantAndrea && <i className="bi bi-chevron-right"></i>}
                                </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Vercelli'>
                            <CardBody className='bottone'>
                                <Link 
                                className="bottone_link" 
                                href='/visite/piemonte/vercelli/cattedrale_di_sant_eusebio'
                                onMouseEnter={() => setIsHoveredCattedralediSantEusebio(true)}
                                onMouseLeave={() => setIsHoveredCattedralediSantEusebio(false)}
                                >Cattedrale di Sant'Eusebio {isHoveredCattedralediSantEusebio && <i className="bi bi-chevron-right"></i>}
                                </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Vercelli'>
                            <CardBody className='bottone'>
                                <Link 
                                className="bottone_link" 
                                href='/visite/piemonte/vercelli/castello_visconteo'
                                onMouseEnter={() => setIsHoveredCastelloVisconteo(true)}
                                onMouseLeave={() => setIsHoveredCastelloVisconteo(false)}
                                >Castello Visconteo {isHoveredCastelloVisconteo && <i className="bi bi-chevron-right"></i>}
                                </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Vercelli'>
                            <CardBody className='bottone'>
                                <Link 
                                className="bottone_link" 
                                href='/visite/piemonte/vercelli/museo_leone'
                                onMouseEnter={() => setIsHoveredMuseoLeone(true)}
                                onMouseLeave={() => setIsHoveredMuseoLeone(false)}
                                >Museo Leone {isHoveredMuseoLeone && <i className="bi bi-chevron-right"></i>}
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
