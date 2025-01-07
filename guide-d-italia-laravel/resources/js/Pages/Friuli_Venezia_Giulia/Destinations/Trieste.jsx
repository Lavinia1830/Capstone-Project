import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';

export default function Trieste(props) {

    const [isHoveredRisieradiSanSabba, setIsHoveredRisieradiSanSabba] = useState(false);
    const [isHoveredMuseoRevoltella, setIsHoveredMuseoRevoltella] = useState(false);
    const [isHoveredCastellodiSanGiusto, setIsHoveredCastellodiSanGiusto] = useState(false);
    const [isHoveredCastellodiMiramare, setIsHoveredCastellodiMiramare] = useState(false);
    const [isHoveredTeatroRomano, setIsHoveredTeatroRomano] = useState(false);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='trieste' style={{ position: 'relative' }}>
                    <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Trieste</h1>
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
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Trieste'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/trieste/risiera_di_san_sabba'
                            onMouseEnter={() => setIsHoveredRisieradiSanSabba(true)}
                            onMouseLeave={() => setIsHoveredRisieradiSanSabba(false)}
                            >Risiera di San Sabba {isHoveredRisieradiSanSabba && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Trieste'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/trieste/museo_revoltella'
                            onMouseEnter={() => setIsHoveredMuseoRevoltella(true)}
                            onMouseLeave={() => setIsHoveredMuseoRevoltella(false)}
                            >Museo Revoltella {isHoveredMuseoRevoltella && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Trieste'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/trieste/castello_di_san_giusto'
                            onMouseEnter={() => setIsHoveredCastellodiSanGiusto(true)}
                            onMouseLeave={() => setIsHoveredCastellodiSanGiusto(false)}
                            >Castello di San Giusto {isHoveredCastellodiSanGiusto && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Trieste'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/trieste/castello_di_miramare'
                            onMouseEnter={() => setIsHoveredCastellodiMiramare(true)}
                            onMouseLeave={() => setIsHoveredCastellodiMiramare(false)}
                            >Castello di Miramare {isHoveredCastellodiMiramare && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Trieste'>
                        <CardBody className='bottone'>
                        <Link 
                            className="bottone_link" 
                            href='/visite/trieste/teatro_romano'
                            onMouseEnter={() => setIsHoveredTeatroRomano(true)}
                            onMouseLeave={() => setIsHoveredTeatroRomano(false)}
                            >Teatro Romano {isHoveredTeatroRomano && <i className="bi bi-chevron-right"></i>}
                        </Link>
                        </CardBody>
                    </Card>
                </div>
            </main>
            <Footer/>
        </AuthenticatedLayout>
    )
}
