import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';

export default function Cogne(props) {

    const [isHoveredChiesadiSantOrso, setIsHoveredChiesadiSantOrso] = useState(false);
    const [isHoveredCasadeiPizzi, setIsHoveredCasadeiPizzi] = useState(false);
    const [isHoveredTorredelVescovo, setIsHoveredTorredelVescovo] = useState(false);
    const [isHoveredLaGrandzePlaceCommune, setIsHoveredLaGrandzePlaceCommune] = useState(false);
    const [isHoveredPratodiSantOrso, setIsHoveredPratodiSantOrso] = useState(false);
    const [isHoveredFontanadiFerro, setIsHoveredFontanadiFerro] = useState(false);
    const [isHoveredCasadellOrologio, setIsHoveredCasadellOrologio] = useState(false);
    const [isHoveredPiazzaChanoux, setIsHoveredPiazzaChanoux] = useState(false);
    const [isHoveredMaisondeCogneGerardDayné, setIsHoveredMaisondeCogneGerardDayné] = useState(false);
    const [isHoveredAtelierdArtsetMétiers, setIsHoveredAtelierdArtsetMétiers] = useState(false);




    return (
        <>
            <Head title="Cogne"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='cogne' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Cogne</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Città</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            In posizione idilliaca (si trova a oltre 1500 metri in quota), circondata com’è dalle cime del <Link href='/visite/valle_d_aosta/parco_nazionale_del_gran_paradiso' className='text-decoration-none color_link'>Parco nazionale Gran Paradiso</Link>, <strong>Cogne</strong> è 
                            intrisa di storia, cultura e tradizioni. È stata residenza venatoria del re Vittorio Emanuele II, vanta una secolare tradizione artigiana testimoniata nei preziosi merletti al tombolo che si confezionano ancora, oltre a una ricca produzione vinicola e casearia.
                        </p>
                        <p>
                            Un passato che vale la pena di conoscere di persona, con una visita alla <Link href='/visite/valle_d_aosta/cogne/maison_de_cogne_gerard_deyné' className='text-decoration-none color_link'>Maison de Cogne Gerard Dayné – casa museo dalla complessa architettura in legno e 
                            pietra</Link>, rappresentativa dell'architettura rurale locale – e alla mostra permanente dello scultore Dorino Ouvrier, ospitata nell’<Link href='/visite/valle_d_aosta/cogne/atelier_d_arts_et_métiers' className='text-decoration-none color_link'>Atelier d’Arts et 
                            Métiers</Link> o magari gustando un caffè alla valdostana (fatto con caffè, grappa, zucchero e scorze d’arancia e limone) nella tipica coppa dell’amicizia, una sorta di recipiente di legno con vari becchi da cui ogni amico può prendere un sorso di caffè. E poi 
                            il borgo conserva bene il suo aspetto di villaggio montano, con le sue case dal tetto in ardesia, ma ha saputo convertirsi alla contemporaneità, offrendo strutture moderne e resort e Spa da mille e una notte. Insomma, una gemma, elegante e discreta, perfetto punto di 
                            appoggio per la scoperta del Parco.
                        </p>
                    </div>
                    <div className='row d-flex justify-content-center mx-0 mb-4'>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Cogne'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/visite/valle_d_aosta/cogne/chiesa_di_sant_orso'
                                onMouseEnter={() => setIsHoveredChiesadiSantOrso(true)}
                                onMouseLeave={() => setIsHoveredChiesadiSantOrso(false)}
                                >Chiesa di Sant’Orso {isHoveredChiesadiSantOrso && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Cogne'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/visite/valle_d_aosta/cogne/casa_dei_pizzi'
                                onMouseEnter={() => setIsHoveredCasadeiPizzi(true)}
                                onMouseLeave={() => setIsHoveredCasadeiPizzi(false)}
                                >Casa dei Pizzi {isHoveredCasadeiPizzi && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Cogne'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/visite/valle_d_aosta/cogne/torre_del_vescovo'
                                onMouseEnter={() => setIsHoveredTorredelVescovo(true)}
                                onMouseLeave={() => setIsHoveredTorredelVescovo(false)}
                                >Torre del Vescovo {isHoveredTorredelVescovo && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Cogne'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/visite/valle_d_aosta/cogne/la_grandze_place_commune'
                                onMouseEnter={() => setIsHoveredLaGrandzePlaceCommune(true)}
                                onMouseLeave={() => setIsHoveredLaGrandzePlaceCommune(false)}
                                >La Grandze Place Commune {isHoveredLaGrandzePlaceCommune && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Cogne'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/visite/valle_d_aosta/cogne/prato_di_sant_orso'
                                onMouseEnter={() => setIsHoveredPratodiSantOrso(true)}
                                onMouseLeave={() => setIsHoveredPratodiSantOrso(false)}
                                >Prato di Sant'Orso {isHoveredPratodiSantOrso && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Cogne'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/visite/valle_d_aosta/cogne/fontana_di_ferro'
                                onMouseEnter={() => setIsHoveredFontanadiFerro(true)}
                                onMouseLeave={() => setIsHoveredFontanadiFerro(false)}
                                >Fontana di Ferro {isHoveredFontanadiFerro && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Cogne'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/visite/valle_d_aosta/cogne/casa_dell_orologio'
                                onMouseEnter={() => setIsHoveredCasadellOrologio(true)}
                                onMouseLeave={() => setIsHoveredCasadellOrologio(false)}
                                >Casa dell'Orologio {isHoveredCasadellOrologio && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Cogne'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/visite/valle_d_aosta/cogne/piazza_chanoux'
                                onMouseEnter={() => setIsHoveredPiazzaChanoux(true)}
                                onMouseLeave={() => setIsHoveredPiazzaChanoux(false)}
                                >Piazza Chanoux {isHoveredPiazzaChanoux && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Cogne'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/visite/valle_d_aosta/cogne/maison_de_cogne_gerard_dayné'
                                onMouseEnter={() => setIsHoveredMaisondeCogneGerardDayné(true)}
                                onMouseLeave={() => setIsHoveredMaisondeCogneGerardDayné(false)}
                                >Maison de Cogne Gerard Dayné {isHoveredMaisondeCogneGerardDayné && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Cogne'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/visite/valle_d_aosta/cogne/atelier_d_arts_et_métiers'
                                onMouseEnter={() => setIsHoveredAtelierdArtsetMétiers(true)}
                                onMouseLeave={() => setIsHoveredAtelierdArtsetMétiers(false)}
                                >Atelier d’Arts et Métiers {isHoveredAtelierdArtsetMétiers && <i className="bi bi-chevron-right"></i>}
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
