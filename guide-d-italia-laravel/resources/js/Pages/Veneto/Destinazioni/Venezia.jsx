import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';

export default function Venezia(props) {

    const [isHoveredBasilicadiSanMarco, setIsHoveredBasilicadiSanMarco] = useState(false);
    const [isHoveredPalazzoDucale, setIsHoveredPalazzoDucale] = useState(false);
    const [isHoveredPeggyGuggenheimCollection, setIsHoveredPeggyGuggenheimCollection] = useState(false);
    const [isHoveredIlGhetto, setIsHoveredIlGhetto] = useState(false);
    const [isHoveredPontediRialto, setIsHoveredPontediRialto] = useState(false);
    const [isHoveredPuntadellaDogana, setIsHoveredPuntadellaDogana] = useState(false);
    const [isHoveredCaDoro, setIsHoveredCaDoro] = useState(false);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='venezia' style={{ position: 'relative' }}>
                    <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Venezia</h1>
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
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Venezia'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/venezia/basilica_di_san_marco'
                            onMouseEnter={() => setIsHoveredBasilicadiSanMarco(true)}
                            onMouseLeave={() => setIsHoveredBasilicadiSanMarco(false)}
                            >Basilica di San Marco {isHoveredBasilicadiSanMarco && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Venezia'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/venezia/palazzo_ducale'
                            onMouseEnter={() => setIsHoveredPalazzoDucale(true)}
                            onMouseLeave={() => setIsHoveredPalazzoDucale(false)}
                            >Palazzo Ducale {isHoveredPalazzoDucale && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Venezia'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/venezia/peggy_guggenheim_collection'
                            onMouseEnter={() => setIsHoveredPeggyGuggenheimCollection(true)}
                            onMouseLeave={() => setIsHoveredPeggyGuggenheimCollection(false)}
                            >Peggy Guggenheim Collection {isHoveredPeggyGuggenheimCollection && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Venezia'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/venezia/il_ghetto'
                            onMouseEnter={() => setIsHoveredIlGhetto(true)}
                            onMouseLeave={() => setIsHoveredIlGhetto(false)}
                            >Il Ghetto {isHoveredIlGhetto && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Venezia'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/venezia/ponte_di_rialto'
                            onMouseEnter={() => setIsHoveredPontediRialto(true)}
                            onMouseLeave={() => setIsHoveredPontediRialto(false)}
                            >Ponte di Rialto {isHoveredPontediRialto && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Venezia'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/venezia/punta_della_dogana'
                            onMouseEnter={() => setIsHoveredPuntadellaDogana(true)}
                            onMouseLeave={() => setIsHoveredPuntadellaDogana(false)}
                            >Punta della Dogana{isHoveredPuntadellaDogana && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Venezia'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/venezia/ca_d_oro'
                            onMouseEnter={() => setIsHoveredCaDoro(true)}
                            onMouseLeave={() => setIsHoveredCaDoro(false)}
                            >Ca' D'oro{isHoveredCaDoro && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                </div>
            </main>
            <Footer/>
        </AuthenticatedLayout>
    )
}
