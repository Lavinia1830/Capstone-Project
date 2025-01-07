import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';


export default function Galleria_Grande(props) {
    return (
        <>
            <Head title="Galleria Grande"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='galleria_grande' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Galleria Grande</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <h3 className='text-center color-subtitle fst-italic'>
                            Uno dei principali interventi dell’architetto Filippo Juvarra alla Reggia di Venaria consistette nella realizzazione della manica a Sud iniziata da Michelangelo Garove.
                        </h3>
                        <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/DnT3hzopAzM?si=9sXtjTVceNF2Lhfo" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen
                            className='mx-auto'
                        >
                        </iframe>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            L’armonia e le proporzioni conferite ai nuovi spazi, i sontuosi decori di stucchi, cornici, lesene della Galleria Grande, erano destinati a rendere l’impianto scenico juvarriano un <b>capolavoro dell’architettura di tutto il Settecento</b>.
                        </p>
                        <p>
                            La Galleria, che collegava l’appartamento del re a quello dell’erede al trono, è uno degli ambienti più sorprendenti e spettacolari dell’intero complesso. Il suo ricchissimo apparato decorativo si deve alla mano di Pietro Filippo Somasso, 
                            Giuseppe Bolina, Antonio Papa e Giovambattista Sanbartolomeo.
                        </p>
                        <p>
                            Anche le dimensioni della Galleria sono del tutto ragguardevoli con un’altezza al centro volta di circa 15 metri, una lunghezza di circa 80 metri ed una larghezza di 12 metri.
                        </p>
                        <p>
                            Durante l’occupazione francese il pavimento originario fu smontato e riutilizzato per la Galleria del Beaumont a Torino, mentre l’attuale, che riprende quello del disegno juvarriano, è stato realizzato nel 1995.
                        </p>
                        <p>
                            Una delle peculiarità della Galleria Grande è lo splendore dei fasci di luce generati dalle 44 ampie finestrature e dai grandi 22 “occhi” (aperture ovali all’interno e rettangolari all’esterno) posti sulla volta che consentono un gioco di 
                            luci e penombre tali da esaltare la varietà degli infiniti decori e delle due esedre, suggestionando inesorabilmente i visitatori.
                        </p>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
