import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link, Head } from '@inertiajs/react';
import {Card, CardBody, CardTitle, CardText} from 'react-bootstrap';


export default function Il_Castello_della_Mandria(props) {
    return (
        <>
            <Head title="Il Castello della Mandria"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='il_castello_della_mandria' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Il Castello della Mandria</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className='text-center fst-italic'>
                            Immerso nei 3.000 ettari di prati e boschi del Parco naturale, il Castello della Mandria si trova a solo 2,5 km circa dalla Reggia di Venaria: scoprite la dimora prediletta del primo Re d'Italia con i suoi affascinanti Appartamenti Reali ricchi di arte e di storia.
                        </h2>
                    </div>
                    <div className='row d-flex justify-content-center mx-0 mb-4 mt-3'>
                        <Card style={{ width: '18rem' }}>
                            <CardBody>
                                <CardTitle className='text-center'>Breve Storia</CardTitle>
                                <CardText>Ripercorri la storia del Castello della Mandria e della sua costruzione</CardText>
                                <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/castello_mandria/breve_storia_castello_mandria' className='text-decoration-none color_link'>Scopri di più</Link>
                            </CardBody>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <CardBody>
                                <CardTitle className='text-center'>Gli Appartamenti Reali</CardTitle>
                                <CardText>Gli Appartamenti Reali sono ricchi di opere d'arte e arredi voluti dal primo re d'Italia</CardText>
                                <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/castello_mandria/appartamenti_reali' className='text-decoration-none color_link'>Scopri di più</Link>
                            </CardBody>
                        </Card>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
