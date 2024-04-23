import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import {Card, CardBody, Image} from 'react-bootstrap';
import { Link } from '@inertiajs/inertia-react';
import Courmayeur_Piste from '../../../../assets/Valle_d_Aosta/Courmayeur_Piste_Valle_d_Aosta.jpg';

export default function Courmayeur(props) {

    const [isHoveredCourmayeur, setIsHoveredCourmayeur] = useState(false);
    const [isHoveredValFerret, setIsHoveredValFerret] = useState(false);
    const [isHoveredMonteBianco, setIsHoveredMonteBianco] = useState(false);
    const [isHoveredSkywayMonteBianco, setIsHoveredSkywayMonteBianco] = useState(false);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='courmayeur' style={{ position: 'relative' }}>
                    <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Courmayeur</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Città</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Impianti di risalita moderni e funzionali, comprensori sciistici per oltre 100 km di divertimento sulla neve, uno scenario esclusivo che ha pochi eguali sull’arco alpino. Ecco <strong>Courmayeur</strong>, la “<b>perla delle Alpi</b>”, che lega la sua fama 
                        al <Link href='/montagna/valle_d_aosta/monte_bianco' className='text-decoration-none color_link'>Monte Bianco</Link> e deve alla montagna più alta d’Europa il suo “successo turistico” di <b>stazione montana tra le più rinomate al mondo</b>, da oltre 200 anni. Adagiata in un’ampia 
                        conca a 1224 metri di altitudine, Courmayeur è l'ultimo comune italiano che si incontra prima di arrivare in Francia attraverso il Traforo del Monte Bianco: una moderna città alpina, sviluppatasi attorno all’antica <Link 
                        href='/visite/valle_d_aosta/courmayeur/chiesa_dei_santi_pantaleone_e_valentino' className='text-decoration-none color_link'>Chiesa dei Santi Pantaleone e Valentino</Link> e che oggi ha il suo cuore commerciale e mondano nella centrale via Roma. Nata turisticamente 
                        alla fine del ‘600 come stazione termale per le virtù delle sue acque minerali, conferma in ogni momento dell’anno la sua lunga tradizione di ospitalità, con strutture ricettive di prim’ordine e un’offerta molteplice di sport praticabili nelle sue valli Ferret e Veny, 
                        sullo sfondo di scenari impagabili. Amata da escursionisti e appassionati di montagna tanto d’inverno che d’estate, è conosciuta come la più famosa e antica stazione alpina italiana; se ne trova testimonianza negli storici cimeli della Casa delle Guide, sede 
                        del <Link href='/visite/valle_d_aosta/courmayeur/musei_duca_degli_abruzzi' className='text-decoration-none color_link'>Museo Duca degli Abruzzi</Link>. Custode della sua antica vocazione di comunità agricola è la <Link 
                        href='/valle_d_aosta/eventi/courmayeur/festa_della_badoche' className='text-decoration-none color_link'>festa della Badoche</Link>, folcloristica manifestazione legata ai riti di maggio, che oggi condivide le celebrazioni del santo patrono in tutti i comuni della 
                        Valdigne.
                    </p>
                </div>
                <div className='d-flex justify-content-center'>
                    <Image src={Courmayeur_Piste} style={{ width: '700px'}}/>
                </div>
                <div className='margin mt-3'>
                    <p>
                        È a Courmayeur che nasce la storia degli impianti di risalita: <b>nel 1908 le famiglie Donzelli, Gilberti e Lora Totino fecero costruire il primo impianto a fune</b>. Nel 1939 tale idea pionieristica dà vita alla <b>Società Monte Bianco</b> che realizza la funivia 
                        che va da La Palud a Punta Helbronner. Di lì a poco la montagna, da meta per pochi alpinisti, diventa raggiungibile per tutti.
                    </p>
                    <p>
                        Oggi, <b>con oltre 100 chilometri di piste</b>, Courmayeur si pone ai massimi livelli nell'offerta di <b>sport invernali in Italia e nell'intera Europa</b>. Il comprensorio di sci alpino di Courmayeur è infatti frequentato da sciatori di tutto il mondo. 
                    </p>
                </div>
                <div className='row d-flex justify-content-center mx-0 mb-4'>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Courmayeur_Montagna'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/montagna/valle_d_aosta/courmayeur_montagna'
                            onMouseEnter={() => setIsHoveredCourmayeur(true)}
                            onMouseLeave={() => setIsHoveredCourmayeur(false)}
                            >Courmayeur montagna {isHoveredCourmayeur && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                </div>
                <div className="margin mt-3">
                    <p>
                        <b>Per gli amanti dello sci nordico</b> non c'è nulla di meglio che trascorrere piacevoli giornate in <Link href='/montagna/valle_d_aosta/val_ferret' className='text-decoration-none color_link'>Val Ferret</Link> che vanta piste adatte anche a sciatori non esperti. 
                        La zona è in parte affiancata da un <b>percorso pedonale sulla neve</b>, per concedersi una passeggiata in piena natura a pochi chilometri dal centro del paese. <b>Varie anche le proposte per lo sci fuori pista</b>, con la discesa sul <b>ghiacciaio del Toula</b> e 
                        quelle della <b>Vallée Blanche</b>, che dal ghiacciaio della Mer de Glace raggiunge Chamonix, sul versante francese del Monte Bianco.
                    </p>
                </div>
                <div className='row d-flex justify-content-center mx-0 mb-4'>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Val_Ferret'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/montagna/valle_d_aosta/val_ferret'
                            onMouseEnter={() => setIsHoveredValFerret(true)}
                            onMouseLeave={() => setIsHoveredValFerret(false)}
                            >Val Ferret {isHoveredValFerret && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                </div>
                <div className="margin mt-3">
                    <p>
                        Se ci si trova a <strong>Courmayeur</strong>, <b>è impossibile perdere la traversata del Monte Bianco, la vetta più alta d'Europa</b>. Grazie alla <Link href='/montagna/valle_d_aosta/funivia_skyway_monte_bianco' className='text-decoration-none color_link'>Funivia del Monte 
                        Bianco</Link> in pochi minuti si raggiungono gli <b>oltre 2.000 metri di quota</b>. Nel corso della traversata, che parte dai 1.300 metri di Pontal d’Entrèves ed arriva fino ai 3.466 metri di Punta Helbronner, passando per la stazione intermedia Pavillon (2.173 metri), 
                        è possibile godere di una <b>vista magnifica sui ghiacciai e sulle grandi vette delle Alpi</b>, visitare il giardino botanico alpino Saussurea e la mostra di cristalli del <b>Monte Bianco</b>.
                    </p>
                    <p>
                        Courmayeur è inoltre una delle capitali storiche dell’alpinismo e dell’escursionismo di montagna di cui si può ripercorrere la storia presso il <b>museo alpino «Duca degli Abruzzi»</b>, ospitato nella Casa delle Guide, al centro del paese. Nel museo sono raccolti 
                        documenti, cimeli e attrezzi da scalata.
                    </p>
                    <p>
                        Facilmente raggiungibile in ogni stagione dell'anno (dalla Francia e dal resto d’Europa attraverso il traforo del Monte Bianco, e dalle altre regioni italiane con l’autostrada della Valle d‘Aosta, che collega Torino al traforo del Monte Bianco), Courmayeur è la <b>meta 
                        ideale per chiunque, anche in estate, voglia rigenerarsi a contatto con un'atmosfera cosmopolita</b>, intima ma al tempo stesso mondana e ricca di opportunità d'incontro.
                    </p>
                </div>
                <div className='row d-flex justify-content-center mx-0 mb-4'>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Courmayeur'>
                        <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/montagna/valle_d_aosta/monte_bianco'
                                onMouseEnter={() => setIsHoveredMonteBianco(true)}
                                onMouseLeave={() => setIsHoveredMonteBianco(false)}
                                >Monte Bianco {isHoveredMonteBianco && <i className="bi bi-chevron-right"></i>}
                            </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Courmayeur'>
                        <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/montagna/skyway_monte_bianco'
                                onMouseEnter={() => setIsHoveredSkywayMonteBianco(true)}
                                onMouseLeave={() => setIsHoveredSkywayMonteBianco(false)}
                                >Skyway Monte Bianco {isHoveredSkywayMonteBianco && <i className="bi bi-chevron-right"></i>}
                            </Link>
                        </CardBody>
                    </Card>
                </div>
            </main>
            <Footer/>
        </AuthenticatedLayout>
    )
}
