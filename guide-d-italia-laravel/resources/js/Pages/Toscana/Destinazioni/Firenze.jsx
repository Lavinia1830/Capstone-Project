import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';

export default function Firenze(props) {

    const [isHoveredDuomo, setIsHoveredDuomo] = useState(false);
    const [isHoveredBattistero, setIsHoveredBattistero] = useState(false);
    const [isHoveredGalleriadegliUffizi, setIsHoveredGalleriadegliUffizi] = useState(false);
    const [isHoveredPonteVecchio, setIsHoveredPonteVecchio] = useState(false);
    const [isHoveredPalazzoVecchio, setIsHoveredPalazzoVecchio] = useState(false);
    const [isHoveredPalazzoPitti, setIsHoveredPalazzoPitti] = useState(false);
    const [isHoveredBasilicadiSantaCroce, setIsHoveredBasilicadiSantaCroce] = useState(false);
    const [isHoveredBasilicadiSantaMariadelCarmine, setIsHoveredBasilicadiSantaMariadelCarmine] = useState(false);
    const [isHoveredCappelleMedicee, setIsHoveredCappelleMedicee] = useState(false);
    const [isHoveredCasadiDante, setIsHoveredCasadiDante] = useState(false);
    const [isHoveredGalleriadellAccademia, setIsHoveredGalleriadellAccademia] = useState(false);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='firenze' style={{ position: 'relative' }}>
                    <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Firenze</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Città</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        I suoi magnifici palazzi, le splendide gallerie e le chiese ricche di tesori attestano l’amore dei fiorentini per lo sfarzo. Anche quando la potenza di <strong>Firenze</strong> era ormai tramontata da molto tempo sull’orizzonte politico ed economico, la città ha continuato a mantenere il suo aspetto elegante: il suo panorama, 
                        fatto di tetti rossi e ampie cupole, è veramente pittoresco. Tutto, su Firenze, grida bellezza.<br/>
                        Elegante, raffinata e forse anche un po’ presuntuosa, la città è molto più che la culla del Rinascimento italiano. Tra le <b>cose da vedere a Firenze</b> certo, ci sono i palazzi medievali simbolo di ricchezza e potere, le imponenti chiese che celano storie di santi e sanguinarie congiure, i musei carichi di opere d’arte; ma 
                        basta guardare oltre la fama che la circonda e la precede per scoprire una città moderna e vivace, che stupisce per il suo spirito modaiolo e cosmopolita.
                    </p>
                </div>
                <div className="margin mt-3"> 
                    <h2 className="color-subtitle">Informazioni turistiche su Firenze</h2>
                    <p>
                        Tra le <b>cose da vedere in Toscana</b>, è lei la regina assoluta (sebbene abbia molte concorrenti, non solo tra le città ma anche tra i borghi). Lo è perché è un calderone d’arte, di frenesia, di magnificenza culturale. Gli <b>Uffizi di Firenze</b>, Piazza della Signoria o la tradizionale capatina a <Link 
                        href='/visite/firenze/ponte_vecchio' className='text-decoration-none color_link'>Ponte Vecchio</Link> aprono lo sguardo su una città che nei secoli è rimasta immutata nei suoi contorni, pur aprendosi al nuovo senza paura.
                    </p>
                </div>
                <div className="margin mt-3"> 
                    <h2 className="color-subtitle">Cosa vedere a Firenze in due giorni?</h2>
                    <p>
                        O in un weekend, in un pomeriggio solo? Andate a ruota libera: non esiste una regola, con una città come questa. Certo, dedicarle del tempo è un dovere morale: ma se non si può, persino una fugace visita a Piazzale Michelangelo per gustarsela dall’alto può imprimere ricordi indelebili.
                    </p>
                </div>
                <div className='row d-flex justify-content-center mx-0 mb-4'>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Firenze'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/toscana/firenze/duomo'
                            onMouseEnter={() => setIsHoveredDuomo(true)}
                            onMouseLeave={() => setIsHoveredDuomo(false)}
                            >Duomo {isHoveredDuomo && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Firenze'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/toscana/firenze/battistero'
                            onMouseEnter={() => setIsHoveredBattistero(true)}
                            onMouseLeave={() => setIsHoveredBattistero(false)}
                            >Battistero {isHoveredBattistero && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Firenze'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/toscana/firenze/galleria_degli_uffizi'
                            onMouseEnter={() => setIsHoveredGalleriadegliUffizi(true)}
                            onMouseLeave={() => setIsHoveredGalleriadegliUffizi(false)}
                            >Galleria degli Uffizi {isHoveredGalleriadegliUffizi && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Firenze'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/toscana/firenze/ponte_vecchio'
                            onMouseEnter={() => setIsHoveredPonteVecchio(true)}
                            onMouseLeave={() => setIsHoveredPonteVecchio(false)}
                            >Ponte Vecchio {isHoveredPonteVecchio && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Firenze'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/toscana/firenze/palazzo_vecchio'
                            onMouseEnter={() => setIsHoveredPalazzoVecchio(true)}
                            onMouseLeave={() => setIsHoveredPalazzoVecchio(false)}
                            >Palazzo Vecchio {isHoveredPalazzoVecchio && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Firenze'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/toscana/firenze/palazzo_pitti'
                            onMouseEnter={() => setIsHoveredPalazzoPitti(true)}
                            onMouseLeave={() => setIsHoveredPalazzoPitti(false)}
                            >Palazzo Pitti {isHoveredPalazzoPitti && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Firenze'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/toscana/firenze/basilica_di_santa_croce'
                            onMouseEnter={() => setIsHoveredBasilicadiSantaCroce(true)}
                            onMouseLeave={() => setIsHoveredBasilicadiSantaCroce(false)}
                            >Basilica di Santa Croce {isHoveredBasilicadiSantaCroce && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Firenze'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/toscana/firenze/basilica_di_santa_maria_del_carmine'
                            onMouseEnter={() => setIsHoveredBasilicadiSantaMariadelCarmine(true)}
                            onMouseLeave={() => setIsHoveredBasilicadiSantaMariadelCarmine(false)}
                            >Basilica di Santa Maria del Carmine {isHoveredBasilicadiSantaMariadelCarmine && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Firenze'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/toscana/firenze/cappelle_medicee'
                            onMouseEnter={() => setIsHoveredCappelleMedicee(true)}
                            onMouseLeave={() => setIsHoveredCappelleMedicee(false)}
                            >Cappelle Medicee {isHoveredCappelleMedicee && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Firenze'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/toscana/firenze/casa_di_dante'
                            onMouseEnter={() => setIsHoveredCasadiDante(true)}
                            onMouseLeave={() => setIsHoveredCasadiDante(false)}
                            >Casa di Dante {isHoveredCasadiDante && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Firenze'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/toscana/firenze/galleria_dell_accademia'
                            onMouseEnter={() => setIsHoveredGalleriadellAccademia(true)}
                            onMouseLeave={() => setIsHoveredGalleriadellAccademia(false)}
                            >Galleria dell'Accademia {isHoveredGalleriadellAccademia && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                </div>
            </main>
            <Footer/>
        </AuthenticatedLayout>
    )
}
