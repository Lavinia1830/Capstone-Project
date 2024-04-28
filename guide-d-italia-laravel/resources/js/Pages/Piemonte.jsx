import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import {Card} from 'react-bootstrap';
import { Link, Head } from '@inertiajs/react';

export default function Piemonte(props) {


    const [isHoveredTorino, setIsHoveredTorino] = useState(false);
    const [isHoveredLaghinord, setIsHoveredLaghinord] = useState(false);
    const [isHoveredNovara, setIsHoveredNovara] = useState(false);
    const [isHoveredBiella, setIsHoveredBiella] = useState(false);
    const [isHoveredVercelli, setIsHoveredVercelli] = useState(false);
    const [isHoveredCanavese, setIsHoveredCanavese] = useState(false);
    const [isHoveredIvrea, setIsHoveredIvrea] = useState(false);
    const [isHoveredVSCPG, setIsHoveredVSCPG] = useState(false);
    const [isHoveredCuneo, setIsHoveredCuneo] = useState(false);
    const [isHoveredSaluzzo, setIsHoveredSaluzzo] = useState(false);
    const [isHoveredAsti, setIsHoveredAsti] = useState(false);
    const [isHoveredLangheeRoero, setIsHoveredLangheeRoero] = useState(false);






  return (
    <>
        <Head title="Piemonte"/>
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='text-center piemonte'>
                    <h1>Piemonte</h1>
                </div>
                <div className='text-center margin mt-3'>
                    <p>
                        Connubio perfetto tra storia, arte, cultura e natura, dietro l'elganza e l'apparenza austera il Piemonte nasconde un animo vitale e sorprendente, da 
                        scoprire a passo lento.< br/>
                        Regione dal fascino antico e raffinato, e a tratti anche un po' ingombrante, di <b>posti da vedere in Piemonte</b> ce ne sono a bizzeffe. La regione 
                        appassionerà anche i viaggiatori più compassati con il suo internazionale abbia da tempo raggiunto luoghi come Torino, la Reggia di Venezia o le 
                        Langhe, sarà sufficente qualche giorno di viaggio per rendersi conto di quanti luoghi straordinati ci sono ancora da scoprire. Basta lasciare per un 
                        attimo le confrortevoli aree cittadine, con il loro corredo di tesori, per incappare in piccole chiese campestri, imponenti monasteri, coinvolgenti 
                        musei e paesaggi punteggiati da piccoli borghi senza tempo. Le montagne piemontesi da visitare, in particolare, sono meta imprescindibile di chi ama 
                        le vette innevate al Sestriere o a Bardonecchia cerca la neve e gli inpienti più moderni
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Piemonte, destinazioni imperdibili</h2>
                    <p>
                        Non stupisce che in <strong>Piemonte</strong> siano presenti quattro siti dichiarati dall’<b>UNESCO Patrimonio mondiale dell’Umanità</b>, in buona 
                        parte fuori dalle aree urbane. Ci sono le residenze sabaude, maestosi castelli e dimore da sogno sparpagliate in tutta la regione, da Venaria al 
                        Canavese; ci sono i Sacri Monti, come quello di Varallo, in cui la religiosità popolare si sublima nelle opere dei massimi pittori e scultori 
                        rinascimentali; gli insediamenti palafitticoli intorno al Lago di Viverone, prime testimonianze umane della regione; e i paesaggi vitivinicoli del 
                        Monferrato, delle Langhe e del Roero, con le colline pettinate da lunghi e pittoreschi filari di viti che accarezzano il cielo. Trovare idee per gite 
                        giornaliere in <strong>Piemonte</strong> è un’attività più che facile: semplicissima.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Itinerari piemontesi al sapor di vino (e cibo buono)</h2>
                    <p>
                        Vino, certo, ma non solo: oltre all’impressionante numero di etichette prestigiose, il Piemonte è da sempre meta imprescindibile per gli amanti della 
                        buona cucina. Andare alla scoperta delle sue tante specialità agroalimentari significa viaggiare per tradizioni gastronomiche che spaziano dal mare 
                        (grazie alle influenze della vicina Liguria) agli alpeggi montani. Senza dimenticare le pianure del nord della regione, che da maggio si trasformano 
                        in un mare a quadretti preparato per la coltivazione del riso, e le colline, dove nascono i profumati tartufi. E in ultimo, la pasticceria fine e il 
                        cioccolato in tutte le sue sublimi declinazioni.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Luoghi da visitare in Piemonte</h2>
                    <p>
                        Ma il <strong>Piemonte</strong> non è solo arte, cultura e ottimo cibo: da nord a sud, infatti, è un susseguirsi di aree naturali di straordinaria 
                        bellezza. L’arco alpino, su cui svettano iconiche montagne come il Monte Rosa e il Monviso, farà la gioia degli amanti delle attività all’aria aperta, 
                        che d’estate potranno dedicarsi all’escursionismo e d’inverno allo sci, mentre l’area dei laghi accontenterà chi cerca scenari più dolci. I castelli 
                        da visitare in Piemonte sono simboli di una grandezza reale di cui ancora oggi si possono assaggiare i fasti tra le residenze reali di Stupinigi, 
                        Racconigi o la Venaria reale. Le mete turistiche in Piemonte, così come le città da visitare, si sprecano: è una regione variegata che punta su natura 
                        ed efficienza urbana, su eleganza architettonica e cultura.
                    </p>
                </div>
                <div className='row d-flex justify-content-center mx-0 mb-4'>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Piemonte'>
                        <Card.Body className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/destinazioni/piemonte/torino'
                                onMouseEnter={() => setIsHoveredTorino(true)}
                                onMouseLeave={() => setIsHoveredTorino(false)}
                                >Torino {isHoveredTorino && <i className="bi bi-chevron-right"></i>}
                                
                            </Link>
                        </Card.Body>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Piemonte'>
                        <Card.Body className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/territori/il_nord_e_i_laghi_maggiore_e_d_orta'
                                onMouseEnter={() => setIsHoveredLaghinord(true)}
                                onMouseLeave={() => setIsHoveredLaghinord(false)}
                                >Il nord e i Laghi maggiore... {isHoveredLaghinord && <i className="bi bi-chevron-right"></i>}
                                
                            </Link>
                        </Card.Body>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Piemonte'>
                        <Card.Body className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/destinazioni/novara'
                                onMouseEnter={() => setIsHoveredNovara(true)}
                                onMouseLeave={() => setIsHoveredNovara(false)}
                                >Novara {isHoveredNovara && <i className="bi bi-chevron-right"></i>}
                                
                            </Link>
                        </Card.Body>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Piemonte'>
                        <Card.Body className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/destinazioni/biella'
                                onMouseEnter={() => setIsHoveredBiella(true)}
                                onMouseLeave={() => setIsHoveredBiella(false)}
                                >Biella {isHoveredBiella && <i className="bi bi-chevron-right"></i>}
                                
                            </Link>
                        </Card.Body>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Piemonte'>
                        <Card.Body className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/destinazioni/vercelli'
                                onMouseEnter={() => setIsHoveredVercelli(true)}
                                onMouseLeave={() => setIsHoveredVercelli(false)}
                                >Vercelli {isHoveredVercelli && <i className="bi bi-chevron-right"></i>}
                                
                            </Link>
                        </Card.Body>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Piemonte'>
                        <Card.Body className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/territori/canadese_gran_paradiso_e_valli_di_lanzo'
                                onMouseEnter={() => setIsHoveredCanavese(true)}
                                onMouseLeave={() => setIsHoveredCanavese(false)}
                                >Canavese, Gran paradiso... {isHoveredCanavese && <i className="bi bi-chevron-right"></i>}
                                
                            </Link>
                        </Card.Body>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Piemonte'>
                        <Card.Body className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/destinazioni/ivrea'
                                onMouseEnter={() => setIsHoveredIvrea(true)}
                                onMouseLeave={() => setIsHoveredIvrea(false)}
                                >Ivrea {isHoveredIvrea && <i className="bi bi-chevron-right"></i>}
                                
                            </Link>
                        </Card.Body>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Piemonte'>
                        <Card.Body className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/territori/valle_di_susa_chisone_pallice_germanasca'
                                onMouseEnter={() => setIsHoveredVSCPG(true)}
                                onMouseLeave={() => setIsHoveredVSCPG(false)}
                                >Valle di Susa, Chisone, Pellise... {isHoveredVSCPG && <i className="bi bi-chevron-right"></i>}
                                
                            </Link>
                        </Card.Body>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Piemonte'>
                        <Card.Body className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/destinazioni/cuneo'
                                onMouseEnter={() => setIsHoveredCuneo(true)}
                                onMouseLeave={() => setIsHoveredCuneo(false)}
                                >Cuneo {isHoveredCuneo && <i className="bi bi-chevron-right"></i>}
                                
                            </Link>
                        </Card.Body>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Piemonte'>
                        <Card.Body className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/destinazioni/saluzzo'
                                onMouseEnter={() => setIsHoveredSaluzzo(true)}
                                onMouseLeave={() => setIsHoveredSaluzzo(false)}
                                >Saluzzo {isHoveredSaluzzo && <i className="bi bi-chevron-right"></i>}
                                
                            </Link>
                        </Card.Body>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Piemonte'>
                        <Card.Body className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/territori/asti_alessandra_e_il_monferrato'
                                onMouseEnter={() => setIsHoveredAsti(true)}
                                onMouseLeave={() => setIsHoveredAsti(false)}
                                >Asti, Alessandria e il Monferrato{isHoveredAsti && <i className="bi bi-chevron-right"></i>}
                                
                            </Link>
                        </Card.Body>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Piemonte'>
                        <Card.Body className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/territori/langhe_e_roero'
                                onMouseEnter={() => setIsHoveredLangheeRoero(true)}
                                onMouseLeave={() => setIsHoveredLangheeRoero(false)}
                                >Langhe e Roero {isHoveredLangheeRoero && <i className="bi bi-chevron-right"></i>}
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
            </main>
            <Footer/>
        </AuthenticatedLayout>
    </>
       
  )
}
