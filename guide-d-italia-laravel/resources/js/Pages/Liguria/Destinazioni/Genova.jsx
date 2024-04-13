import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';

export default function Genova(props) {

    const [isHoveredAcquarioGenova, setIsHoveredAcquarioGenova] = useState(false);
    const [isHoveredLanternaGenova, setIsHoveredLanternaGenova] = useState(false);
    const [isHoveredMuseoPalazzoReale, setIsHoveredMuseoPalazzoReale] = useState(false);
    const [isHoveredPalazzoDucale, setIsHoveredPalazzoDucale] = useState(false);
    const [isHoveredVillaDucato, setIsHoveredVillaDucato] = useState(false);
    const [isHoveredCimiteroMonumentale, setIsHoveredCimiteroMonumentale] = useState(false);
    const [isHoveredPalazzoMeridiana, setIsHoveredPalazzoMeridiana] = useState(false);
    const [isHoveredAscensoreCastello, setIsHoveredAscensoreCastello] = useState(false);
    const [isHoveredTruogoli, setIsHoveredTruogoli] = useState(false);
    const [isHoveredQuartiereCarmine, setIsHoveredQuartiereCarmine] = useState(false);
    const [isHoveredAscensoreCastelletto, setIsHoveredAscensoreCastelletto] = useState(false);
    const [isHoveredPortoAntico, setIsHoveredPortoAntico] = useState(false);
    const [isHoveredChiesaGesu, setIsHoveredChiesaGesu] = useState(false);

  return (
    <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        >
            <main>
                <div className='genova' style={{ position: 'relative' }}>
                    <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Genova</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Città</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Città di forze in collisione, <strong>Genova</strong> sta dove è più forte l’attrito fra la terra e il mare e ne possiede entrambe le anime. Cosa vedere a Genova, quando l’itinerario regala un tuffo nella sua storia millenaria, nello sfarzo dorato delle architetture e nell’autenticità popolare della vita 
                        che brulica dove le ombre dei caruggi sono più fitte? Impossibile dirlo con sicurezza. Il centro storico di Genova, con il suo strabiliante patrimonio di architetture, fa confluire tra la Città Vecchia e il suo groviglio medievale impenetrabile e i capolavori rinascimentali delle ‘Strade Nuove’ la sua 
                        vera magia.
                    </p>
                    <h2 className='color-subtitle'>Posti particolari di Genova da scoprire</h2>
                    <p>
                        Le vie principali di Genova intersecano fantasie ottocentesche che convivono con il razionalismo moderno, mentre Renzo Piano ha fatto del Porto Antico di Genova l’icona contemporaneità. Città-porto, la Superba affascina per le sue contaminazioni e la sua capacità di trasformazione, sempre in grado di 
                        regalare al viaggiatore un volto diverso.
                    </p>
                    <p>
                        Affacciata sul Mar Ligure, è stata la capitale di una delle repubbliche marinare dal 1099 al 1797, diventando una delle più grandi potenze navali del continente. Ancora oggi grande centro economico, polo universitario, scientifico, culturale, musicale e artistico di tutto rilievo, vanta un centro storico 
                        che si dipana tra gli incantevoli caruggi, gli stretti vicoli fiancheggiati dagli alti muri esterni delle case.
                    </p>
                    <p>
                        I palazzi, le ville, i parchi e le fortificazioni raccontano il fascino dell’antica Repubblica marinara.
                    </p>
                    <p>
                        Capitale del delizioso pesto e del buon cibo, è sede di numerose attività industriali, ma anche di eventi turistici e fieristici tra i più importanti del Paese.
                    </p>
                    <p>
                        <b>Il porto</b> è tra i principali scali mediterranei ed europei.
                    </p>
                    <p>
                        I primi insediamenti sul territorio genovese risalgono all’epoca preromana: Publio Cornelio Scipione sfruttò questo approdo per affrontare l’invasione di Annibale nel 218 a.C. e la città fu poi distrutta dai Cartaginesi nel 205. Conquistata da Belisario, che la rese una città bizantina, in epoca longobarda 
                        diventò il capoluogo del Ducato di Liguria. Con la sua dissoluzione, presero il potere le principali famiglie genovesi.
                    </p>
                    <p>
                        L'autonomia di Genova arrivò nell’anno 1000, quando la città diventò potenza mercantile con un dominio incontrastato su parte del Mediterraneo, insieme a Pisa. Nel 1162 i <b>contrasti tra Federico Barbarossa e Genova</b> divennero infuocati, ma la forza con cui la città riuscì a difendere la sua indipendenza 
                        le valse il soprannome di Superba. Nella <b>battaglia della Meloria</b>, nel 1284, la flotta della Repubblica di Genova indebolì quella della Repubblica marinara di Pisa. Dal Trecento al Cinquecento ci fu il periodo dei Dogi e la tradizione di Genova come <b>città di mercanti e banchieri</b> contribuì al suo 
                        fiorire artistico e architettonico, con la costruzione di molti <b>palazzi</b>, oggi <b>patrimonio UNESCO</b>.
                    </p>
                    <p>
                        La città, nel Seicento, fronteggiò le mire espansionistiche dei Savoia e, a fine secolo, allacciò rapporti politici e commerciali con la Francia.
                    </p>
                    <p>
                        Genova non fu risparmiata da Napoleone Bonaparte e dal suo dominio, ma, con la nascita dello Stato italiano nel 1861, riacquistò la sua egemonia entrando nel triangolo industriale italiano con Milano e Torino.
                    </p>
                    <p>
                        A causa della sua posizione centrale nella vita economica del Paese, fu presa di mira nella Seconda Guerra Mondiale ed ebbe oltre 11.000 edifici distrutti o danneggiati. Poi svolse un ruolo da protagonista nella resistenza partigiana. 
                    </p>
                    <p>
                        Dagli anni 2000 il porto è stato nuovamente valorizzato, e nel 2004 Genova è stata nominata Capitale Europea della Cultura.
                    </p>
                </div>
                <div className='row d-flex justify-content-center mx-0 mb-4'>
                    <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_Genova'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/genova/acquario_di_genova'
                            onMouseEnter={() => setIsHoveredAcquarioGenova(true)}
                            onMouseLeave={() => setIsHoveredAcquarioGenova(false)}
                            >L'Acquario di Genova {isHoveredAcquarioGenova && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_Genova'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/genova/lanterna_di_genova'
                            onMouseEnter={() => setIsHoveredLanternaGenova(true)}
                            onMouseLeave={() => setIsHoveredLanternaGenova(false)}
                            >Lanterna di Genova {isHoveredLanternaGenova && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_Genova'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/genova/museo_di_palazzo_reale'
                            onMouseEnter={() => setIsHoveredMuseoPalazzoReale(true)}
                            onMouseLeave={() => setIsHoveredMuseoPalazzoReale(false)}
                            >Museo di Palazzo Reale {isHoveredMuseoPalazzoReale && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_Genova'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/genova/palazzo_ducale_di_genova'
                            onMouseEnter={() => setIsHoveredPalazzoDucale(true)}
                            onMouseLeave={() => setIsHoveredPalazzoDucale(false)}
                            >Palazzo Ducale di Genova{isHoveredPalazzoDucale && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_Genova'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/genova/villa_durazzo_pallavicini'
                            onMouseEnter={() => setIsHoveredVillaDucato(true)}
                            onMouseLeave={() => setIsHoveredVillaDucato(false)}
                            >Villa Durazzo Pallavicini{isHoveredVillaDucato && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_Genova'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/genova/cimitero_monumentale_di_staglieno'
                            onMouseEnter={() => setIsHoveredCimiteroMonumentale(true)}
                            onMouseLeave={() => setIsHoveredCimiteroMonumentale(false)}
                            >Cimitero Monumentale di Staglieno{isHoveredCimiteroMonumentale && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_Genova'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/genova/palazzo_della_meridiana_di_genova'
                            onMouseEnter={() => setIsHoveredPalazzoMeridiana(true)}
                            onMouseLeave={() => setIsHoveredPalazzoMeridiana(false)}
                            >Palazzo della Meridiana di Genova{isHoveredPalazzoMeridiana && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_Genova'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/genova/l_ascensore_castello_d_albertis_montegalletto'
                            onMouseEnter={() => setIsHoveredAscensoreCastello(true)}
                            onMouseLeave={() => setIsHoveredAscensoreCastello(false)}
                            >L'Ascensore Castello d'Albertis-Montegalletto{isHoveredAscensoreCastello && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_Genova'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/genova/truogoli_di_santa_brigida'
                            onMouseEnter={() => setIsHoveredTruogoli(true)}
                            onMouseLeave={() => setIsHoveredTruogoli(false)}
                            >Truogoli di Santa Brigida{isHoveredTruogoli && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_Genova'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/genova/quartiere_del_carmine'
                            onMouseEnter={() => setIsHoveredQuartiereCarmine(true)}
                            onMouseLeave={() => setIsHoveredQuartiereCarmine(false)}
                            >Quartiere del Carmine{isHoveredQuartiereCarmine && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_Genova'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/genova/ascensore_spianata_castelletto'
                            onMouseEnter={() => setIsHoveredAscensoreCastelletto(true)}
                            onMouseLeave={() => setIsHoveredAscensoreCastelletto(false)}
                            >Ascensore Spianata Castelletto{isHoveredAscensoreCastelletto && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_Genova'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/genova/porto_antico_di_genova'
                            onMouseEnter={() => setIsHoveredPortoAntico(true)}
                            onMouseLeave={() => setIsHoveredPortoAntico(false)}
                            >Porto Antico di Genova{isHoveredPortoAntico && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_Genova'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/genova/chiesa_del_gesu'
                            onMouseEnter={() => setIsHoveredChiesaGesu(true)}
                            onMouseLeave={() => setIsHoveredChiesaGesu(false)}
                            >Chiesa del Gesù{isHoveredChiesaGesu && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                </div>
            </main>
            <Footer/>
        </AuthenticatedLayout>
    )
}
