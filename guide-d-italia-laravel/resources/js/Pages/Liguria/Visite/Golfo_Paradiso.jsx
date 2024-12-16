import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Golfo_Paradiso(props) {
  return (
    <>
        <Head title="Golfo Paradiso"/>
        <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        >
            <main>
                <div className='golfo_paradiso' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Golfo Paradiso</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <h2 className='color-subtitle'>I gioielli della Riviera di Levante</h2>
                    <p>
                        Ci sono luoghi che racchiudono nel proprio nome la propria storia e la propria indiscutibile bellezza. <strong>Golfo Paradiso</strong> è uno di 
                        questi. Questo tratto di costa compreso tra <Link href='/destinazioni/genova' className='text-decoration-none color_link'>Genova</Link> e il Monte 
                        di Portofino è un susseguirsi di piccole insenature, graziosi borghi e colline a picco sul mare blu di Liguria, una meta imperdibile per chiunque 
                        sia alla scoperta della <b>Riviera di Levante</b>.
                    </p>
                    <p>
                        Scoprite il Golfo Paradiso seguendo la <b>via Aurelia</b>, strada antichissima che attraversa tutta la Liguria. Si parte da <b>Nervi</b>, quartiere 
                        periferico di Genova vera e propria “terra di mezzo” tra la città e la Riviera. Raggiungete poi <b>Bogliasco</b>, borgo di marinai il cui ponte 
                        romano vi regalerà uno splendido scorcio panoramico sulle due rive del Rio Poggio. A <b>Pieve Ligure</b> perdetevi tra le 
                        strette <i>creuze</i> avvolti dal profumo delle mimose, a cui qui è dedicata anche una sagra. Arrivate così a <b>Sori</b>, che diede i natali agli 
                        antenati di Pablo Picasso, per poi fermarvi a <b>Recco</b> per una pausa golosa a base della caratteristica focaccia al formaggio.
                    </p>
                    <p>
                        Negli Anni 70 la fortezza divenne sede dell’<b>Acquario Tirrenico</b>, un piccolo museo che ospitava diverse specie marine tipiche di queste acque, tutte procurate dal custode del castello. Alla chiusura dell’Acquario, tutti i pesci vennero trasferiti in quello di Genova.
                    </p>
                    <p>
                        Infine, <Link href='/destinazioni/camogli' className='text-decoration-none color_link'>Camogli</Link>, l’indiscussa perla del Golfo. Questo borgo, uno dei più belli di tutta la Liguria, vi farà innamorare con le sue case color pastello, il Castello della Dragonara e il romantico porticciolo. Se l’attività fisica non vi spaventa, indossate scarpe comode e raggiungete a piedi l’abbazia di San Fruttuoso, incastonata in un’insenatura tra Punta Chiappa e Portofino.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2758.677786874498!2d9.150699850957448!3d44.35146204365936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d3607c8074780b%3A0x61119c57cee406b9!2sGolfo%20Paradiso!5e1!3m2!1sit!2sit!4v1712738574604!5m2!1sit!2sit"
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
    </>
    
  )
}
