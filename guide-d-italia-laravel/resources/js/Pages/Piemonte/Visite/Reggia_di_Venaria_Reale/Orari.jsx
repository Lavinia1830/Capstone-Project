import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link, Head } from '@inertiajs/react';

export default function Orari(props) {
    return (
        <>
            <Head title="Orari"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='orari' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Orari</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Visita</p>
                    </div>
                    <div className="margin mt-3">
                        <p className='fst-italic text-center'>
                            La Venaria Reale è aperta dal martedì alla domenica
                        </p>
                    </div>
                    <div className='margin mt-3 d-flex justify-content-center'>
                        <p className="border border-2 border-success p-2 ">
                            In occasione del G7 dedicato ad ambiente ed energia, la Reggia di Venaria resterà <b>chiusa</b> al pubblico <b>da venerdì 26 a martedì 30 aprile</b> compreso.<br/>
                            Il <b>Castello e il Parco della Mandria</b> saranno chiusi da <b>domenica 28 a martedì 30 aprile</b>.<br/>
                            <b>1° maggio</b>: Reggia, Castello e Parco della Mandria <b>aperti</b>.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-titlesubtitle">Reggia e Mostre</h2>
                        <p>
                            Gli ingressi chiudono 1 ora prima rispetto agli orari sotto indicati.
                        </p>
                        <ul className="lista">
                            <li>
                                <p>
                                    <b>Lunedì</b>: giorno di chiusura (tranne eventuali giorni Festivi)​
                                </p>
                            </li>
                            <li>
                                <p>
                                    <b>da martedì a venerdì</b>: dalle ore 9.30 alle 17
                                </p>
                            </li>
                            <li>
                                <p>
                                    <b>sabato, domenica e festivi</b>: dalle ore 9.30 alle 18.30
                                </p>
                            </li>
                        </ul>
                        <h3 className="color-subtitle">Variazioni di orario per le festività primaverili</h3>
                        <ul className="lista">
                            <li>
                                <p>
                                    In occasione del <b>Ponte del 25 aprile</b>, martedì 23 e mercoledì 24 aprile: apertura con orario festivo (9.30 - 18.30). Il 25 aprile apertura speciale dei Giardini alle ore 6.30 e 
                                    chiusura del complesso alle 19.30. <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/il_25_aprile_libera_la_natura' 
                                    className='text-decoration-none color_link'>Scopri di più</Link>.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Per il <b>Ponte del 1° maggio</b>, da mercoledì 1 a venerdì 3 maggio la Reggia e la mostra sono aperte con orario festivo (9.30 - 18.30).
                                </p>
                            </li>
                        </ul>
                    </div>
                    <hr className="margin" />
                    <div className="margin mt-3">
                        <h2 className="color-titlesubtitle">Giardini</h2>
                        <p>
                            Gli ingressi chiudono 1 ora prima rispetto agli orari sotto indicati.
                        </p>
                        <ul className="lista">
                            <li>
                                <p>
                                    <b>Lunedì</b>: giorno di chiusura (tranne eventuali giorni Festivi)​
                                </p>
                            </li>
                            <li>
                                <p>
                                    <b>da martedì a domenica</b>: dalle ore 9.30 alle 19.30
                                </p>
                            </li>
                        </ul>
                    </div>
                    <hr className="margin" />
                    <div className="margin mt-3">
                        <h2 className="color-titlesubtitle">Castello della Mandria</h2>
                        <p>
                            Gli ingressi chiudono 30 minuti prima rispetto agli orari sotto indicati.
                        </p>
                        <ul className="lista">
                            <li>
                                <p>
                                    <b>Lunedì</b>: giorno di chiusura (tranne eventuali giorni Festivi)​
                                </p>
                            </li>
                            <li>
                                <p>
                                    <b>da martedì a venerdì</b>: dalle ore 10 alle 17
                                </p>
                            </li>
                            <li>
                                <p>
                                    <b>sabato, domenica e festivi</b>: dalle ore 10 alle 18.30
                                </p>
                            </li>
                        </ul>
                    </div>
                    <hr className="margin" />
                    <div className="margin mt-3">
                        <p>
                            Scopri gli <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/orari_delle_attrazioni_e_dei_servizi' 
                            className='text-decoration-none color_link'>orari delle attrazioni e dei servizi</Link>.
                        </p>
                    </div>
                    <div className="margin my-3 d-flex justify-content-between">
                        <p className="btn-card">
                            <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/come_arrivare' className='text-decoration-none text-light'>Come arrivare</Link>
                        </p>
                        <p className="btn-card">
                            <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/quanto_costa' className='text-decoration-none text-light'>Quanto costa</Link>
                        </p>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
