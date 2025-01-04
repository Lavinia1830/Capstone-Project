import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';

export default function Sanremo(props) {

    const [isHoveredTeatroAriston, setIsHoveredTeatroAriston] = useState(false);
    const [isHoveredCasinò, setIsHoveredCasinò] = useState(false);
    const [isHoveredLaPigna, setIsHoveredLaPigna] = useState(false);
    const [isHoveredSantuarioMadonnaDellaCosta, setIsHoveredSantuarioMadonnaDellaCosta] = useState(false);
    const [isHoveredFontediSantaTecla, setIsHoveredFontediSantaTecla] = useState(false);
    const [isHoveredVillaNobel, setIsHoveredVillaNobel] = useState(false);
    const [isHoveredVillaOrmond, setIsHoveredVillaOrmond] = useState(false);
    const [isHoveredMercatoAnnonario, setIsHoveredMercatoAnnonario] = useState(false);
    const [isHoveredBussolaVecchia, setIsHoveredBussolaVecchia] = useState(false);
    const [isHoveredSeborga, setIsHoveredSerborga] = useState(false);


    return (
        <>
            <Head title='Sanremo'/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='sanremo' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Sanremo</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Città</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            <strong>Sanremo</strong> è la città dei fiori e in Italia è sinonimo di <b>Festival della canzone</b>: la gara canora più importante del Paese, quando la città 
                            ligure si prepara ad ospitare visitatori e appassionati da tutte le parti d'Italia e non solo, a caccia di autografi e selfie con i cantanti in gara. Arrivare 
                            è falice, perché Sanremo dista solo 147 cholometri da Genova, servita dall'aeroporto Cristoforo Colombo.
                        </p>
                        <p>
                            Il Festival pi=uò essere visto dal vivo al <Link href='/visite/liguria/sanremo/teatro_ariston' className='text-decoration-none color_link'>Teatro 
                            Ariston</Link> appure in diretta TV. Se la sera godersi lo spettacolo è quasi d'obbligo, durante la giornata non c'è niente di meglio che esplorare le bellezze 
                            che la città offre, complice un clima mite che la rende godibile anche d'inverno.
                        </p>
                        <p>
                            Ecco come <b>scoprire la città di Sanremo</b> al meglio, semza perdersi il Festival, anche con poco tempo a disposizione, attraverso un itinerario pensato ad hoc.
                        </p>
                    </div>
                    <div className='row d-flex justify-content-center mx-0 mb-4'>
                            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Sanremo'>
                                <CardBody className='bottone'>
                                <Link 
                                    className="bottone_link" 
                                    href='/visite/sanremo/teatro_ariston'
                                    onMouseEnter={() => setIsHoveredTeatroAriston(true)}
                                    onMouseLeave={() => setIsHoveredTeatroAriston(false)}
                                    >Teatro Arisron {isHoveredTeatroAriston && <i className="bi bi-chevron-right"></i>}
                                </Link>
                                </CardBody>
                            </Card>
                            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Sanremo'>
                                <CardBody className='bottone'>
                                <Link 
                                    className="bottone_link" 
                                    href='/visite/sanremo/casinò'
                                    onMouseEnter={() => setIsHoveredCasinò(true)}
                                    onMouseLeave={() => setIsHoveredCasinò(false)}
                                    >Casinò {isHoveredCasinò && <i className="bi bi-chevron-right"></i>}
                                </Link>
                                </CardBody>
                            </Card>
                            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Sanremo'>
                                <CardBody className='bottone'>
                                <Link 
                                    className="bottone_link" 
                                    href='/visite/sanremo/la_pigna'
                                    onMouseEnter={() => setIsHoveredLaPigna(true)}
                                    onMouseLeave={() => setIsHoveredLaPigna(false)}
                                    >La Pigna {isHoveredLaPigna && <i className="bi bi-chevron-right"></i>}
                                </Link>
                                </CardBody>
                            </Card>
                            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Sanremo'>
                                <CardBody className='bottone'>
                                <Link 
                                    className="bottone_link" 
                                    href='/visite/sanremo/santuario_madonna_della_costa'
                                    onMouseEnter={() => setIsHoveredSantuarioMadonnaDellaCosta(true)}
                                    onMouseLeave={() => setIsHoveredSantuarioMadonnaDellaCosta(false)}
                                    >Santuario Madonna della Costa{isHoveredSantuarioMadonnaDellaCosta && <i className="bi bi-chevron-right"></i>}
                                </Link>
                                </CardBody>
                            </Card>
                            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Sanremo'>
                                <CardBody className='bottone'>
                                <Link 
                                    className="bottone_link" 
                                    href='/visite/sanremo/fonte_di_santa_tecla'
                                    onMouseEnter={() => setIsHoveredFontediSantaTecla(true)}
                                    onMouseLeave={() => setIsHoveredFontediSantaTecla(false)}
                                    >Fonte di Santa Tecla{isHoveredFontediSantaTecla && <i className="bi bi-chevron-right"></i>}
                                </Link>
                                </CardBody>
                            </Card>
                            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Sanremo'>
                                <CardBody className='bottone'>
                                <Link 
                                    className="bottone_link" 
                                    href='/visite/sanremo/villa_nobel'
                                    onMouseEnter={() => setIsHoveredVillaNobel(true)}
                                    onMouseLeave={() => setIsHoveredVillaNobel(false)}
                                    >Villa Nobel{isHoveredVillaNobel && <i className="bi bi-chevron-right"></i>}
                                </Link>
                                </CardBody>
                            </Card>
                            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Sanremo'>
                                <CardBody className='bottone'>
                                <Link 
                                    className="bottone_link" 
                                    href='/visite/sanremo/villa_ormond'
                                    onMouseEnter={() => setIsHoveredVillaOrmond(true)}
                                    onMouseLeave={() => setIsHoveredVillaOrmond(false)}
                                    >Villa Ormond{isHoveredVillaOrmond && <i className="bi bi-chevron-right"></i>}
                                </Link>
                                </CardBody>
                            </Card>
                            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Sanremo'>
                                <CardBody className='bottone'>
                                <Link 
                                    className="bottone_link" 
                                    href='/visite/sanremo/mercato_annonario'
                                    onMouseEnter={() => setIsHoveredMercatoAnnonario(true)}
                                    onMouseLeave={() => setIsHoveredMercatoAnnonario(false)}
                                    >Mercato Annonario{isHoveredMercatoAnnonario && <i className="bi bi-chevron-right"></i>}
                                </Link>
                                </CardBody>
                            </Card>
                            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Sanremo'>
                                <CardBody className='bottone'>
                                <Link 
                                    className="bottone_link" 
                                    href='/visite/sanremo/bussola_vecchia'
                                    onMouseEnter={() => setIsHoveredBussolaVecchia(true)}
                                    onMouseLeave={() => setIsHoveredBussolaVecchia(false)}
                                    >Bussola Vecchia{isHoveredBussolaVecchia && <i className="bi bi-chevron-right"></i>}
                                </Link>
                                </CardBody>
                            </Card>
                            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Sanremo'>
                                <CardBody className='bottone'>
                                <Link 
                                    className="bottone_link" 
                                    href='/visite/sanremo/seborga'
                                    onMouseEnter={() => setIsHoveredSerborga(true)}
                                    onMouseLeave={() => setIsHoveredSerborga(false)}
                                    >Seborga{isHoveredSeborga && <i className="bi bi-chevron-right"></i>}
                                </Link>
                                </CardBody>
                            </Card>
                        </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
