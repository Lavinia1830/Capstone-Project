import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';

export default function Cattedrale_di_Palermo(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='cattedrale_di_palermo' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Cattedrale di Palermo</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className='margin mt-3'>
                    <h2 className="color-subtitle">La storia della città attraverso il primo luogo di culto</h2>
                    <p>
                        Patrimonio UNESCO e parte dell’itinerario arabo-normanno di <Link href='/destinazioni/sicilia/palermo' className='text-decoration-none color_link'>Palermo</Link>, la nuova Cattedrale è stata <b>costruita intorno al 1185</b> per decisione dell'<b>arcivescovo Gualtiero Offamilio</b> e 
                        riflette una commistione di stili architettonici differenti che la rendono unica nel suo genere.
                    </p>
                    <p>
                        Ha subito tantissime trasformazioni a seguito dell’avvicendarsi delle diverse fasi storiche: in origine grande tempio consacrato alla Vergine Maria, in seguito alla conquista araba divenne moschea, poi riconvertita in edificio di culto cristiano, dopo l’insediamento dei Normanni. 
                        La più importante delle trasformazioni risale al XVIII che ha donato alla spazialità barocca una corretta proporzionalità neoclassica in cui la cupola è l’elemento essenziale d’equilibrio. Una delle <b>maggiori attrattive</b> per chi visita la Cattedrale di Palermo sono <b>le tombe 
                        reali</b>, in particolare quella dell’imperatore <b>Federico II</b> e dei familiari, gli imperatori <b>Enrico VI</b> di Hohenstaufen e <b>Costanza d’Altavilla</b>. Il Duomo è considerato oggi il più importante luogo di culto di Palermo e meta di devoti a Santa Rosalia, patrona della 
                        città, a cui è intitolata la cappella. 
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d928.8594113867122!2d13.3554115234698!3d38.11424413447295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1319ef6198ea25c9%3A0x8cda5f90f930776a!2sCattedrale%20di%20Palermo!5e1!3m2!1sit!2sit!4v1713522767168!5m2!1sit!2sit"
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
