import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';

export default function Palazzo_dei_Normanni(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='palazzo_dei_normanni' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Palazzo dei Normanni</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className='margin mt-3'>
                    <h2 className="color-subtitle">Scrigno di arte e storia nel cuore di Palermo</h2>
                    <p>
                        <b>Storia e arte</b> si fondono in uno dei monumenti più affascinanti di tutta la <Link href='/sicilia' className='text-decoration-none color_link'>Sicilia</Link>. Il <strong>Palazzo dei Normanni</strong>, o <strong>Palazzo Reale</strong>, è una meta imperdibile per 
                        chiunque sia alla scoperta di <Link href='/destinazioni/sicilia/palermo' className='text-decoration-none color_link'>Palermo</Link>. Le sue sale raccontano la storia del capoluogo e della Sicilia intera dai primi insediamenti fenici fino all’età moderna.  
                    </p>
                    <p>
                        Vero fiore all’occhiello del Palazzo è la <b>Cappella Palatina</b>, massima espressione dell’arte arabo-normanna. La chiesa, costruita nel 1132 per volere di Ruggero II, era la cappella privata della famiglia reale. Alzate gli occhi e lasciatevi incantare dagli splendidi 
                        mosaici dorati che ricoprono interamente le pareti e dalle muqarnas di legno che pendono dal soffitto.
                    </p>
                    <p>
                        Qui, la cultura bizantina, quella latina e quella araba si fondono e restituiscono un risultato unico al mondo. A fare da padrone è sicuramente il mosaico che decora l'abside e che rappresenta il <b>Cristo Pantocratore</b> nell’atto di benedire i fedeli con la mano destra.
                    </p>
                    <p>
                        Ma ogni angolo del Palazzo è un piccolo tesoro da scoprire. Come la Sala d’Ercole, oggi sede del Parlamento Regionale siciliano, la Sala Pompeiana, con le sue decorazioni in stile neoclassico, o l’esotica Sala Cinese. 
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1562.219067835504!2d13.352419059588705!3d38.11097276890502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1319ef6460943f45%3A0x71eca31626fb2bc5!2sPalazzo%20dei%20Normanni!5e1!3m2!1sit!2sit!4v1713455891001!5m2!1sit!2sit"
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
