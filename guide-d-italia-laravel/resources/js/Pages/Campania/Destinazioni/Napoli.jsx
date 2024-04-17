import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';

export default function Napoli(props) {

    const [isHoveredDuomo, setIsHoveredDuomo] = useState(false);
    const [isHoveredPiazzadelPlebiscito, setIsHoveredPiazzadelPlebiscito] = useState(false);
    const [isHoveredBasilicadiSantaChiara, setIsHoveredBasilicadiSantaChiara] = useState(false);
    const [isHoveredPalazzoReale, setIsHoveredPalazzoReale] = useState(false);
    const [isHoveredBasilicadiSanLorenzoMaggiore, setIsHoveredBasilicadiSanLorenzoMaggiore] = useState(false);
    const [isHoveredTeatroSanCarlo, setIsHoveredTeatroSanCarlo] = useState(false);
    const [isHoveredGalleriaUmbertoI, setIsHoveredGalleriaUmbertoI] = useState(false);
    const [isHoveredCastelNuovo, setIsHoveredCastelNuovo] = useState(false);
    const [isHoveredCasteldellOvo, setIsHoveredCasteldellOvo] = useState(false);
    const [isHoveredVesuvio, setIsHoveredVesuvio] = useState(false);
    const [isHoveredCatacombediSanGennaro, setIsHoveredCatacombediSanGennaro] = useState(false);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='napoli' style={{ position: 'relative' }}>
                    <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Napoli</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Città</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Gli itinerari di <strong>Napoli</strong> si perdono tra le vie strette, fra il sonnecchiante <b>Vesuvio</b> e i fumanti <b>Campi Flegrei</b>. l’Italia, a Napoli, è una chiassosa baraonda di contraddizioni. Vulcanica, voluttuosa e colma voglia di vivere, 
                        Napoli emana il fascino irresistibile di una città a cui gli estremi sembrano piacere molto: vie sporche incrociano viali ombreggiati da palme, facciate fatiscenti nascondono saloni barocchi e santuari e cappelle affiancano locali alla moda. A volte 
                        sembra di essere nella polverosa Tangeri, a volte nell’elegante Parigi. Poche città europee risultano così stimolanti e inebrianti, e poche sono altrettanto incomprese. Le guide di Napoli anticipano tutto questo, come un profumo di un piatto invitante, 
                        come un canto di sirena. Da non perdere a Napoli? Tutto di questa città si deve guardare, fare, annusare. Garantito.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Storia e curiosità su Napoli</h2>
                    <p>
                        La <b>Napoli greco-romana</b>, fondata dai cumani nell'ottavo secolo a.C., divenne una delle città più importanti della Magna Grecia, prima di essere conquistata dai Romani nel 326 a.C.. Agli albori del Medioevo fu conquistata invece dai bizantini e 
                        grazie alla nobiltà locale riuscì a trasformarsi nel Ducato di Napoli, uno stato autonomo che resse per oltre cinque secoli, fino all'invasione dei normanni nel 1139.
                    </p>
                    <p>
                        Nel 1266, in seguito alla vittoria di Carlo I d'Angiò su Manfredi di Svezia, diventò angioina e nel 1282 fu eletta capitale del Regno di Napoli, diventando uno dei centri culturali più influenti d'Europa. Uno status che mantenne anche nel suo periodo 
                        ragonese e accrebbe con l'arrivo dei Borboni nel 1734, che le restituì la sua indipendenza rendendola una grande città europea, culturalmente evoluta e raffinatissima.
                    </p>
                    <p>
                        Anche Napoleone arrivò a Napoli e nel 1799 venne istituita per qualche mese la Repubblica Partenopea. Con la Restaurazione divenne capitale del Regno delle Due Sicilie fino all'Unità d'Italia. Nel corso del 1900 Napoli subì duramente le conseguenze delle 
                        due guerre mondiali.
                    </p>
                </div>
                <div className='margin mt-3'>
                    <h2 className="color-subtitle">Napoli da non perdere: luoghi, mete, destinazioni</h2>
                    <p>
                        Le prime informazioni su Napoli, così come la prima impressione, si hanno uscendo dalla Stazione Centrale in Piazza Garibaldi: ci si sentirà come a Tangeri ma anche Parigi, visto il traffico convulso, le bancarelle e i venditori africani dalla parlantina 
                        sciolta. Cercate di andare oltre l’apparenza per scoprire una metropoli raffinata, erudita e piena di sentimento. In una guida per visitare Napoli non può mancare l’itinerario da sud e a sud-ovest che si allarga il quartiere Mercato: è un concentrato di 
                        mercati improvvisati, multiculturalismo e povertà. Pochi isolati a ovest di Piazza Garibaldi inizia il Centro storico: fitto, scuro e inebriante, le sue antiche vie pullulano di turisti, scooter, cappelle votive e tesori nascosti. Alla periferia occidentale 
                        Via Toledo, gremita di negozi, si estende da Piazza Trieste e Trento a sud fino a Piazza Dante a nord. A ovest si allargano le vie dei Quartieri Spagnoli, adorni con festoni di panni stesi.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">La mappa turistica di Napoli è uno snodo di sensazioni</h2>
                    <p>
                        Proseguite a sud di Via Toledo, prima del quartiere Santa Lucia, la maestosa Piazza del Plebiscito, il Palazzo Reale e il grandioso Teatro San Carlo. Poco distante si trova Castel Nuovo (Maschio Angioino), che torreggia su Piazza Municipio simile a un 
                        gigantesco castello giocattolo. Muto spettatore della vita che si svolge ai suoi piedi, il quartiere borghese del Vomero è una zona verde con splendide ville liberty, anonimi condomini e la mole di Castel Sant’Elmo. A ovest di Piazza del Plebiscito, Chiaia 
                        è un quartiere elegante di boutique e locali alla moda che si estende verso ovest fino al porticciolo di Mergellina, e da qui la lussuosa Posillipo si arrampica sul promontorio che separa il Golfo di Napoli da quello di Pozzuoli. Dietro sorgono i Campi Flegrei: 
                        cosa vedere, in questa distesa vulcanica di rovine, vapori sulfurei e locali notturni aperti durante la stagione estiva, è tutto un programma.
                    </p>
                </div>
                <div className='row d-flex justify-content-center mx-0 mb-4'>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Napoli'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/campania/napoli/duomo'
                            onMouseEnter={() => setIsHoveredDuomo(true)}
                            onMouseLeave={() => setIsHoveredDuomo(false)}
                            >Duomo {isHoveredDuomo && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Napoli'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/campania/napoli/piazza_del_plebiscito'
                            onMouseEnter={() => setIsHoveredPiazzadelPlebiscito(true)}
                            onMouseLeave={() => setIsHoveredPiazzadelPlebiscito(false)}
                            >Piazza del Plebiscito {isHoveredPiazzadelPlebiscito && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Napoli'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/campania/napoli/basilica_di_santa_chiara'
                            onMouseEnter={() => setIsHoveredBasilicadiSantaChiara(true)}
                            onMouseLeave={() => setIsHoveredBasilicadiSantaChiara(false)}
                            >Basilica di Santa Chiara {isHoveredBasilicadiSantaChiara && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Napoli'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/campania/napoli/palazzo_reale'
                            onMouseEnter={() => setIsHoveredPalazzoReale(true)}
                            onMouseLeave={() => setIsHoveredPalazzoReale(false)}
                            >Palazzo Reale {isHoveredPalazzoReale && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Napoli'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/campania/napoli/basilica_di_san_lorenzo_maggiore'
                            onMouseEnter={() => setIsHoveredBasilicadiSanLorenzoMaggiore(true)}
                            onMouseLeave={() => setIsHoveredBasilicadiSanLorenzoMaggiore(false)}
                            >Basilica di San Lorenzo Maggiore {isHoveredBasilicadiSanLorenzoMaggiore && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Napoli'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/campania/napoli/teatro_san_carlo'
                            onMouseEnter={() => setIsHoveredTeatroSanCarlo(true)}
                            onMouseLeave={() => setIsHoveredTeatroSanCarlo(false)}
                            >Teatro San Carlo {isHoveredTeatroSanCarlo && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Napoli'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/campania/napoli/galleria_umberto_1'
                            onMouseEnter={() => setIsHoveredGalleriaUmbertoI(true)}
                            onMouseLeave={() => setIsHoveredGalleriaUmbertoI(false)}
                            >Galleria Umberto I {isHoveredGalleriaUmbertoI && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Napoli'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/campania/napoli/castel_nuovo'
                            onMouseEnter={() => setIsHoveredCastelNuovo(true)}
                            onMouseLeave={() => setIsHoveredCastelNuovo(false)}
                            >Castel Nuovo {isHoveredCastelNuovo && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Napoli'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/campania/napoli/castel_dell_ovo'
                            onMouseEnter={() => setIsHoveredCasteldellOvo(true)}
                            onMouseLeave={() => setIsHoveredCasteldellOvo(false)}
                            >Castel dell'Ovo {isHoveredCasteldellOvo && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Napoli'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/campania/napoli/vesuvio'
                            onMouseEnter={() => setIsHoveredVesuvio(true)}
                            onMouseLeave={() => setIsHoveredVesuvio(false)}
                            >Vesuvio {isHoveredVesuvio && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Napoli'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/campania/napoli/catacombe_di_san_gennaro'
                            onMouseEnter={() => setIsHoveredCatacombediSanGennaro(true)}
                            onMouseLeave={() => setIsHoveredCatacombediSanGennaro(false)}
                            >CatacombediSanGennaro {isHoveredCatacombediSanGennaro && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                </div>
            </main>
            <Footer/>
        </AuthenticatedLayout>
    )
}
