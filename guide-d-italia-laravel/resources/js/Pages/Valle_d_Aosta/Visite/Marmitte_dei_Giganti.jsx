import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/inertia-react';

export default function Marmitte_dei_Giganti(props) {
    return (
        <>
            <Head title="Marmitte dei Giganti"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='marmitte_dei_giganti' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Marmitte dei Giganti</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            <strong>Le Marmitte dei Giganti</strong> rappresentano uno dei fenomeni geologici più affascinanti della <b>Valle d'Aost</b>a, incastonate tra le maestose montagne delle Alpi. Queste formazioni, che possono essere trovate lungo il corso di alcuni torrenti e fiumi 
                            della regione, sono il risultato di un processo di erosione che si è verificato lungo milioni di anni.
                        </p>
                        <p>
                            L'azione combinata dell'acqua, dei sedimenti e delle pietre trasportate dalla corrente ha scolpito e levigato le rocce circostanti, creando buche e cavità di dimensioni impressionanti. Le <strong>Marmitte dei Giganti</strong> prendono il loro nome proprio dalla 
                            dimensione mastodontica di alcune di queste cavità, che possono raggiungere anche diversi metri di diametro e profondità.
                        </p>
                        <p>
                            Queste strutture rocciose sono spesso accompagnate da cascate, rapide e paesaggi mozzafiato, offrendo agli escursionisti e agli amanti della natura un'esperienza indimenticabile. Oltre alla loro bellezza scenica, le <strong>Marmitte dei Giganti</strong> 
                            rappresentano anche un importante sito geologico, permettendo agli esperti di studiare l'evoluzione del paesaggio montano e i processi di erosione che ne hanno plasmato la forma nel corso dei millenni.
                        </p>
                        <p>
                            <strong>Le Marmitte dei Giganti</strong> sono quindi non solo un'attrazione turistica, ma anche un vero e proprio museo naturale all'aperto, dove è possibile ammirare la potenza e la bellezza della natura in tutto il suo splendore.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1389.1514282938722!2d7.076843818460801!3d45.66263277352149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478917cfb800bfe5%3A0xc7fd5ddd8fbf5b9f!2sMarmitte%20dei%20giganti!5e1!3m2!1sit!2sit!4v1713941723406!5m2!1sit!2sit"
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
        </>
        
    )
}
