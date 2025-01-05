import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';

export default function Milano(props) {


    const [isHoveredDuomo, setIsHoveredDuomo] = useState(false);
    const [isHoveredCastelloSforzesco, setIsHoveredCastelloSforzesco] = useState(false);
    const [isHoveredPinacotecadiBrera, setIsHoveredPinacotecadiBrera] = useState(false);
    const [isHoveredCanacoloVinciano, setIsHoveredCanacoloVinciano] = useState(false);
    const [isHoveredMuseoNazionale, setIsHoveredMuseoNazionale] = useState(false);
    const [isHoveredMuseoCivico, setIsHoveredMuseoCivico] = useState(false);
    const [isHoveredCimiteroMonumentale, setIsHoveredCimiteroMonumentale] = useState(false);
    const [isHoveredDolceeGabbana, setIsHoveredDolceeGabbana] = useState(false);
    const [isHoveredMuseoTeatrale, setIsHoveredMuseoTeatrale] = useState(false);
    const [isHoveredFondazionePrada, setIsHoveredFondazionePrada] = useState(false);












    return (
        <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        >
            <main>
                <div className='milano' style={{ position: 'relative' }}>
                    <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Milano</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Città</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Visitare Milano vuol dire conoscere da vicino il motore dell’economia del paese e sede della Borsa. Da pochi anni però è la città è diventata anche meta turistica da scoprire, oltre gli stereotipi. Questo perché le attrattive di Milano e i suoi tesori (sopravvissuti ai feroci bombardamenti della seconda 
                        guerra mondiale) comprendono il meraviglioso Duomo, il Cenacolo di Leonardo, il Teatro alla Scala e il Castello Sforzesco. Da vedere la bellissima zona dei Navigli (che pullula di caffè, locali e gelaterie) e il quartiere Isola, che ospita creativi e cultori del design. Come si intuisce, nell’animo di 
                        Milano si nascondono molte più cose di quelle che non si incontrino fermandosi alla sua bellezza di superficie. I milanesi l’hanno capito da un po’, chi la visita per piacere o per lavoro lo ha intuito.
                    </p>
                    <h2 className='color-subtitle'>Milano, guida alla città</h2>
                    <p>
                        Ciò che caratterizza Milano è soprattutto il suo slancio creativo. Armani, Versace, Prada, Dolce &amp; Gabbana, Pucci, Gucci sono partiti proprio da qui. Gli appassionati di moda fanno veri e propri pellegrinaggi alle loro boutique del Quadrilatero d’Oro. A Milano, i percorsi shopping si sprecano: nelle 
                        strade della città si incontrano anche negozi di stilisti emergenti e concept shop, oltre a interessanti outlet che vendono abiti di campionario o semplicemente di qualche collezione precedente: per chi cerca l’affare sono luoghi da non perdere. Milano è anche la capitale del mobile e dell’arredamento 
                        (il mitico puff immortalato da Fantozzi è nato qui), così come lo è dell’arte sperimentale e di ogni tendenza.
                    </p>
                    <h2 className='color-subtitle'>Milano, informazioni per visitarla</h2>
                    <p>
                        Di sera, a Milano, impazza un’intrigante scena teatrale d’avanguardia, oltre agli immancabili aperitivi che sempre più facilmente si trasformano in happy hour e occasioni per fare festa nei club. La città è caldissima - ma questa volta parliamo del clima - in agosto, quando i suoi abitanti vanno in vacanza 
                        e molti locali chiudono i battenti. Per chi ama le atmosfere rarefatte e non teme l’afa, può essere un’opportunità. Oltre alla moda e alla finanza, una vera religione qui a Milano è il calcio. Le grandi squadre cittadine sono Inter e Milan, che si dividono la tifoseria del mitico stadio Meazza di San Siro.
                    </p>
                </div>
                <div className='row d-flex justify-content-center mx-0 mb-4'>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Milano'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/milano/duomo'
                            onMouseEnter={() => setIsHoveredDuomo(true)}
                            onMouseLeave={() => setIsHoveredDuomo(false)}
                            >Duomo {isHoveredDuomo && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Milano'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/milano/castello_sforzesco'
                            onMouseEnter={() => setIsHoveredCastelloSforzesco(true)}
                            onMouseLeave={() => setIsHoveredCastelloSforzesco(false)}
                            >Castello Sforzesco {isHoveredCastelloSforzesco && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Milano'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/milano/pinacoteca_di_brera'
                            onMouseEnter={() => setIsHoveredPinacotecadiBrera(true)}
                            onMouseLeave={() => setIsHoveredPinacotecadiBrera(false)}
                            >Pinacoteca di Brera {isHoveredPinacotecadiBrera && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Milano'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/milano/cenacolo_vinciano'
                            onMouseEnter={() => setIsHoveredCanacoloVinciano(true)}
                            onMouseLeave={() => setIsHoveredCanacoloVinciano(false)}
                            >Canacolo Vinciano {isHoveredCanacoloVinciano && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Milano'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/milano/museo_nazionale_della_scienza_e_della_tecnologia_leonardo_da_vinci'
                            onMouseEnter={() => setIsHoveredMuseoNazionale(true)}
                            onMouseLeave={() => setIsHoveredMuseoNazionale(false)}
                            >Museo Nazionale della scianza e... {isHoveredMuseoNazionale && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Milano'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/milano/museo_civico_di_storia_naturale'
                            onMouseEnter={() => setIsHoveredMuseoCivico(true)}
                            onMouseLeave={() => setIsHoveredMuseoCivico(false)}
                            >Museo Civico di storia Naturale {isHoveredMuseoCivico && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Milano'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/milano/cimitero_monumentale'
                            onMouseEnter={() => setIsHoveredCimiteroMonumentale(true)}
                            onMouseLeave={() => setIsHoveredCimiteroMonumentale(false)}
                            >Cimitero Monumentale {isHoveredCimiteroMonumentale && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Milano'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/milano/dolce_e_gabbana'
                            onMouseEnter={() => setIsHoveredDolceeGabbana(true)}
                            onMouseLeave={() => setIsHoveredDolceeGabbana(false)}
                            >Dolce & Gabbana {isHoveredDolceeGabbana && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Milano'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/milano/museo_teatrale_alla_scala'
                            onMouseEnter={() => setIsHoveredMuseoTeatrale(true)}
                            onMouseLeave={() => setIsHoveredMuseoTeatrale(false)}
                            >Museo Teatrale alla Scala {isHoveredMuseoTeatrale && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Milano'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/milano/fondazione_prada'
                            onMouseEnter={() => setIsHoveredFondazionePrada(true)}
                            onMouseLeave={() => setIsHoveredFondazionePrada(false)}
                            >Fondazione Prada {isHoveredFondazionePrada && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                </div>
            </main>
            <Footer/>
        </AuthenticatedLayout>
    )
}
