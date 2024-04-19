import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';

export default function Campobasso(props) {

    const [isHoveredCastelloMonforte, setIsHoveredCastelloMonforte] = useState(false);
    const [isHoveredMuseodeiMisteri, setIsHoveredMuseodeiMisteri] = useState(false);
    const [isHoveredMuseodiPalazzoPistilli, setIsHoveredMuseodiPalazzoPistilli] = useState(false);
    const [isHoveredMuseodellaScuolaedellEducazionePopolare, setIsHoveredMuseodellaScuolaedellEducazionePopolare] = useState(false);
    const [isHoveredMuseointernazionaledelPresepioinMiniatura, setIsHoveredMuseointernazionaledelPresepioinMiniatura] = useState(false);
    const [isHoveredMuseoSannitico, setIsHoveredMuseoSannitico] = useState(false);


    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='campobasso' style={{ position: 'relative' }}>
                    <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Campobasso</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Città</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Sul colle sopra <strong>Campobasso</strong>, il nome del massiccio <Link href='/visite/molise/campobasso/castello_monforte' className='text-decoration-none color_link'>Castello Monforte</Link> – capolista fra i luoghi da visitare per farsi un’idea della 
                        città – ricorda il capitano di ventura quattrocentesco Nicola Monforte, che all’epoca di un disastroso terremoto verso la metà del secolo governava la città con il titolo di conte. Fu sotto il suo governo che si cominciò la ricostruzione, non tanto 
                        diversamente da come altri fecero parecchio tempo dopo. Tre secoli e mezzo più tardi, un altro uomo d’armi divenuto sovrano, il re di Napoli Gioacchino Murat, avviò infatti la creazione di una nuova <strong>Campobasso</strong> sotto il castello: i 
                        quartieri di quella che oggi è nota come <b>Città Murattiana</b>.
                    </p>
                    <p>
                        Sul colle sopra Campobasso, il nome del massiccio Castello Monforte – capolista fra i luoghi da visitare per farsi un’idea della città – ricorda il capitano di ventura quattrocentesco Nicola Monforte, che all’epoca di un disastroso terremoto verso la 
                        metà del secolo governava la città con il titolo di conte. Fu sotto il suo governo che si cominciò la ricostruzione, non tanto diversamente da come altri fecero parecchio tempo dopo. Tre secoli e mezzo più tardi, un altro uomo d’armi divenuto sovrano, 
                        il re di Napoli Gioacchino Murat, avviò infatti la creazione di una nuova Campobasso sotto il castello: i quartieri di quella che oggi è nota come Città Murattiana.
                    </p>
                    <p>
                        Eppure, attraggono a Campobasso anche i segni di civiltà molto più antiche. Poco sotto il Castello è da vedere il <Link href='/visite/molise/campobasso/museo_sannitico' className='text-decoration-none color_link'>Museo Sannitico</Link> – altro punto di 
                        interesse turistico – che senza annoiare espone ordinatamente ambre, ceramiche, bronzi, avori e marmi dalla preistoria fino all’alto medioevo longobardo, passando per Sanniti e romanizzazione. Girando per le sale del museo viene voglia di andarsi a vedere 
                        di persona anche l’altro Molise da dove queste meraviglie arrivano, a partire da Bojano o dalla francamente straordinaria Sepino.
                    </p>
                </div>
                <div className='row d-flex justify-content-center mx-0 mb-4'>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Campobasso'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/molise/campobasso/castello_monforte'
                            onMouseEnter={() => setIsHoveredCastelloMonforte(true)}
                            onMouseLeave={() => setIsHoveredCastelloMonforte(false)}
                            >Castello Monforte {isHoveredCastelloMonforte && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Campobasso'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/molise/campobasso/museo_dei_misteri'
                            onMouseEnter={() => setIsHoveredMuseodeiMisteri(true)}
                            onMouseLeave={() => setIsHoveredMuseodeiMisteri(false)}
                            >Museo dei Misteri {isHoveredMuseodeiMisteri && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Campobasso'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/molise/campobasso/museo_di_palazzo_pistilli'
                            onMouseEnter={() => setIsHoveredMuseodiPalazzoPistilli(true)}
                            onMouseLeave={() => setIsHoveredMuseodiPalazzoPistilli(false)}
                            >Museo di Palazzo Pistilli {isHoveredMuseodiPalazzoPistilli && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Campobasso'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/molise/campobasso/museo_della_scuola_e_dell_educazione_popolare'
                            onMouseEnter={() => setIsHoveredMuseodellaScuolaedellEducazionePopolare(true)}
                            onMouseLeave={() => setIsHoveredMuseodellaScuolaedellEducazionePopolare(false)}
                            >Museo della Scuola e dell'Educazione... {isHoveredMuseodellaScuolaedellEducazionePopolare && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Campobasso'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/molise/campobasso/museo_internazione_del_pesepio_in_miniatura'
                            onMouseEnter={() => setIsHoveredMuseointernazionaledelPresepioinMiniatura(true)}
                            onMouseLeave={() => setIsHoveredMuseointernazionaledelPresepioinMiniatura(false)}
                            >Museo internazionale del Presepio in...{isHoveredMuseointernazionaledelPresepioinMiniatura && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Campobasso'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/molise/campobasso/museo_sannitico'
                            onMouseEnter={() => setIsHoveredMuseoSannitico(true)}
                            onMouseLeave={() => setIsHoveredMuseoSannitico(false)}
                            >Museo Sannitico {isHoveredMuseoSannitico && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                </div>
            </main>
            <Footer/>
        </AuthenticatedLayout>
    )
}
