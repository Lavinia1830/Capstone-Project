import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';

export default function Alba(props) {

    const [isHoveredLaCattedralediSanLorenzo, setIsHoveredLaCattedralediSanLorenzo] = useState(false);
    const [isHoveredLaChiesadellaMaddalena, setIsHoveredLaChiesadellaMaddalena] = useState(false);
    const [isHoveredIlPalazzoComunale, setIsHoveredIlPalazzoComunale] = useState(false);
    const [isHoveredLetorri, setIsHoveredLetorri] = useState(false);
    const [isHoveredAlbaSotterranea, setIsHoveredAlbaSotterranea] = useState(false);
    const [isHoveredLaChiesadiSanDomenico, setIsHoveredLaChiesadiSanDomenico] = useState(false);
    const [isHoveredLaChiesadiSanGiuseppe, setIsHoveredLaChiesadiSanGiuseppe] = useState(false);
    const [isHoveredCasaFenoglio, setIsHoveredCasaFenoglio] = useState(false);

    return (
        <>
            <Head title="Alba"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='alba' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Alba</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Città</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Cittadinanza piemontese della provincia di <Link href='/destinazioni/piemonte/cuneo' className='text-decoration-none color_link'>Cuneo</Link> che detiene il primato
                            per la <b>più ntica Fiera del <Link href='/enogastronomia/piemonte/cueno/tartufo_bianco' className='text-decoration-none color_link'>Tartufo Bianco</Link></b> che 
                            si svolge tra ottobre e novembre. Prima del <b>13 novembre</b>, giorno della famosa asta, la cittadina di <a href='https://visitalba.eu/' 
                            className='text-decoration-none color_link'>Alba</a> è tutta un fermento di appuntamenti e iniziative, a cominciare dal <b>Mercato Mondiale del Tartufo</b>, dove il 
                            visitatore può trovare trifole certificate. Infatti, il tartufo in vendita è analizzato e garantito da una commissione di controllo che funziona come sportello del 
                            consumatore per tutto l'orario di apertura al pubblico della fiera, a cui il compratore può fare rifermento in ogni momento.
                        </p>
                    </div>
                    <div className='row d-flex justify-content-center mx-0 mb-4'>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Alba'>
                            <CardBody className='bottone'>
                            <Link 
                            className="bottone_link" 
                            href='/visite/piemonte/alba/cattedrale_di_san_lorenzo'
                            onMouseEnter={() => setIsHoveredLaCattedralediSanLorenzo(true)}
                            onMouseLeave={() => setIsHoveredLaCattedralediSanLorenzo(false)}
                            >La Cattedrale di San Lorenzo {isHoveredLaCattedralediSanLorenzo && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Alba'>
                            <CardBody className='bottone'>
                            <Link 
                            className="bottone_link" 
                            href='/visite/piemonte/alba/chiesa_della_maddalena'
                            onMouseEnter={() => setIsHoveredLaChiesadellaMaddalena(true)}
                            onMouseLeave={() => setIsHoveredLaChiesadellaMaddalena(false)}
                            >La Chiesa della Maddalena {isHoveredLaChiesadellaMaddalena && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Alba'>
                            <CardBody className='bottone'>
                            <Link 
                            className="bottone_link" 
                            href='/visite/piemonte/alba/palazzo_comunale'
                            onMouseEnter={() => setIsHoveredIlPalazzoComunale(true)}
                            onMouseLeave={() => setIsHoveredIlPalazzoComunale(false)}
                            >Il Palazzo Comunale {isHoveredIlPalazzoComunale && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Alba'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/visite/piemonte/alba/le_torri'
                                onMouseEnter={() => setIsHoveredLetorri(true)}
                                onMouseLeave={() => setIsHoveredLetorri(false)}
                            >Le torri {isHoveredLetorri && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Alba'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/visite/piemonte/alba/alba_sotterranea'
                                onMouseEnter={() => setIsHoveredAlbaSotterranea(true)}
                                onMouseLeave={() => setIsHoveredAlbaSotterranea(false)}
                            >
                                Alba Sotterranea {isHoveredAlbaSotterranea && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Alba'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/visite/piemonte/alba/chiesa_di_san_domenico'
                                onMouseEnter={() => setIsHoveredLaChiesadiSanDomenico(true)}
                                onMouseLeave={() => setIsHoveredLaChiesadiSanDomenico(false)}
                            >
                                La Chiesa di San Domenico {isHoveredLaChiesadiSanDomenico && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Alba'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/visite/piemonte/alba/chiesa_di_san_giuseppe'
                                onMouseEnter={() => setIsHoveredLaChiesadiSanGiuseppe(true)}
                                onMouseLeave={() => setIsHoveredLaChiesadiSanGiuseppe(false)}
                            >
                                La Chiesa di San Giuseppe {isHoveredLaChiesadiSanGiuseppe && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Alba'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/visite/piemonte/alba/casa_fenoglio'
                                onMouseEnter={() => setIsHoveredCasaFenoglio(true)}
                                onMouseLeave={() => setIsHoveredCasaFenoglio(false)}
                            >
                                Casa Fenoglio {isHoveredCasaFenoglio && <i className="bi bi-chevron-right"></i>}
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
