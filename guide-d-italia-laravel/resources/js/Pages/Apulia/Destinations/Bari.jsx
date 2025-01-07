import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';

export default function Bari(props) {

    const [isHoveredCastelloNormannoSvevo, setIsHoveredCastelloNormannoSvevo] = useState(false);
    const [isHoveredBasilicadiSanNicola, setIsHoveredBasilicadiSanNicola] = useState(false);
    const [isHoveredGrottediCastellana, setIsHoveredGrottediCastellana] = useState(false);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='bari' style={{ position: 'relative' }}>
                    <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Bari</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Città</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Un’esplorazione del centro storico ci permette di coglierne il carattere più autentico, con i segni del suo passato che si dipanano tra i vicoli del quartiere proprio come le tradizioni custodite di generazione in generazione. E poi c’è <b>il 
                        celebre lungomare di Bari, uno dei più belli d’Italia</b>, che si affaccia sul mare cristallino riflettendone il fascino unico.
                    </p>
                    <p>
                        Dinamica e attiva, questa città immersa in un territorio caratterizzato dalle ampie campagne punteggiate dai bianchi muretti di pietre a secco, è anche un importante polo universitario.<br/>
                        E <b>custodisce gelosamente il ricordo delle imprese marinaresche del Medioevo</b> oltre che i suoi preziosi monumenti e le sue suggestive chiese.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Storia e curiosità su Bari</h2>
                    <p>
                        La storia di <strong>Bari</strong> è affascinante e travagliata. L’insediamento antico risale all’Età del Bronzo, passato dai Peucezi alla dominazione dei Goti, poi conteso da Bizantini e Longobardi. Più volte saccheggiata e distrutta, <b>la Bari 
                        medievale fu dominata dai Saraceni diventando un piccolo Stato musulmano indipendente</b>. Fu poi conquistata dai Franchi prima di tornare in mano all’imperatore d’Oriente, che la rese il maggior centro politico, militare e commerciale italiano 
                        dell'Impero orientale. 
                    </p>
                    <p>
                        Nel 1087, con l’arrivo delle reliquie di San Nicola di Myra, noto come Santa Claus, Bari divenne anche un rigoglioso <b>centro religioso che univa Oriente e Occidente</b>. La dominazione normanna in Puglia assicurò a Bari un lungo periodo di 
                        prosperità, ma fu anche oggetto di conflitti. Ricostruita dagli gli Svevi visse un nuovo momento di splendore, che decadde di nuovo con gli Angioini poiché dilaniata dalle lotte tra signorotti locali e banchieri stranieri.
                    </p>
                    <p>
                        Passata agli Aragonesi e donata ai duchi di Milano nel 1464, nel 1500 fu <b>riportata ai fasti di un tempo da Isabella d’Aragona</b>. Nel 1558 finì nelle mani degli spagnoli, con diverse ribellioni sanguinose, e nel 1657 fu duramente provata dalla 
                        peste. Passò poi dal dominio austriaco a quello dei Borboni, rinascendo sotto il comando francese dei primi anni del 1800 con la costruzione della città nuova.
                    </p>
                    <p>
                        Ritornata ai Borbone nel 1815, entrò a far parte del Regno d’Italia nel 1860. Un lungo passato di dominazioni che hanno lasciato a Bari un patrimonio artistico unico, da ammirare per sognare a occhi aperti.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Cosa vedere a Bari: 3 tappe imprescindibili</h2>
                    <p>
                        Una città perfetta non solo per chi ama fare vita di mare, ma anche per chi vuole esplorare: <b>cosa vedere a Bari</b>? <b>I punti di interesse più amati sono 3</b>:
                    </p>
                    <ul className='lista'>
                        <li>
                            <p>
                                iniziare con un giro a <b>Bari Vecchia</b> è l’occasione perfetta per entrare subito nel cuore di questo capoluogo pugliese. Il quartiere di San Nicola si dipana tra i due porti di Bari, quello vecchio e quello nuovo, affacciandosi sul lungomare. 
                                Il <b>centro storico della città</b>, con il suo nucleo risalente al Medioevo, è racchiuso tra mura ed è dominato dal <Link href='/visite/puglia/bari/castello_normanno_svevo' className='text-decoration-none color_link'>Castello Normanno Svevo</Link>, 
                                uno dei simboli della Puglia.<br/>
                                Passeggiando per il dedalo di viuzze è facile fermarsi ad ammirare le donne che preparano a mano le <b>orecchiette</b>, un tipico formato di pasta pugliese, ancora come una volta.
                            </p>
                        </li>
                        <li>
                            <p>
                                La seconda tappa non può che essere la <Link href='/visite/puglia/bari/basilicata_di_san_nicola' className='text-decoration-none color_link'>Basilica di San Nicola</Link>, uno degli edifici religiosi più suggestivi e rilevanti d’Italia. È dedicata 
                                a San Nicola di Myra, patrono e vescovo che, secondo la leggenda, ha dato le origini a Santa Claus, quello che consideriamo oggi Babbo Natale.
                            </p>
                        </li>
                        <li>
                            <p>
                                Infine il <b>Lungomare di Bari</b>, occasione perfetta per ammirare il mare Adriatico e alcuni dei palazzi più belli della città. Rilassante e piacevole da percorrere, è costellato dai ristoranti tipici del centro in cui mangiare i ricchi piatti della zona.
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Cosa vedere a Bari: 3 tappe imprescindibili</h2>
                    <p>
                        Adatta a tutta la famiglia, è una città che offre numerose proposte per il tempo libero e proprio per questo capita di trovarsi di fronte al dilemma: che <b>cosa fare a Bari</b>?
                    </p>
                    <p>
                        I golosi possono lanciarsi nel <b>Bari Street Food Walking Tour</b>, un giro organizzato per assaggiare il tipico cibo di strada per i vicoli del centro storico, che vi porterà nei locali frequentati dalla gente del posto.
                    </p>
                    <p>
                        Ma certamente tante attività sono legate al mare, a partire dalle <b>escursioni in barca a vela tra Bari e dintorni</b>, anche se gli <b>sport d’acqua</b> con i quali mettersi alla prova sono tanti.
                    </p>
                    <p>
                        Un consiglio? Trovate il tempo per un tour delle <Link href='/visite/puglia/bari/grotte_di_castellana' className='text-decoration-none color_link'>Grotte di Castellana</Link>, che tra stalattiti, stalagmiti e preziosi cristalli lungo il complesso di affascinanti 
                        cavità sotterranee vi lascerà senza fiato.
                    </p>
                </div>
                <div className='row d-flex justify-content-center mx-0 mb-4'>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Bari'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/puglia/bari/castello_normanno_svevo'
                            onMouseEnter={() => setIsHoveredCastelloNormannoSvevo(true)}
                            onMouseLeave={() => setIsHoveredCastelloNormannoSvevo(false)}
                            >Castello Normanno Svevo {isHoveredCastelloNormannoSvevo && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Bari'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/puglia/bari/basilica_di_san_nicola'
                            onMouseEnter={() => setIsHoveredBasilicadiSanNicola(true)}
                            onMouseLeave={() => setIsHoveredBasilicadiSanNicola(false)}
                            >Basilica di San Nicola {isHoveredBasilicadiSanNicola && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Bari'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/puglia/bari/grotte_di_castellana'
                            onMouseEnter={() => setIsHoveredGrottediCastellana(true)}
                            onMouseLeave={() => setIsHoveredGrottediCastellana(false)}
                            >Grotte di Castellana {isHoveredGrottediCastellana && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                </div>
            </main>
            <Footer/>
        </AuthenticatedLayout>
    )
}
