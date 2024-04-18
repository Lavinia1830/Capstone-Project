import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';

export default function Catanzaro(props) {

    const [isHoveredDuomodiCatanzaro, setIsHoveredDuomodiCatanzaro] = useState(false);
    const [isHoveredBasilicadellImmacolata, setIsHoveredBasilicadellImmacolata] = useState(false);
    const [isHoveredPonteBisantis, setIsHoveredPonteBisantis] = useState(false);
    const [isHoveredComplessoMonumentaleSanGiovanni, setIsHoveredComplessoMonumentaleSanGiovanni] = useState(false);
    const [isHoveredTeatroPoliteama, setIsHoveredTeatroPoliteama] = useState(false);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='catanzaro' style={{ position: 'relative' }}>
                    <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Catanzaro</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Città</p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Un territorio da esplorare tra mare, spiagge e l’altopiano della Sila</h2>
                    <p>
                        La <b>provincia di Catanzaro</b>, bagnata da un lato dal Mar Ionio e dall'altra dal Mar Tirreno, è pronta ad accogliere visitatori tutti i giorni dell'anno. Tra la primavera e l'estate la costa ionica è tra le mete preferite dagli amanti del 
                        mare e del caldo, mentre d'inverno l'<b>altopiano della</b> <Link href='/montagna/calabria/cosenza/parco_nazionale_della_sila' className='text-decoration-none color_link'>Sila</Link> diventa un'importante stazione sciistica con piste di diverse 
                        difficoltà, impianti di risalita e ottime scuole per imparare a muovere i primi passi sulla neve.
                    </p>
                    <p>
                        La città di <strong>Catanzaro</strong> è ricca di punti di interesse, da monumenti come il <Link href='/visite/calabria/catanzaro/duomo_di_catanzaro' className='text-decoration-none color_link'>Duomo</Link>, la <Link 
                        href='/visite/calambria/catanzaro/basilica_dell_immacolata' className='text-decoration-none color_link'>Basilica dell'Immacolata</Link> e la <Link href='/visite/calabria/catanzaro/castello_normanno' className='text-decoration-none color_link'>Castello 
                        Normanno</Link> a luoghi in cui rilassarsi come i giardini di <b>Villa Trieste</b> e il Belvedere da cui si può godere di una vista unica sulla valle della <b>Fiumarella</b> e sul <b>Golfo di Squillace</b>.
                        Nella parte meridionale della baia troverete invece <b>Soverato</b>, le cui spiagge dalla sabbia bianca e i fondali bassi la rendono una delle località balneari più famose di tutta la <Link href='/calabria' className='text-decoration-none 
                        color_link'>Calabria</Link>. Se preferite fare un salto indietro nel tempo, non potete perdere il <b>sito archeologico di Scolacium</b>, coi resti dell'abitato preromano di Skylletion.
                    </p>
                    <p>
                        Alle pendici della Sila sorge il piccolo borgo di <b>Belcastro</b>, eretto su uno sperone ai piedi del castello dei Conti d'Aquino, oggi ridotto a ruderi che meritano di essere visitati mentre si va alla scoperta del territorio e delle 
                        prelibatezze della cucina locale.
                    </p>
                </div>
                <div className='row d-flex justify-content-center mx-0 mb-4'>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Catanzaro'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/calabria/catanzaro/duomo_di_catanzaro'
                            onMouseEnter={() => setIsHoveredDuomodiCatanzaro(true)}
                            onMouseLeave={() => setIsHoveredDuomodiCatanzaro(false)}
                            >Duomo {isHoveredDuomodiCatanzaro && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Catanzaro'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/calabria/catanzaro/basilica_dell_immacolata'
                            onMouseEnter={() => setIsHoveredBasilicadellImmacolata(true)}
                            onMouseLeave={() => setIsHoveredBasilicadellImmacolata(false)}
                            >Basilica dell'Immacolata {isHoveredBasilicadellImmacolata && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Catanzaro'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/calabria/catanzaro/ponte_bisantis'
                            onMouseEnter={() => setIsHoveredPonteBisantis(true)}
                            onMouseLeave={() => setIsHoveredPonteBisantis(false)}
                            >Ponte Bisantis {isHoveredPonteBisantis && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Catanzaro'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/calabria/catanzaro/complesso_monumentale_san_giovanni'
                            onMouseEnter={() => setIsHoveredComplessoMonumentaleSanGiovanni(true)}
                            onMouseLeave={() => setIsHoveredComplessoMonumentaleSanGiovanni(false)}
                            >Complesso monumentale San Giovanni {isHoveredComplessoMonumentaleSanGiovanni && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Catanzaro'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/calabria/catanzaro/teatro_politeama'
                            onMouseEnter={() => setIsHoveredTeatroPoliteama(true)}
                            onMouseLeave={() => setIsHoveredTeatroPoliteama(false)}
                            >Teatro Politeama {isHoveredTeatroPoliteama && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                </div>
            </main>
            <Footer/>
        </AuthenticatedLayout>
    )
}
