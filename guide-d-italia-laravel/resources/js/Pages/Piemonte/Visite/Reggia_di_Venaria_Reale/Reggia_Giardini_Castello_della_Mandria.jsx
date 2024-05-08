import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Reggia_Giardini_Castello_della_Mandria(props) {
    return (
        <>
            <Head title="Reggia Giardini Castello della Mandria"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='reggia_giardini_castello_della_mandria' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Reggia - Giardini - Castello della Mandria</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <h3 className='text-center color-subtitle fst-italic'>
                            Scopri le varie tipologie di accesso alla Reggia, ai Giardini e al Castello della Mandria
                        </h3>
                    </div>
                    <div className="margin mt-3">
                        <h2 className='color-subtitle'>Reggia</h2>
                        <p>
                            Il biglietto comprende la visita alla Reggia con la Scuderia Grande Juvarriana e la visita ai Giardini.
                        </p>
                        <ul className="lista">
                            <li>
                                <p>Intero: <b>16 euro</b></p>
                            </li>
                            <li>
                                <p>
                                    Ridotto: <b>14 euro</b><br/>
                                    <i>Gruppi accompagnati di min. 12, max. 25 persone, quanti previsti da <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/ingressi_ridotti' 
                                    className='text-decoration-none color_link'>Ridotti</Link></i>
                                </p>
                            </li>
                            <li>
                                <p>
                                    Ridotto: <b>8 euro</b><br/>
                                    <i>Under 21 (ragazzi dai 6 ai 20 anni) e universitari under 26<br/>
                                    (I minori di 16 anni devono entrare accompagnati)</i>
                                </p>
                            </li>
                            <li>
                                <p>
                                    Scuole: <b>5 euro a studente</b> <br/>
                                    <i>Classi minimo di 12, massimo 25 studenti, ingresso gratuito per 1 accompagnatore ogni 12 studenti</i>
                                </p>
                            </li>
                            <li>
                                <b>Gratuito</b>
                                <p>
                                    <i>Minori di 6 anni e quanti previsti da</i> <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/gratuiti_e_ridotti' 
                                    className='text-decoration-none color_link fst-italic'>Gratuiti</Link> (compresi i Possessori del <b>Passaporto culturale</b> + 2 accompagnatori, fino al compimento del primo anno di età del bambino/a intestatario del Passaporto) 
                                </p>
                            </li>
                        </ul>
                        <p>
                            È raccomandato prenotare e acquistare in anticipo, scegliendo giorno e ora, il proprio ingresso: 
                        </p>
                        <p>
                            <Link href='/visite/piemonte/torino/reggia_si_venaria_reale/acquista_online' className='text-decoration-none btn-card '>Acquista on line</Link>
                        </p>
                    </div>    
                    <div className="margin mt-5">
                        <p>
                            <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/prenotazioni' className='text-decoration-none color_link'>Modalità di prenotazione per i <b>gruppi</b></Link><br/>
                            <b>Diritti di prenotazione</b> sull’acquisto dei titoli d’accesso per i <b>gruppi</b>  (minimo 12, massimo 25 persone): 15 euro a gruppo - 7 euro a classe  
                        </p>
                    </div>
                    <hr />
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Giardini</h2>
                        <ul className="lista">
                            <li>
                                <p>Intero: <b>5 euro</b></p>
                            </li>
                            <li>
                                <p>
                                    Ridotto: <b>4 euro</b><br/>
                                    <i>Gruppi accompagnati di min. 12. max. 25 persone, quanti previsti da <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/gratuiti_e_ridotti' 
                                    className='text-decoration-none color_link'>Ridotti</Link></i>
                                </p>
                            </li>
                            <li>
                                <p>
                                    Ridotto: <b>2 euro</b><br/>
                                    <i>Under 21 (ragazzi dai 6 ai 20 anni) e universitari under 26
                                    (I minori di 16 anni devono entrare accompagnati)</i>
                                </p>
                            </li>
                            <li>
                                <p>
                                    Scuole: <b>2 euro</b><br/>
                                    <i>Classi minimo di 12, massimo 25 studenti, ingresso gratuito per 1 accompagnatore ogni 12 studenti</i>
                                </p>
                            </li>
                            <li>
                                <b>Gratuito</b>
                                <p>
                                    Minori di 6 anni e quanti previsti da <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/gratuiti_e_ridotti' className='text-decoration-none color_link'>Gratuiti</Link> 
                                </p>
                            </li>
                        </ul>
                        <p>
                            Abbonamento annuale ai Giardini: <b>15 euro</b><br/>
                            Per i <b>residenti a Venaria Reale</b>: 5 euro (previa presentazione di un documento di identità), con validità dalla data di acquisto al 31/12/2024.
                        </p>
                        <p>
                            Il biglietto comprende la visita ai <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/i_giardini' className='text-decoration-none color_link'>Giardini</Link>.
                            In caso di eventi speciali nei Giardini la tariffa viene <b>aumentata di 1 euro</b>.
                        </p>
                        <p>
                            L'ingresso ai Giardini è <b>compreso in tutti i biglietti</b>.
                        </p>
                        <p>
                            È raccomandato prenotare e acquistare in anticipo, scegliendo giorno e ora, il proprio ingresso:
                        </p>
                        <p>
                            <Link href='/visite/piemonte/torino/reggia_si_venaria_reale/acquista_online' className='text-decoration-none btn-card'>Acquista on line</Link>
                        </p>
                    </div>  
                    <div className="margin mt-5">
                        <p>
                            <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/prenotazioni' className='text-decoration-none color_link'>Modalità di prenotazione per i <b>gruppi</b></Link><br/>
                            <b>Diritti di prenotazione</b> sull’acquisto dei titoli d’accesso per i <b>gruppi</b> (minimo 12, massimo 25 persone): 15 euro a gruppo - 7 euro a classe  
                        </p>
                    </div> 
                    <hr />
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Castello della Mandria</h2>
                        <p>
                            Il biglietto comprende la visita al <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/il_castello_della_mandria' className='text-decoration-none color_link'>Castello della Mandria</Link>
                        </p>
                        <ul className="lista">
                            <li>
                                <p>
                                    Intero: <b>8 euro</b>
                                </p>
                            </li>
                            <li>
                                <p>
                                    Ridotto: <b>6 euro</b><br/>
                                    <i>Gruppi accompagnati di min. 12, max. 25 persone, quanti previsti da <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/ingressi_ridotti' 
                                    className='text-decoration-none color_link'>Ridotti</Link></i>
                                </p>
                            </li>
                            <li>
                                <p>
                                    Ridotto: <b>3 euro</b><br/>
                                    <i>Under 21 (ragazzi dai 6 ai 20 anni) e universitari under 26<br/>
                                    (I minori di 16 anni devono entrare accompagnati)</i>
                                </p>
                            </li>
                            <li>
                                <p>
                                    Scuole: <b>2 euro a studente</b><br/>
                                    <i>Classi minimo di 12​, massimo 25 studenti, ingresso gratuito per 1 accompagnatore ogni 12 studenti</i>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <b>Gratuito</b><br/>
                                    <i>Minori di 6 anni e quanti previsti da <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/ingressi_gratuiti' className='text-decoration-none color_link'>Gratuiti</Link></i>
                                </p>
                            </li>
                        </ul>
                        <p>
                            <p>Diritti di prenotazione</p> sull’acquisto dei titoli d’accesso per i <b>gruppi</b>  (minimo 12, massimo 25 persone): 15 euro a gruppo - 7 euro a classe  
                        </p>
                        <p>
                            È raccomandato prenotare e acquistare in anticipo, scegliendo giorno e ora, il proprio ingresso:
                        </p>
                        <p>
                            <Link href='/visite/piemonte/torino/reggia_si_venaria_reale/acquista_online' className='text-decoration-none btn-card '>Acquista on line</Link>
                        </p>
                        <p>
                            <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/prenotazioni' className='text-decoration-none color_link'>Modalità di prenotazione per i <b>gruppi</b></Link><br/>
                        </p>
                    </div>
                    <hr />
                    <div className='margin mt-3'>
                        <p className='fw-bold'>
                            Si consiglia di prenotare i biglietti on line.
                        </p>
                        <p className='fst-italic'>
                            Per informazioni e prenotazioni: tel. + 39 011 4992333
                        </p>
                    </div>
                    <div className="margin my-3 d-flex justify-content-between">
                        <p className="btn-card">
                            <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/quanto_costa/tutta_in_una_reggia' className='text-decoration-none text-light'>Tutta in una Reggia</Link>
                        </p>
                        <p className="btn-card">
                            <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/quanto_costa/biglietti_cumulativi' className='text-decoration-none text-light'>Biglietti cumulativi</Link>
                        </p>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
