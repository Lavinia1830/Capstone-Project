import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';

export default function Roma(props) {

    const [isHoveredColosseo, setIsHoveredColosseo] = useState(false);
    const [isHoveredMuseoGalleriaBorghese, setIsHoveredMuseoGalleriaBorghese] = useState(false);
    const [isHoveredPantheon, setIsHoveredPantheon] = useState(false);
    const [isHoveredForoRomano, setIsHoveredForoRomano] = useState(false);
    const [isHoveredFontanadiTrevi, setIsHoveredFontanadiTrevi] = useState(false);
    const [isHoveredCastelSantAngelo, setIsHoveredCastelSantAngelo] = useState(false);
    const [isHoveredPiazzaVenezia, setIsHoveredPiazzaVenezia] = useState(false);
    const [isHoveredPiazzaNavona, setIsHoveredPiazzaNavona] = useState(false);
    const [isHoveredPiazzadiSpagna, setIsHoveredPiazzadiSpagna] = useState(false);
    const [isHoveredCircoMassimo, setIsHoveredCircoMassimo] = useState(false);
    const [isHoveredBoccadellaVerità, setIsHoveredBoccadellaVerità] = useState(false);
    const [isHoveredPiazzaSanPietro, setIsHoveredPiazzaSanPietro] = useState(false);
    /* const [isHoveredCappellaSistina, setIsHoveredCappellaSistina] = useState(false); */
    const [isHoveredCampidoglio, setIsHoveredCampidoglio] = useState(false);
    const [isHoveredIsolaTiberina, setIsHoveredIsolaTiberina] = useState(false);
    const [isHoveredTermediCaracalla, setIsHoveredTermediCaracalla] = useState(false);
    const [isHoveredQuirinale, setIsHoveredQuirinale] = useState(false);
    const [isHoveredVillaBorghese, setIsHoveredVillaBorghese] = useState(false);
    const [isHoveredParcoAppiaAntica, setIsHoveredParcoAppiaAntica] = useState(false);
    const [isHoveredFosseArdeatine, setIsHoveredFosseArdeatine] = useState(false);
    const [isHoveredGhetto, setIsHoveredGhetto] = useState(false);
    const [isHoveredMuseodellaLiberazione, setIsHoveredMuseodellaLiberazione] = useState(false);
    const [isHoveredPincio, setIsHoveredPincio] = useState(false);
    const [isHoveredParcodegliAcquedotti, setIsHoveredParcodegliAcquedotti] = useState(false);
    const [isHoveredCampodeiFiori, setIsHoveredCampodeiFiori] = useState(false);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='roma' style={{ position: 'relative' }}>
                    <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Roma</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Città</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        <strong>Roma</strong> indossa la sua monumentalità frutto di glorie passate senza timori reverenziali: i suoi resti archeologici sono aggirati da auto e scooter come se fossero semplici spartitraffico. La città è un continuo bombardamento di immagini e colori: Valentino, Bulgari o 
                        Dolce&Gabbana; eleganti signore con i capelli tinti del colore delle foglie in autunno; sacerdoti in tonaca che fumano un sigaro; ingorghi sotto le arcate di un antico acquedotto; vassoi di cibo in gastronomie e caffè; pini sinuosi accanto a edifici d’oro bruno; schieramenti di 
                        motorini in prima fila davanti al semaforo, in attesa di lanciarsi in quella che sembra una vera e propria gara. Un itinerario di Roma in 5 giorni vi farà scoprire in minima parte cosa può dare davvero, questa città. Ma scoprirla, anche fugacemente, vale sempre la pena. Persino le 
                        guide di Roma non possono fare a meno di essere piene di bellezza, quella stessa meraviglia che si ritrova in un passaggio nella Capitale.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className='color-subtitle'>Roma, informazioni per visitare la Città Eterna</h2>
                    <p>
                        Nella Capitale la cura degli aspetti estetici della vita si sposa con uno scenario urbano incredibile: a Roma ci si sente ’cool’ solo passeggiando per le sue vie e vicoli, facendosi baciare dal sole seduti a un tavolino di un caffè all’aperto o indulgendo a un pranzo che si protrae 
                        fino a metà pomeriggio. È un luogo che sembra incoraggiare tutti a prendersela comoda, a godersi la vita. Non ve la sentite di chiudervi in un museo? Che problema c’è, visto che le strade sono meglio di un libro di storia?
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Un viaggio a Roma vale sempre la pena</h2>
                    <p>
                        Vi servirà una guida, a <strong>Roma</strong>, che possa portarvi nei luoghi in cui scoprire quella vera. La gente qui sembra impersonare alla perfezione lo spirito che anima la città. Ci si siede ai tavolini dei bar del centro con grossi occhiali da sole a bere un espresso con tutta 
                        calma. Monache nella capitale della cristianità per il viaggio di una vita o in trasferta dalle Filippine attraversano di corsa la strada per andarsi a gustare un gelato. Le chiese si riempiono durante le messe dove i sacerdoti dai lunghi paramenti porpora, beige e rossi officiano di 
                        fronte a fedeli sempre più impazienti (e quasi sempre non di Roma).
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Viaggio a Roma, itinerario di bellezza</h2>
                    <p>
                        La <strong>Roma</strong> dei romani pulsa di vita propria. Una vita in cui ci si diverte, ci si cala nella storia, semplicemente si passeggia perdendosi nei vicoli di Trastevere o della Garbatella. Ci si torna ancora e ancora, senza mai sentirsene stanchi. Armatevi di una buona guida 
                        per visitare Roma prima di scoprirla di nuovo, così da rivederla con occhi nuovi e innamorarvene ancora.
                    </p>
                </div>
                <div className='row d-flex justify-content-center mx-0 mb-4'>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Roma'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/lazio/roma/colosseo'
                            onMouseEnter={() => setIsHoveredColosseo(true)}
                            onMouseLeave={() => setIsHoveredColosseo(false)}
                            >Colosseo {isHoveredColosseo && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Roma'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/lazio/roma/museo_e_galleria_borghese'
                            onMouseEnter={() => setIsHoveredMuseoGalleriaBorghese(true)}
                            onMouseLeave={() => setIsHoveredMuseoGalleriaBorghese(false)}
                            >Museo e Galleria Borghese {isHoveredMuseoGalleriaBorghese && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Roma'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/lazio/roma/pantheon'
                            onMouseEnter={() => setIsHoveredPantheon(true)}
                            onMouseLeave={() => setIsHoveredPantheon(false)}
                            >Pantheon {isHoveredPantheon && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Roma'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/lazio/roma/foro_romano'
                            onMouseEnter={() => setIsHoveredForoRomano(true)}
                            onMouseLeave={() => setIsHoveredForoRomano(false)}
                            >Foro Romano {isHoveredForoRomano && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Roma'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/lazio/roma/fontana_di_trevi'
                            onMouseEnter={() => setIsHoveredFontanadiTrevi(true)}
                            onMouseLeave={() => setIsHoveredFontanadiTrevi(false)}
                            >Fontana di Trevi {isHoveredFontanadiTrevi && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Roma'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/lazio/roma/castel_sant_angelo'
                            onMouseEnter={() => setIsHoveredCastelSantAngelo(true)}
                            onMouseLeave={() => setIsHoveredCastelSantAngelo(false)}
                            >Castel Sant'Angelo {isHoveredCastelSantAngelo && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Roma'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/lazio/roma/piazza_venezia'
                            onMouseEnter={() => setIsHoveredPiazzaVenezia(true)}
                            onMouseLeave={() => setIsHoveredPiazzaVenezia(false)}
                            >Piazza Venezia {isHoveredPiazzaVenezia && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Roma'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/lazio/roma/piazza_navona'
                            onMouseEnter={() => setIsHoveredPiazzaNavona(true)}
                            onMouseLeave={() => setIsHoveredPiazzaNavona(false)}
                            >Piazza Navona {isHoveredPiazzaNavona && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Roma'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/lazio/roma/piazza_di_spagna'
                            onMouseEnter={() => setIsHoveredPiazzadiSpagna(true)}
                            onMouseLeave={() => setIsHoveredPiazzadiSpagna(false)}
                            >Piazza di Spagna {isHoveredPiazzadiSpagna && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Roma'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/lazio/roma/circo_massimo'
                            onMouseEnter={() => setIsHoveredCircoMassimo(true)}
                            onMouseLeave={() => setIsHoveredCircoMassimo(false)}
                            >Circo Massimo {isHoveredCircoMassimo && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Roma'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/lazio/roma/bocca_della_verità'
                            onMouseEnter={() => setIsHoveredBoccadellaVerità(true)}
                            onMouseLeave={() => setIsHoveredBoccadellaVerità(false)}
                            >Bocca della Verità {isHoveredBoccadellaVerità && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Roma'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/lazio/roma/piazza_san_pietro'
                            onMouseEnter={() => setIsHoveredPiazzaSanPietro(true)}
                            onMouseLeave={() => setIsHoveredPiazzaSanPietro(false)}
                            >Piazza San Pietro {isHoveredPiazzaSanPietro && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card> 
                    {/*<Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Roma'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/lazio/roma/cappella_sistina'
                            onMouseEnter={() => setIsHoveredCappellaSistina(true)}
                            onMouseLeave={() => setIsHoveredCappellaSistina(false)}
                            >Cappella Sistina {isHoveredCappellaSistina && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card> */}
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Roma'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/lazio/roma/campidoglio'
                            onMouseEnter={() => setIsHoveredCampidoglio(true)}
                            onMouseLeave={() => setIsHoveredCampidoglio(false)}
                            >Campidoglio {isHoveredCampidoglio && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Roma'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/lazio/roma/isola_tiberina'
                            onMouseEnter={() => setIsHoveredIsolaTiberina(true)}
                            onMouseLeave={() => setIsHoveredIsolaTiberina(false)}
                            >Isola Tiberina {isHoveredIsolaTiberina && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Roma'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/lazio/roma/terme_di_caracalla'
                            onMouseEnter={() => setIsHoveredTermediCaracalla(true)}
                            onMouseLeave={() => setIsHoveredTermediCaracalla(false)}
                            >Terme di Caracalla {isHoveredTermediCaracalla && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Roma'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/lazio/roma/quirinale'
                            onMouseEnter={() => setIsHoveredQuirinale(true)}
                            onMouseLeave={() => setIsHoveredQuirinale(false)}
                            >Quirinale {isHoveredQuirinale && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Roma'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/lazio/roma/villa_borghese'
                            onMouseEnter={() => setIsHoveredVillaBorghese(true)}
                            onMouseLeave={() => setIsHoveredVillaBorghese(false)}
                            >Villa Borghese {isHoveredVillaBorghese && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Roma'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/lazio/roma/parco_appia_antica'
                            onMouseEnter={() => setIsHoveredParcoAppiaAntica(true)}
                            onMouseLeave={() => setIsHoveredParcoAppiaAntica(false)}
                            >Parco Appia Antica {isHoveredParcoAppiaAntica && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Roma'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/lazio/roma/fosse_ardeatine'
                            onMouseEnter={() => setIsHoveredFosseArdeatine(true)}
                            onMouseLeave={() => setIsHoveredFosseArdeatine(false)}
                            >Fosse Ardeatine {isHoveredFosseArdeatine && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Roma'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/lazio/roma/getto'
                            onMouseEnter={() => setIsHoveredGhetto(true)}
                            onMouseLeave={() => setIsHoveredGhetto(false)}
                            >Ghetto {isHoveredGhetto && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Roma'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/lazio/roma/museo_della_liberazione'
                            onMouseEnter={() => setIsHoveredMuseodellaLiberazione(true)}
                            onMouseLeave={() => setIsHoveredMuseodellaLiberazione(false)}
                            >Museo della Liberazione {isHoveredMuseodellaLiberazione && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Roma'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/lazio/roma/pincio'
                            onMouseEnter={() => setIsHoveredPincio(true)}
                            onMouseLeave={() => setIsHoveredPincio(false)}
                            >Pincio {isHoveredPincio && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Roma'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/lazio/roma/parco_degli_acquedotti'
                            onMouseEnter={() => setIsHoveredParcodegliAcquedotti(true)}
                            onMouseLeave={() => setIsHoveredParcodegliAcquedotti(false)}
                            >Parco degli Acquedotti {isHoveredParcodegliAcquedotti && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Roma'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/lazio/roma/campo_dei_fiori'
                            onMouseEnter={() => setIsHoveredCampodeiFiori(true)}
                            onMouseLeave={() => setIsHoveredCampodeiFiori(false)}
                            >Campodei Fiori {isHoveredParcodegliAcquedotti && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                </div>
            </main>
            <Footer/>
        </AuthenticatedLayout>
    )
}
