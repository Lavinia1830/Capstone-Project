import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';

export default function Archiginnasio(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='archiginnasio' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Archiginnasio</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Storia del palazzo</h2>
                    <p>
                        Il palazzo dell’Archiginnasio fu costruito fra il 1562 ed il 1563 per volere del Legato pontificio di Bologna, il cardinale Carlo Borromeo e del Vicelegato Pier Donato Cesi, su progetto dell’architetto bolognese Antonio Morandi detto Terribilia. Lo scopo dell’operazione, 
                        maturata nel clima culturale del Concilio di Trento, era quello di dare una sede unitaria all’insegnamento universitario fino allora disperso in varie sedi.
                    </p>
                    <p>
                        Il palazzo presenta all’esterno un lungo portico di 30 arcate e si articola in due piani intorno ad un <Link href='/visite/bologna/archiginnasio/cortile_centrale' className='text-decoration-none color_link'>cortile centrale</Link> a doppio ordine di logge.
                    </p>
                    <p>
                        Due ampi <Link href='/visite/bologna/archiginnasio/scalini' className='text-decoration-none color_link'>scaloni</Link> conducono al <Link href='/visite/bologna/archiginnasio/piano_superiore' className='text-decoration-none color_link'>piano superiore</Link> che presenta 10 
                        aule scolastiche (oggi non visitabili poichè costituiscono i depositi principali di libri della Biblioteca) e due aule magne poste alle estremità del fabbricato, una per gli Artisti (oggi Sala di lettura della Biblioteca) e una per i Legisti (detta in seguito anche <Link 
                        href='/visite/bologna/archiginnasio/sala_dello_stabet_mater' className='text-decoration-none color_link'>Sala dello Stabat Mater</Link>).
                    </p>
                    <p>
                        Le pareti delle sale, le volte degli scaloni e dei loggiati sono fittamente decorate da iscrizioni e monumenti celebrativi dei maestri dello Studio e da migliaia di <Link href='/visite/bologna/archiginnasio/stemmi' className='text-decoration-none color_link'>stemmi</Link> e di 
                        nomi di studenti.
                    </p>
                    <p>
                        L’edificio cessò la sua funzione universitaria nel 1803; dal 1838, dopo essere stato per alcuni anni scuola elementare, è sede della Biblioteca. Al piano terreno alcune delle antiche aule sono occupate dalla Società Medica Chirurgica e dall’Accademia di Agricoltura.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1684.2647996312812!2d11.34553546709632!3d44.494289633167625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fd4be6040e0ab%3A0x2cff6dcbebf82c32!2sIl%20Quadrilatero!5e1!3m2!1sit!2sit!4v1713001266079!5m2!1sit!2sit"
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
