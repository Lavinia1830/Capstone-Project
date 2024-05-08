import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Convenzioni(props) {
    return (
        <>
            <Head title="Convenzioni"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='convenzioni' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Convenzioni</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Gratuiti e Ridotti</p>
                    </div>
                    <div className="margin mt-3">
                        <p className='fst-italic text-center'>
                            La Venaria Reale presenta diverse convenzioni per avere diritto ad ingressi agevolati e offerte vantaggiose
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Drivalia</h2>
                        <p>
                            Drivalia, la società di noleggio, leasing e mobilità di <b>CA Auto Bank</b>, è <b>mobility partner</b> della Reggia di Venaria.
                        </p>
                        <p>
                            Grazie alla partnership:
                        </p>
                        <ul className="lista">
                            <li>
                                <p>
                                    Gli <b>abbonati al car sharing e-GO! Drivalia</b>, hanno una <b>tariffa ridotta</b> su tutte le tipologie di ingressi alla Reggia di Venaria. Basterà mostrare in biglietteria la 
                                    schermata dell'app e-GO! Drivalia che attesti l'abbonamento.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Gli intestatari del contratto di <b>noleggio</b> di un’auto elettrica o ibrida alla spina con <b>Drivalia</b> hanno un <b>biglietto di ingresso gratuito</b> (biglietto "Tutto in 
                                    una Reggia"). Basterà mostrare in biglietteria il contratto di noleggio e la carta di identità.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Nei parcheggi della Reggia sono presenti <b>4 nuove colonnine di ricarica Drivalia</b> da 176 Kw, con 2 attacchi da 22 kwh e relativi POD, per un <b>totale di 8 punti di ricarica 
                                    elettrica</b>. Tutte le vetture noleggiate con Drivalia potranno <b>fare il pieno gratuitamente</b>.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="margin my-3 d-flex justify-content-between">
                        <p className="btn-card">
                            <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/ingressi_ridotti' className='text-decoration-none text-light'>Ingressi Ridotti</Link>
                        </p>
                        <p className="btn-card">
                            <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/ingressi_gratuiti' className='text-decoration-none text-light'>Ingressi Gratuiti</Link>
                        </p>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
