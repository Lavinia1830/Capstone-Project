import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';

export default function Riomaggiore(props) {
  return (
    <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        >
        <main>
            <div className='riomaggiore' style={{ position: 'relative' }}>
            <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Riomaggiore</h1>
            <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
            <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
            </div>
            <div className="margin mt-3">
                <h2 className='color-subtitle'>La porta delle Cinque Terre</h2>
                <p>
                    Partendo da La Spezia, <strong>Riomaggiore</strong> è il primo borgo delle <Link href='/destinazioni/le_5_terre' className='text-decoration-none color_link'>Cinque Terre</Link> e la porta di un territorio pieno di meraviglie da scoprire. Il borgo arroccato su uno sperone roccioso 
                    è un agglomerato di <b>casette colorate a picco sul mare</b> collegate da vicoli, carrugi e scalinate.
                </p>
                <p>
                    A circondare il borgo la macchia mediterranea, i terrazzamenti profilati da muretti a secco, il mare e il cielo blu. Riomaggiore è così piccolo che si gira comodamente a piedi e si può raggiungere in treno o in battello. Perdetevi tra le viette del borgo antico e visitate la 
                    <b> basilica gotica di San Giovanni Battista</b>.
                </p>
                <p>
                    In 10 minuti a piedi si raggiunge il <b>castello</b>. Risale al 1260 e regala un panorama mozzafiato sul mare. Di fianco si trova l’<b>Oratorio di San Rocco</b> costruito durante la peste del 1480. Uno spettacolare panorama si gode anche dal <b>Santuario di Nostra Signora di 
                    Montenero</b>, raggiungibile solo a piedi.
                </p>
                <p>
                    Da Riomaggiore parte la <b>Via dell’Amore</b>, uno dei sentieri più romantici al mondo. Secondo la leggenda, chi si bacia lungo il percorso alla fine della galleria che conduce a Manarola si amerà per la vita. Dopo un tuffo in mare rilassatevi sulla <b>spiaggia di Fossola</b>.
                </p>
            </div>
            <div className='margin mb-4'>
                <h3 className='color-subtitle text-center'>Mappa</h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.117876144999!2d9.737345919429558!3d44.09914259437679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d4fa8971ac8b07%3A0x119e0fb487f86580!2s19017%20Riomaggiore%20SP!5e1!3m2!1sit!2sit!4v1712843190417!5m2!1sit!2sit"
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
