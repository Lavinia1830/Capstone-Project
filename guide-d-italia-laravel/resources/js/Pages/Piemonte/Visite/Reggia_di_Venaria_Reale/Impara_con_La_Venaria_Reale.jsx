import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';
import {Card, CardBody, CardTitle, CardText} from 'react-bootstrap';

export default function Impara_con_La_Venaria_Reale(props) {

    const [Servizi, setServizi] = useState(false);
    const [Scuole, setScuole] = useState(false);
    const [Famiglie, setFamiglie] = useState(false);
    const [ProgettiSpeciali, setProgettiSpeciali] = useState(false);
    const [LaboratoriFamiglie, setLaboratoriFamiglie] = useState(false);

    const handleServizi = (e) => {
        e.preventDefault();
        setServizi(!Servizi);
    };

    const handleScuole = (e) => {
        e.preventDefault();
        setScuole(!Scuole);
    };

    const handleFamiglie = (e) => {
        e.preventDefault();
        setFamiglie(!Famiglie);
    };

    const handleProgettiSpeciali =(e) => {
        e.preventDefault();
        setProgettiSpeciali(!ProgettiSpeciali);
    };

    const handleLaboratoriFamiglie =(e) => {
        e.preventDefault();
        setLaboratoriFamiglie(!LaboratoriFamiglie);
    };

    return (
        <>
            <Head title="Impara con La Venaria Reale"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='impara_con_la_venaria_reale' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Impara con La Venaria Reale</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Visita</p>
                    </div>
                    <div className="margin mt-3">
                        <p className='fst-italic text-center'>
                            La Venaria Reale propone itinerari tematici, laboratori, attività ludiche che offrono a tutti i visitatori, alle scuole, ai gruppi e alle famiglie, l’opportunità di crescere, imparare e scoprire 
                            la storia, l’architettura, il rapporto con il territorio o il racconto della vita di corte
                        </p>
                    </div>
                    <div className='row d-flex justify-content-center mx-0 mb-4'>
                        <Card style={{ width: '18rem' }}>
                            <CardBody>
                                <CardTitle className='text-center'>Servizi Educativi</CardTitle>
                                <CardText>I Servizi Educativi della Reggia progettano e organizzano tutte le attività didattiche e assistono le scuole nella pianificazione della loro visita.</CardText>
                                {Servizi ? (
                                    <div>
                                        <p>
                                            <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/i_nostri_obiettivi' className='text-decoration-none color_link'>I nostri obiettivi</Link><br/>
                                        </p>
                                        
                                        <Link onClick={handleServizi} className='text-decoration-none color_link'>Nascondi</Link>
                                    </div>
                                ) : (
                                    <Link onClick={handleServizi} className='text-decoration-none color_link'>Scopri di più</Link>
                                )}
                            </CardBody>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <CardBody>
                                <CardTitle className='text-center'>Scuole</CardTitle>
                                <CardText>Le proposte per le scuole offrono nuovi sguardi per leggere e raccontare la Reggia, i Giardini e le mostre.</CardText>
                                {Scuole ? (
                                    <div>
                                        <p>Altri dettagli qui...</p>
                                        <Link onClick={handleScuole} className='text-decoration-none color_link'>Nascondi</Link>
                                    </div>
                                ) : (
                                    <Link onClick={handleScuole} className='text-decoration-none color_link'>Scopri di più</Link>
                                )}
                            </CardBody>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <CardBody>
                                <CardTitle className='text-center'>Famiglie</CardTitle>
                                <CardText>La Venaria Reale offre diverse opportunità di visita per le famiglie e per i più piccoli, con laboratori, visite speciali e iniziative dedicate.</CardText>
                                {Famiglie ? (
                                    <div>
                                        <p>Altri dettagli qui...</p>
                                        <Link onClick={handleFamiglie} className='text-decoration-none color_link'>Nascondi</Link>
                                    </div>
                                ) : (
                                    <Link onClick={handleFamiglie} className='text-decoration-none color_link'>Scopri di più</Link>
                                )}
                            </CardBody>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <CardBody>
                                <CardTitle className='text-center'>Progetti Speciali</CardTitle>
                                <CardText>Progetti educativi e di promozione culturale realizzati con istutuzioni del territorio per offrire alle scuole strumenti educativi innovativi.</CardText>
                                {ProgettiSpeciali ? (
                                    <div>
                                        <p>Altri dettagli qui...</p>
                                        <Link onClick={handleProgettiSpeciali} className='text-decoration-none color_link'>Nascondi</Link>
                                    </div>
                                ) : (
                                    <Link onClick={handleProgettiSpeciali} className='text-decoration-none color_link'>Scopri di più</Link>
                                )}
                            </CardBody>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <CardBody>
                                <CardTitle className='text-center'>Laboratori on line per famiglie</CardTitle>
                                <CardText>Laboratori on line per famiglie da svolgere a casa</CardText>
                                {LaboratoriFamiglie ? (
                                    <div>
                                        <p>Altri dettagli qui...</p>
                                        <Link onClick={handleLaboratoriFamiglie} className='text-decoration-none color_link'>Nascondi</Link>
                                    </div>
                                ) : (
                                    <Link onClick={handleLaboratoriFamiglie} className='text-decoration-none color_link'>Scopri di più</Link>
                                )}
                            </CardBody>
                        </Card>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
