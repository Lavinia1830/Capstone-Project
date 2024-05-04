import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Ingressi_Ridotti(props) {
    return (
        <>
            <Head title="Ingressi Ridotti"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='ingressi_ridotti' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Ingressi Ridotti</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Gratuiti e Ridotti</p>
                    </div>
                    <div className="margin mt-3">
                        <p className='fst-italic text-center'>
                            Consulta le condizioni per avere diritto all'ingresso ridotto
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Dietro presentazione della tessera personale di riconoscimento hanno diritto all'ingresso ridotto a Reggia, Giardini e mostre in corso:
                        </p>
                        <ul className="lista">
                            <li>
                                <p>
                                    Maggiori di 6 e minori di 21 anni (Ridotto dedicato: <i>Over6 Under21</i>)
                                </p>
                            </li>
                            <li>
                                <p>
                                    Studenti universitari Under 26 - previa esibizione del tesserino (Ridotto dedicato:  <i>Universitari</i>)
                                </p>
                            </li>
                            <li>
                                <p>
                                    Personale docente ed educativo (Ministero dell'Istruzione)
                                </p>
                            </li>
                            <li>
                                <p>
                                    Giornalisti NON IN SERVIZIO (con presentazione del tesserino in corso di validità)
                                </p>
                            </li>
                            <li>
                                <p>
                                    Forze dell'ordine
                                </p>
                            </li>
                            <li>
                                <p>
                                    Vigili del Fuoco
                                </p>
                            </li>
                            <li>
                                <p>
                                    Carabinieri in congedo (previa esibizione del tesserino personale)
                                </p>
                            </li>
                            <li>
                                <p>
                                    Coniugi e figli dei Carabinieri in congedo, previa esibizione della carta d'identità (solo per i figli maggiorenni)
                                </p>
                            </li>
                            <li>
                                <p>
                                    Accompagnatore dei dipendenti Esercito Italiano
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Dipendenti</h2>
                        <ul className="lista">
                            <li>
                                <p>
                                    Dipendenti Comune di Venaria Reale
                                </p>
                            </li>
                            <li>
                                <p>
                                    Dipendenti Regione Piemonte
                                </p>
                            </li>
                        </ul>
                    </div>
                    <hr />
                    <div className="margin my-3">
                        <p>
                            Le convenzioni non sono cumulabili.
                        </p>
                        <p className="margin btn-card">
                            <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/ingressi_gratuiti' 
                            className='text-decoration-none  text-light'>Ingressi Gratuiti</Link>
                        </p>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
