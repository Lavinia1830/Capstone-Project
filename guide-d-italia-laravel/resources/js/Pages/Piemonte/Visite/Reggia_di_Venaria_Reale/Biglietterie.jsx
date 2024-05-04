import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Biglietterie(props) {
    return (
        <>
            <Head title="Biglietterie"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='biglietterie' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Biglietterie</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Visita</p>
                    </div>
                    <div className="margin mt-3">
                        <p className='fst-italic text-center'>
                            È raccomandato l'acquisto del biglietto on line.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Biglietteria centrale</h2>
                        <p>
                            Via Mensa 34 - Venaria Reale (Centro Storico a ridosso della Reggia)<br/>
                            Tel. +39 011 4992333
                        </p>
                        <p>
                            La cassa riservata all'<i>Abbonamento Musei</i> osserva i seguenti orari:
                        </p>
                        <ul className="lista">
                            <li>
                                <p>
                                    Dal martedì al venerdì: dalle ore 10 alle 13 e dalle 13.30 alle 15.15.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Sabato, domenica e festivi: dalle ore 10 alle 13 e dalle 13.30 alle 16.30
                                </p>
                            </li>
                        </ul>
                        <p>
                            Per la vendita della <i>Torino+Piemonte Card</i> e della <i>Royal Card</i>, la biglietteria segue gli <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/orari' className='text-decoration-none color_link'>orari di apertura della Reggia</Link>.
                        </p>
                    </div>
                    <hr />
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Biglietteria Carlo Emanuele II (Patio dei Giardini)</h2>
                        <p>
                            Viale Carlo Emanuele II - Venaria Reale (viale che conduce al Parco La Mandria)<br/>
                            Tel. +39 011 4992333
                        </p>
                        <p>
                            Aperta solo per alcuni eventi nei Giardini
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
                            <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/gratuiti_ridotti' className='text-decoration-none text-light'>Gratuiti e Ridotti</Link>
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
