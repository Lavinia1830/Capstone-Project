import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';

export default function Camogli(props) {

    const [isHoveredGolfoParadiso, setIsHoveredGolfoParadiso] = useState(false);
    const [isHoveredCastelloDragonaria, setIsHoveredCastelloDragonaria] = useState(false);
    const [isHoveredMuseoMarinaro, setIsHoveredMuseoMarinaro] = useState(false);
    const [isHoveredASantaFruttuoso, setIsHoveredASantaFruttuoso] = useState(false);


    return (
        <>
            <Head title="Camogli"/>
            <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            >
                <main>
                    <div className='camogli' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Camogli</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Città</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            <strong>Camogli</strong> e dintorni (con la bellissima Abbazia di San Fruttuoso) rappresentano, sulla mappa della Liguria e degli immediati pressi di Genova, quell’anima marinara che ha fatto grande la regione. Camogli è un borgo che sembra emerso dall’acqua, come se si aggrappasse agli scogli dopo una 
                            mareggiata. Ed è per questo che non può mancare in un itinerario della Liguria che ne esplora tutte le possibilità, via mare e via terra.
                        </p>
                        <h2 className='color-subtitle'>Visitare Camogli</h2>
                        <p>
                            Vuol dire scoprire l’incredibile architettura delle sue case, costrette a salire e "incendiate" da colori vivaci. Ma anche dalle ombre dense dei caruggi e dei passaggi a volta che rimbombano dei racconti dei vecchi lupi di mare. Da vedere a Camogli l’immancabile chiesa sul porticciolo e la fortezza che 
                            sfida le onde: gli ingredienti per la migliore cartolina rivierasca ci sono tutti.
                        </p>
                        <p>
                            Un tipico <b>paese marinaro</b> caratterizzato da case alte e dipinte con colori vivaci che affascinano la vista. Un luogo romantico, immerso in una magnifica cornice naturale, che da secoli incanta i turisti di tutto il mondo in cerca di <b>relax, cultura, mare e buona cucina</b>.
                        </p>
                        <p>
                            Il borgo dedito inizialmente alle <b>attività marittime</b> e <b>commerciali</b> nel corso degli anni ha sviluppato alcune caratteristiche <b>attività artigianali</b> come la filatura, la tessitura e la tintura dei tessuti.
                        </p>
                        <div className='row d-flex justify-content-center mx-0 mb-4'>
                            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Camogli'>
                                <CardBody className='bottone'>
                                <Link 
                                    className="bottone_link" 
                                    href='/visite/camongli/golfo_paradiso'
                                    onMouseEnter={() => setIsHoveredGolfoParadiso(true)}
                                    onMouseLeave={() => setIsHoveredGolfoParadiso(false)}
                                    >Golfo Paradiso {isHoveredGolfoParadiso && <i className="bi bi-chevron-right"></i>}
                                </Link>
                                </CardBody>
                            </Card>
                            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Camogli'>
                                <CardBody className='bottone'>
                                <Link 
                                    className="bottone_link" 
                                    href='/visite/camongli/castello_della_dragonaria'
                                    onMouseEnter={() => setIsHoveredCastelloDragonaria(true)}
                                    onMouseLeave={() => setIsHoveredCastelloDragonaria(false)}
                                    >Castello della Dragonara {isHoveredCastelloDragonaria && <i className="bi bi-chevron-right"></i>}
                                </Link>
                                </CardBody>
                            </Card>
                            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Camogli'>
                                <CardBody className='bottone'>
                                <Link 
                                    className="bottone_link" 
                                    href='/visite/camongli/museo_marinaro'
                                    onMouseEnter={() => setIsHoveredMuseoMarinaro(true)}
                                    onMouseLeave={() => setIsHoveredMuseoMarinaro(false)}
                                    >Museo Marinaro {isHoveredMuseoMarinaro && <i className="bi bi-chevron-right"></i>}
                                </Link>
                                </CardBody>
                            </Card>
                            <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Camogli'>
                                <CardBody className='bottone'>
                                <Link 
                                    className="bottone_link" 
                                    href='/visite/camongli/abbazia_di_san_fruttuoso'
                                    onMouseEnter={() => setIsHoveredASantaFruttuoso(true)}
                                    onMouseLeave={() => setIsHoveredASantaFruttuoso(false)}
                                    >Abbazia di San Fruttuoso {isHoveredASantaFruttuoso && <i className="bi bi-chevron-right"></i>}
                                </Link>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
        
    )
}
