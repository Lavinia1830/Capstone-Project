import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';

export default function Golfo_dei_Poeti(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='golfo_dei_poeti' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Golfo dei Poeti</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Trekking vista mare</h2>
                    <p>
                        Quanto sia suggestivo, lo si capisce già dal nome. Con i suoi scorci ha affascinato letterati e intellettuali del calibro di George Gordon Byron e Percy Bysshe 
                        Shelley. Il <b>Sentiero dei Poeti</b>, noto anche come <b>Alta Via del Golfo</b>, vi permetterà di attraversare tre aree protette della <b>Liguria di 
                        Levante</b> dove il tempo sembra essersi fermato e dove regna un perfetto connubio tra arte e storia: il <Link href='/visite/liguria/parco_nazionale_delle_cinque_terre' 
                        className='text-decoration-none color_link'>Parco Nazionale delle Cinque Terre</Link>, <b>Parco Nazionele di Porto Venere</b> e il <b>Parco Nazionale di Montemarcello 
                        Magra</b>.
                    </p>
                    <p>
                        Il percorso parte da Bocca di Magra, dove potrete lasciare l'auto nel parcheggio vicino alla piccola chiesa, e proseguire per 44 chilometri. Suddividete l'itinerario su 
                        più giorni per assicurarvi di non tralasciare nessuno dei punti di interesse su vostro cammino. 
                    </p>
                    <p>
                        Il sentiero si conclude a <b>Lerici</b>, splendido borgo che vi offrirà una vista 
                        panoramica sul <b>Castello Doria di Porto Venere</b>.
                        Fermatevi qui per riposarvi, dopo tanta fatica, e concedervi un piatto di <i>tagiain ai fasei</i> con il pesto o di coniglio in umido vista mare.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10376.053160089139!2d9.90350413490578!3d44.07348664136193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d5027a1469e03b%3A0x4d4963f77592ae61!2sGolfo%20dei%20Poeti!5e1!3m2!1sit!2sit!4v1735829492778!5m2!1sit!2sit"
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
