import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Palazzo_del_Mercato(props) {
    return (
        <>
            <Head title="Palazzo del Mercato"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='palazzo_del_mercato' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Palazzo del Mercato</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            <strong>Palazzo del Mercato</strong> è un vasto edificio a pianta quadrata, progetto dell’ingegner Luigi Orelli. Si trova in centro, 
                            tra Corso Italia e <b>Piazza Martiri della Libertà</b>.
                        </p>
                        <p>
                            Venne costruito tra il 1817 e il 1844, con lo scopo di fornire una sede grande e moderna al mercato dei grani.
                        </p>
                        <p>
                            Inizialmente Palazzo del Mercato doveva essere costituito soltanto da un grande porticato, tuttavia durante i lavori arrivò a 
                            ricoprire l’area di un intero isolato, e la struttura si arricchì di edifici con diverse funzioni: residenziali, pubbliche e 
                            commerciali.
                        </p>
                        <p>
                            L’edificio a due livelli è circondato al piano terra da un porticato che corre lungo tutti i quattro lati, creando luogo di incontro 
                            e di passeggio. Le colonne che formano archi a tutto sesto sono intervallate da piccoli parapetti in pietra e ferro battuto.
                        </p>
                        <p>
                            La facciata principale di Palazzo del Mercato è quella che dà su Corso Italia, all’epoca la via commerciale più importante di Novara, 
                            situata subito dopo la <b>Barriera Albertina</b>.
                        </p>
                        <p>
                            L’ingresso, leggermente sopraelevato, è accessibile tramite due scale laterali. Nella parte alta della costruzione, sul frontone, 
                            Gerolamo Rusca ha realizzato e posto un rilievo che ha per soggetto il <i>Trionfo di Cecere e Bacco</i>, mentre Giuseppe Argenti 
                            si è occupato delle sculture allegoriche laterali.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Dopo la morte di <b>Ludovico il Moro</b>, il castello di Novara è conteso tra francesi, milanesi e svizzeri prima, e da spagnoli e famiglia 
                            Farnese dopo (ebbene sì, su Novara si distende anche la <i>longa manus</i> di <b>Papa Paolo Farnese III</b>, che desidera assegnare un buon 
                            marchesato al proprio figlio prediletto, Pier Luigi). Un avvicendamento di <b>dominus</b> che pone l’accento ancora una volta sull’importanza 
                            di Novara nei disegni politici di tutte le potenze in gioco negli anni delle cosiddette ‘Guerre d’Italia’.
                        </p>
                        <p>
                            Dopo la morte di Ludovico il Moro, il castello di Novara è conteso tra francesi, milanesi e svizzeri prima, e da spagnoli e famiglia Farnese 
                            dopo (ebbene sì, su Novara si distende anche la longa manus di Papa Paolo Farnese III, che desidera assegnare un buon marchesato al proprio 
                            figlio prediletto, Pier Luigi). Un avvicendamento di dominus che pone l’accento ancora una volta sull’importanza di Novara nei disegni politici 
                            di tutte le potenze in gioco negli anni delle cosiddette ‘Guerre d’Italia’.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            L’intera parte centrale è delimitata da una cornice rappresentata da pilastri posti al piano terra e doppie colonne al primo piano.
                        </p>
                        <p>
                            All’interno, cinque statue ritraenti giuristi ed economi arricchiscono l’atrio di ingresso, opera di scultori ottocenteschi.
                        </p>
                        <p>
                            I soggetti si discostano molto dallo stile dell’epoca, che puntava invece su soggetti mitologici, come quelli rappresentati nella vicina Barriera. 
                            Questa scelta insolita colpì diverse personalità che si trovarono a visitare l’edificio, tra cui l’inglese Richard Cobden, economista liberale.
                        </p>
                        <p>
                            Il lato sud di Palazzo del Mercato dà invece su Piazza Martiri della Libertà. Qui sono ancora oggi visibili le conseguenze della Battaglia della 
                            Bicocca del 1849, durante la quale l’edificio venne colpito da palle di cannone sparate dalle artiglierie austriache.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1266.5517095926045!2d8.616246705073744!3d45.446222295339105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47865a21e323953b%3A0x6c9ad8a415e3d831!2sPalazzo%20del%20Mercato!5e1!3m2!1sit!2sit!4v1716207209763!5m2!1sit!2sit"
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
