import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';
import Footer from '@/Components/Footer';

export default function Museo_del_tesoro(props) {
  return (
    <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
    >
        <main>
            <div className='museo_del_tesoro_aosta mb-3' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Museo del Tesoro ad Aosta</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Museo e Mostre</p>
            </div>
            <div className='margin mb-5'>
                <h2 className='color-subtitle'>Informazioni sul Museo del Tesoto ad Aosta</h2>
                <p>
                    Il <strong>Museo del Tesoro</strong>, situato all'interno della <Link href='/luoghi_visite/cattedrale_di_santa_maria_assunta' className='text-decoration-none color_link'>Cattedrale di Aosta</Link>, presenta una panoramica significativa dell'arte sacra valdostana e
                    custodisce non solo pezzi provenienti dalla Cattedrale, ma anche aopere d'arte provenienti da diverse parrocchie della Valle d'Aosta. Esso espone capolavori d'arte antica, oreficerie, dipinti, monumenti funerari, opere d'intaglio e sculture.
                </p>
                <p>
                    <b>La visita guidata al Museo del Tesoro</b> ad Aosta inizia con una grande tela raffigurante le storie di <b>San Grato</b>, vescovo di Aosta nel V secolo e patrono della diocesi. Tra gli oggetti di maggior rilievo si segnalano il prezioso ditico in avorio del 406 d.C.
                    raffigurate l'imperatore Onorio e i gisant marmorei. Nel campo dell'oreficeria si segnala il prezioso braccio reliquiario di San Grato realizzato all'inizio del XII secolo e la cassa reliquaria risalente alla metà del XV secolo. <br/>
                    Al centro del deambulatorio si trovano i gisants della famiglia Challant e quello del vescovo Mriset, realizzati nel XV secolo. Accanto si possono ammirare i solenni busti reliquiari dei santi Grato e Giocondo e la testa di <b>San Giovanni Battista</b>. 
                </p>
                <p>
                    Si conclude la visita con i ritratti dei due artisti che intorno al 1469 realizzarono gli stalli del coro della cattedrale, si tratta di Jean Vion e Jean de Chetro, raffiguarati su dei pannelli in noce.
                </p>
                <p>
                    Scopri tutte le <b>visite guidate</b> legate ai <Link href='/musei_aosta' className='text-decoration-none color_link'>musei della Valle d'Aosta</Link>
                </p>
            </div>
            <div className="margin mb-5">
                <h3 className='color_subtitle'>Biglietti</h3>
                <p>
                    Museo: € 4,00 <br/>
                    Ingresso museo + affreschi del sottotetto: € 5,00 <br/>
                    Ingresso gratuito per: bambini e ragazzi fino ai 18 anni, per studenti fino ai 25 anni, per gli abbonati circolo Musei Piemonte/Lombardia (muniti di card in corso di validità)
                </p>
            </div>
            <div className="margin">
                <p>
                    Sabato e domenica dalle 15:00 alle 17:30
                </p>
            </div>
            <div className='margin mb-4'>
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d696.1622775582965!2d7.317444403493254!3d45.73813132924275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478921005bb1c4e1%3A0x62e6d98108b224b7!2sMuseo%20del%20Tesoro!5e0!3m2!1sit!2sit!4v1712129545668!5m2!1sit!2sit"
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
        </main>
        <Footer/>
    </AuthenticatedLayout>
  )
}
