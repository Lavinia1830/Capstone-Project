import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Igloo_di_Mario_Marz(props) {
    return (
        <>
            <Head title="Igloo di Mario Marz alla Reggia di Venaria"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='igloo_di_mario_marz' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Igloo di Mario Marz alla Reggia di Venariae</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p className='text-center'>
                            La Venaria Reale torna ad arricchire la propria collezione di arte contemporanea, che comprende opere di Giuseppe Penone e Giovanni Anselmo, con il Doppio Igloo di Porto di Mario Merz ospitato presso la Fontana del Cervo nella scenografica Corte d’onore.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            La Reggia di Venaria desidera valorizzare ed arricchire la propria collezione di arte contemporanea ospitando nuovamente e per un lungo periodo, il <i>Doppio Igloo di Porto</i> (1998) di <b>Mario Merz</b> presso la Fontana del Cervo <b>nella Corte d’Onore</b>,
                        </p>
                        <p>
                            L’opera, realizzata per il parco del Museu Serralves di Porto, si lega fortemente all’ambiente naturale e a quello dei Giardini della Reggia, attraverso l’impiego delle fascine ed in particolare al contesto della Fontana del Cervo, con la presenza maestosa di 
                            un cervo sulla sommità della struttura, sul cui fianco è attaccato un <b>numero di Fibonacci</b> di neon.
                        </p>
                        <p>
                            Nell'immaginario dell'artista convivono nell'<b>igloo</b> il contemporaneo e l'arcaico, in una circolarità dove il tempo è sospeso. Definito da Merz con un'ampia varietà di termini - tra cui capanna, cupola, tenda, ventre, cranio, terra - l'igloo materializza 
                            un'architettura primordiale in dialogo con la complessità del contesto sociale e industriale della seconda metà del Novecento.
                        </p>
                        <p>
                            Immagine sintetica, che nella sua forma semisferica include gli elementi della realtà naturale e di quella urbana - la luce, l'acqua, la terra, il legno, le pietre - per trasformarli in una visione poetica, l'igloo assume nell'arte di Mario Merz molteplici 
                            significati che cambiano ed evolvono di opera in opera. Se da un lato ha la funzione fondamentale di delimitare uno spazio - o di definire il limite tra lo spazio interno e lo spazio esterno - dall'altro è un simbolo o una metafora della condizione dell'uomo e 
                            del suo modo di abitare il mondo di oggi.
                        </p>
                        <p>
                            Nel <i>Senza titolo</i> realizzato per il parco del Museu Serralves di Porto in occasione della mostra personale allestitavi nel 1998, il <b>cervo</b> rende omaggio al tema ricorrente degli animali, preistorici o terribili, che entrano così a far parte anche del 
                            vocabolario degli igloo, accrescendone la dimensione arcaica e primitiva.
                        </p>
                        <p>
                            L'opera richiama in modo diretto l'ambiente naturale sia attraverso l'impiego delle fascine - una presenza costante nella produzione dell'artista fin dagli anni '70, sia attraverso la presenza del cervo, la cui figura maestosa è resa ancora più espressiva dal numero 
                            'Fibonacci' 10946 posizionato sul fianco dell'animale, qui in fusione di alluminio.
                        </p>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
