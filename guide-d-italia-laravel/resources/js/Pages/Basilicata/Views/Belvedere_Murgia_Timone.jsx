import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';

export default function Belvedere_Murgia_Timone(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='belvedere_di_murgia_timone' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Belvedere Murgia Timone</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">La vista più bella sui Sassi di Matera</h2>
                    <p>
                        Percorrere i vicoli dei <Link href='/visite/basilicata/matera/punti_panoramici' className='text-decoration-none color_link'>Sassi di Matera</Link> è un’esperienza indimenticabile, ma per ammirare la città antica c’è un altro luogo da non perdere. È il <b>Belvedere Murgia Timone</b>, 
                        sul versante opposto della gravina su cui si affaccia il paese. Da qui la vista sui Sassi e sul canyon scavato nella roccia è spettacolare.
                    </p>
                    <p>
                        Veniteci la mattina presto, quando il sole illumina la città da est disegnandone i contorni contro il cielo azzurro, oppure al tramonto, quando il cielo si infuoca e le luci si accendono trasformando il paesaggio in un presepe.
                    </p>
                    <p>
                        Il belvedere fa parte del <Link href='/visite/basilicata/matera/il_parco_della_murgia_materana' className='text-decoration-none color_link'>Parco Archeologico delle Chiese Rupestri</Link>. Durante la passeggiata potrete visitare un villaggio neolitico, la chiesa di San Falcione del IX 
                        secolo e la chiesa affrescata della Madonna delle Tre Porte, che si trova in una grotta sotto il belvedere.
                    </p>
                    <p>
                        Potete arrivare in auto oppure percorrere a piedi l’<b>itinerario 406</b> tra cespugli di timo selvatico e il volo dei falchi grillai sopra le vostre teste. Il percorso parte da Piazza Vittorio Veneto, la piazza centrale di Matera, scende lungo i gradoni che conducono a Porta Pistola e 
                        poi si inoltra nella gravina. Il lato opposto si raggiunge attraversando un ponte di legno.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2460.8101088205917!2d16.61585762704342!3d40.66407632487763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13477f878c2b89cb%3A0x9c97e809c5b16fe2!2sBelvedere%20Murgia%20Timone!5e1!3m2!1sit!2sit!4v1713367329027!5m2!1sit!2sit"
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
