import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Grotte_delle_Busserailles(props) {
    return (
        <>
            <Head title="Grotte delle Busserailles"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='grotte_delle_busserailles' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Grotte delle Busserailles</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            <strong>Le Grotte delle Busserailles</strong> sono un sistema di grotte situato nel dipartimento della Saona e Loira, nella regione della Borgogna, in Francia. Queste grotte sono state formate dall'erosione dell'acqua su terreno calcareo nel corso di milioni di anni.
                        </p>
                        <p>
                            Le grotte offrono un'affascinante opportunità di esplorare il mondo sotterraneo, con passaggi stretti, camere spaziose e formazioni rocciose uniche. Alcune delle caratteristiche più interessanti includono stalattiti e stalagmiti, colonne calcaree e laghi sotterranei.
                        </p>
                        <p>
                            <strong>Le Grotte delle Busserailles</strong> sono anche importanti dal punto di vista scientifico, poiché forniscono agli scienziati una finestra sul passato geologico della regione. Esplorare queste grotte può offrire preziose informazioni sulla storia naturale e sull'evoluzione 
                            della Terra.
                        </p>
                        <p>
                            Inoltre, le grotte sono spesso aperte al pubblico per visite guidate, consentendo ai visitatori di ammirare la bellezza naturale delle formazioni rocciose e di imparare di più sulla geologia e sulla storia della regione. È un'esperienza unica e suggestiva che può essere apprezzata 
                            da persone di tutte le età.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d950.2646265536324!2d7.61585310244931!3d45.89976297053496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4788cc4875de3b1f%3A0x9cb69b9f4b6388be!2sGrotte%20delle%20Busserailles!5e1!3m2!1sit!2sit!4v1713942412389!5m2!1sit!2sit"
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
