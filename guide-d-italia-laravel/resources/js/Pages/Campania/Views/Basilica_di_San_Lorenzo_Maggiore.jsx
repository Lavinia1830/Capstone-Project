import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Basilica_di_San_Lorenzo_Maggiore(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='basilica_di_san_lorenzo_maggiore' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Basilica di San Lorenzo Maggiore</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Con l’avvento di Carlo I d’Angiò e quindi della dinastia Francese, Napoli divenne capitale del Regno delle due Sicilie. Considerando che la città fu lasciata in un lungo stato di abbandono, dai Normanni prima e gli Svevi poi, è chiaro che tale evento storico fu la premessa per una 
                        rinascita urbana ed amministrativa per Napoli, con una conseguente rinascita anche culturale ed artistica.
                    </p>
                    <p>
                        La <strong>Basilica di San Lorenzo</strong> fu la prima chiesa ad essere ricostruita secondo l’inconfondibile stile gotico francese, introdotto dagli architetti e dalle maestranze a seguito di Carlo I.<br/>
                        La pianta attuale della Basilica, costruita secondo le esigenze dello spirito francescano, si presenta con una sola grande navata centrale, Abside e 23 cappelle laterali.
                    </p>
                    <p>
                        L’Abside, tra le più audaci e di concezione gotica che si trovi in Italia, ha uno spazio che si sviluppa secondo lo stile gotico francese, non solo per la planimetria circolare con deambulatorio e cappelle radiali, ma anche per le volte a crociera costolonate su archi ogivali, per i 
                        pilastri polistili, per gli archi rampanti e per i contafforti.
                    </p>
                    <p>
                        Tra le cappelle di tutta la basilica, vi è quella dedicata alla Madonna degli Angeli, la quale presenta affreschi realizzati nel 1333-1334 da Antonio Cavarretto, discepolo si Giotto, dedicati alla vita della Vergine.
                    </p>
                    <p>
                        Il Transetto invece presenta al suo centro l’altare maggiore in marmo, eseguito nel 1500 dallo scultore Giovanni Merliano da Nola, ponendo al centro dello stesso la statua di San Lorenzo, il martire a cui è dedicata la chiesa, a destra San Francesco ed a Sinistra Sant’Antonio.
                    </p>
                    <p>
                        Sotto la statua di San Lorenzo è scolpito, con fine realismo, il suo martirio. Sotto San Francesco il miracolo del lupo di Gubbio ammansito, e sotto Sant’Antonio il miracolo dei pesci che ascoltano la sua parola.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2526.341013941349!2d14.248583137433346!3d40.836941274750075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b08525b44e79f%3A0x3f8bbbcb0c24edc9!2sPalazzo%20Reale%20di%20Napoli!5e1!3m2!1sit!2sit!4v1713355638209!5m2!1sit!2sit"
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
