import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Val_Pellice(props) {
    return (
        <>
            <Head title="Val Pellice"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='val_pellice' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Val Pellice</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            <strong>Val Pellice</strong>, situata nel cuore delle <b>Alpi Cozie</b> nel Piemonte, è una valle ricca di <b>storia</b> e <b>cultura</b>. La valle ha 
                            giocato un ruolo significativo durante il periodo delle <b>guerre di religione</b> tra i <b>Valdesi</b> e la <b>Chiesa cattolica</b>. I Valdesi, un 
                            gruppo <b>protestante</b> fondato nel XII secolo da <b>Pietro Valdo</b>, trovarono rifugio in questa valle remota per sfuggire alla <b>persecuzione</b>.
                        </p>
                        <p>
                            Durante il XVII secolo, le <b>truppe</b> del <b>duca di Savoia</b> tentarono ripetutamente di sottomettere i Valdesi, culminando nel tragico evento 
                            noto come il "<b>Glorioso Rimpatrio</b>" del 1689, quando circa mille Valdesi tornarono in patria dalla <b>Svizzera</b> e combatterono per la loro 
                            libertà religiosa. Questo evento è un punto cruciale nella <b>storia</b> della Val Pellice e simboleggia la <b>resilienza</b> e 
                            la <b>determinazione</b> del popolo valdese.
                        </p>
                        <p>
                            Nel corso dei secoli, la Val Pellice ha mantenuto una forte <b>identità culturale</b> e una <b>comunità</b> coesa, celebrando le proprie radici storiche 
                            attraverso <b>eventi</b> e <b>manifestazioni</b>. Oggi, la valle è anche un importante centro per il <b>turismo</b> naturalistico e <b>storico</b>, 
                            attirando visitatori interessati alle sue bellezze paesaggistiche e alla sua ricca eredità culturale.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10247.61426564658!2d7.158169461840822!3d44.801278397678644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47882a3919399681%3A0x737f928b576061e8!2sVal%20Pellice!5e1!3m2!1sit!2sit!4v1716908293907!5m2!1sit!2sit"
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
