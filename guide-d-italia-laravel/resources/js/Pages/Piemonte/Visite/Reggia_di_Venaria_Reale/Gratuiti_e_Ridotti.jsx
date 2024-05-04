import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link, Head } from '@inertiajs/react';
import {Card, CardBody, CardTitle, CardText} from 'react-bootstrap';

export default function Gratuiti_e_Ridotti(props) {
    return (
        <>
            <Head title="Gratuiti e Ridotti"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='gratuiti_e_ridotti' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Gratuiti e Ridotti</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Visita</p>
                    </div>
                    <div className="margin mt-3">
                        <p className='fst-italic text-center'>
                            Consulta le condizioni per avere diritto all’ingresso gratuito, ridotto e scontato.
                        </p>
                    </div>
                    <div className='row d-flex justify-content-center mx-0 mb-4'>
                        <Card style={{ width: '18rem' }}>
                            <CardBody>
                                <CardTitle className='text-center'>Ingressi Gratuiti</CardTitle>
                                <CardText>Scopri se hai diritto all'ingresso gratuito</CardText>
                                <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/ingressi_gratuiti' className='text-decoration-none color_link'>Scopri di più</Link>
                            </CardBody>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <CardBody>
                                <CardTitle className='text-center'>Ingressi Ridotti</CardTitle>
                                <CardText>Consulta le condizioni per avere diritto all'ingresso ridotto</CardText>
                                <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/ingressi_ridotti' className='text-decoration-none color_link'>Scopri di più</Link>
                            </CardBody>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <CardBody>
                                <CardTitle className='text-center'>Convenzioni</CardTitle>
                                <CardText>La Venaria Reale presenta diverse convenzioni per avere diritto ad ingressi agevolati e offerte vantaggiose</CardText>
                                <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/convenzioni' className='text-decoration-none color_link'>Scopri di più</Link>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="margin my-3 d-flex justify-content-between">
                        <p className="btn-card">
                            <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/quanto_costa' className='text-decoration-none text-light'>Quanto Costa</Link>
                        </p>
                        <p className="btn-card">
                            <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/impara_con_la_veneria_reale' className='text-decoration-none text-light'>Impara con La Veneria Reale</Link>
                        </p>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
