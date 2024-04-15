import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';

export default function Museo_Civico_Medievale(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='museo_civico_medievale' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Museo Civico Medievale</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Storia e descrizione</h2>
                    <p>
                        Il <strong>Museo Civico Medievale di Bologna</strong> fa parte dei Musei Civici d’Arte Antica del capoluogo emiliano e ospita una svariata tipologia di opere d’arte e manufatti di epoca medievale e rinascimentale.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h3 className="color-subtitle">Palazzo Ghisilardi-Fava</h3>
                    <p>
                        Dal 1985 il museo è ospitato all’interno di uno dei più prestigiosi palazzi bolognesi, il rinascimentale <b>Palazzo Ghisilardi-Fava</b>.
                    </p>
                    <p>
                        L’edificio fu costruito tra il 1483 e il 1491 da mastro Zilio di Battista Montanari su incarico del notaio <b>Bartolomeo Ghisilardi</b>, che lo adibì a palazzo di famiglia.
                    </p>
                    <p>
                        Sorse su un <b>preesistente edificio medievale</b> fatto erigere agli inizi del Trecento dal facoltoso <b>Alberto Conoscenti</b>, che fu capitano di milizie e poi tesoriere del Comune di Bologna.
                    </p>
                    <p>
                        Nel 1546 venne poi acquistato dalla <b>famiglia Fava</b>, proprietaria anche dei due palazzi adiacenti.
                    </p>
                    <p>
                        Grazie ai lavori compiuti negli anni ’70, dal cortile interno del palazzo è tornata a essere visibile la <b>torre dei Conoscenti</b>, che era stata inglobata all’interno della costruzione medievale. Si tratta di casa-torre del Duecento ed è una delle 20 <Link href='/visite/bologna/le_due_torri' 
                        className='text-decoration-none color_link'>torri gentilizie</Link>  ancora esistenti nel centro di Bologna.
                    </p>
                    <p>
                        Nel 1505 fu danneggiata da un forte <b>terremoto</b> che fece cadere dei calcinacci sul letto di Bartolomeo Ghisilardi, che aveva la sua camera proprio all’interno della torre e che morì pochi giorni dopo proprio a seguito dello spavento preso in quella circostanza.
                    </p>
                    <p>
                        I citati lavori hanno portato alla luce anche dei <b>reperti di età romana</b> e cospicue tracce della precedente struttura medievale nonché della <b>rocca imperiale</b> del XII secolo.
                    </p>
                    <p>
                        Curiosità: fu durante una cena di gala tenutasi nel 1929 nel ristorante del palazzo – all’epoca adibito a Palazzo del Fascio – che <b>Enzo Ferrari</b> e i suoi soci decisero la nascita della famosa scuderia automobilistica modenese.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h3 className="color-subtitle">Il museo</h3>
                    <p>
                        Il <strong>Museo Civico Medievale di Bologna</strong> è uno dei principali musei d’arte medievale in Italia ed è dedicato alla conservazione e alla valorizzazione del <b>patrimonio artistico della città di Bologna</b> e della regione Emilia-Romagna inerente principalmente, ma non solo, il periodo 
                        che va <b>dal XIII al XV secolo</b>.
                    </p>
                    <p>
                        La collezione permanente del museo comprende dipinti, sculture, ceramiche, argenti e tessuti, tra cui opere di artisti locali come <b>Vitale da Bologna</b>, <b>Jacopo della Quercia</b> e <b>Niccolò dell’Arca</b>.
                    </p>
                    <p>
                        Il museo ospita spesso anche una varietà di <b>esposizioni temporanee</b> e offre programmi educativi per visitatori di tutte le età.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d842.1033179566873!2d11.341658337672879!3d44.49630346632007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fd4966f3550d3%3A0xbf5db8cdcfa49c7c!2sMuseo%20Civico%20Medievale!5e1!3m2!1sit!2sit!4v1713166189206!5m2!1sit!2sit"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map"
                        className='mx-auto mappa'
                    ></iframe>
                </div>
            </main>
            <Footer/>
        </AuthenticatedLayout>
    )
}
