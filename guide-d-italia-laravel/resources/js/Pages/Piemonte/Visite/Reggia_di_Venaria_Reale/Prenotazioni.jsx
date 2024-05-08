import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Prenotazioni(props) {
    return (
        <>
            <Head title="Prenotazioni"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='prenotazioni' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Prenotazioni</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Visita</p>
                    </div>
                    <div className="margin mt-3">
                        <p className='fst-italic text-center'>
                            Scopri come prenotare visite individuali, in gruppo o per le scuole.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Individuali</h2>
                        <p>
                            Per i visitatori singoli è consigliato prenotare e acquistare in anticipo, scegliendo giorno e ora, il proprio ingresso.
                        </p>
                        <Link href='' className='text-decoration-none btn-card'>Prenota e acquista</Link>
                    </div>
                    <hr className='margin mt-3'/>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Gruppi</h2>
                        <p className='fw-bold'>
                            Prenotazione biglietti d’ingresso e visite guidate per gruppi
                        </p>
                        <p>
                            Per la visita alla Reggia, ai Giardini, al Castello della Mandria: gruppi di minimo 12, massimo 25 partecipanti.
                        </p>
                        <p>
                            La prenotazione per i gruppi <b>va effettuata attraverso il Centro Prenotazioni</b>: <br/>
                            <b>+39 011 4992333</b>, da lunedì a venerdì: dalle ore 9 alle 17. <br/>
                            <a href="mailto:prenotazioni@lavenariareale.it" className='text-decoration-none color_link'>prenotazioni@lavenariareale.it</a>
                        </p>
                        <p>
                            <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/quanto_costa/visite_guidate' className='text-decoration-none color_link'>Costi delle visite per i gruppi</Link>
                        </p>
                        <p>
                            <b>Diritti di prenotazione</b> sull’acquisto dei titoli d’accesso per i gruppi  (minimo 12, massimo 25 persone): 15 euro a gruppo  
                        </p>
                        <p style={{fontSize: '14px'}}>
                            Entro 5 giorni lavorativi dalla data di prenotazione è necessario effettuare il pagamento tramite bonifico bancario delle visite o delle tariffe di prenotazione (turno d’ingresso). Entro 5 giorni lavorativi prima della data di visita è necessario 
                            saldare la prenotazione dei biglietti d’ingresso. <br/>
                            I dati per effettuare il bonifico verranno comunicati al momento della prenotazione. In caso di mancato pagamento la prenotazione sarà cancellata. Si ricorda infine che, per ragioni amministrative, i pagamenti non possono essere rimborsati.
                        </p>
                    </div>
                    <hr className='margin'/>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Biglietteria Castello della Mandria</h2>
                        <p>
                            Parco della Mandria (all’ingresso del Castello)<br/>
                            Tel. +39 011 4992333
                        </p>
                    </div>
                    <div className="margin my-3 d-flex justify-content-between">
                        <p className="btn-card">
                            <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/gratuiti_e_ridotti' className='text-decoration-none text-light'>Gratuiti e Ridotti</Link>
                        </p>
                        <p className="btn-card">
                            <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/impara_con_la_venaria_reale' className='text-decoration-none text-light'>Impara con La Venaria Reale</Link>
                        </p>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
