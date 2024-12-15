import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Anafora_di_Giuseppe_Penone(props) {
    return (
        <>
            <Head title="Anafora di Giuseppe Penone"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='anafora_di_giuseppe_penone' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Anafora di Giuseppe Penone</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p className='text-center'>
                            La nuova installazione del maestro Penone che completa il suo Giardino delle Sculture Fluide
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Il maestro <strong>Giuseppe Penone</strong> completa il suo <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/i_capolavori/giardino_delle_sculture_fluide' className='text-decoration-none color_link'>Giardino delle Sculture Fluide</Link> con una nuova 
                            installazione nelle sette grotte del grande Muro Castellamontiano.
                        </p>
                        <p>
                            Camminando sotto le terrazze, lungo il muro di sostegno, si scorgono opere in spazi discreti, come segreti socchiusi: le grotte si susseguono lungo il muro di mattoni che delimita il giardino inferiore.<br/>
                            Intitolando questo intervento nel suo insieme <b>Anafora</b>, dal greco ἀναφορά, anaphorá (da aná “di nuovo”, e phéro “io porto”), l’artista indica una ripetizione, per sottolineare un concetto o una realtà.
                        </p>
                        <p>
                            Le sette grotte nelle quali sono posti i nuovi lavori in marmo scandiscono la passeggiata dei visitatori. Una dopo l’altra, le opere legano la loro presenza al giardino con una scritta. Le sette sculture sono composte ognuna da due blocchi di marmo zebrino 
                            sovrapposti come tomi di libri.
                        </p>
                        <p>
                            Le scritte incise sul marmo possono essere lette separatamente o in successione e formano un breve testo: guardano dalle grotte verso le grandi opere che compongono il <i>Giardino delle Sculture Fluide</i> del 2007 sempre di Giuseppe Penone e testimoniano, 
                            apostrofano e ripetono contenuti dell’intervento precedente.
                        </p>
                        <p>
                            L’insieme pone al centro dell’esperienza le riflessioni sul rapporto tra l’uomo e la natura che il giardino rappresenta.
                        </p>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
