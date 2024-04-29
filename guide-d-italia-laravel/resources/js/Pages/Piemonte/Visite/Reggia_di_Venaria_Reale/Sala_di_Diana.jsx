import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link, Head } from '@inertiajs/react';
import { Image } from 'react-bootstrap';
import Sala_di_diana_reggia_reale from '../../../../../assets/Piemonte/Medda_Sala_di_diana_reggia_reale_Torino_Piemonte.jpg';

export default function Sala_di_Diana(props) {
    return (
        <>
            <Head title="Sala di Diana"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='sala_di_diana' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Sala di Diana</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <h3 className='text-center color-subtitle fst-italic'>
                        Il fulcro della Reggia di Diana è costituito dalla sala centrale omonima, alla quale si accedeva dopo aver percorso il cortile d’accesso e quello d’onore.
                        </h3>
                        <Image src={Sala_di_diana_reggia_reale} className='mx-auto w-50'/>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Di forma rettangolare, ricchissima di stucchi e rappresentazioni allegoriche tutte incentrate sulla caccia, la <strong>Sala di Diana</strong> sfoggia un triplice registro di decorazioni: dalla volta affrescata d’Olimpo, opera di <b>Jan Miel</b>, dove 
                            campeggia Giove che dona a Diana “<i>delle cacce il sommo impero</i>”, lo sguardo del visitatore può scendere a sette dei dieci enormi ritratti equestri dei duchi e della corte un tempo presenti, firmati da vari pittori a servizio ducale.<br/>
                            La vista può fermarsi infine sulle dieci tele del registro inferiore di Jan Miel, tutte sempre a tema venatorio (<i>la Caccia al Cervo, alla Lepre, all’Orso, alla Volpe, al Cinghiale, la Morte del cervo, l’Andar al bosco, l’Assemblea, il Lasciar correre, 
                            la Curea</i>).<br/>
                            La Sala, utilizzata nel Seicento per sontuosi banchetti e ricevimenti, è idealmente tagliata a metà dall’asse prospettico castellamontiano che da Est, dal borgo cittadino, passa appunto per la Sala di Diana per poi proseguire per un chilometro e mezzo a 
                            Ovest verso i Giardini, ed è posta a metà tra l’inizio della Via Maestra del borgo e il tratto finale dell’Allea Centrale dei Giardini, dove si trovava il Tempio di Diana.
                        </p>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
