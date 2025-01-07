import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';


export default function Ponte_Vecchio(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='ponte_vecchio' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Ponte Vecchio</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Uno dei simboli di Firenze</h2>
                    <p>
                        <strong>Ponte Vecchio</strong> è uno dei simboli di <Link href='/destinazioni/toscana/firenze' className='text-decoration-none color_link'>Firenze</Link> e percorrerlo è un’esperienza unica. Ai lati è profilato da botteghe orafe mentre sopra passa il <b>Corridoio Vasariano</b> costruito 
                        per volere di Cosimo I nel 1565 per mettere in comunicazione <Link href='/visite/toscana/firenze/palazzo_vecchio' className='text-decoration-none color_link'>Palazzo Vecchio</Link>, cuore politico della città, e <Link href='/visite/toscana/firenze/palazzo_pitti' 
                        className='text-decoration-none color_link'>Palazzo Pitti</Link>, allora dimora dei Medici.
                    </p>
                    <p>
                        Venite di giorno per farvi abbagliare dalle vetrine ricolme di oro e pietre preziose ma tornate anche di sera, per scoprire che le <b>botteghe artigiane</b>, quando sono chiuse, paiono forzieri. Atmosfera romantica assicurata.
                    </p>
                    <p>
                        Fu costruito nel 1345 al posto di un ponte più vecchio distrutto da un’alluvione dell’Arno e si dice che sia il <b>ponte di pietra più antico d’Europa</b>. Fu anche l’unico ponte di Firenze a non essere distrutto dai bombardamenti della Seconda Guerra Mondiale.
                    </p>
                    <p>
                        Sin dal principio fu un ponte-mercato ma inizialmente ospitava botteghe di ogni tipo, specialmente macellerie. Solo dal 1593 fu dedicato esclusivamente all’oreficeria. Alcune botteghe conservano ancora l’usanza di avere il laboratorio sulla strada così potete vedere gli artigiani all’opera.
                    </p>
                    <p>
                        Per una splendida <b>vista sul Ponte Vecchio</b> invece raggiungere il ponte Santa Trinità. Il momento più bello è al tramonto, quando il cielo è ancora blu, si accendono le prime luci e il ponte si specchia nell’acqua.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1705.1044897406402!2d11.252392113981077!3d43.76802884439365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a56aaa2dcb667%3A0x40310ae830e702e8!2sPonte%20Vecchio!5e1!3m2!1sit!2sit!4v1713192303400!5m2!1sit!2sit"
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
