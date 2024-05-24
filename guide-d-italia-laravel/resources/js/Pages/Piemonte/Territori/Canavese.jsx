import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link, Head } from '@inertiajs/react';

export default function Canavese(props) {
    return (
        <>
            <Head title="Canavese"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='canavese' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Canavese</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Territori</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Tra la Serra di Ivrea, il Po e le Alpi Graie, il <b>Canavese</b> è una regione storica solcata dalla <b>Dora Baltea</b> e punteggiata da 
                            laghi glaciali. Il centro più importante è <Link href='/destinazioni/piemonte/ivrea' className='text-decoration-none color_link'>Ivrea</Link>, 
                            una città di origini celtiche che diventò poi la romana Eporedia e dove si tiene lo storico <b>Carnevale</b>.
                        </p>
                        <p>
                            Il cuore del Canavese è l’<Link href='/visite/piemonte/ivrea/anfiteatro_morenico' className='text-decoration-none color_link'>Anfiteatro 
                            Morenico di Ivrea</Link>, un rilievo di origine glaciale dove si trovano il Lago Viverone e il Lago Sirio, entrambi balneabili. Potete 
                            percorrerlo anche a piedi seguendo uno dei molti <b>itinerari escursionistici</b>, tutti ben segnalati. Il più lungo è l’Alta Via 
                            dell’Anfiteatro Morenico che corre per 120 chilometri lungo tutto il perimetro.
                        </p>
                        <p>
                            Il Canavese è anche ricco di castelli. Il più famoso è il <Link href='/visite/piemonte/ivrea/castello_di_ivrea' 
                            className='text-decoration-none color_link'>Castello di Ivrea</Link> del 1358 con le sue torri rosse. Da non perdere 
                            il <Link href='/visite/piemonte/ivrea/castello_di_aglie' className='text-decoration-none color_link'>Castello di Agliè</Link>, costruito 
                            nel XII secolo e rifatto in stile barocco nel Seicento. Lo circonda un bellissimo parco all’inglese e all’italiana. Splendido anche 
                            il <Link href='/visite/piemonte/ivrea/castello_di_masino' className='text-decoration-none color_link'>Castello di Masino</Link> di epoca 
                            alto-medievale e la seicentesca <Link href='/visite/piemonte/torino/reggia_di_venaria_reale' className='text-decoration-none color_link'>Reggia 
                            di Venaria Reale</Link>.
                        </p>
                        <p>
                            Scoprite anche i borghi che punteggiano la regione, come <b>Chivasso</b>, <b>Ciriè</b>, <b>Rivarolo</b>, <b>Cuorgnè</b> e <b>Castellamonte</b>, 
                            ciascuno con un carattere inconfondibile e tradizioni centenarie.
                        </p>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
