import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Ingressi_Gratuiti(props) {
    return (
        <>
            <Head title="Ingressi Gratuiti"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='ingressi_gratuiti' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Ingressi Gratuiti</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Gratuiti e Ridotti</p>
                    </div>
                    <div className="margin mt-3">
                        <p className='fst-italic text-center'>
                            Scopri se hai diritto all'ingresso gratuito
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Dietro presentazione della tessera personale di riconoscimento hanno diritto all'ingresso gratuito:
                        </p>
                        <ul className="lista">
                            <li>
                                <p>
                                    Minori di 6 anni (con accompagnatore adulto)
                                </p>
                            </li>
                            <li>
                                <p>
                                    Per gruppi scolastici: un  accompagnatore per il numero massimo di studenti consentito per la tipologia di biglietto 
                                </p>
                            </li>
                            <li>
                                <p>
                                    Persona disabile e accompagnatore (previa esibizione di documento che attesti il diritto all'accompagnatore - es: tessera BIP Regionale che mostri la lettera A)
                                </p>
                            </li>
                            <li>
                                <p>
                                    Possessori <a href='https://abbonamentomusei.it/' className='text-decoration-none color_link'>Abbonamento Musei Torino Piemonte</a> (previa esibizione di un documento di identità), in vendita anche presso la <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/biglietterie' 
                                    className='text-decoration-none color_link'>biglietteria</Link> della Reggia.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Possessore <a href='https://www.turismotorino.org/it/il-tuo-viaggio/torinopiemonte-card' className='text-decoration-none color_link'>Torino+Piemonte Card</a>, in vendita anche presso la <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/biglietterie' 
                                    className='text-decoration-none color_link'>biglietteria</Link> della Reggia. La card è valida per i biglietti <i>Tutto in una Reggia</i> e <i>Castello della Mandria</i>. In assenza di mostre, non essendo attivo il biglietto <i>Tutto in una Reggia</i>, selezionare <i>Reggia e Castello 
                                    della Mandria</i>.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Possessore <a href='https://www.turismotorino.org/it/il-tuo-viaggio/royal-pass' className='text-decoration-none color_link'>Royal Pass</a>. Il Pass è valido per i biglietti <i>Tutto in una Reggia</i> e <i>Castello della Mandria</i>. In assenza di mostre, non essendo attivo il 
                                    biglietto <i>Tutto in una Reggia</i>, selezionare <i>Reggia e Castello della Mandria</i>.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Possessori <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/passaporto_culturale' className='text-decoration-none color_link'>Passaporto culturale</Link> + 2 accompagnatori (fino al compimento del primo anno di età del bambino/a intestatario del Passaporto) - Solo per l’ingresso alla Reggia.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="margin my-3">
                        <p>
                            Presentandosi alla Cassa Accrediti (eventuali accompagnatori a pagamento devono prenotare ed  acquistare in anticipo il loro titolo d'accesso; nel caso del weekend con almeno 24 ore di anticipo):
                        </p>
                        <ul className="lista">
                            <li>
                                <p>
                                    Dipendenti del Ministero della Cultura
                                </p>
                            </li>
                            <li>
                                <p>
                                    Dipendenti dell'Esercito Italiano (ingresso ridotto per un accompagnatore)
                                </p>
                            </li>
                            <li>
                                <p>
                                    Membri ICOM
                                </p>
                            </li>
                            <li>
                                <p>
                                    Soci ICOMOS
                                </p>
                            </li>
                            <li>
                                <p>
                                    Guide turistiche abilitate, previa presentazione tesserino, anche per visite propedeutiche e di formazione.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Giornalisti incaricati della realizzazione di un articolo o un servizio sulla Venaria Reale (non in visita personale), previa autorizzazione all'ingresso da parte dell'Ufficio Stampa della Venaria Reale e presentazione del tesserino in corso di validità o dichiarazione del Direttore della testata. Per 
                                    ottenere la necessaria autorizzazione da parte dell'Ufficio Stampa fare espressa richiesta con almeno un giorno di anticipo telefonando al numero +39 011 4992300 oppure scrivendo a <a href='mailto:press@lavenariareale.it' className='text-decoration-none color_link'>press@lavenariareale.it</a> dal lunedì al 
                                    venerdì, festivi esclusi, dalle ore 9 alle 17. Negli altri casi è previsto il biglietto <b>ridotto</b>.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <b>La Reggia e la Città ti fanno gli auguri</b>: nel giorno del proprio compleanno i cittadini venariesi residenti (insieme ad 1 solo eventuale accompagnatore) potranno beneficiare di ingresso gratuito al complesso della Venaria (Reggia e Giardini), mostrando la Carta d'Identità alle casse della Biglietteria 
                                    che attesti data di nascita e luogo di residenza; qualora il giorno del compleanno dovesse coincidere con un giorno di chiusura, si potrà fruire della promozione esclusivamente il primo giorno utile successivo a tale giornata di chiusura.
                                </p>
                            </li>
                        </ul>
                        <p className="margin btn-card">
                            <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/ingressi_ridotti' className='text-decoration-none text-light'>Ingressi Ridotti</Link>
                        </p>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
