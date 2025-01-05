import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';
import Footer from '@/Components/Footer';

export default function Trento(props) {

    const [isHoveredCastellodelBuonconsiglio, setIsHoveredCastellodelBuonconsiglio] = useState(false);
    const [isHoveredTridentum, setIsHoveredTridentum] = useState(false);
    const [isHoveredMuseoDiocesanoTridentino, setIsHoveredMuseoDiocesanoTridentino] = useState(false);
    const [isHoveredMUSE, setIsHoveredMUSE] = useState(false);
    const [isHoveredPiazzadelDuomo, setIsHoveredPiazzadelDuomo] = useState(false);
    const [isHoveredCappelladelCrocifisso, setIsHoveredCappelladelCrocifisso] = useState(false);
    const [isHoveredConcilio, setIsHoveredConcilio] = useState(false);
    const [isHoveredPalazzoCazzuffi, setIsHoveredPalazzoCazzuffi] = useState(false);
    const [isHoveredTorreCivica, setIsHoveredTorreCivica] = useState(false);
    const [isHoveredFontanadiNettuno, setIsHoveredFontanadiNettuno] = useState(false);
    const [isHoveredLagodiGarda, setIsHoveredLagodiGarda] = useState(false);
    const [isHoveredMonteBondone, setIsHoveredMonteBondone] = useState(false);
    const [isHoveredFiumeAdige, setIsHoveredFiumeAdige] = useState(false);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='trento' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Trento</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Città</p>
                </div>
                <div className='margin mt-3'>
                    <p>
                        La <b>città capoluogo del Trentino</b>, ca. 118.200 abitanti, ha conosciuto una storia movimentata. Fondata dalle popolazioni celtiche fu presa dai romani e nominata "<b>Tridentum</b>". Nel 1004 l'Imperatore Enrico II trasferì il potere al principato vescovile. Nonostante diverse 
                        rivolte popolari, il potere dei vescovi si mantenne fino all'arrivo delle truppe napoleoniche nel 1796. La successiva dominazione austro-ungarica realizzò diverse opere infrastrutturali come la regolazione del fiume Adige e la costruzione della linea ferroviaria del Brennero, 
                        interventi che permisero di dare una forte accelerazione allo sviluppo moderno della città. L'autonomia speciale ha contribuito a rendere Trento un importante centro amministrativo e commerciale. Inoltre, è diventata la sede dell'Università trentina, che si è guadagnata una posizione 
                        di eccellenza in molti campi dell'alto insegnamento e della ricerca.
                    </p>
                    <p>
                        Gli <b>affreschi presenti su diversi palazzi del centro storico</b> raccontano la storia attraverso raffigurazioni mitologiche, il viaggio degli imperatori germanici verso Roma e il concilio del 1545, l'arcivescovato che per secoli determinò le sorti delle popolazioni della vallata.
                    </p>
                    <p>
                        Trento è una città che ha molto da offrire: non solo monumenti, palazzi e castelli ricchi di storia, ma anche un'atmosfera rilassante, cultura e specialità gastronomiche. A molti turisti sfuggono le particolarità della città perché hanno semplicemente troppa fretta di correre in vetta 
                        alle montagne e non si prendono il tempo per esplorarla. La varietà di monumenti e musei è grande, l'elenco seguente non è perciò da considerarsi completo: <Link href='/visite/trento/castello_del_buonconsiglio' className='text-decoration-none color_link'>Castello del Buonconsiglio</Link>, 
                        la chiesa di S. Maria Maggiore, Piazza del Duomo con la Cattedrale di San Vigilio, Palazzo Pretorio e la fontana di Nettuno, la chiesa di S. Apollinare, la chiesa di San Lorenzo, il monumento a Dante Alighieri, il Museo Diocesano Tridentino, il Museo delle Scienze Naturali, il Museo 
                        dell'Aeronautica, il Museo degli Alpini...
                    </p>
                </div>
                <div className='row d-flex justify-content-center mx-0 mb-4'>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Trento'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/trento/castello_del_buonconsiglio'
                            onMouseEnter={() => setIsHoveredCastellodelBuonconsiglio(true)}
                            onMouseLeave={() => setIsHoveredCastellodelBuonconsiglio(false)}
                            >Castello del Buonconsiglio {isHoveredCastellodelBuonconsiglio && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Trento'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/trento/tridentum'
                            onMouseEnter={() => setIsHoveredTridentum(true)}
                            onMouseLeave={() => setIsHoveredTridentum(false)}
                            >Tridentum {isHoveredTridentum && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Trento'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/trento/museo_diocesano_tridentino'
                            onMouseEnter={() => setIsHoveredMuseoDiocesanoTridentino(true)}
                            onMouseLeave={() => setIsHoveredMuseoDiocesanoTridentino(false)}
                            >Museo Diocesano Tridentino {isHoveredMuseoDiocesanoTridentino && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Trento'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/trento/museo_delle_scienze'
                            onMouseEnter={() => setIsHoveredMUSE(true)}
                            onMouseLeave={() => setIsHoveredMUSE(false)}
                            >MUSE - Museo delle Scienze {isHoveredMUSE && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Trento'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/trento/piazza_del_duomo'
                            onMouseEnter={() => setIsHoveredPiazzadelDuomo(true)}
                            onMouseLeave={() => setIsHoveredPiazzadelDuomo(false)}
                            >Piazza del Duomo {isHoveredPiazzadelDuomo && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Trento'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/trento/cappella_del_crocifisso'
                            onMouseEnter={() => setIsHoveredCappelladelCrocifisso(true)}
                            onMouseLeave={() => setIsHoveredCappelladelCrocifisso(false)}
                            >Cappella del Crocifisso {isHoveredCappelladelCrocifisso && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Trento'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/trento/concilio'
                            onMouseEnter={() => setIsHoveredConcilio(true)}
                            onMouseLeave={() => setIsHoveredConcilio(false)}
                            >Concilio {isHoveredConcilio && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Trento'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/trento/palazzo_cazuffi'
                            onMouseEnter={() => setIsHoveredPalazzoCazzuffi(true)}
                            onMouseLeave={() => setIsHoveredPalazzoCazzuffi(false)}
                            >Palazzo Cazzuffi {isHoveredPalazzoCazzuffi && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Trento'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/trento/torre_civica'
                            onMouseEnter={() => setIsHoveredTorreCivica(true)}
                            onMouseLeave={() => setIsHoveredTorreCivica(false)}
                            >Torre Civica {isHoveredTorreCivica && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Trento'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/trento/fontana_di_nettuno'
                            onMouseEnter={() => setIsHoveredFontanadiNettuno(true)}
                            onMouseLeave={() => setIsHoveredFontanadiNettuno(false)}
                            >Fontana di Nettuno {isHoveredFontanadiNettuno && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Trento'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/laghi/lago_di_garda'
                            onMouseEnter={() => setIsHoveredLagodiGarda(true)}
                            onMouseLeave={() => setIsHoveredLagodiGarda(false)}
                            >Lago di Garda {isHoveredLagodiGarda && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Trento'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/montagna/monte_bondone'
                            onMouseEnter={() => setIsHoveredMonteBondone(true)}
                            onMouseLeave={() => setIsHoveredMonteBondone(false)}
                            >Monte Bondone {isHoveredMonteBondone && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Trento'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/fiumi/fiume_adige'
                            onMouseEnter={() => setIsHoveredFiumeAdige(true)}
                            onMouseLeave={() => setIsHoveredFiumeAdige(false)}
                            >Fiume Adige {isHoveredFiumeAdige && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                </div>
            </main>
            <Footer/>
        </AuthenticatedLayout>
    )
}
