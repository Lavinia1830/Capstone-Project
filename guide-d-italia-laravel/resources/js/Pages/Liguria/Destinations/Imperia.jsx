import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';

export default function Imperia(props) {

    const [isHoveredBasilicadiSanMaurizio, setIsHoveredBasilicadiSanMaurizio] = useState(false);
    const [isHoveredPasticceriaPiccardo, setIsHoveredPasticceriaPiccardo] = useState(false);

    return (
        <>
            <Head title='Imperia'/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='imperia' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Imperia</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Città</p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Verde, olio e storia nel Ponente ligure</h2>
                        <p>
                            La provincia ligure di <strong>Imperia</strong> si estende lungo <Link href='/mare/liguria/la_riviera_ligure_di_ponente' 
                            className='text-decoration-none color_link'>la riva di Ponente</Link>, ospitando diverse città celebri per l'attività balneare, 
                            come <b>Bordighera</b> e <Link href='/destinazioni/liguria/sanremo' className='text-decoration-none color_link'>Sanremo</Link>, quest'ultima casa del tradizionale 
                            Festival della Canzone Italiana. La zona è conosciuta per la produzione di olio e live. Dal borgo di Taggia proviene la varietà dell'<b>oliva taggiasca</b>, piccola 
                            e scura, che si contraddistingue per il sapone delicato.
                        </p>
                        <p>
                            La città di <strong>Imperia</strong> vanta il pregio di ospitare la chiesa più grande della <Link href='/liguria' 
                            className='text-decoration-none color_link'>Liguria</Link>: la <Link href='/visite/liguria/imperia/basilica_di_san_maurizio' 
                            className='text-decoration-none color_link'>Basilica di San Maurizio</Link>, affiancata da due campanili gemelli che raggiungono i 36 metri. Il capoluogo ligure è 
                            inutile noto per essere la città natale della scrittore <b>Admondo De Amicis</b>, autore del celebre romanzo <i>Cuore</i>. La biblioteca comunale ospita una fedele 
                            ricostruzione del suo studio, come foto, appunti e una collezione di oltre 3 mila volumi.
                        </p>
                        <p>
                            Se vi trovate nei pressi di <strong>Imperia</strong>, non può mancare una visita alla <Link href='/visite/liguria/imperia/pasticceria_piccardo' 
                            className='text-decoration-none color_link'>Pasticceria Piccardo</Link>, fondata nel 1905 e oggi inserita nella lista Locali Storici d'Italia, dove si racconta 
                            che <b>Fausto Coppi</b>, con un vantaggio di 14 minuti, abbandonò la Milano Sanremo del 1946 ed entrò per bere un caffè. 
                        </p>
                    </div>
                    <div className='row d-flex justify-content-center mx-0 mb-4'>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Imperia'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/visite/liguria/imperia/basilica_di_san_maurizio'
                                onMouseEnter={() => setIsHoveredBasilicadiSanMaurizio(true)}
                                onMouseLeave={() => setIsHoveredBasilicadiSanMaurizio(false)}
                                >Basilica di San Maurizio {isHoveredBasilicadiSanMaurizio && <i className="bi bi-chevron-right"></i>}
                            </Link>
                            </CardBody>
                        </Card>
                        <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Imperia'>
                            <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/visite/liguria/imperia/pasticceria_piccardo'
                                onMouseEnter={() => setIsHoveredPasticceriaPiccardo(true)}
                                onMouseLeave={() => setIsHoveredPasticceriaPiccardo(false)}
                                >Pasticceria Piccardo {isHoveredPasticceriaPiccardo && <i className="bi bi-chevron-right"></i>}
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
