import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';
import {Card, CardBody} from 'react-bootstrap';
import Footer from '@/Components/Footer';

export default function Emilia_Romagna(props) {

    const [isHoveredBologna, setIsHoveredBologna] = useState(false);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='text-center emilia_romagna'>
                    <h1>Emilia Romagna</h1>
                </div>
                <div className='text-center margin mt-3'>
                    <p>
                        La cartina dell’<strong>Emilia Romagna</strong> è costellata di cose da fare e da vedere: attività che spaziano dall’esplorazione naturalistica dell’entroterra e dei colli, delle sue città più amate come <Link href='/destinazioni/bologna' className='text-decoration-none 
                        color_link'>Bologna</Link>, <b>Parma</b>, <b>Modena</b> o <b>Ferrara</b>. Ma anche delle coste, che regalano gioie di giorno in pieno sole e quando la nightlife si accende. In Emilia Romagna, turismo fa rima con sostenibilità e green. Rimini con il suo anello verde è 
                        meta perfetta per chi ama esplorare l’Italia in sella a una bici. <b>Riccione</b> e <b>Cesenatico</b> colpiscono con la loro vita notturna ma anche con la bellezza dei loro profilo che si riflettono sull’acqua. E cosa dire di Bologna, amatissima da chi la sceglie come 
                        città universitaria ma anche per chi decide di esplorare questa terra gentile in lungo e in largo.
                    </p>
                    <h2 className='color-subtitle'>Cosa vedere in Emilia Romagna</h2>
                    <p>
                        Ma anche (e soprattutto) cosa mangiare. Dalla piada alla tigella, dai salumi golosi al lambrusco. Le vacanze in <strong>Emilia Romagna</strong> riempiono lo stomaco e il serbatoio personale di felicità. Ma non manca l’arte, ad esempio a Ravenna con la sua arte bizantina; 
                        a <b>Ferrara</b>, col suo <b>Palazzo dei Diamanti</b>; a <b>Piacenza</b>, col <b>Castello di Rivalta</b>. Ce n’è per tutti e infatti l’<strong>Emilia Romagna</strong> tutti la amano. Tra labirinti, borghi e mosaici, la regione offre uno spaccato di vita italiana, che 
                        solo per un certo (e stereotipato) verso si vive sotto l’ombrellone.
                    </p>
                </div>
                <div className='row d-flex justify-content-center mx-0 mb-4'>
                    <Card className='col-sm-12 col-md-6 col-lg-4 px-0 card_Emilia_Romagna'>
                        <CardBody className='bottone'>
                            <Link 
                                className="bottone_link" 
                                href='/destinazioni/bologna'
                                onMouseEnter={() => setIsHoveredBologna(true)}
                                onMouseLeave={() => setIsHoveredBologna(false)}
                                >Bologna {isHoveredBologna && <i className="bi bi-chevron-right"></i>}
                            </Link>
                        </CardBody>
                    </Card>
                </div>
            </main>
            <Footer/>
        </AuthenticatedLayout>
    )
}
