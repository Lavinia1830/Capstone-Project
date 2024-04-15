import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';

export default function Bologna(props) {

    const [isHoveredBasilicadiSanPetronio, setIsHoveredBasilicadiSanPetronio] = useState(false);
    const [isHoveredPiazzaMaggiore, setIsHoveredPiazzaMaggiore] = useState(false);
    const [isHoveredLeDueTorri, setIsHoveredLeDueTorri] = useState(false);
    const [isHoveredMambo, setIsHoveredMambo] = useState(false);
    const [isHoveredAnticoMercatoDiBologna, setIsHoveredAnticoMercatoDiBologna] = useState(false);
    const [isHoveredArchiginnasio, setIsHoveredArchiginnasio] = useState(false);
    const [isHoveredPinacotecaNazionale, setIsHoveredPinacotecaNazionale] = useState(false);
    const [isHoveredPiazzaSantoStefano, setIsHoveredPiazzaSantoStefano] = useState(false);
    const [isHoveredCertosaDiBologna, setIsHoveredCertosaDiBologna] = useState(false);
    const [isHoveredMuseoCivicoMedievale, setIsHoveredMuseoCivicoMedievale] = useState(false);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='bologna' style={{ position: 'relative' }}>
                    <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Bologna</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Città</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Non è un mistero: tutte le informazioni su Venezia, anche quelle più generiche, puntano sul fatto che è una meraviglia di architettura, arte e ingegneria, con chiese di marmo costruite su fondamenta sottratte con caparbietà all’acqua della laguna. La verità è che questa città è edificata su un terreno 
                        instabile. Persone meno tenaci dei veneziani potrebbero impallidire di fronte all’acqua alta o spaventarsi perché i canali sono vicinissimi alla porta di casa. Gli abitanti di Venezia non si sono mai scomposti. Invece di arrendersi, hanno avuto la forza di diffondere nel mondo la bellezza della loro 
                        arte, dei quadri, della musica, dei sapori incontrati da Marco Polo sulla via delle spezie. In una parola, hanno fatto conoscere al mondo l’unicità del proprio stile. E non solo nel passato.
                    </p>
                </div>
                <div className='row d-flex justify-content-center mx-0 mb-4'>
                    <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_Bologna'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/bologna/basilica_di_san_petronio'
                            onMouseEnter={() => setIsHoveredBasilicadiSanPetronio(true)}
                            onMouseLeave={() => setIsHoveredBasilicadiSanPetronio(false)}
                            >Basilica di San Petronio {isHoveredBasilicadiSanPetronio && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_Bologna'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/bologna/piazza_maggiore'
                            onMouseEnter={() => setIsHoveredPiazzaMaggiore(true)}
                            onMouseLeave={() => setIsHoveredPiazzaMaggiore(false)}
                            >Piazza Maggiore {isHoveredPiazzaMaggiore && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_Bologna'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/bologna/le_due_torri'
                            onMouseEnter={() => setIsHoveredLeDueTorri(true)}
                            onMouseLeave={() => setIsHoveredLeDueTorri(false)}
                            >Le Due Torri {isHoveredLeDueTorri && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_Bologna'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/bologna/mambo'
                            onMouseEnter={() => setIsHoveredMambo(true)}
                            onMouseLeave={() => setIsHoveredMambo(false)}
                            >MAMbo {isHoveredMambo && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_Bologna'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/bologna/antico_mercatio_di_bologna'
                            onMouseEnter={() => setIsHoveredAnticoMercatoDiBologna(true)}
                            onMouseLeave={() => setIsHoveredAnticoMercatoDiBologna(false)}
                            >Antico mercato nel quadrilatero di Bologna {isHoveredAnticoMercatoDiBologna && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_Bologna'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/bologna/archiginnasio'
                            onMouseEnter={() => setIsHoveredArchiginnasio(true)}
                            onMouseLeave={() => setIsHoveredArchiginnasio(false)}
                            >Archiginnasio {isHoveredArchiginnasio && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_Bologna'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/bologna/pinacoteca_nazionale'
                            onMouseEnter={() => setIsHoveredPinacotecaNazionale(true)}
                            onMouseLeave={() => setIsHoveredPinacotecaNazionale(false)}
                            >Pinacoteca Nazionale {isHoveredPinacotecaNazionale && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_Bologna'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/bologna/piazza_santo_stefano'
                            onMouseEnter={() => setIsHoveredPiazzaSantoStefano(true)}
                            onMouseLeave={() => setIsHoveredPiazzaSantoStefano(false)}
                            >Piazza Santo Stefano {isHoveredPiazzaSantoStefano && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_Bologna'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/bologna/certosa_di_bologna'
                            onMouseEnter={() => setIsHoveredCertosaDiBologna(true)}
                            onMouseLeave={() => setIsHoveredCertosaDiBologna(false)}
                            >Certosa Di Bologna {isHoveredCertosaDiBologna && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-2 px-0 card_Bologna'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/bologna/museo_civico_medievale'
                            onMouseEnter={() => setIsHoveredMuseoCivicoMedievale(true)}
                            onMouseLeave={() => setIsHoveredMuseoCivicoMedievale(false)}
                            >Museo Civico Medievale {isHoveredMuseoCivicoMedievale && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                </div>
            </main>
            <Footer/>
        </AuthenticatedLayout>
    )
}
