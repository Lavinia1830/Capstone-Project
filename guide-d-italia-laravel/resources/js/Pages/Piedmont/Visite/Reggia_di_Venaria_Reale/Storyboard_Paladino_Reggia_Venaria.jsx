import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Storyboard_Paladino_Reggia_Venaria(props) {
    return (
        <>
            <Head title="Storyboard Paladino alla Reggia di Venaria"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='storyboard_paladino_alla_reggia_di_venaria' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Soryboard. Paladino alla Reggia di Venaria</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            L’opera dell’artista <b>Mimmo Paladino</b>, tra i principali e più affermati esponenti della corrente della Transavanguardia, appositamente realizzata per la Reggia, si afferma come un <b>significativo tassello di arte contemporanea alla 
                            Venaria Reale</b>.
                        </p>
                        <p>
                            Ricco, complesso, articolato nei diversi linguaggi, questo progetto mette insieme <b>pittura</b> e <b>disegno</b>, <b>scultura</b> e <b>installazione</b>, persino il <b>cinema</b> che l’artista considera non solo il “primo amore” ma anche 
                            la sintesi perfetta delle sue visioni e intuizioni. Un’idea di cinema, in particolare, che vuole rendere omaggio al genio di Andrej Tarkowskij.
                        </p>
                        <p>
                            L’opera si dipana in <b>tre stanze</b>: la prima come un monocromo grigio uniforme, interrotto da una scultura che rappresenta una testa in mosaico incassata dentro un blocco di basalto.<br/>
                            La seconda è lo “spazio” dei graffiti, pittura segnica e primordiale, una sorta di alfabeto di immagini, lettere, numeri, figure che da sistema comunicativo si trasforma in fantasmagoria visiva.<br/>
                            Nella terza stanza, infine, torna la scultura che introduce la proiezione di fondo: frammenti di cinema dove si incrociano la memoria personale dell’artista con quella del pubblico.
                        </p>
                    </div>
                    <hr className="margin mt-3" />
                    <div className="margin mt-3">
                        <p>
                            <i>Storyboard. Paladino alla Reggia di Venaria</i> è un progetto dell’artista Mimmo Paladino promosso dal Consorzio delle Residenze Reali Sabaude e vincitore della III edizione del bando <i>Italian Council 2018</i>, concorso ideato 
                            dalla <i>Direzione Generale Arte e Architettura contemporanee e Periferie urbane DGAAP</i> del Ministero per i Beni e le Attività culturali e per il Turismo, per promuovere l’arte contemporanea italiana nel mondo.
                        </p>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
