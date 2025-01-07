import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link, Head } from '@inertiajs/react';
import {Card, CardBody, CardTitle, CardText} from 'react-bootstrap';

export default function I_Giardini(props) {
    return (
        <>
            <Head title="I Giardini"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='i_giardini' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>I Giardini</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className='text-center fst-italic'>
                            I Giardini della Reggia sono uno stretto connubio tra antico e moderno, un dialogo virtuoso tra insediamenti archeologici e opere contemporanee, un inno alla natura e al paesaggio.
                        </h2>
                    </div>
                    <div className='row d-flex justify-content-center mx-0 mb-4'>
                        <Card style={{ width: '18rem' }}>
                            <CardBody>
                                <CardTitle className='text-center'>Breve Storia</CardTitle>
                                <CardText>Ripercorri la storia della Reggia e delle sue fasi costruttive</CardText>
                                <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/i_giardini/breve_storia' className='text-decoration-none color_link'>Scopri di più</Link>
                            </CardBody>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <CardBody>
                                <CardTitle className='text-center'>Parco Alto</CardTitle>
                                <CardText>Scopri Il Teatro di Storia e Magnificenza, il percorso espositivo della Reggia</CardText>
                                <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/i_giardini/parco_alto' className='text-decoration-none color_link'>Scopri di più</Link>
                            </CardBody>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <CardBody>
                                <CardTitle className='text-center'>Parco Basso</CardTitle>
                                <CardText>Scopri il Parco Basso, con la Peschiera e le altre principali attrazioni</CardText>
                                <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/i_giardini/parco_basso' className='text-decoration-none color_link'>Scopri di più</Link>
                            </CardBody>
                        </Card>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
