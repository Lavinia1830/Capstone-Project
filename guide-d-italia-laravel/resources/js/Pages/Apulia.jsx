import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';
import Footer from '@/Components/Footer';

export default function Puglia(props) {

    const [isHoveredBari, setIsHoveredBari] = useState(false);
    const [isHoveredLeGravine, setIsHoveredLeGravine] = useState(false);
    const [isHoveredTrani, setIsHoveredTrani] = useState(false);
    const [isHoveredTaranto, setIsHoveredTaranto] = useState(false);
    const [isHoveredAltamura, setIsHoveredAltamura] = useState(false);
    const [isHoveredLecce, setIsHoveredLecce] = useState(false);
    const [isHoveredOstuni, setIsHoveredOstuni] = useState(false);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='text-center puglia'>
                    <h1>Puglia</h1>
                </div>
                <div className='text-center margin mt-3'>
                    <p>
                        Con un impareggiabile amalgama di arte, cultura, natura e svago, la Puglia è una destinazione perfetta per ogni tipo di viaggiatore. Nonostante negli ultimi anni sia diventata una delle mete predilette del turismo estivo, le sue città e i suoi borghi sono adorabili in 
                        ogni stagione. È sempre il momento giusto per immergersi nella veracità di Bari Vecchia, nei vicoli di Taranto, nell’eleganza di Lecce o nel candore di Ostuni. Così come non cambia mai il fascino antico di Ginosa né quello di <Link href='/destinazioni/puglia/monopoli' 
                        className='text-decoration-none color_link'>Monopoli</Link> e <Link href='/destinazioni/puglia/molfetta' className='text-decoration-none color_link'>Molfetta</Link>, <Link href='/destinazioni/puglia/borghi/vieste' className='text-decoration-none color_link'>Vieste</Link> e 
                        <Link href='/destinazioni/puglia/peschici' className='text-decoration-none color_link'> Peschici</Link>, <Link href='/destinazioni/puglia/borghi/otranto' className='text-decoration-none color_link'>Otranto</Link> o <Link href='/destinazioni/puglia/borghi/gallipoli' 
                        className='text-decoration-none color_link'>Gallipoli</Link>, solo per citare alcune delle località più note.
                    </p>
                    <p>
                        Accanto alle meraviglie lasciate dall’incontro tra Oriente e Occidente, che qui si sono presi per mano e per secoli hanno camminato insieme, c’è una natura variegata e sempre stimolante. Lunghe spiagge sabbiose o appartate calette lambite da acque limpide e pulite, 
                        come nel Salento o nelle Isole Tremiti; gli sconfinati campi di grano del Tavoliere, che d’estate si tinge d’oro; i boschi che coprono i Monti Dauni; le gravine che solcano le Murge e il Tarantino; le ordinate geometrie degli uliveti e le riserve che proteggono alte 
                        dune sabbiose coperte di timo, paludi popolate da fenicotteri e fitte foreste sopra le quali volano maestosi rapaci.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Origini e cenni storici sulla Puglia</h2>
                    <p>
                        Il nome storico <b>Apulia</b> deriva dall'antica popolazione degli Apuli che, in epoca preromana, abitavano parte della regione.<br/>
                        I primi resti fossili dell'uomo risalgono a 25000 anni fa e sono stati ritrovati nei pressi di Altamura. Qui, sono numerosi reperti di epoca preistorica, tra i quali menhir e dolmen. Non solo, ma la <b>Grotta Paglicci</b> è uno dei più importanti siti paleolitici 
                        d'Europa e i graffiti della <b>Grotta Romanelli</b> sono straordinari.
                    </p>
                    <p>
                        Alla conquista romana seguirono secoli di scorrerie dei <b>Saraceni</b>, che conquistarono Taranto e Bari.
                    </p>
                    <p>
                        Il periodo di maggior splendore in Puglia risale al regno della casa degli Svevi grazie alla figura di <b>Federico II di Svevia</b>, che fu re di Sicilia, Duca di Svevia, Re dei Romani e poi Imperatore del Sacro Romano Impero, oltre che re di Gerusalemme. Definito 
                        “Stupor mundi” e “Puer Apuliae”, era amatissimo per la sua forte personalità
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Le città principali della Puglia</h2>
                    <p>
                        Il viaggio alla scoperta della Puglia parte da <Link href='/destinazioni/puglia/bari' className='text-decoration-none color_link'>Bari</Link>, il suo capoluogo. Il borgo antico, noto come “Bari vecchia”, è un dedalo di vicoletti dove folklore e tradizione hanno una 
                        vivacità unica.<br/>
                        È qui che sorge la <Link href='/visite/puglia/bari/basilica_di/_san_nicola' className='text-decoration-none color_link'>Basilica di San Nicola</Link>, uno dei centri prediletti dalla Chiesa ortodossa in Occidente e spettacolare esempio di architettura romanica 
                        pugliese. Poco distante si può visitare il <Link href='/visite/puglia/pari/castello_svevo_di_bari' className='text-decoration-none color_link'>Castello svevo di Bari</Link>, l’edificio simbolo della città, imponente fortezza oggi sede museale.
                    </p>
                    <p>
                        Di grandissima bellezza è <Link href='/destinazioni/puglia/lecce' className='text-decoration-none color_link'>Lecce</Link>, la città del celebre e fastoso <b>barocco</b> e dei ricami in pietra, fondamentale centro culturale del Salento, detta “la Firenze del sud”.
                    </p>
                    <p>
                        Icona della regione è <Link href='/destinazioni/puglia/alberobello' className='text-decoration-none color_link'>Alberobello</Link>, una meta turistica molto richiesta grazie ai celebri <b>trulli</b>, antiche abitazioni a forma conica risalenti al XVII secolo, oggi 
                        protetti dall’Unesco. Cuore pulsante della Valle d’Itria, nota anche come la Valle dei Trulli, si estende tra le provincie di Bari, Brindisi e Taranto ed è costellata di affascinanti borghi in calce bianca dall'atmosfera fiabesca dove perdersi nella bellezza.
                    </p>
                    <p>
                        Chiamata “Città Bianca” per le abitazioni ricoperte di calce che caratterizzano il centro cittadino, <Link href='/destinazioni/puglia/ostuni' className='text-decoration-none color_link'>Ostuni</Link> regala un colpo d’occhio strepitoso sulla collina dov’è adagiata. 
                        Più volte premiata per le sue spiagge, offre un mare incantevole.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">LCosa vedere in Puglia: 6 mete imprescindibili</h2>
                    <p>
                        Tra le tappe che permettono di vivere una <strong>Puglia</strong> autentica e meravigliosa ne spiccano 4, a partire dall’intera zona del <b>Salento</b>, nella Puglia meridionale, bagnato dal mar Ionio e dal mar Adriatico e noto per le sue spiagge, tra le più belle 
                        d'Italia.<br/>
                        Vanta una costa con alcuni tratti alti e rocciosi, ma soprattutto dalla sabbia finissima.<br/>
                        Il territorio è caratterizzato da ulivi, muretti a secco, città barocche, masserie e borghi millenari. Tra le località più famose, Gallipoli, Otranto, Lecce e <Link href='/destinazioni/puglia/santa_maria_di_leuca' className='text-decoration-none color_link'>Santa Maria 
                        di Leuca</Link>.
                    </p>
                    <p>
                        Meritano una visita anche le <Link href='/destinazioni/puglia/isole_tremiti' className='text-decoration-none color_link'>Isole Tremiti</Link>, poste al largo del <b>Gargano</b> e considerate tesori dell’Adriatico con acque cristalline, falesie a strapiombo e una natura 
                        incontaminata.<br/>
                        Le isole sono cinque: <b>San Domino</b>, <b>San Nicola</b>, <b>Capraia</b>, <b>Cretaccio</b> e <b>Pianosa</b>.
                        Tutto il <Link href='/destinazione/puglia/gargano' className='text-decoration-none color_link'>Gargano</Link>, con le sue perle come <b>Vieste</b>, è degno di una vacanza: mare da sogno, una ricca tradizione culinaria, tanto divertimento e una natura incontaminata.<br/>
                        Il <Link href='/visite/puglia/gargano/parco_nazionale_del_gargano' className='text-decoration-none color_link'>Parco Nazionale del Gargano</Link> si estende su un’area di oltre 120.000 ettari e comprende antiche foreste e arcipelaghi bagnati dall’acqua cristallina. 
                        Nella parte più interna troviamo la riserva naturale <b>Foresta Umbra</b> che deve il suo nome alla fitta vegetazione che la rende molto ombrosa per molti tratti.
                    </p>
                    <p>
                        <Link href='/visite/puglia/andria/castel_del_monte' className='text-decoration-none color_link'>Castel del Monte</Link> è una tappa d’obbligo: si trova ad <Link href='/destinazioni/puglia/andria' className='text-decoration-none color_link'>Andria</Link> e ha un’architettura 
                        particolare, legata a misteriose storie sull’antico ordine dei Cavalieri Templari.
                    </p>
                    <p>
                        Tra le più amate attrattive della Puglia spiccano anche le <Link href='/visite/puglia/bari/grotta_di_castellana' className='text-decoration-none color_link'>Grotte di Castellana</Link>, un complesso di cavità sotterranee di origine carsica tra i più spettacolari d'Italia, 
                        e la <Link href='/mare/puglia/lecce/baia_dei_turchi' className='text-decoration-none color_link'>Baia dei Turchi</Link>, la spiaggia a pochi chilometri da Otranto.
                        Tradizione vuole che qui sbarcarono i guerrieri turchi per l’assedio di Otranto del XV secolo. 
                    </p>
                </div>
                <div className='row d-flex justify-content-center mx-0 mb-4'>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Puglia'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/puglia/bari'
                            onMouseEnter={() => setIsHoveredBari(true)}
                            onMouseLeave={() => setIsHoveredBari(false)}
                            >Bari {isHoveredBari && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Puglia'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/puglia/le_gravine'
                            onMouseEnter={() => setIsHoveredLeGravine(true)}
                            onMouseLeave={() => setIsHoveredLeGravine(false)}
                            >Le Gravine {isHoveredLeGravine && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Puglia'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/puglia/trani'
                            onMouseEnter={() => setIsHoveredTrani(true)}
                            onMouseLeave={() => setIsHoveredTrani(false)}
                            >Trani {isHoveredTrani && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Puglia'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/puglia/taranto'
                            onMouseEnter={() => setIsHoveredTaranto(true)}
                            onMouseLeave={() => setIsHoveredTaranto(false)}
                            >Taranto {isHoveredTaranto && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Puglia'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/puglia/altamura'
                            onMouseEnter={() => setIsHoveredAltamura(true)}
                            onMouseLeave={() => setIsHoveredAltamura(false)}
                            >Altamura {isHoveredAltamura && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Puglia'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/puglia/lecce'
                            onMouseEnter={() => setIsHoveredLecce(true)}
                            onMouseLeave={() => setIsHoveredLecce(false)}
                            >Lecce {isHoveredLecce && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Puglia'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/destinazioni/puglia/ostuni'
                            onMouseEnter={() => setIsHoveredOstuni(true)}
                            onMouseLeave={() => setIsHoveredOstuni(false)}
                            >Ostuni {isHoveredOstuni && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                </div>
            </main>
            <Footer/>
        </AuthenticatedLayout>
    )
}
