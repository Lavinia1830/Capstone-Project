import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';
import Footer from '@/Components/Footer';

export default function Strada_romana_gallie(props) {
  return (
    <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Aosta romana e Aosta medievale</h2>}
    >
        <main>
            <div className='s_r_gallie' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Via delle Gallie</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Siti archologici romani</p>
            </div>
            <div className='margin mt-3'>
                <h2 className='color-subtitle'>Informazioni sulla Via della Gallie</h2>
                <p>
                    <b>La Strada Romana delle Gallie</b> fu costruita dai Romani nel secolo a.C. ed era un'importante infrastruttura che sttraversa tutta la Valle d'Aosta e collegava Eporedia 
                    (Ivrea) ed Augusta Praetoria (Aosta). Da Aosta la strada prendeva due direzioni: verso il <Link to='/colle_del_piccolo_san_bernardo' className='text-decoration-none color_link'>Colle dei Piccolo San Bernardo </Link>
                    (direzione Gallie ovvero l'attuale Francia) e il <Link to='/colle_del_gran_san_bernardo' className='text-decoration-none color_link'>Colle del Gran San Bernardo</Link> (direzione Svizzera).
                </p>
                <p>
                    All'epoca lungo il suo percorso si trovava alcune <i>mansio</i> ovvero lunghi di sosta per i viaggiatori collocati in luoghi strategici lungo l'intinerario come sulla cima 
                    dei due colli oppure a <Link to='/saint_vincent' className='text-decoration-none color_link'>Saint Vincent</Link>, dove la <i>masio</i> era provvista anche di un impianto 
                    ternale! Nel corso dei secoli la Via della Gallie fu frequentata da Re, Imperatori, Papi, commercianti, soldati e usata fino alla fine del XIX secolo. Durante il Medioevo 
                    la strada era frequentata anche da numerosi pellegrini, in questo costituiva un tratto dalla <b>Via Francigena</b>.
                </p>
                <p>
                    La <b>visita guidata della Via delle Gallie</b> è particolarmente adatta per le <Link to='/gite_scolastiche_scuola_primaria' className='text-decoration-none color_link'>scuole primarie</Link>.
                </p>
                <p>
                    Scopri tutte le <b>visite guidate</b> legate ai <Link to='/siti_archeologici_romani' className='text-decoration-none color_link'>siti archeologici romani della Valle d'Aosta</Link>
                </p>
            </div>
            <div className='margin mb-4'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1395.7095805502904!2d7.761106000000001!3d45.60222000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47889662f190480b%3A0x842b3bfcaae2e952!2sStrada%20romana%20delle%20Gallie!5e0!3m2!1sit!2sus!4v1711528582493!5m2!1sit!2sus"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                    className='mx-auto'
                >
                </iframe>
            </div>
            <div className='margin'>
                <h3 className='color-subtitle'>Articoli</h3>
                <ul className='lista'>
                    <li>
                        <Link to='/via_franchicena_valle_d_aosta' className='text-decoration-none color_link'>La Via Francigena Valle d'Aosta: l'itinerario lungo il primo tratto italiano</Link>
                    </li>
                </ul>
            </div>
        </main>
        <Footer/>
    </AuthenticatedLayout>
    
  )
}
