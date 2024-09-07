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
                        <b>Città di forze in collisione</b>, <strong>Genova</strong> <b>sta dove è più forte l’attrito fra la terra e il mare</b> e ne possiede entrambe le anime. <b>Cosa 
                        vedere a Genova</b>, quando l’itinerario regala un tuffo nella sua <b>storia millenaria</b>, nello <b>sfarzo dorato delle architetture</b> e nell’autenticità 
                        popolare della vita che brulica dove le ombre dei caruggi sono più fitte? Impossibile dirlo con sicurezza. <b>Il centro storico di Genova</b>, con il 
                        suo <b>strabiliante patrimonio di architetture</b>, fa confluire tra la <b>Città Vecchia</b> e il suo <b>groviglio medievale impenetrabile</b> e i <b>capolavori 
                        rinascimentali delle ‘Strade Nuove’</b> la sua vera magia.
                    </p>
                    <h2 className='color-subtitle'>Posti particolari di Genova da scoprire</h2>
                    <p>
                        Le vie principali di Genova intersecano <b>fantasie ottocentesche</b> che convivono con il <b>razionalismo moderno</b>, mentre <b>Renzo Piano</b> ha fatto 
                        del <b>Porto Antico di Genova</b> l’icona contemporaneità. Città-porto, la <b>Superba</b> affascina per le sue contaminazioni e la sua capacità di trasformazione, 
                        sempre in grado di regalare al viaggiatore un volto diverso.
                    </p>
                    <p>
                        Affacciata sul <Link href='/mare/mar_ligure' className='text-decoration-none color_link'>Mar Ligure</Link>, è stata la capitale di una 
                        delle <Link href='/liguria/storia/repubbliche_marinare' className='text-decoration-none color_link'>repubbliche marinare</Link> dal 1099 al 1797, diventando una 
                        delle più grandi potenze navali del continente. Ancora oggi grande <b>centro economico</b>, <b>polo 
                        universitario</b>, <b>scientifico</b>, <b>culturale</b>, <b>musicale</b> e <b>artistico</b> di tutto rilievo, vanta un centro storico che si dipana tra gli 
                        incantevoli <b>caruggi</b>, gli stretti vicoli fiancheggiati dagli alti muri esterni delle case.
                    </p>
                    <p>
                        I <b>palazzi</b>, <b>le ville</b>, <b>i parchi e le fortificazioni</b> raccontano il fascino dell’<b>antica Repubblica marinara</b>.
                    </p>
                    <p>
                        Capitale del delizioso <Link href='/gastronomia/pesto_alla_genovese' className='text-decoration-none color_link'>pesto</Link> e del buon cibo, è sede di 
                        numerose <b>attività industriali</b>, ma anche di eventi turistici e fieristici tra i più importanti del Paese.
                    </p>
                    <p>
                        <b>Il porto</b> è tra i principali <b>scali mediterranei ed europei</b>.
                    </p>
                    <p>
                        I primi insediamenti sul territorio genovese risalgono all’<b>epoca preromana</b>: <b>Publio Cornelio Scipione</b> sfruttò questo approdo per affrontare 
                        l’invasione di <b>Annibale</b> nel <b>218 a.C.</b> e la città fu poi distrutta dai Cartaginesi nel <b>205</b>. Conquistata da <b>Belisario</b>, che la rese 
                        una <b>città bizantina</b>, in epoca longobarda diventò il capoluogo del <b>Ducato di Liguria</b>. Con la sua dissoluzione, presero il potere le principali 
                        famiglie genovesi.
                    </p>
                    <p>
                        L'autonomia di Genova arrivò nell’anno <b>1000</b>, quando la città diventò <b>potenza mercantile</b> con un dominio incontrastato su parte del Mediterraneo, 
                        insieme a <Link href='/destinazione/toscana/pisa' className='text-decoration-none color_link'>Pisa</Link>. Nel <b>1162</b> i contrasti tra <b>Federico 
                        Barbarossa</b> e Genova divennero infuocati, ma la forza con cui la città riuscì a difendere la sua indipendenza le valse il soprannome di <b>Superba</b>. 
                        Nella <b>battaglia della Meloria</b>, nel <b>1284</b>, la flotta della <b>Repubblica di Genova</b> indebolì quella della <b>Repubblica marinara di Pisa</b>. 
                        Dal <b>Trecento al Cinquecento</b> ci fu il periodo dei <b>Dogi</b> e la tradizione di Genova come <b>città di mercanti e banchieri</b> contribuì al suo 
                        fiorire <b>artistico e architettonico</b>, con la costruzione di molti <b>palazzi</b>, oggi <b>patrimonio UNESCO</b>.
                    </p>
                    <p>
                        La città, nel <b>Seicento</b>, fronteggiò le mire espansionistiche dei <b>Savoia</b> e, a fine secolo, allacciò rapporti politici e commerciali con 
                        la <b>Francia</b>.
                    </p>
                    <p>
                        Genova non fu risparmiata da <b>Napoleone Bonaparte</b> e dal suo dominio, ma, con la nascita dello <b>Stato italiano nel 1861</b>, riacquistò la sua egemonia 
                        entrando nel <b>triangolo industriale italiano</b> con <b>Milano</b> e <b>Torino</b>.
                    </p>
                    <p>
                        A causa della sua posizione centrale nella vita economica del Paese, fu presa di mira nella <Link href='/evento_storico/seconda_guerra_mondiale' 
                        className='text-decoration-none color_link'>Seconda Guerra Mondiale</Link> ed ebbe oltre <b>11.000 edifici distrutti o danneggiati</b>. Poi svolse un ruolo da 
                        protagonista nella <b>resistenza partigiana</b>. 
                    </p>
                    <p>
                        Dagli anni <b>2000</b> il <b>porto</b> è stato nuovamente valorizzato, e nel <b>2004</b> Genova è stata nominata <b>Capitale Europea della Cultura</b>.
                    </p>
                </div>
                <div className='row d-flex justify-content-center mx-0 mb-4'>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Genova'>
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
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Genova'>
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
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Genova'>
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
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Genova'>
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
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Genova'>
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
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Genova'>
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
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Genova'>
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
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Genova'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/genova/l_ascensore_castello_d_albertis_montegalletto'
                            onMouseEnter={() => setIsHoveredAscensoreCastello(true)}
                            onMouseLeave={() => setIsHoveredAscensoreCastello(false)}
                            >L'Ascensore Castello d'Albertis...{isHoveredAscensoreCastello && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Genova'>
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
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Genova'>
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
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Genova'>
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
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Genova'>
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
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Genova'>
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
