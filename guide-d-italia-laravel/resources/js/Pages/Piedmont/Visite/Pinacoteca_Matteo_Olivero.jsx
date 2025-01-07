import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Pinacoteca_Matteo_Olivero(props) {
    return (
        <>
            <Head title="Pinacoteca Matteo Olivero"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='pinacoteca_matteo_olivero' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Pinacoteca Matteo Olivero</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            <b>L’edificazione</b> del <b>Palazzo</b> e della <b>Torre Comunale</b> risale al <b>1462</b>, durante il regno di <b>Ludovico I</b> (1416-1475), 
                            e sottolinea uno dei tentativi della classe dirigente cittadina di introdurre una <b>rivoluzione culturale</b> nella città. La facciata del 
                            Palazzo presenta <b>cornicioni marcapiano</b> in terracotta decorata e finestre a forma di <b>ogiva</b> totalmente circondate da mattoni a 
                            pianta. Al suo primo piano è situata la sala d’onore, che un tempo era la sede delle <b>Congregazioni del Marchesato</b>, con un <b>soffitto a 
                            cassettoni</b> e ornamenti <b>mitologici</b>, <b>simbolici</b> e <b>araldici</b> datati al XV secolo. Il secondo piano ospita 
                            la <b>Pinacoteca</b> dedicata a <b>Matteo Olivero</b>, un pittore di <b>Acceglio</b> che esponeva i suoi lavori a <b>Parigi</b>, <b>Bruxelles</b> e <b>Monaco</b>. 
                            Al suo interno sono esposte <b>sessantasette opere</b>, <b>diciasette disegni</b> e <b>due sculture</b> selezionate tra le più importanti 
                            creazioni dell’artista. La <b>Torre Civica di Saluzzo</b>, simbolo della comunità cittadina, è segno evidente di una <b>forza collettiva 
                            indipendente</b> dal potere marchesale e dagli <b>influssi religiosi</b>. La Torre, alta circa <b>quarantotto metri</b>, fa parte 
                            dell’<b>Antico Palazzo Comunale</b>, situato all’angolo tra la <b>Salita al Castello</b> e la via di <b>San Giovanni</b>. Ha una <b>pianta 
                            quadrata</b> e presenta in cima, sopra le <b>caditoie</b>, cornici decorate con motivi a <b>dentelli</b> che delimitano lo spazio di '
                            un <b>deambulatorio</b>. All’interno della struttura si trova un vano a forma <b>ottagonale</b> sopra il quale è posta una piccola <b>loggia</b>. 
                            Quest’ultima sostiene la <b>cupola in rame</b> su cui sono montati lo <b>stemma di Saluzzo</b> e un’<b>aquila</b>. Grazie 
                            al <b>restauro</b> conclusosi nel <b>1993</b>, è possibile visitare la Torre e dalla sua piccola loggia, si possono ammirare a un’altezza 
                            di <b>cinquanta metri</b> i tetti della città e le <b>Alpi</b> circostanti.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d908.2479351570737!2d7.487341402472669!3d44.64320254099394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cd49026d1383eb%3A0x1c1986395546d5c1!2sPinacoteca%20Matteo%20Olivero!5e1!3m2!1sit!2sit!4v1717072201488!5m2!1sit!2sit"
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
