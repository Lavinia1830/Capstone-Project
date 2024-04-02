import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';
import Footer from '@/Components/Footer';

export default function Ponte_romano_pont_saint_martin(props) {
  return (
    <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
    >
        <main>
            <div className='ponte_romano_pont_saint_martin' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Ponte Romano di Pont Saint Martin</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Siti archeologici romani</p>
            </div>
            <div className='margin mt-3'>
                <h2 className='color_subtitle'>Informazioni sul Ponte romano di Pont Saint Martin</h2>
                <p>
                    Il <strong>Ponte Romano di Pont Saint Martin</strong> costruito nel I secolo a.C. è un'importante testimonianza della <Link href='/visite/strada_romana_gallie' 
                    className='text-decoration-none color_link fw-bold'>Stade Romana delle Gallie</Link>. <br/>
                    Il ponte è alto 25 metri ed ha un'arcata di 35 metri. Alla base sono ancora visibili, scavati nella viva roccia, gli alloggiamenti dell'impalcatura necessaria per la costruzione dell'arcata in pietra.<br/>
                    Il ponte perse la sua funzione viaria all'inizio del XIX secolo quando fu costruito un altro ponte in legno, sostituito poi nel 1876 dall'attuale ponte in muratura.
                </p> 
            </div>
            <div className='margin mt-3'>
                <h2 className='color_subtitle'>La leggenda del diavolo</h2>
                <p>
                    Narra la leggenda che il ponte romano di Pont Saint Martin sia stato costruito al diavolo. <br/>
                    <b>San Martino</b>, vescovo di Tours, durante un suo viaggio si trovò bloccato dalla piana del <b>torrente Lys</b>. Il diavolo gli promise di riuscire a costruire in una sola notte un ponte, ma pretese in cambio 
                    l'anima del primo che avrebbe attraversato il ponte. <br/>
                    Il santo accettò, ma il giorno seguente beffò il diavolo lanciando un pezzo di pane all'altra estremità del ponte e facendo s^ che il primo ad attraversarlo fosse un cagnolino, infuriato, scomparve nel Lys tra 
                    lampi e urla ed alla popolazione rimase il ponte.
                </p> 
                <p>
                    La leggenda costituisce ancora oggi il cuore del <b>Carnevale storico di Pant-Saint-Martin</b>.
                </p>
                <p>
                    La <b>visita guidata dal Ponte Romano di Pant Saint Martin</b> e dalla Strada romana delle Gallie conservati a Donnas è particolarmente adatta per le <Link href='/gite_scolastiche_scuola_primaria' 
                    className='text-decoration-none color_link'>scuole primarie</Link>.
                </p>
                <p>
                    Scopri tutte le <b>visite guidate</b> legate ai <Link to='siti_archeologici_romani' className='text-decoration-none color_link'>siti archeologici romani della Valle d'Aosta</Link>.
                </p>
            </div>
            <div className='margin mb-4'>
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2791.5629518900873!2d7.797580576612295!3d45.59932992441189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478897007e61c1db%3A0xf0dc9e4683aa72ca!2sPonte%20Romano%20di%20Pont%20Saint-Martin!5e0!3m2!1sit!2sit!4v1712060085173!5m2!1sit!2sit"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className='mx-auto mappa'
                >
                </iframe>            
            </div>
            <div className='margin'>
                <h3 className='color-subtitle'>Articoli</h3>
                <ul className='lista'>
                    <li>
                        <Link to='/carnevale_di_pont_saint_martin_san_martino_il_diavolo_e_la_ninfa' className='text-decoration-none color_link'>Carnevale di Pont Saint Martin: San Martino, il Diavolo e la Ninfa</Link>
                    </li>
                </ul>
            </div>
        </main>
        <Footer/>
    </AuthenticatedLayout>
  )
}
 